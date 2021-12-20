import { Button } from '../Button'
import { useState, FormEvent } from 'react'
import { useServices } from '../../hooks/useServices'
import { useServicesApply } from '../../hooks/useServicesApply'
import { useCustomerHasPets } from '../../hooks/useCustomerHasPets'
import { usePets } from '../../hooks/usePets'
import { useCustomers } from '../../hooks/useCustomers'
import DatePicker, { registerLocale } from 'react-datepicker'
import pt from 'date-fns/locale/pt'
import 'react-datepicker/dist/react-datepicker.css'
import toast from 'react-hot-toast'
import ClipLoader from 'react-spinners/ClipLoader'
registerLocale('pt', pt)

import styles from './styles.module.scss'

export function RequestService() {
  const uid = localStorage.getItem('uid')

  // Custom Hooks
  const { services } = useServices()
  const { createServicesApply } = useServicesApply()
  const { customerHasPets } = useCustomerHasPets()
  const { pets } = usePets()
  const { customers } = useCustomers()

  let has_pets: boolean = false
  let customer_pets = pets
  let date = new Date()

  if (date.getDay() === 0) {
    date.setDate(date.getDate() + 1)
  }
  if (date.getDay() === 6) {
    date.setDate(date.getDate() + 2)
  }

  // State Handlers
  const [loading, setLoading] = useState(false)
  const [selectedService, setSelectedService] = useState(1)
  const [selectedDate, setSelectedDate] = useState(date)
  const [selectedTime, setSelectedTime] = useState(1)
  const [petId, setPetId] = useState(0)

  const filteredCustomer = customers.filter(
    customer => customer.customers_users_id === uid
  )

  if (filteredCustomer.length == 1) {
    const customerHasPetsFiltered = customerHasPets.filter(cHasPets => {
      return filteredCustomer[0].id === cHasPets.customers_has_pets_customers_id
    })

    if (customerHasPetsFiltered.length > 0) {
      has_pets = true
      const petFiltered = pets.filter(pet => {
        return customerHasPetsFiltered.some(customer => {
          return (
            customer.customers_has_pets_pets_id ===
            (pet.id as unknown as number)
          )
        })
      })

      customer_pets = petFiltered
    }
  }

  async function handleSubmit(event: FormEvent) {
    setLoading(true)
    event.preventDefault()
    let status = 0
    const chosenPet = customerHasPets.filter(cHasPets => {
      return (
        filteredCustomer[0].id === cHasPets.customers_has_pets_customers_id &&
        petId === cHasPets.customers_has_pets_pets_id
      )
    })

    if (selectedService === 1) {
      const serviceData = {
        services_apply_customers_has_pets_id: chosenPet[0].id,
        services_apply_services_state_id: 1,
        services_apply_services_id: selectedService,
        part_day: selectedTime,
        date: selectedDate
      }

      const response = await createServicesApply(serviceData)
      status = response.status
    } else {
      const serviceBanho = {
        services_apply_customers_has_pets_id: chosenPet[0].id,
        services_apply_services_state_id: 1,
        services_apply_services_id: 1,
        part_day: selectedTime,
        date: selectedDate
      }

      const serviceTaxi = {
        services_apply_customers_has_pets_id: chosenPet[0].id,
        services_apply_services_state_id: 1,
        services_apply_services_id: 2,
        part_day: selectedTime,
        date: selectedDate
      }

      const responseBanho = await createServicesApply(serviceBanho)
      const responseTaxi = await createServicesApply(serviceTaxi)

      if (responseBanho.status === 200 && responseTaxi.status === 200) {
        status = 200
      }
    }

    setLoading(false)

    if (status === 200) {
      toast.success('Serviço solicitado!')
    } else {
      toast.error('Não foi possível solicitar o serviço')
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <div className={styles.formInputs}>
            <h1>Solicite nossos serviços</h1>
            {!has_pets ? (
              <b>
                Você não tem pets registrados!
                <br /> Cadastre seu pet antes de solicitar un serviço
              </b>
            ) : (
              ''
            )}
            <div className={styles.formBody}>
              {/* Servicios */}
              <div className={styles.selectBlock}>
                <label>Selecione o serviço</label>
                <select
                  required
                  onChange={event =>
                    setSelectedService(Number(event.target.value))
                  }
                >
                  <option value="1">Banho e Tosa</option>
                  <option value="2">Taxi Dog + Banho e Tosa</option>
                </select>
              </div>
              {/* Data */}
              <label>Data</label>
              <DatePicker
                selected={selectedDate}
                onChange={(date: Date | null) => date && setSelectedDate(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                filterDate={(date: Date) =>
                  date.getDay() !== 0 && date.getDay() !== 6
                }
                locale="pt"
                className={styles.datePicker}
              />
              {/* Manhã ou tarde */}
              <div className={styles.selectBlock}>
                <label>Manhã ou tarde?</label>
                <select
                  required
                  onChange={event =>
                    setSelectedTime(Number(event.target.value))
                  }
                >
                  <option value="1">Manhã</option>
                  <option value="2">Tarde</option>
                </select>
              </div>
              {/* Pet */}
              <div className={styles.selectBlock}>
                <label>Selecione seu pet</label>
                <select
                  name="pet"
                  id="pet"
                  required
                  onChange={event => setPetId(Number(event.target.value))}
                >
                  {customer_pets.map(pet => {
                    return (
                      <option value={pet.id} key={pet.id}>
                        {pet.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div>
              <Button onClick={handleSubmit}>
                {loading ? 'Solicitando serviço' : 'Solicitar'}
                <ClipLoader
                  color="white"
                  loading={loading}
                  size={20}
                  css="margin-left: 10px"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

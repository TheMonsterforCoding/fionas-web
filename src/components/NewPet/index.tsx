import { FormEvent, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import Router from 'next/router'

import { usePets } from '../../hooks/usePets'
import { useCustomerHasPets } from '../../hooks/useCustomerHasPets'
import { useCustomers } from '../../hooks/useCustomers'
import { Button } from '../Button'
import styles from './styles.module.scss'

type Customer = {
  id: number
  date_last_visit: string
  customers_users_id: string
}

export default function NewPet() {
  const { createPet } = usePets()
  const { customers } = useCustomers()
  const { createCustomerHasPet } = useCustomerHasPets()

  const [customer, setCustomer] = useState<Customer[]>([])

  const [name, setName] = useState('')
  const [size, setSize] = useState('')
  const [gender, setGender] = useState(true)
  const [yearOfBirth, setYearOfBirth] = useState(2000)
  const [breed, setBreed] = useState('')
  const [state, setState] = useState(true)

  useEffect(() => {
    const idUser = localStorage.getItem('uid')

    const customersFiltered = customers.filter(customer => {
      return customer.customers_users_id === idUser
    })

    setCustomer(customersFiltered)
  }, [])

  // setOwner(customer?.id)

  // async function asd() {
  //   await api
  //   .get(`/customers/${owner}`)
  //   .then(response => console.log(response.data.id))

  // console.log(idClient)
  // setOwner(response.data.id)
  // }

  // console.log(customer[0].id)

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    const data = {
      name,
      size,
      gender,
      year_of_birth: yearOfBirth,
      breed,
      state
    }

    const response = await createPet(data)

    const status = response.status

    const idPet = Number(response.data.id)

    // console.log(idPet)

    if (status === 200) {
      toast.success('Pet registrado com susseso!')

      const dataCustomerHasPet = {
        customers_has_pets_pets_id: idPet,
        // customers_has_pets_customers_id: customer[0].id
        customers_has_pets_customers_id: 6
      }

      await createCustomerHasPet(dataCustomerHasPet)

      setName('')
      setSize('')
      setGender(true)
      setYearOfBirth(2000)
      setBreed('')
      setState(true)

      Router.push('/')
    } else {
      toast.error('Pet não foi registrado!')
    }
  }

  return (
    <div className={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />

      <div className={styles.content}>
        <header>
          <h1>Adicione seu pet!</h1>
        </header>

        <main>
          <form onSubmit={handleSubmit}>
            <div className={styles.formLeft}>
              {/* --------------- Name --------------- */}
              <div className={styles.inputBlock}>
                <label htmlFor="name">Nome</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={event => setName(event.target.value)}
                  required
                />
              </div>

              {/* --------------- Size --------------- */}
              <div className={styles.inputBlock}>
                <label htmlFor="size">Tamanho</label>
                <div className={styles.selectBlock}>
                  <select
                    name="size"
                    id="size"
                    required
                    onChange={event => setSize(event.target.value)}
                  >
                    <option value="">Seleccione</option>
                    <option value="Grande">Grande</option>
                    <option value="Mediano">Mediano</option>
                    <option value="Pequeño">Pequeno</option>
                  </select>
                </div>

                {/* --------------- Gender --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="genderId">Gênero</label>
                  <div className={styles.selectTypeContainer}>
                    <button
                      type="button"
                      onClick={() => setGender(true)}
                      className={gender ? styles.active : styles.disabled}
                    >
                      Macho
                    </button>

                    <button
                      type="button"
                      onClick={() => setGender(false)}
                      className={!gender ? styles.active : styles.disabled}
                    >
                      Fêmea
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.formRight}>
              <div>
                {/* --------------- Year of Birth --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="yearOfBirth">Ano de Nacimento</label>
                  <input
                    type="number"
                    id="yearOfBirth"
                    value={yearOfBirth}
                    onChange={event =>
                      setYearOfBirth(Number(event.target.value))
                    }
                    placeholder="Ano de nascimento"
                    required
                  />
                </div>

                {/* --------------- Breed --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="breed">Raça</label>
                  <div className={styles.selectBlock}>
                    <select
                      name="breed"
                      id="breed"
                      required
                      onChange={event => setBreed(event.target.value)}
                    >
                      <option value="">Seleccione</option>
                      <option value="buldogue">Buldogue</option>
                      <option value="pastor_alemao">Pastor Alemão</option>
                      <option value="labrador">Labrador</option>
                      <option value="husky_siberiano">Husky Siberiano</option>
                      <option value="dachshund">Dachshund</option>
                      <option value="yorkshire">Yorkshire</option>
                      <option value="pug">Pug</option>
                      <option value="maltes">Maltês</option>
                      <option value="border_collie">Border Collie</option>
                      <option value="cocker_spaniel">Cocker Spaniel</option>
                      <option value="other">Outro..</option>
                    </select>
                  </div>
                </div>
              </div>

              <Button type="submit">Criar</Button>
            </div>
          </form>
        </main>
      </div>
    </div>
  )
}

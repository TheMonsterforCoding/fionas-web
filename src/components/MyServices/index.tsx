import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { DataGrid, GridColDef } from '@material-ui/data-grid'
import { Edit, Edit2, UserPlus } from '@styled-icons/feather'
import { Button } from '../Button'
import { useCustomerHasPets } from '../../hooks/useCustomerHasPets'
import { usePets } from '../../hooks/usePets'
import { useCustomers } from '../../hooks/useCustomers'
import { useServicesApply } from '../../hooks/useServicesApply'
import styles from './styles.module.scss'

type Customer = {
  id: number
  date_last_visit: string
  customers_users_id: string
}

type ServicesApply = {
  id: number
  created_at: string
  services_apply_customers_has_pets_id: number
  services_apply_employees_id: number
  services_apply_services_state_id: number
  services_apply_services_id: number
  part_day: number
  date: Date
}

type SelectedPet = {
  id_customer_pet?: number
  pet_name?: string
}

type DataSource = {
  id?: number
  service_name?: string
  pet_name?: string
  service_date?: string
  part_day?: string
  service_status?: string
}

export default function MyServices() {
  const { pets } = usePets()
  const { customers } = useCustomers()
  const { customerHasPets } = useCustomerHasPets()
  const { servicesApply } = useServicesApply()
  const [customer, setCustomer] = useState<Customer[]>([])
  const [serviceDataSource, setDataSource] = useState<DataSource[]>([])
  const [show, setShow] = useState(false)
  let filteredServicesApply: ServicesApply[] = []
  let selectedPets: SelectedPet[] = []
  let dataSource: DataSource[] = []

  useEffect(() => {
    const idUser = localStorage.getItem('uid')
    //const idUser = '0eac507f-a048-4916-9ad2-c72c871222a5';

    // Obtener mascotas del cliente
    const customersFiltered = customers.filter(customer => {
      return customer.customers_users_id === idUser
    })

    const filteredCutomerHasPets = customerHasPets.filter(cHasPet => {
      return cHasPet.customers_has_pets_customers_id === customersFiltered[0].id
    })

    const filteredPets = pets.filter(pet => {
      return filteredCutomerHasPets.some(cHasPet => {
        return (
          cHasPet.customers_has_pets_pets_id === (pet.id as unknown as number)
        )
      })
    })

    filteredCutomerHasPets.forEach(cHasPet => {
      
      let foundServices = servicesApply.filter(serviceApply => {
        return serviceApply.services_apply_customers_has_pets_id === cHasPet.id
      })
      filteredServicesApply = [...filteredServicesApply, ...foundServices]
    })

    filteredCutomerHasPets.forEach(cHasPet => {
       let selPet: SelectedPet = {} 
        filteredPets.forEach(pet => {
            if (cHasPet.customers_has_pets_pets_id === pet.id as unknown as number) {
                selPet.id_customer_pet = cHasPet.id
                selPet.pet_name = pet.name
            }
        })
        selectedPets.push(selPet)
    })

    filteredServicesApply.forEach(serviceApply => {
      let row: DataSource = {}
      if (serviceApply.services_apply_services_id === 1) {
        row.service_name = 'Banho e Tosa'
      } else {
        row.service_name = 'Taxi Dog'
      }

      selectedPets.forEach(pet => {
        if (
          pet.id_customer_pet ===
          serviceApply.services_apply_customers_has_pets_id
        ) {
          row.pet_name = pet.pet_name
        }
      })

      let newDate = new Date(serviceApply.date)
      row.service_date = newDate.toLocaleDateString()

      if (serviceApply.part_day == 1) {
        row.part_day = 'Manhã'
      } else {
        row.part_day = 'Tarde'
      }

      switch (serviceApply.services_apply_services_state_id) {
        case 1: {
          row.service_status = 'Pedido'
          break
        }
        case 2: {
          row.service_status = 'Confirmado'
          break
        }
        case 3: {
          row.service_status = 'Na rota'
          break
        }
        case 4: {
          row.service_status = 'Finalizado'
          break
        }
        case 5: {
          row.service_status = 'Cancelado'
          break
        }
      }
    dataSource.push(row)
    })
    setShow(true)
    console.log(dataSource)
    //console.log(dataSource)
    //setDataSource(final)   
  },[])
 
  const columns: GridColDef[] = [
    {
      field: 'service_name',
      headerName: 'Serviço',
      width: 125
    },
    {
      field: 'pet_name',
      headerName: 'Pet',
      width: 125
    },
    {
      field: 'service_date',
      headerName: 'Data',
      width: 125
    },
    {
      field: 'part_day',
      headerName: 'Manhã/Tarde',
      width: 125
    },
    {
      field: 'service_status',
      headerName: 'Status',
      width: 125
    }
  ]

  return (
    <div className={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={styles.content}>
        <header>
          <h1>Meus Serviços</h1>
        </header>
        {!show ? '':
        <DataGrid
          rows={dataSource}
          rowsPerPageOptions={[9]}
          columns={columns}
          pageSize={9}
          className={styles.datagrid}
        />
        }
      </div>
    </div>
  )
}

import {
  ReactNode,
  useState,
  createContext,
  useEffect,
  useContext
} from 'react'
import { AxiosResponse } from 'axios'

import api from '../services/api'

interface CustomersProviderProps {
  children: ReactNode
}

type Customer = {
  id: number
  date_last_visit: string
  customers_users_id: string
}

type CreateCustomer = Omit<Customer, 'id' | 'date_last_visit'>

interface CustomersContextData {
  customers: Customer[]
  createCustomer: (customer: CreateCustomer) => Promise<AxiosResponse>
}

export const CustomersContext = createContext<CustomersContextData>(
  {} as CustomersContextData
)

export function CustomersProvider({ children }: CustomersProviderProps) {
  const [customers, setCustomers] = useState<Customer[]>([])

  useEffect(() => {
    api.get('/customers').then(response => setCustomers(response.data))
  }, [])

  async function createCustomer(createCustomer: CreateCustomer) {
    const response = await api.post('/customers', createCustomer)

    const customer = response.data

    setCustomers([...customers, customer])

    return response
  }

  return (
    <CustomersContext.Provider value={{ customers, createCustomer }}>
      {children}
    </CustomersContext.Provider>
  )
}

export function useCustomers() {
  const context = useContext(CustomersContext)

  return context
}

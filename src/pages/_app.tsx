import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { Header } from '../components/Header'
import { CustomerHasPetsProvider } from '../hooks/useCustomerHasPets'
import { CustomersProvider } from '../hooks/useCustomers'
import { PetsProvider } from '../hooks/usePets'
import { ServicesProvider } from '../hooks/useServices'
import { ServicesApplyProvider } from '../hooks/useServicesApply'
import { UsersProvider } from '../hooks/useUsers'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <CustomerHasPetsProvider>
      <CustomersProvider>
        <PetsProvider>
          <ServicesProvider>
            <ServicesApplyProvider>
              <UsersProvider>
                {router.pathname == '/' ||
                router.pathname == '/posts/aboutUs' ||
                router.pathname == '/posts/services' ||
                router.pathname == '/posts/contact' ||
                router.pathname == '/posts/newPet' ||
                router.pathname == '/posts/userUpdate' ||
                router.pathname == '/posts/requestService' ? (
                  <Header />
                ) : null}
                <Component {...pageProps} />
              </UsersProvider>
            </ServicesApplyProvider>
          </ServicesProvider>
        </PetsProvider>
      </CustomersProvider>
    </CustomerHasPetsProvider>
  )
}

export default MyApp

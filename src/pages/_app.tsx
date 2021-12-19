import type { AppProps } from 'next/app'
import { Header } from '../components/Header'
import { UsersProvider } from '../hooks/useUsers'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UsersProvider>
      <Header />
      <Component {...pageProps} />
    </UsersProvider>
  )
}

export default MyApp

import type { AppProps } from 'next/app'
import { useRouter } from 'next/router';
import { Header } from '../components/Header'
import { UsersProvider } from '../hooks/useUsers'

import '../styles/global.scss'

function MyApp({ Component, pageProps }: AppProps) {

  const router = useRouter();

  return (
    <UsersProvider>

      {
        router.pathname == "/" || router.pathname == "/posts/aboutUs"
          || router.pathname == "/posts/services" || router.pathname == "/posts/contact"
          ? <Header /> :
          null
      }
      <Component {...pageProps} />
    </UsersProvider>
  )
}

export default MyApp

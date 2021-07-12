import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'

import api from '../../services/api'

import BackImg from '../../assets/back.svg'

import styles from './styles.module.scss'
import Link from 'next/link'

export function Login() {
  const router = useRouter()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function handleSubmit(event: FormEvent) {
    // Prever que la app no haga reload al mandar el formulario
    event.preventDefault()

    await api
      .post('login', {
        email: email,
        password: password
      })
      .then(function (response) {
        console.log(response)
        toast.success(`'Usuario Correto | Token: ' ${response.data}`)
        // router.push('/')
      })
      .catch(function (error) {
        console.log(error)
        toast.error('Usuario incorreto')
      })
  }

  return (
    <div className={styles.container}>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <div className={styles.content}>
        <div className={styles.gridHeader}>
          <Link href="/" passHref>
            <a>
              <Image src={BackImg} alt="Voltar" />
            </a>
          </Link>
          <h1>Fazer Login</h1>
          <div />
        </div>

        <div className={styles.gridForm}>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className={styles.inputBlock}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  placeholder="exemplo@exemplo.com"
                  required
                />
              </div>

              <div className={styles.inputBlock}>
                <label htmlFor="password">Contrasenha</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={event => setPassword(event.target.value)}
                  placeholder="**********"
                  required
                />
              </div>
            </fieldset>

            <button type="submit">Login</button>
          </form>
        </div>

        <div className={styles.gridFooter}>
          <footer>
            <div className={styles.separator}>ou</div>
            <span>
              Crie sua conta <a href="#">Aqui!</a>
            </span>
          </footer>
        </div>
      </div>
    </div>
  )
}

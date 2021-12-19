import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'


import BackImg from '../../assets/back.svg'

import styles from './styles.module.scss'
import Link from 'next/link'

export function ResetPassword() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  async function handleSubmit(event: FormEvent) {
    // Prever que la app no haga reload al mandar el formulario
    event.preventDefault()
    var rand = require('csprng');
 
    rand(160, 36)
    console.log(rand)
  }


  return (
    <div className={styles.container}>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <div className={styles.content}>
        <div className={styles.gridHeader}>
          <Link href="/posts/login" passHref>
            <a>
              <Image src={BackImg} alt="Voltar" />
            </a>
          </Link>
          <h1>Alterar a senha</h1>
          <div />
        </div>

        <div className={styles.gridForm}>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className={styles.inputBlock}>
                <label htmlFor="email">E-mail</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={event => setEmail(event.target.value)}
                  required
                />
              </div>

            </fieldset>
            <button type="submit">Enviar correio</button>
          </form>
        </div>
      </div>
    </div>
  )
}

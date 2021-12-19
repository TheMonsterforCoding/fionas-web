import Image from 'next/image'
import { useRouter } from 'next/router'
import { FormEvent, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { random } from '@lukeed/csprng'
import emailjs from 'emailjs-com'

import BackImg from '../../assets/back.svg'

import styles from './styles.module.scss'
import Link from 'next/link'

export function ResetPassword() {
  const router = useRouter()
  const [cpf, setCpf] = useState('')
  const [email, setEmail] = useState('')
  const [templateParams, setValues] = useState({
    to_name: '',
    password_reset: '',
    to_email: ''
  })
  const [status, setStatus] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const array = random(5)
    templateParams.to_name = 'Leandro'
    templateParams.password_reset = array.join('')
    templateParams.to_email = email
    console.log(templateParams)
    console.log(cpf)
    console.log(email)
  /*   emailjs
      .send(
        'service_qhj620j',
        'template_ke0tnwd',
        templateParams,
        'user_hsknESf3YNNrbTxa7JSt2'
      )
      .then(
        response => {
          console.log('SUCCESS!', response)
          setValues({
            to_name: '',
            password_reset: '',
            to_email: ''
          })
          setStatus('SUCCESS')
        },
        error => {
          console.log('FAILED...', error)
        }
      ) */
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
                <label htmlFor="cpf">CPF</label>
                <input
                  type="cpf"
                  id="cpf"
                  value={cpf}
                  onChange={event => setCpf(event.target.value)}
                  required
                />
              </div>
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

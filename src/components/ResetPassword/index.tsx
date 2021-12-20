import Image from 'next/image'
import { FormEvent, useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { random } from '@lukeed/csprng'
import emailjs from 'emailjs-com'

import BackImg from '../../assets/back.svg'

import styles from './styles.module.scss'
import Link from 'next/link'
import { useUsers } from '../../hooks/useUsers'
import api from '../../services/api'

export function ResetPassword() {
  const { users } = useUsers()
  var [cpf, setCpf] = useState('')
  var [email, setEmail] = useState('')
  const [templateParams, setValues] = useState({
    to_name: '',
    password_reset: '',
    to_email: ''
  })
  const [status, setStatus] = useState('')

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()
    const array = random(3)
    let passwd = array.join('')
    const usersFiltered = users.filter(user => {
      return user.cpf === cpf
    })

    if (
      users.find(x => x.cpf === cpf && x.mail.toLowerCase === email.toLowerCase)
    ) {
      templateParams.to_name = usersFiltered[0].first_name
      templateParams.password_reset = passwd
      templateParams.to_email = usersFiltered[0].mail
      console.log(templateParams)
      console.log(usersFiltered[0].id)
      try {
        const response = await api.put(`/users/${usersFiltered[0].id}`, {
          cpf: usersFiltered[0].cpf,
          first_name: usersFiltered[0].first_name,
          last_name: usersFiltered[0].last_name,
          mail: usersFiltered[0].mail,
          mobile_number: usersFiltered[0].mobile_number,
          state: usersFiltered[0].state,
          user_type: usersFiltered[0].user_type,
          password: passwd
        })
        console.log(passwd)
        const status = response.status
        if (status === 200) {
          toast.success('Contrasenha atualizada, verifique seu E-mail')
          emailjs
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
            )
        } else {
          toast.error('Usuário não foi atualizado!')
        }
      } catch (err) {
        console.log(err)
      }
    } else {
      toast.error(':(')
    }
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

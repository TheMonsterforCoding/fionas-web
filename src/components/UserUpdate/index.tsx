import { useEffect, useState, FormEvent } from 'react'
import {
  User,
  Mail,
  Users as Gen,
  Watch,
  Phone,
  MapPin
} from '@styled-icons/feather'
import toast, { Toaster } from 'react-hot-toast'
import { useRouter } from 'next/router'

import { Button } from '../Button'
import api from '../../services/api'
import styles from './styles.module.scss'

type UserProps = {
  address: string
  cpf: string
  created_at: string
  first_name: string
  gender: boolean
  id: string
  password: string
  last_name: string
  mail: string
  mobile_number: string
  state: boolean
  updated_at: string
  user_type: boolean
  year_of_birth: number
}

export function UserUpdate() {
  const router = useRouter()
  const [user, setUser] = useState<UserProps>({
    id: 'loading',
    cpf: 'loading',
    first_name: 'loading',
    last_name: 'loading',
    gender: true,
    password: 'loading',
    year_of_birth: 0,
    address: 'loading',
    mail: 'loading',
    mobile_number: 'loading',
    state: false,
    user_type: false,
    created_at: 'loading',
    updated_at: 'loading'
  })

  const [cpf, setCpf] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [mail, setMail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [password, setPassword] = useState('')
  const [state, setState] = useState(true)
  const [userType, setUserType] = useState(false) // Cliente
  // const [gender, setGender] = useState(true)
  // const [yearOfBirth, setYearOfBirth] = useState(1900)
  // const [address, setAddress] = useState('')
  const [password2, setPassword2] = useState('')

  useEffect(() => {
    const idUser = localStorage.getItem('uid')

    api.get(`/users/${idUser}`).then(response => setUser(response.data))
  }, [])

  async function handleSubmit(event: FormEvent) {
    event.preventDefault()

    let newCpf = ''
    let newFirstName = ''
    let newLastName = ''
    let newMail = ''
    let newMobileNumber = ''
    let newPassword = ''
    let newState = true
    let newUserType = true

    if (cpf === '') {
      newCpf = user.cpf
    } else {
      newCpf = cpf
    }
    if (firstName === '') {
      newFirstName = user.first_name
    } else {
      newFirstName = firstName
    }
    if (lastName === '') {
      newLastName = user.last_name
    } else {
      newLastName = lastName
    }
    if (password === '') {
      newPassword = user.password
    } else {
      newPassword = password
    }
    if (mail === '') {
      newMail = user.mail
    } else {
      newMail = mail
    }
    if (mobileNumber === '') {
      newMobileNumber = user.mobile_number
    } else {
      newMobileNumber = mobileNumber
    }
    if (state === user.state) {
      newState = user.state
    } else {
      newState = state
    }
    if (userType === user.user_type) {
      newUserType = user.user_type
    } else {
      newUserType = userType
    }

    try {
      const response = await api.put(`/users/${user.id}`, {
        cpf: newCpf,
        first_name: newFirstName,
        last_name: newLastName,
        mail: newMail,
        mobile_number: newMobileNumber,
        state: newState,
        user_type: newUserType,
        password: newPassword
      })

      const status = response.status

      if (status === 200) {
        toast.success('Usuário atualizado com susseso!')

        setCpf('')
        setFirstName('')
        setLastName('')
        setMail('')
        setMobileNumber('')
        setState(true)
        setUserType(true)
        setPassword('')

        router.push('http://localhost:3000/')
      } else {
        toast.error('Usuário no fue atualizado!')
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className={styles.container}>
      <Toaster position="top-center" reverseOrder={false} />

      <div className={styles.content}>
        <header>
          <h1>Editar perfil</h1>
        </header>

        <main>
          <div className={styles.contentUserInfo}>
            <span className={styles.titleMain}>Detalhes do Usuario</span>{' '}
            {/* ------ Cpf ------ */}
            <div className={styles.userInfo}>
              <User />
              <span>{user?.cpf}</span>
            </div>
            {/* ------ Name ------ */}
            <div className={styles.userInfo}>
              <User />
              <span>
                {user?.first_name} {user?.last_name}
              </span>
            </div>
            {/* ------ Gender ------ */}
            <div className={styles.userInfo}>
              <Gen />
              {user?.gender ? <span>masculino</span> : <span>Femenino</span>}
            </div>
            {/* ------ Year of birth ------ */}
            <div className={styles.userInfo}>
              <Watch />
              <span>{user?.year_of_birth}</span>
            </div>
            <span className={styles.titleMain}>Contato</span>{' '}
            {/* ------ Address ------ */}
            <div className={styles.userInfo}>
              <MapPin />
              <span>{user?.address}</span>
            </div>
            {/* ------ Mail ------ */}
            <div className={styles.userInfo}>
              <Mail />
              <span>{user?.mail}</span>
            </div>
            {/* ------ Mobile number ------ */}
            <div className={styles.userInfo}>
              <Phone />
              <span>{user?.mobile_number}</span>
            </div>
          </div>

          <div className={styles.contentUserInfoUpdate}>
            <form onSubmit={handleSubmit}>
              <fieldset>
                {/* --------------- CPF --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                    placeholder={user?.cpf}
                  />
                </div>

                {/* --------------- First Name --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="firstName">Nome</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    placeholder={user?.first_name}
                  />
                </div>

                {/* --------------- Last Name --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="lastName">Sobrenome</label>
                  <input
                    type="text"
                    id="lastName"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    placeholder={user?.last_name}
                  />
                </div>

                {/* --------------- Mail --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="mail">E-mail</label>
                  <input
                    type="email"
                    id="mail"
                    value={mail}
                    onChange={event => setMail(event.target.value)}
                    placeholder={user?.mail}
                  />
                </div>

                {/* --------------- Mobile number --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="mobileNumber">Número celular</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={event => setMobileNumber(event.target.value)}
                    placeholder={user?.mobile_number}
                  />
                </div>

                {/* --------------- Password --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="password">Contrasenha</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="**********"
                  />
                </div>

                {/* --------------- Password repeat --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="password2">Confirmar contrasenha</label>
                  <input
                    type="password"
                    id="password2"
                    value={password2}
                    onChange={event => setPassword2(event.target.value)}
                    placeholder="**********"
                  />
                </div>
              </fieldset>

              <div>
                <Button type="submit">Atualizar</Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

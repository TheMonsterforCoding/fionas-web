import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  Trash2,
  Edit2,
  User,
  Mail,
  Users as Gen,
  Watch,
  Phone,
  MapPin
} from '@styled-icons/feather'

import api from '../../services/api'
import BackImg from '../../assets/back.svg'
import styles from './styles.module.scss'
import { Toaster } from 'react-hot-toast'
import { Button } from '../Button'

type UserProps = {
  address: string
  cpf: string
  created_at: string
  first_name: string
  gender: boolean
  id: string
  last_name: string
  mail: string
  mobile_number: string
  state: boolean
  updated_at: string
  user_type: boolean
  year_of_birth: number
}

export function UserUpdate() {
  const [user, setUser] = useState<UserProps>()
  const idUser = '092e6f80-a620-4e4a-a0de-02a7131de661'

  const [cpf, setCpf] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [gender, setGender] = useState(true)
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [yearOfBirth, setYearOfBirth] = useState(1900)
  const [address, setAddress] = useState('')
  const [mail, setMail] = useState('')
  const [mobileNumber, setMobileNumber] = useState('')
  const [state, setState] = useState(true)
  const [userType, setUserType] = useState(false) // Cliente

  useEffect(() => {
    async function selectUserById() {
      await api.get(`/users/${idUser}`).then(response => {
        setUser(response.data)
      })
    }

    selectUserById()
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>

      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <Link href="/" passHref>
            <a>
              <Image src={BackImg} alt="Voltar" />
            </a>
          </Link>
          <h1>Editar Perfil</h1>
          <div />
        </div>

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
            <form action="">
              <fieldset>
                {/* --------------- First Name --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="firstName">Nome</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    placeholder={user?.first_name}
                    required
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
                    required
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
                    required
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
                    required
                  />
                </div>

                {/* --------------- Password --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="lastName">Contrasenha</label>
                  <input
                    type="password"
                    id="lastName"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    placeholder="**********"
                    required
                  />
                </div>

                {/* --------------- Password repeat --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="lastName">Confirmar contrasenha</label>
                  <input
                    type="password"
                    id="lastName"
                    value={lastName}
                    onChange={event => setLastName(event.target.value)}
                    placeholder="**********"
                    required
                  />
                </div>
              </fieldset>

              <div>
                <Button>Atualizar</Button>
              </div>
            </form>
          </div>

          <div className={styles.contentPetInfo}>
            <span className={styles.titleMain}>Detalhes dos Pets</span>{' '}
            {/* ------ Name ------ */}
            <div className={styles.petInfo}>
              <User />
              <span>{user?.first_name}</span>
            </div>
            {/* ------ Gender ------ */}
            <div className={styles.petInfo}>
              <Gen />
              {user?.gender ? <span>masculino</span> : <span>Femenino</span>}
            </div>
            {/* ------ Year of birth ------ */}
            <div className={styles.petInfo}>
              <Watch />
              <span>{user?.year_of_birth}</span>
            </div>
            <div className={styles.petInfoActions}>
              <button>
                <Edit2 />
              </button>
              <button>
                <Trash2 />
              </button>
            </div>
          </div>

          <div className={styles.contentPetInfoUpdate}>
            <form action="">
              <fieldset>
                {/* --------------- Name --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="firstName">Nome</label>
                  <input
                    type="text"
                    id="firstName"
                    value={firstName}
                    onChange={event => setFirstName(event.target.value)}
                    placeholder={user?.first_name}
                    required
                  />
                </div>
              </fieldset>

              <div>
                <Button>Atualizar</Button>
              </div>
            </form>
          </div>
        </main>
      </div>
    </div>
  )
}

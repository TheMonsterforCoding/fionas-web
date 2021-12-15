import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import BackImg from '../../assets/back.svg'
import styles from './styles.module.scss'

export function CreateAccount() {
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

  function handleSubmit() {
    console.log('Hola mundo')
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.gridHeader}>
          <Link href="/posts/login" passHref>
            <a>
              <Image src={BackImg} alt="Voltar" />
            </a>
          </Link>
          <h1>Criar Conta</h1>
          <div />
        </div>

        <div className={styles.gridForm}>
          <form onSubmit={handleSubmit}>
            <fieldset>
              <div className="columnOne">
                {/* --------------- CPF --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="cpf">CPF</label>
                  <input
                    type="text"
                    id="cpf"
                    value={cpf}
                    onChange={event => setCpf(event.target.value)}
                    required
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
                    required
                  />
                </div>

                {/* --------------- Year of Birth --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="yearOfBirth">Ano de Nacimento</label>
                  <input
                    type="number"
                    id="yearOfBirth"
                    value={yearOfBirth}
                    onChange={event =>
                      setYearOfBirth(Number(event.target.value))
                    }
                    required
                  />
                </div>

                {/* --------------- Gender --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="genderId">Gênero</label>

                  <div className={styles.selectTypeContainer}>
                    <button
                      type="button"
                      onClick={() => setGender(true)}
                      className={gender ? styles.active : styles.disabled}
                    >
                      Masculino
                    </button>

                    <button
                      type="button"
                      onClick={() => setGender(false)}
                      className={!gender ? styles.active : styles.innactive}
                    >
                      Femenino
                    </button>
                  </div>
                </div>
              </div>

              <div className="columnTwo">
                {/* --------------- Password --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="password">Contrasenha</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                    required
                  />
                </div>

                {/* --------------- Password Validation --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="password2">Repetir contrasenha</label>
                  <input
                    type="password"
                    id="password2"
                    value={password2}
                    onChange={event => setPassword2(event.target.value)}
                    required
                  />
                </div>

                {/* --------------- Address --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={event => setAddress(event.target.value)}
                    required
                  />
                </div>

                {/* --------------- E-mail --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="mail">Email</label>
                  <input
                    type="email"
                    id="mail"
                    value={mail}
                    onChange={event => setMail(event.target.value)}
                    required
                  />
                </div>

                {/* --------------- Mobile Number --------------- */}
                <div className={styles.inputBlock}>
                  <label htmlFor="mobileNumber">Número celular</label>
                  <input
                    type="text"
                    id="mobileNumber"
                    value={mobileNumber}
                    onChange={event => setMobileNumber(event.target.value)}
                    required
                  />
                </div>
              </div>
            </fieldset>

            <button type="submit">Entrar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

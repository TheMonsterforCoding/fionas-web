import { useState } from 'react'
import Link from 'next/link'

import styles from './styles.module.scss'

export function UserInfo() {
  const [login, setLogin] = useState(false)

  function handleLogin() {
    if (login) {
      setLogin(false)
    } else {
      setLogin(true)
    }
  }

  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Serviços</a>
      </Link>
      <Link href="/">
        <a>Pets</a>
      </Link>
      <Link href="/posts/userUpdate">
        <a>Editar perfil</a>
      </Link>

      {login ? (
        <Link href="/">
          <a onClick={handleLogin}>Fechar sessão</a>
        </Link>
      ) : (
        // <Link href="/posts/login">
        <Link href="/">
          <a onClick={handleLogin}>Login</a>
        </Link>
      )}
    </div>
  )
}

import Link from 'next/link'

import styles from './styles.module.scss'

export function UserInfo() {
  let token = localStorage.getItem('jwt')
  let logged: boolean

  logged = token ? true : false

  function handleLogin() {
    if (token) {
      localStorage.removeItem('jwt')
      localStorage.removeItem('cpf')
      localStorage.removeItem('uid')
    }
  }

  return (
    <div className={styles.container}>
      {logged ? (
        <>
          <Link href="/posts/myServices">
            <a>Meus Serviços</a>
          </Link>
          <Link href="/posts/newPet">
            <a>Meus Pets</a>
          </Link>
          <Link href="/posts/userUpdate">
            <a>Editar perfil</a>
          </Link>
          <Link href="/">
            <a onClick={handleLogin}>Fechar sessão</a>
          </Link>
        </>
      ) : (
        <Link href="/posts/login">
          <a onClick={handleLogin}>Login</a>
        </Link>
      )}
    </div>
  )
}

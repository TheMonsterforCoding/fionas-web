import Link from 'next/link'
import Image from 'next/image'

import LogoImg from '../../assets/fionas.png'
import UserImg from '../../assets/user.svg'

import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.actions}>
          <Image src={LogoImg} alt="logo" />

          <Link href="/">
            <a className={styles.active}>Home</a>
          </Link>
          <Link href="/">
            <a>Sobre nós</a>
          </Link>
          <Link href="/posts/services">
            <a>Serviços</a>
          </Link>
          <Link href="/">
            <a>Contato</a>
          </Link>
        </div>

        <Link href="/posts/login" passHref>
          <button type="button">
            <Image src={UserImg} alt="user" />
          </button>
        </Link>
      </div>
    </div>
  )
}

import Link from 'next/link'

import styles from './styles.module.scss'

export function MenuInfo() {
  return (
    <div className={styles.container}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/posts/aboutUs">
        <a>Sobre nós</a>
      </Link>
      <Link href="/posts/services">
        <a>Serviços</a>
      </Link>
      <Link href="/posts/contact">
        <a>Contato</a>
      </Link>
    </div>
  )
}

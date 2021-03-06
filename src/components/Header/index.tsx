import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { UserInfo } from '../../components/UserInfo'
import { MenuInfo } from '../../components/MenuInfo'
import LogoImg from '../../assets/fionas.png'
import UserImg from '../../assets/user.svg'
import MenuImg from '../../assets/menu.svg'
import styles from './styles.module.scss'

export function Header() {
  const [userInfo, setUserInfo] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  function handleUserInfo() {
    setUserInfo(!userInfo)
  }

  function handleMenuOpen() {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.menuAction}>
          <button onClick={handleMenuOpen}>
            <Image src={MenuImg} alt="menu" />
          </button>
          {menuOpen ? <MenuInfo /> : <></>}
        </div>

        <div className={styles.actions}>
          <Image src={LogoImg} alt="logo" />

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

        <div className={styles.userInfo}>
          {/* <Link href="/posts/login" passHref> */}
          <button type="button" onClick={handleUserInfo}>
            <Image src={UserImg} alt="user" />
          </button>
          {/* </Link> */}
          {userInfo ? <UserInfo /> : <></>}
        </div>
      </div>
    </div>
  )
}

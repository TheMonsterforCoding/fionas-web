import Image from 'next/image'

import logoImg from '../../assets/dog.png'

import styles from './styles.module.scss'

export function Header() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
          <div>
            <Image src={logoImg} alt="Logo Fiona's Pet Shop" draggable="false" />
            <span>Fionas Pet Shop</span>
          </div>
          <button>Login</button>
        </div>
    </div>
  )
}

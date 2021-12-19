import Link from 'next/link'
import Image from 'next/image'
import DogImg from '../assets/dog-day.jpg'
import { Button } from '../components/Button'

import styles from './styles.module.scss'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <span>Bem-vindo!</span>
          <h1>Fiona`s</h1>
          <h2>Pet Shop</h2>
          <div className={styles.actions}>
            <div>
              <span>Conheça nossos melhores planos</span>
              <span>Presenteie seu mascote</span>
            </div>
            <Button>
              <Link href="/posts/services">
                <a>Nossos Serviços</a>
              </Link>
            </Button>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={DogImg} alt="Imagem de cachorro" />
        </div>
      </div>
    </div>
  )
}

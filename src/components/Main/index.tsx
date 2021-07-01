import Image from 'next/Image'

import DogImg from '../../assets/dog-day.jpg'

import styles from './styles.module.scss'

export function Main() {
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
            <button>Nossos Serviços</button>
          </div>
        </div>
        <div className={styles.right}>
          <Image src={DogImg} alt="Imagem de cachorro" />
        </div>
      </div>
    </div>
  )
}

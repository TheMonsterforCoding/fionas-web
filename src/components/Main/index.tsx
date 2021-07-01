import Image from 'next/Image'

import DogImg from '../../assets/dog-day.jpg'

import styles from './styles.module.scss'

export function Main() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.left}>
          <h1>Fiona`s</h1>
          <h2>Pet Shop</h2>
        </div>
        <div className={styles.right}>
          <Image src={DogImg} />
        </div>
      </div>
    </div>
  )
}

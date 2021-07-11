import { Service } from '../Service'

import styles from './styles.module.scss'

export function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Service
            title="Taxi Dog"
            description="Este é a descrição do taxi dog"
          />
          <Service
            title="Banho e Tosa"
            description="Este é a descrição do banho e tosa"
          />
        </div>
      </div>
    </div>
  )
}

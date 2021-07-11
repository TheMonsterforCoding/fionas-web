import { Button } from '../Button'

import styles from './styles.module.scss'

interface ServiceProps {
  title: string
  description: string
}

export function Service({ title, description }: ServiceProps) {
  return (
    <div className={styles.containerGrid}>
      <div className={styles.gridTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.gridDescription}>
        <p>{description}</p>
      </div>
      <div className={styles.gridButton}>
        <Button>Solicitar</Button>
      </div>
    </div>
  )
}

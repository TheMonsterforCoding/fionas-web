import Link from 'next/link'
import { useRouter } from 'next/router'
import { Button } from '../Button'

import styles from './styles.module.scss'

interface ServiceProps {
  title: string
  description: string
}

export function Service({ title, description }: ServiceProps) {
  const router = useRouter()
  let logged = localStorage.getItem('jwt')

  console.log(logged)

  function handleRequest() {
    logged ? router.push('/posts/requestService') : router.push('/posts/login')
  }

  return (
    <div className={styles.containerGrid}>
      <div className={styles.gridTitle}>
        <h1>{title}</h1>
      </div>
      <div className={styles.gridDescription}>
        <p>{description}</p>
      </div>
      <div className={styles.gridButton}>
        <Button onClick={handleRequest}>Solicitar</Button>
      </div>
    </div>
  )
}

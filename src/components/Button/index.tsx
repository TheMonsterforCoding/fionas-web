import { ButtonHTMLAttributes } from 'react'
import { ReactNode } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
}

export function Button({ children, ...props }: ButtonProps) {
  return <button className={styles.button} {...props}>{children}</button>
}

import { ButtonHTMLAttributes } from 'react'

import styles from './styles.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean
}

export function Button({isOutlined = false, ...props }: ButtonProps) {
  return(
    /** ...props
     * Passar todas as propriedades do button de HTML a través de ...props
     */
    // <button
    //   className={`button ${isOutlined ? 'outlined' : ''}`}
    //   {...props}
    // />

    // <button
    //   className={`button ${isOutlined ? 'outlined' : ''}`}
    //   {...props}
    // />

    <button
      className={`${styles.button} ${isOutlined ? 'outlined' : ''}`}
      {...props}
    />
  )
}

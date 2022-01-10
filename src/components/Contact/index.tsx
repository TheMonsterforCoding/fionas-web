import { useEffect, useState } from 'react'
import Image from 'next/image'

import EmailImg from '../../assets/mail.svg'
import WhatsappImg from '../../assets/whatsapp.svg'
import LocationImg from '../../assets/location.svg'
import { Button } from '../Button'
import styles from './styles.module.scss'

export function Contact() {
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 1000)
  }, [])

  const phone = '+5542998296526'
  const email = 'fionas@contact.com'
  const message = 'Oi, tudo bem? gostaria de adquirir seus servicos!'
  const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
  const urlAPIHotmail = `mailto:${email}?subject=${message}`

  return !isLoading ? (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h1>Entre em contato conozco!</h1>
        </div>
        <div className={styles.contentMain}>
          <div className={styles.contentMainGrid}>
            <Image src={LocationImg} alt="Localizacao" />
            <h3>Endereço</h3>
            <span>Venha até nós</span>
            <span className={styles.infoImportant}>
              Rua Alfonso Celso 2865 | Ponta Grossa - PR
            </span>
          </div>

          <div className={styles.contentMainGrid}>
            <Image src={EmailImg} alt="Email" />
            <h3>E-mail</h3>
            <span>Tem alguma dúvida?</span>
            <span className={styles.infoImportant}>fionas@contato.com</span>

            <Button>
              <a target="_blank" rel="noopener noreferrer" href={urlAPIHotmail}>
                Contato
              </a>
            </Button>
          </div>

          <div className={styles.contentMainGrid}>
            <Image src={WhatsappImg} alt="Whatsapp" />
            <h3>Whatsapp</h3>
            <span>Manda mensagem pra nós</span>
            <span className={styles.infoImportant}>(42) 99829-6526</span>

            <Button>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={urlAPIWhatsapp}
              >
                Contato
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className={styles.containerLoader}>
      <div className={styles.loader}></div>
    </div>
  )
}

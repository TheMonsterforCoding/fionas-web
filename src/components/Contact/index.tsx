import Image from 'next/image'

import EmailImg from '../../assets/mail.svg'
import WhatsappImg from '../../assets/whatsapp.svg'
import LocationImg from '../../assets/location.svg'
import { Button } from '../Button'
import styles from './styles.module.scss'

export function Contact() {
  const phone = '+5542998296526'
  const email = 'leo_ccp_22@hotmail.com'
  const message = 'Oi, tudo bem? gostaria de adquirir seus serviços!'
  const urlAPIWhatsapp = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`
  const urlAPIHotmail = `mailto:${email}?subject=${message}`

  return (
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
            <span>Rua Alfonso Celso 2865 | Ponta Grossa - PR</span>
          </div>

          <div className={styles.contentMainGrid}>
            <Image src={EmailImg} alt="Email" />
            <h3>E-mail</h3>
            <span>Tem alguma dúvida?</span>
            <span>contacto email</span>

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
            <span>(42) 99829-6526</span>

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
  )
}

// <div className={styles.left}>
//           <span>Bem-vindo!</span>
//           <h1>Fiona`s</h1>
//           <h2>Pet Shop</h2>
//           <div className={styles.actions}>
//             <div>
//               <span>Conheça nossos melhores planos</span>
//               <span>Presenteie seu mascote</span>
//             </div>
//           </div>
//         </div>

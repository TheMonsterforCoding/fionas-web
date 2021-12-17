import Image from 'next/image'
import Link from 'next/link'

import DogImg from '../../assets/dog-day.jpg'
import { Button } from '../Button'
import styles from './styles.module.scss'

export function AboutUs() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h1>Sobre nós</h1>
          <h3>Seu pet merece os melhores cuidados.</h3>
        </div>

        <div className={styles.contentMain}>
          <div className={styles.contentMainRight}>
            <Image src={DogImg} alt="Imagem de cachorro" />
          </div>

          <div className={styles.contentMainLeft}>
            <div className={styles.contentMainGrid}>
              <h3>Missão</h3>
              <p>
                Oferecer o melhor atendimento profissional ao cliente, graças ao
                trabalho de especialistas capacitados que trabalham com produtos
                de alta qualidade, priorizando o cuidado e o bem-estar dos
                animais de estimação.
              </p>
            </div>

            <div className={styles.contentMainGrid}>
              <h3>Visão</h3>
              <p>
                Ser uma empresa moderna e sólida, referência em qualidade e
                cuidado com animais de estimação na região, aumentando a demanda
                pelos serviços gradativamente e gerando reconhecimento estadual
                da empresa.
              </p>
            </div>

            <Button>
              <Link href="/posts/contact">
                <a>Entrar em contato</a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

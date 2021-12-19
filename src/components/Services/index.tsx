import { Service } from '../Service'

import styles from './styles.module.scss'

export function Services() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <Service
            title="Taxi Dog"
            description="Com o taxi dog nós buscamos os seus pets em casa, trazemos a nossa empresa para cuida-los e aplicar os serviços contratados pelo cliente e logo devolvemos o seu pet na porta da sua casa com agilidade e responsabilidade."
          />
          <Service
            title="Banho e Tosa"
            description="Nossos trabalhadores com experiencia no rubro trataram a seu pet realizando um corte de cabelo e banho para que seu pet este sempre no estilo e super cheiroso dia a dia. Este serviço pode ser adquirido em conjunto com o taxi dog, assim você não precisa se mexer de casa."
          />
        </div>
      </div>
    </div>
  )
}

import styles from '../styles/index.module.scss'
import Button from '../components/Button/Button'

export default function Home() {
  return (
      <div className={styles.container}>
        <div>
          <h1>My strange Collection</h1>
          <p>My Strange Collection est une web application qui vous permet d’inventorier votre collection de comics.
            <br/>
            Vous pourrez indiquer l’état de vos exemplaires et en connaitre une estimation basée sur les données du site internet comicsvf.com en 2021.
            </p>
          <Button href="#" title="Se connecter"/>
          <Button href="#" title="S'inscrire" color="white"/>
        </div>
      </div>
  )
}

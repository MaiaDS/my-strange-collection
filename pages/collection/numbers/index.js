import styles from './index.module.scss'
import Button from '../../../components/Buttons/Button'
import Header from '../../../components/layout/Header'
import stranges from '../../../data/stranges'

export default function CollectionByNumbers() {
  return (
    <div className={styles.container}>
      <Header mode="numbers"/>
      <section className={styles.grid}>
        {stranges.map((strange) =>
          <Button 
            key={strange.id} 
            href={`/collection/${encodeURIComponent(strange.id)}`} 
            title={strange.id} 
          />
        )}
      </section>
    </div>
  )
}

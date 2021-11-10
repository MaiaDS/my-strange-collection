import styles from './index.module.scss'
import Button from '../../../components/Buttons/Button'
import Header from '../../../components/layout/Header'
import stranges from '../../../data/stranges'
import Image from 'next/image'

export default function CollectionByNumbers() {
  return (
    <div className={styles.container}>
      <Header mode="covers"/>
      <section className={styles.grid}>
        {stranges.map((strange) =>
          <Button 
            key={strange.id} 
            href={`/collection/${encodeURIComponent(strange.id)}`}
          >
            <Image
              src={strange.cover} 
              alt=""
              width={190}
              height={280}
            />
          </Button>
        )}
      </section>
    </div>
  )
}

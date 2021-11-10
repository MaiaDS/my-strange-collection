import styles from './header.module.scss'
import Button from '../Buttons/Button'
import Image from 'next/image'

export default function Header({mode}) {
  const checkMode = mode == "numbers" ? "/icons/icoCovers.svg" : "/icons/icoGrid.svg"
  const modePath = mode == "numbers" ? "/collection/covers" : "/collection/numbers"
  return (
    mode == "numbers" || mode == "covers" ?
      <div className={styles.container}>
        <Button>
          <Image
            src="/icons/icoInfos.svg"
            alt=""
            width={22}
            height={22}
          />
        </Button>
        <Button href={modePath}>
          <Image
            src={checkMode}
            alt=""
            width={32}
            height={22}
          />
        </Button>
      </div>
    : 
    <div className={styles.container}>
      <Button>
        <Image
          src="/icons/icoArrow.svg"
          alt=""
          width={20}
          height={17}
        />
      </Button>
    </div>
  )
}

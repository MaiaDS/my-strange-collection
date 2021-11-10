import styles from './header.module.scss'
import Button from '../Buttons/Button'
import Image from 'next/image'

export default function Header({mode, children}) {
  const checkMode = mode == "numbers" ? "/icons/icoCovers.svg" : "/icons/icoGrid.svg"
  const modePath = mode == "numbers" ? "/collection/covers" : "/collection/numbers"
  return (
    mode == "numbers" || mode == "covers" ?
      <header className={styles.container}>
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
      </header>
    : 
    <header className={styles.container}>
      <Button onClick={() => Router.back()}>
        <Image
          src="/icons/icoArrow.svg"
          alt=""
          width={20}
          height={17}
        />
      </Button>
      {children}
    </header>
  )
}

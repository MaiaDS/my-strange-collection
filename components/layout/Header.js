import Image from 'next/image'
import { useRouter } from 'next/router'

import styles from './header.module.scss'
import Button from '../Buttons/Button'

export default function Header({mode, children}) {
  const router = useRouter()

  const checkMode = mode == "numbers" ? "/icons/icoCovers.svg" : "/icons/icoGrid.svg"
  const modePath = mode == "numbers" ? "/collection/covers" : "/collection/numbers"

  return (
    <header className={styles.container}>
      {mode == "numbers" || mode == "covers" ?
        <>
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
        </>
      : 
        <>
          <Button onClick={() => router.back()}>
            <Image
              src="/icons/icoArrow.svg"
              alt=""
              width={20}
              height={17}
            />
          </Button>
          {children}
        </>
      }
  </header>
  )
}

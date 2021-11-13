import styles from './buttons.module.scss'
import Link from 'next/link'

export default function Button({href, title, color, textColor, children, ...props}) {

  const checkedHref = href ? href : "/" ;
  const checkedColor = color ? color : "blue" ;
  
  const backgroundColor = checkedColor == "blue" ? "#0045B2" : "#fff" ;
  const defaultTextColor = checkedColor == "blue" ? "#fff" : "#0045B2" ;
  const checkedTextColor = textColor ? textColor : defaultTextColor ;
  const style = {
    backgroundColor: backgroundColor,
    color: checkedTextColor
  }

  return (
    href ? 
      <Link href={checkedHref}>
            <a className={styles.btn} style={style}>{title}{children}</a>
      </Link>
    :
      <button {...props} className={styles.btn} style={style}>{title}{children}</button>
  )
}

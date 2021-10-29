import styles from './button.module.scss'

export default function Button({href, title, color, textColor}) {

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
    <a href={checkedHref} className={styles.button} style={style}>
      {title}
    </a>
  )
}

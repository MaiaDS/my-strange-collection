import styles from "./buttons.module.scss";
import Link from "next/link";

export default function Links({
  href,
  title,
  background,
  textColor,
  ...props
}) {
  const checkedBackground = background ? background : "blue";
  const backgroundColor = checkedBackground == "blue" ? "#0045B2" : "#fff";
  const defaultTextColor = checkedBackground == "blue" ? "#fff" : "#0045B2";
  const checkedTextColor = textColor ? textColor : defaultTextColor;

  const style = {
    backgroundColor: backgroundColor,
    background: checkedTextColor,
  };

  return href ? (
    <Link href={href}>
      <a className={styles.btn} style={style}>
        {title}
      </a>
    </Link>
  ) : (
    <button {...props} className={styles.btn} style={style}>
      {title}
    </button>
  );
}

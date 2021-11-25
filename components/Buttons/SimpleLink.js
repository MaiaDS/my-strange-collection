import styles from "./buttons.module.scss";
import Link from "next/link";

export default function SimpleLink({ href, title, style }) {
  return (
    <Link href={href}>
      <a className={styles.link} style={style}>
        {title}
      </a>
    </Link>
  );
}

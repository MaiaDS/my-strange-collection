import styles from "./strange.module.scss";
import Link from "next/link";

export default function Strange({ href, display, children }) {
  const classname = display ? styles.cover : styles.number;

  return (
    <Link href={href}>
      <a className={classname}>{children}</a>
    </Link>
  );
}

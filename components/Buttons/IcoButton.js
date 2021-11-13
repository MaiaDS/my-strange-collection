import styles from "./buttons.module.scss";
import Link from "next/link";

export default function IcoButton({ href, children, ...props }) {
  return href ? (
    <Link href={href}>
      <a className={styles.btnIco}>{children}</a>
    </Link>
  ) : (
    <button {...props} className={styles.btnIco}>
      {children}
    </button>
  );
}

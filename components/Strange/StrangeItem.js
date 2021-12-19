import styles from "./strange.module.scss";
import Link from "next/link";

export default function StrangeItem({ href, display, children, isOwned }) {
  const classname = display ? styles.cover : styles.number;
  const opacity = isOwned ? "100%" : "30%";

  const style = {
    opacity: opacity,
  };

  return (
    <Link href={href}>
      <a className={classname} style={style}>
        {children}
      </a>
    </Link>
  );
}

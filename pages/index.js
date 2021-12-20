import styles from "../styles/index.module.scss";
import Button from "../components/Buttons/Button";
import Image from "next/image";

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <Image src="/icons/logo.svg" alt="" width={175} height={175} />
        <h1>My strange Collection</h1>
        <p>
          My Strange Collection est une web application qui vous permet
          d’inventorier votre collection de comics.
        </p>
        <Button href="/collection/" title="Ma collection" />
      </div>
    </div>
  );
}

import { useRouter } from "next/router";
import styles from "../../styles/slug.module.scss";
import stranges from "../../data/stranges";
import Image from "next/image";
import Button from "../../components/Buttons/Button";
import { useEffect, useState } from "react";
import BackButton from "../../components/Buttons/BackButton";
import Copy from "../../components/Strange/Copy";
import AddPanel from "../../components/Strange/AddPanel";

export default function Strange() {
  const router = useRouter();
  const [infos, setInfos] = useState();

  useEffect(() => {
    const info = stranges.find((e) => e.id === router.query.slug);
    setInfos(info);
  }, [router.query]);

  const [isDisplay, setDisplay] = useState(false);

  return (
    <div className={styles.container}>
      {infos && (
        <>
          <header>
            <BackButton />
            <div className={styles.copyInfos}>
              <Image src={infos.cover} alt="" width={128} height={190} />
              <aside>
                <h1>Numéro {infos.id}</h1>
                <h2>{infos.date}</h2>
                <h3>Côte en bon état : {infos.rate} €</h3>
              </aside>
            </div>
          </header>

          <section>
            <Copy quality="B" rate={infos.rate} />
          </section>

          <section>
            <Button title="Ajouter" onClick={() => setDisplay(!isDisplay)} />
            <AddPanel
              style={{
                display: isDisplay ? "flex" : "none",
              }}
            />
          </section>
        </>
      )}
    </div>
  );
}

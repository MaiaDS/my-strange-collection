import { useRouter } from "next/router";
import styles from "../../styles/slug.module.scss";
import stranges from "../../data/stranges";
import Image from "next/image";
import Button from "../../components/Buttons/Button";
import { useEffect, useState } from "react";
import BackButton from "../../components/Buttons/BackButton";
import CopyDetails from "../../components/Strange/CopyDetails";
import AddPanel from "../../components/AddPanel/AddPanel";

export default function Strange() {
  const router = useRouter();
  const [infos, setInfos] = useState();
  const [ownedCopies, setOwnedCopies] = useState([]);

  useEffect(() => {
    const info = stranges.find((e) => e.id === router.query.slug);
    setInfos(info);
  }, [router.query]);

  useEffect(() => {
    let strangeCollection = JSON.parse(
      window.localStorage.getItem("strangeCollection")
    );
    setOwnedCopies(strangeCollection);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "strangeCollection",
      JSON.stringify(ownedCopies)
    );
  }, [ownedCopies]);

  const [isPanelDisplayed, setPanelDisplay] = useState(false);

  const addOwnedCopies = (copy) => {
    setOwnedCopies([...ownedCopies, copy]);
  };

  const removeOwnedCopies = (copyID) => {
    setOwnedCopies(ownedCopies.filter((item) => item.id !== copyID));
  };

  const filteredCollection = ownedCopies.filter(
    (copy) => copy.idStrange === infos.id
  );

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
              </aside>
            </div>
          </header>

          <section className={styles.ownedCopies}>
            {filteredCollection.length !== 0 ? (
              <>
                {filteredCollection.map((copy) => (
                  <CopyDetails
                    key={copy.id}
                    copyID={copy.id}
                    state={copy.idState}
                    updateOwnedCopies={removeOwnedCopies}
                  />
                ))}
              </>
            ) : (
              <p>Pas d&apos;exemplaires possédés</p>
            )}
          </section>

          <section>
            <Button title="Ajouter" onClick={() => setPanelDisplay(true)} />
            <AddPanel
              style={{
                display: isPanelDisplayed ? "flex" : "none",
              }}
              onClose={() => setPanelDisplay(false)}
              strangeID={infos.id}
              updateOwnedCopies={addOwnedCopies}
            />
          </section>
        </>
      )}
    </div>
  );
}

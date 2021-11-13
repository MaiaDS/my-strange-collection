import styles from "../../styles/list.module.scss";
import Strange from "../../components/Strange/Strange";
import IcoButton from "../../components/Buttons/IcoButton";
import Image from "next/image";
import stranges from "../../data/stranges";
import { useState } from "react";

export default function CollectionList() {
  const [isCoverDisplay, setCoverDisplay] = useState(false);
  const displayButtonSrc = isCoverDisplay
    ? "/icons/icoGrid.svg"
    : "/icons/icoCovers.svg";

  const gridColumns = isCoverDisplay ? "repeat(2, 1fr)" : "repeat(4, 1fr)";

  const gridTemplate = {
    gridTemplateColumns: gridColumns,
  };

  return (
    <>
      <header className={styles.header}>
        <IcoButton>
          <Image src="/icons/icoInfos.svg" alt="" width={22} height={22} />
        </IcoButton>
        <IcoButton onClick={() => setCoverDisplay(!isCoverDisplay)}>
          <Image src={displayButtonSrc} alt="" width={32} height={22} />
        </IcoButton>
      </header>

      <section className={styles.grid} style={gridTemplate}>
        {stranges.map((strange) => (
          <Strange
            key={strange.id}
            href={`/collection/${encodeURIComponent(strange.id)}`}
            display={isCoverDisplay}
          >
            {isCoverDisplay ? (
              <Image src={strange.cover} alt="" width={190} height={280} />
            ) : (
              strange.id
            )}
          </Strange>
        ))}
      </section>
    </>
  );
}

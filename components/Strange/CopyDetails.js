import IcoButton from "../Buttons/IcoButton";
import styles from "./strange.module.scss";
import Image from "next/image";

export default function CopyDetails({ copyID, state, updateOwnedCopies }) {
  const deleteCopy = (copyID) => {
    updateOwnedCopies(copyID);
  };

  let quality;
  switch (state) {
    case "N":
      quality = "Neuf";
      break;
    case "E":
      quality = "Excellent";
      break;
    case "TB":
      quality = "Très bon état";
      break;
    case "M":
      quality = "Moyen";
      break;
    case "A":
      quality = "Abîmé";
      break;
    case "NC":
      quality = "Non Collectionnable";
      break;
    default:
      quality = "Bon état";
  }

  return (
    <div className={styles.copy}>
      <IcoButton onClick={() => deleteCopy(copyID)}>
        <Image src="/icons/icoDelete.svg" alt="" width={18} height={18} />
      </IcoButton>
      {quality}
    </div>
  );
}

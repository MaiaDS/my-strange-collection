import IcoButton from "../Buttons/IcoButton";
import styles from "./strange.module.scss";
import Image from "next/image";

export default function Copy({ state, rate }) {
  let price;
  let quality;
  switch (state) {
    case "N":
      price = rate * 1.7;
      quality = "Neuf";
      break;
    case "TB":
      price = rate * 1.35;
      quality = "Très bon état";
      break;
    case "M":
      price = rate * 0.75;
      quality = "Moyen";
      break;
    case "A":
      price = rate * 0.3;
      quality = "Abîmé";
      break;
    default:
      price = rate;
      quality = "Bon état";
  }

  return (
    <div className={styles.copy}>
      <IcoButton>
        <Image src="/icons/icoDelete.svg" alt="" width={18} height={18} />
      </IcoButton>
      {quality} - {price} €
    </div>
  );
}

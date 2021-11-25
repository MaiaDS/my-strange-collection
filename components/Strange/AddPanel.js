import styles from "./strange.module.scss";
import SimpleLink from "../Buttons/SimpleLink";
import Button from "../Buttons/Button";
import states from "../../data/states";
// import { useState } from "react";

export default function AddPanel({ style }) {
  const closePanel = () => {
    console.log("Free pizza!");
    const addPanel = document.getElementById("addPanel");
    addPanel.style.display = "none";
  };

  //   const [isDisplay, setDisplay] = useState(true);
  //   const panelStyle = isDisplay ? style : "display:none;";

  return (
    <div id="addPanel" className={styles.addPanel} style={style}>
      <div>
        <select required>
          <option value="" disabled selected>
            état
          </option>
          {states.map((state) => (
            <option key={state.indexOf} value={state.id}>
              {state.name}
            </option>
          ))}
        </select>
        <SimpleLink
          href="#"
          title="Coment établir l’état de mon exemplaire ?"
          style={{ color: "#fff", fontSize: "0.8rem" }}
        />
      </div>
      <div>
        <Button title="Ajouter" background="white" textColor="#00893a" />
        <Button
          title="Annuler"
          background="white"
          textColor="#ba0c0c"
          onClick={closePanel}
          //   onClick={() => setDisplay(!isDisplay)}
        />
      </div>
    </div>
  );
}

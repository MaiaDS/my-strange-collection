import styles from "./add-panel.module.scss";
import SimpleLink from "../Buttons/SimpleLink";
import Button from "../Buttons/Button";
import states from "../../data/states";
import { useState } from "react";

export default function AddPanel({
  style,
  onClose,
  strangeID,
  updateOwnedCopies,
}) {
  const [copyState, setCopyState] = useState("B");

  const addCopy = () => {
    const newCopy = {
      id: JSON.stringify(Date.now()),
      idStrange: strangeID,
      idState: copyState,
    };
    updateOwnedCopies(newCopy);
    onClose();
  };

  return (
    <div id="addPanel" className={styles.addPanel} style={style}>
      <div>
        <form>
          <select required onChange={(e) => setCopyState(e.target.value)}>
            {states.map((state) => (
              <option
                key={state.indexOf}
                value={state.id}
                selected={state.id === copyState}
              >
                {state.name}
              </option>
            ))}
          </select>
        </form>
        <SimpleLink
          href="/collection/state-guide"
          title="Comment établir l’état de mon exemplaire ?"
          style={{ color: "#fff", fontSize: "0.8rem" }}
        />
      </div>
      <div>
        <Button
          title="Ajouter"
          background="white"
          textColor="#00893a"
          onClick={() => addCopy()}
        />
        <Button
          title="Annuler"
          background="white"
          textColor="#ba0c0c"
          onClick={onClose}
        />
      </div>
    </div>
  );
}

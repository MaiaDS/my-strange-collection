import styles from "../../styles/state-guide.module.scss";
import BackButton from "../../components/Buttons/BackButton";
import states from "../../data/states";

export default function StateGuide() {
  return (
    <div className={styles.container}>
      <header>
        <BackButton />
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <h1>établir l'état</h1>
      </header>
      <section>
        {states.map((state) => (
          <div key={state.indexOf}>
            <h2>{state.name}</h2>
            <p>{state.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

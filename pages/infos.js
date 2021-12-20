import BackButton from "../components/Buttons/BackButton";
import styles from "../styles/infos.module.scss";

export default function Infos() {
  return (
    <div className={styles.container}>
      <header>
        <BackButton />
        <h1>Infos</h1>
      </header>
      <section>
        <article>
          <h2>My Strange Collection</h2>
          <p>
            My Strange Collection est une web application qui vous permet
            d’inventorier votre collection de comics. Vous pourrez indiquer
            l’état de vos exemplaires grâce au guide inspiré de celui du site
            <a
              href="https://www.comicsvf.com/misc/Feature41.php"
              target="_blank"
              rel="noreferrer"
            >
              comicsvf.com
            </a>
            . Afin de connaitre une estimation de vos stranges vous pouvez
            consulter le site
            <a
              href="https://www.largusbd.com/fr/serie/2W4L11/strange"
              target="_blank"
              rel="noreferrer"
            >
              largusbd.com
            </a>
            .
          </p>
        </article>
        <article>
          <h2>Mentions Légales</h2>
          <div>
            <h3>éditeur</h3>
            <ul>
              <li>Maïa Da Silva</li>
              <li>SIRET : 90812469600018</li>
              <li>
                Les images de couvertures des stranges sont la propriété des
                éditions Lug et Semic
              </li>
            </ul>
          </div>
          <div>
            <h3>hébergeur</h3>
            <ul>
              <li>Vercel Inc.</li>
              <li>
                340 S Lemon Ave #4133
                <br />
                Walnut, CA 91789
              </li>
              <li>privacy@vercel.com</li>
            </ul>
          </div>
          <div>
            <h3>Cookies et Données Personnelles</h3>
            <p>
              Cette application web n&apos;utilise pas de cookies.
              <br />
              Cette application web n&apos;exploite pas et ne stocke pas de
              données personnelles
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

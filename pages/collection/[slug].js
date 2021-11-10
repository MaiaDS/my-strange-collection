import { useRouter } from 'next/router'
import styles from '../../styles/slug.module.scss'
import Header from '../../components/layout/Header'
import stranges from '../../data/stranges'
import Image from 'next/image'
import Button from '../../components/Buttons/Button'
import { useEffect, useState } from 'react';

export default function Strange () {

    const router = useRouter();
    const [infos, setInfos] = useState();

    useEffect( () => {
        const info = stranges.find(e => e.route === router.query.name);
        setInfos(info);
    }, [router.query])

    return (
        <div className={styles.container}>
            <Header>
                <div className={styles.copyInfos}>
                    {infos ?
                        <Image
                            src={infos.cover} 
                            alt=""
                            width={128}
                            height={190}
                        />
                    :
                        null
                    }
                    <aside>
                        <h1>Numéro {infos ? infos.id : null}</h1>
                        <h2>{infos ? infos.date : null}</h2>
                        <h3>Côte en bon état : {infos ? infos.rate : null} €</h3>
                    </aside>
                </div>
            </Header>
            <section>
                Ici les exemplaires possédés
            </section>
            <Button title="Ajouter"/>
        </div>
    )
}
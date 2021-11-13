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

    useEffect(() => {
        const info = stranges.find(e => e.id === router.query.slug);
        setInfos(info);
    }, [router.query])

    return (
        <div className={styles.container}>
            <Header>
                {infos && (
                    <div className={styles.copyInfos}>
                        <Image
                            src={infos.cover} 
                            alt=""
                            width={128}
                            height={190}
                        />
                        <aside>
                            <h1>Numéro {infos.id}</h1>
                            <h2>{infos.date}</h2>
                            <h3>Côte en bon état : {infos.rate} €</h3>
                        </aside>
                    </div>
                )}
            </Header>
            <section>
                Ici les exemplaires possédés
            </section>
            <Button title="Ajouter"/>
        </div>
    )
}
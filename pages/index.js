import Head from 'next/head'
import styles from '../styles/index.module.css'
import Scene from '../Components/Scene/Scene'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>🚲 - THOMAS CARON</title>
                <meta name="description" content=" o__         __o        ,__o        __o           __o
 ,>/_       -\<,      _-\_<,       _`\<,_       _ \<_
(*)`(*).....O/ O.....(*)/'(*).....(*)/ (*).....(_)/(_)"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Scene/>
        </div>
    )
}

export default Home
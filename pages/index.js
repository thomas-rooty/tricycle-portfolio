import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/index.module.css'
import Scene from '../components/Scene/Scene'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <Scene/>
        </div>
    )
}

export default Home
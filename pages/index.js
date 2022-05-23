import Head from 'next/head'
import styles from '../styles/index.module.css'
import App from '../components/App'

const Home = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>🚲 - THOMAS CARON</title>
                <meta name="description" content="Vroum vroum, assassin de la police, vroum vroum, assassin au canabis"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <App/>
        </div>
    )
}

export default Home
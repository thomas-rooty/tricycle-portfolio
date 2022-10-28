import Head from 'next/head';
import styles from '../styles/index.module.css';
import Hovernotification from '../components/ui/hovernotification/hovernotification';
import {Canvas} from '@react-three/fiber';
import React, {Suspense} from 'react';
import Loader from '../components/ui/loadingpage/Loader';
import {Physics, Debug} from '@react-three/cannon';
import Vehicle from '../components/tricycle/vehicle';
import Skatepark from '../components/zones/skatepark/skatepark';
import SocialIconsPads from '../components/zones/socialnetworks/iconsplatform';
import Signs from '../components/zones/signs/signs';
import RocketObject from '../components/zones/rocket/rocketObject';
import Floor from '../components/floor/floor';
import LandingPage from '../components/ui/landingpage/LandingPage';
import Projects from '../components/zones/projects/projects';

const Home = () => {
  console.log(process.env.ENVIRONMENT);

  return (
    <div className={styles.appContainer}>
      <Head>
        <title>Thomas Caron - Ride to discover me!</title>
        <meta
          name='description'
          content='Fullstack developer living in Versailles, France. Student at IPSSI, developer at Quietalis, freelancer.'
        />
        <meta property='og:image' content='/assets/icons/banner.png'/>
        <meta itemProp='image' content='/assets/icons/banner.png'/>
        <meta itemProp='title' content='Thomas Caron - 3D Portfolio'/>
        <meta name='twitter:image' content='/assets/icons/banner.png'/>
        <meta property='og:title' content='Thomas Caron - Ride to discover me!'/>
        <meta
          property='og:description'
          content='Fullstack developer living in Versailles, France. Student at IPSSI, developer at Quietalis, freelancer.'
        />
        <link rel='icon' href='/favicon.ico'/>
      </Head>
      <Hovernotification/>
      <Canvas dpr={[1, 1.5]} shadows>
        <Suspense fallback={<Loader/>}>
          <LandingPage/>
          <fog attach='fog' args={['#325a80', 10, 50]}/>
          <color attach='background' args={['#325a80']}/>
          <ambientLight intensity={0.4}/>
          <spotLight position={[10, 10, 10]} angle={0.4} intensity={0.5} castShadow penumbra={1}/>
          <spotLight position={[50, 50, 50]} angle={0.4} intensity={0.5} castShadow penumbra={1}/>
          <Physics broadphase='SAP' contactEquationRelaxation={4} friction={1e-3} allowSleep>
            <Floor rotation={[-Math.PI / 2, 0, 0]} userData={{id: 'floor'}}/>
            <Vehicle
              position={[0, 3, 0]}
              rotation={[0, -Math.PI / 4, 0]}
              angularVelocity={[0, 10, 0]}
              wheelRadius={0.3}
            />
            <Skatepark/>
            <SocialIconsPads/>
            <Signs/>
            <RocketObject/>
            <Projects/>
          </Physics>
        </Suspense>
      </Canvas>
      <div style={{position: 'absolute', top: 30, left: 40}}>
                <pre>
                    ZQSD, WASD or ↑ ← ↓ → to drive
                    <br/>
                    space to brake, enter to interact
                    <br/>R to reset
                </pre>
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import styles from "../../../styles/loader.module.css";
import Image from "next/future/image";
import Wheel from "../../../public/assets/icons/wheel.png";
import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
	const {progress, loaded, total} = useProgress();
	return (
		<Html className={styles.loadingPage}>
			<Image src={Wheel} alt="wheel"/>
			<div className={styles.spinner}/>
			<div className={styles.loadingText}>
				{progress}% - {loaded} / {total} assets loaded...
			</div>
		</Html>
	);
}

export default Loader;
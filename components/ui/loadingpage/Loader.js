import React from "react";
import s from "../../../styles/loader.module.css";
import {Html, useProgress} from '@react-three/drei'

const Loader = () => {
	const {progress, loaded, total} = useProgress();
	return (
		<Html className={s.loadingPage}>
			<div className={s.spinner}/>
			<div className={s.loadingText}>
				{progress}% - {loaded} / {total}
			</div>
		</Html>
	);
}

export default Loader;
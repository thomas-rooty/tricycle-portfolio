import React from 'react';
import {Html} from "@react-three/drei";
import styles from "../../../styles/landing.module.css";
import Image from "next/future/image";
import Wheel from "../../../public/assets/icons/wheel.png";

const LandingPage = () => {
	// Add click event listener to the button to hide the landing page
	const hideLandingPage = () => {
		const landingPage = document.getElementById("id_landingPage");
		const landingPageButton = document.getElementById("id_landingPageButton");
		const wheel = document.getElementById("id_wheel");

		wheel.classList.add(styles.rollingWheel);

		setTimeout(() => {
			landingPage.classList.add(styles.hide);
			landingPageButton.classList.add(styles.hide);
		}, 1500);

		setTimeout(() => {
			landingPage.remove();
			landingPageButton.remove();
		}, 4000);
	}

	return (
		<Html>
			<div id={'id_landingPage'} className={styles.landingPage}>
				<Image id={'id_wheel'} className={styles.wheelImg} src={Wheel} alt="wheel"/>
				<button id={'id_landingPageButton'} onClick={hideLandingPage}
				        className={styles.landingPage_button}>&nbsp;ENTER
				</button>
			</div>
		</Html>
	);
}

export default LandingPage;
import React from 'react';
import {Html} from "@react-three/drei";
import styles from "../../../styles/landing.module.css";

const LandingPage = () => {
	// Add click event listener to the button to hide the landing page,
	// Remove the landingPage after 4sec
	const hideLandingPage = () => {
		const landingPage = document.getElementById("id_landingPage");
		const landingPageButton = document.getElementById("id_landingPageButton");

		landingPage.classList.add(styles.hide);

		landingPageButton.remove();

		setTimeout(() => {
			landingPage.remove();
		}, 4000);
	}

	return (
		<Html>
			<div id={'id_landingPage'} className={styles.landingPage}>
				<button id={'id_landingPageButton'} onClick={hideLandingPage} className={styles.landingPage_button}>&nbsp;ENTER</button>
			</div>
		</Html>
	);
}

export default LandingPage;
import React, {useEffect} from "react";
import {useStore} from "../../ZuStore";

// Check hoveredObject status in ZuStore and set hoveredStatus accordingly
const HoverNotification = () => {
	const [showPopup, setShowPopup] = React.useState(false);
	const hoveredObject = useStore(state => state.hoveredObject);

	// Press enter to add notification-pressed css class to the notification
	const handleKeyDown = (e) => {
		if (e.key === "Enter") {
			// Add notification-pressed class to the notification with id "notification"
			document.getElementById("notification").classList.add("notification-pressed");
			// After 1 second, remove the notification-pressed class
			setTimeout(() => {
				document.getElementById("notification").classList.remove("notification-pressed");
			}, 250);
		}
	};

	useEffect(() => {
		if (hoveredObject) {
			setShowPopup(true);
		} else {
			setShowPopup(false);
		}
	}, [hoveredObject]);

	useEffect(() => {
		document.addEventListener("keydown", handleKeyDown);
		return () => {
			document.removeEventListener("keydown", handleKeyDown);
		}
	}, []);

	return (
		<div id='notification' className={`notification ${showPopup ? "hovered" : ""}`}>
			<p className='pixel-font'>PRESS ENTER</p>
		</div>
	);
}

export default HoverNotification;
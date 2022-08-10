import {useBox} from "@react-three/cannon";
import React from "react";
import Rocket from "./mesh/rocket";

const RocketObject = () => {
	// SignSkateparkSocial physics box
	const [rocketRef] = useBox(() => ({
		type: "Static",
		args: [8, 10, 8],
		position: [-20, -0.6, 2],
		rotation: [0, 1, 0],
		userData: {
			id: "rocket",
		}
	}));

	return (
		<>
			<group ref={rocketRef}>
				<Rocket/>
			</group>
		</>
	);
}

export default RocketObject;
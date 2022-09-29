import {useBox} from "@react-three/cannon";
import React from "react";
import Rocket from "./mesh/rocket";

const RocketObject = () => {
	// Rocket physics box
	const [rocketRef] = useBox(() => ({
		type: "Static",
		args: [0, 0, 0],
		position: [-20, -0.6, 2],
		rotation: [0, 1, 0],
		userData: {
			id: "rocket",
		}
	}));

	// Outer Left wall physics box
	const [outerLeftWallRef] = useBox(() => ({
		type: "Static",
		args: [1, 10, 8],
		position: [-22, 0, 6],
		rotation: [0, 1, 0],
		userData: {
			id: "leftWall",
		}
	}));

	// Left wall physics box
	const [leftWallRef] = useBox(() => ({
		type: "Static",
		args: [1, 10, 8],
		position: [-21, 0, 4],
		rotation: [0, 1, 0],
		userData: {
			id: "leftWall",
		}
	}));

	// Outer Right wall physics box
	const [outerRightWallRef] = useBox(() => ({
		type: "Static",
		args: [1, 10, 8],
		position: [-17.5, 0, -2],
		rotation: [0, 1, 0],
		userData: {
			id: "rightWall",
		}
	}));

	// Right wall physics box
	const [rightWallRef] = useBox(() => ({
		type: "Static",
		args: [1, 10, 8],
		position: [-18.5, 0, 0],
		rotation: [0, 1, 0],
		userData: {
			id: "rightWall",
		}
	}))

	// Outer Back wall physics box
	const [outerBackWallRef] = useBox(() => ({
		type: "Static",
		args: [1, 10, 9],
		position: [-22, 0, 0.66],
		rotation: [0, 2.6, 0],
		userData: {
			id: "backWall",
		}
	}));

	// Back wall physics box
	const [backWallRef] = useBox(() => ({
		type: "Static",
		args: [1, 10, 6],
		position: [-20, 0, 2],
		rotation: [0, 2.6, 0],
		userData: {
			id: "backWall",
		}
	}));

	return (
		<group ref={rocketRef}>
			<Rocket/>
			<mesh ref={outerLeftWallRef}/>
			<mesh ref={leftWallRef}/>
			<mesh ref={rightWallRef}/>
			<mesh ref={outerRightWallRef}/>
			<mesh ref={backWallRef}/>
			<mesh ref={outerBackWallRef}/>
		</group>
	);
}

export default RocketObject;
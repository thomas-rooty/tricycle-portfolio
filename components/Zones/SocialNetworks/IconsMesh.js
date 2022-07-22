import {useBox} from "@react-three/cannon";
import React from "react";
import Instagram from "./Mesh/Instagram";
import LinkedIn from "./Mesh/LinkedIn";

// Args is scale, position is x, y, z
const Icons = () => {
	// Instagram physics box
	const [instagramRef] = useBox(() => ({
		type: "Static",
		args: [2, 3, 1],
		position: [6.15, 1.25, -1],
		rotation: [0, 0, 0],
		userData: {
			id: "instagram",
		}
	}));

	// LinkedIn physics box
	const [linkedinRef] = useBox(() => ({
		type: "Static",
		args: [2, 3, 1],
		position: [10.5, 1.15, 0.5],
		rotation: [0, 0, 0],
		userData: {
			id: "linkedin",
		}
	}));

	return (
		<>
			<group ref={instagramRef}>
				<Instagram
					userData={{id: "instagram"}}
				/>
			</group>
			<group ref={linkedinRef}>
				<LinkedIn
					userData={{id: "linkedin"}}
				/>
			</group>
		</>
	);
};

export default Icons;

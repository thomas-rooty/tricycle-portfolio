import {useBox} from "@react-three/cannon";
import React from "react";
import Instagram from "./Mesh/Instagram";
import LinkedIn from "./Mesh/LinkedIn";
import GitHub from "./Mesh/GitHub";

// Args is scale, position is x, y, z
const Icons = () => {
	// Instagram physics box
	const [instagramRef] = useBox(() => ({
		type: "Static",
		args: [2, 3, 1],
		position: [6.15, 1.25, -1],
		rotation: [0, -0.12, 0],
		userData: {
			id: "instagram",
		}
	}));

	// LinkedIn physics box
	const [linkedinRef] = useBox(() => ({
		type: "Static",
		args: [2, 3, 1],
		position: [10.5, 1.15, 0.5],
		rotation: [0, 0.25, 0],
		userData: {
			id: "linkedin",
		}
	}));

	// GitHub physics box
	const [githubRef] = useBox(() => ({
		type: "Static",
		args: [2, 3, 1],
		position: [19.5, 1.15, 4.5],
		rotation: [0, -0.1, 0],
		userData: {
			id: "github",
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
			<group ref={githubRef}>
				<GitHub
					userData={{id: "github"}}
				/>
			</group>
		</>
	);
};

export default Icons;

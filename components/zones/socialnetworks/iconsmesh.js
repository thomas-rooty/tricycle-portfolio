import {useBox} from "@react-three/cannon";
import React from "react";
import Instagram from "./mesh/instagram";
import Linkedin from "./mesh/linkedin";
import Github from "./mesh/github";
import Stackoverflow from "./mesh/stackoverflow";
import {useFrame} from "@react-three/fiber";

// Args is scale, position is x, y, z
const Icons = () => {
	// Instagram physics box
	const [instagramRef, instagramApi] = useBox(() => ({
		type: "Static",
		args: [2.5, 3, 1],
		position: [6.15, 1.5, -1],
		rotation: [0, -0.12, 0],
		userData: {
			id: "instagram",
		}
	}));

	// LinkedIn physics box
	const [linkedinRef, linkedinApi] = useBox(() => ({
		type: "Static",
		args: [2.5, 3, 1],
		position: [10.5, 1.15, 0.5],
		rotation: [0, 0.25, 0],
		userData: {
			id: "linkedin",
		}
	}));

	// GitHub physics box
	const [githubRef, githubApi] = useBox(() => ({
		type: "Static",
		args: [2.5, 3, 1],
		position: [19.5, 1.15, 4.5],
		rotation: [0, -0.1, 0],
		userData: {
			id: "github",
		}
	}));

	// Stackoverflow physics box
	const [stackoverflowRef, stackoverflowApi] = useBox(() => ({
		type: "Static",
		args: [2.5, 3, 1],
		position: [15.2, 0, 2.5],
		rotation: [0, -0.2, 0],
		userData: {
			id: "stackoverflow",
		}
	}));

	useFrame(({clock}) => {
		// Make the icons go up and down
		instagramApi.position.set(6.5, (Math.sin(clock.getElapsedTime()) * 0.5) + 2.5, -1.5);
		linkedinApi.position.set(11.5, (Math.sin(clock.getElapsedTime() + 5) * 0.5) + 2.5, -1.5);
		githubApi.position.set(21.5, (Math.sin(clock.getElapsedTime() - 2) * 0.5) + 2.5, -1.5);
		stackoverflowApi.position.set(16.2, (Math.sin(clock.getElapsedTime()) * 0.3) + 1, -1.5);

		// Make the icons rotate
		instagramApi.rotation.set(0, Math.sin(clock.getElapsedTime()) * 0.4, 0);
		linkedinApi.rotation.set(0, Math.sin(clock.getElapsedTime()) * 0.15, 0);
		githubApi.rotation.set(0, Math.sin(clock.getElapsedTime()) * 0.3 - 0.3, 0);
		stackoverflowApi.rotation.set(0, Math.sin(clock.getElapsedTime()) * 0.1, 0);
	});

	return (
		<>
			<group ref={instagramRef}>
				<Instagram
					userData={{id: "instagram"}}
				/>
			</group>
			<group ref={linkedinRef}>
				<Linkedin
					userData={{id: "linkedin"}}
				/>
			</group>
			<group ref={githubRef}>
				<Github
					userData={{id: "github"}}
				/>
			</group>
		</>
	);
};

export default Icons;

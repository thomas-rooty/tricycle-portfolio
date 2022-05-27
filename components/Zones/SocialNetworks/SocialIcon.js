import React, {useEffect} from "react";
import {useBox} from "@react-three/cannon";
import {useStore} from "../../ZuStore";
import {useFrame} from "@react-three/fiber";

const SocialIcon = ({args, networkName, color, position}) => {
	// Use store
	const addObjectAsHoverable = useStore(state => state.addObjectAsHoverable);
	const hoveredObject = useStore(state => state.hoveredObject);

	// Physics
	const [ref] = useBox(() => ({
		type: "Static",
		mass: 1,
		args: args,
		position,
		rotation: [0, 0, 0],
		angularVelocity: [0, 0, 0],
		userData: {
			id: networkName,
		},
	}));

	useEffect(() => {
		console.log(hoveredObject);
	}, [hoveredObject]);

	// Pass the hoverable object to the context api when they're set
	useFrame(() => {
		// Add the object to the hoverable objects if it's not already there
		if (ref.current && ref.current.uuid) {
			addObjectAsHoverable(ref.current);
		}
	});

	return (
		<mesh
			ref={ref}
			castShadow
		>
			<boxGeometry args={args}/>
			<meshStandardMaterial
				color={`#${color}`}
				metalness={0.5}
				roughness={0.5}
			/>
		</mesh>
	);
};

const SocialIcons = () => {
	return (
		<group position={[0, 0, 0]}>
			<SocialIcon
				args={[2, 0.01, 2]}
				networkName="instagram"
				color={"e5415f"}
				position={[7, 0.01, 0]}
			/>
			<SocialIcon
				args={[2, 0.01, 2]}
				networkName="linkedin"
				color={"0176b5"}
				position={[10.5, 0.01, 1.5]}
			/>
			<SocialIcon
				args={[2, 0.01, 2]}
				networkName="stackoverflow"
				color={"fe7b17"}
				position={[14, 0.01, 3]}
			/>
			<SocialIcon
				args={[2, 0.01, 2]}
				networkName="github"
				color={"33333b"}
				position={[17.5, 0.01, 4.5]}
			/>
		</group>
	);
};

export default SocialIcons;

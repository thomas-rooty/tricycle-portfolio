import React, {useRef} from "react";
import {useStore} from "../../ZuStore";
import {useFrame} from "@react-three/fiber";
import {useControls} from "../../../utils/useControls";
import {useState} from "react";
import Icons from "./IconsMesh";
import Pad from "./Pad";

const IconsPlatforms = ({args, networkName, networkUrl, color, position}) => {
	const controls = useControls();
	const [padStrokePos, setPadStrokePos] = useState([position[0], position[1], position[2]]);

	// Use store
	const addObjectAsHoverable = useStore(state => state.addObjectAsHoverable);
	const hoveredObject = useStore(state => state.hoveredObject);

	// Physics
	const pad = useRef();

	// Pass the hoverable object to the context api when they're set
	useFrame(() => {
		// Register interact with enter key
		const {interact} = controls.current;

		// Add the object to the hoverable objects if it's not already there
		if (pad.current && pad.current.uuid) {
			addObjectAsHoverable(pad.current);
		}

		// Handle the actions when hovered
		if (hoveredObject === pad.current.userData.id) {
			// Change color to darker
			pad.current.material.color.set(0x4ea8d9);

			// Edit y position of padStroke to make it look like it's hovering
			setPadStrokePos([position[0], position[1] - 0.2, position[2]]);

			// Open the url in a new tab
			if (interact) {
				setTimeout(() => {
					window.open(networkUrl, "_blank");
				}, 500);
			}
		} else {
			// Reset color
			pad.current.material.color.set('#' + color);
			setPadStrokePos([position[0], position[1], position[2]]);
		}
	});

	return (
		<>
			<mesh
				ref={pad}
				castShadow
				position={position}
				rotation={[0, 0, 0]}
				userData={{
					id: networkName,
				}}
			>
				<boxGeometry args={args}/>
				<meshStandardMaterial
					color={`#${color}`}
				/>
			</mesh>
			<Pad
				position={padStrokePos}
			/>
		</>
	);
};

const SocialIconsPads = () => {
	return (
		<group position={[0, 0, 0]}>
			<Icons/>
			<IconsPlatforms
				args={[4, 0.01, 3]}
				networkName="instagram"
				networkUrl="https://instagram.com/tho_macaron/"
				color={"82d3ff"}
				position={[6.5, 0.01, 0.5]}
			/>
			<IconsPlatforms
				args={[4, 0.01, 3]}
				networkName="linkedin"
				networkUrl="https://linkedin.com/in/dev-thomas-caron/"
				color={"82d3ff"}
				position={[11.5, 0.01, 0.5]}
			/>
			<IconsPlatforms
				args={[4, 0.01, 3]}
				networkName="stackoverflow"
				networkUrl="https://stackoverflow.com/users/15032117/rootkitty"
				color={"82d3ff"}
				position={[16.5, 0.01, 0.5]}
			/>
			<IconsPlatforms
				args={[4, 0.01, 3]}
				networkName="github"
				networkUrl="https://github.com/thomas-rooty/"
				color={"82d3ff"}
				position={[21.5, 0.01, 0.5]}
			/>
		</group>
	);
};

export default SocialIconsPads;

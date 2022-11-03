/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import {useStore} from "../../../zustore";
import {useFrame} from "@react-three/fiber";

const Lever = (props) => {
	// Lever state
	const mcLeverPulled = useStore((state) => state.mcLeverPulled);

	// If the lever is pulled, rotate it
	const lever = useRef();
	useFrame(() => {
		if (mcLeverPulled) {
			// Rotate the lever
			lever.current.rotation.x = 0.5;
		} else {
			// Reset the lever
			lever.current.rotation.x = Math.PI / 2;
		}
	});

	// 3D model
	const { nodes, materials } = useGLTF("/assets/mc_lever.gltf");
	return (
		<group {...props} position={[0, 0, 0.2]} scale={0.7} dispose={null}>
			<mesh
				castShadow
				receiveShadow
				geometry={nodes.Cobblestone.geometry}
				material={materials["Lever.001"]}
				position={[0, 0.7, 0]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={10}
			/>
			<mesh
				ref={lever}
				castShadow
				receiveShadow
				geometry={nodes.Lever.geometry}
				material={materials["Lever.001"]}
				position={[0, 0.7, 0]}
				rotation={[Math.PI / 2, 0, 0]}
				scale={10}
			/>
		</group>
	);
}

useGLTF.preload("/assets/mc_lever.gltf");

export default Lever;
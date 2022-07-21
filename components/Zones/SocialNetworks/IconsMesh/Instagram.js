import {useBox} from "@react-three/cannon";
import React from "react";
import {RoundedBox} from "@react-three/drei";

// Args is scale, position is x, y, z

const Instagram = ({args = [2.5, 2.5, 0.5], ...props}) => {
	const [ref] = useBox(() => ({
		type: "Static",
		args,
		...props,
	}));
	return (
		<group ref={ref} >
			<mesh castShadow>
				<RoundedBox args={[2.5, 2.5, 0.5]} radius={0.3} smoothness={3}>
					<meshPhongMaterial color="#f05444"/>
				</RoundedBox>
			</mesh>
			<mesh position={[0, 0, 0.3]} scale={[0.7, 0.7, 1]}>
				<ringBufferGeometry args={[0.7, 1, 32]} />
				<meshBasicMaterial attach="material" color="#ffffff"/>
			</mesh>
			<mesh position={[0.8, 0.7, 0.3]} scale={[0.15, 0.15, 1]}>
				<ringBufferGeometry args={[0, 1, 32]} />
				<meshBasicMaterial attach="material" color="#ffffff"/>
			</mesh>
		</group>
	);
};

const Icons = () => {
	return (
		<group>
			<Instagram
				position={[7, 1.5, -1]}
				rotation={[0, 0, 0]}
				userData={{id: "instagram"}}
			/>
		</group>
	);
};

export default Icons;

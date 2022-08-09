import {useBox} from "@react-three/cannon";
import React from "react";
import Jumpgrid from "./jumpgrid";

const Ramp = ({args = [5, 7, 4.5], ...props}) => {
	const [ref] = useBox(() => ({
		type: "Static",
		args,
		...props,
	}));
	return (
		<mesh ref={ref} castShadow>
			<boxGeometry args={args}/>
			<meshStandardMaterial color="#96cbff"/>
		</mesh>
	);
};

const JumpGridInstance = ({args = [6, 2, 1], ...props}) => {
	const [gridRef] = useBox(() => ({
		type: "Static",
		args,
		...props,
	}));
	const [leftBar] = useBox(() => ({
		type: "Static",
		args: [1, 4, 1],
		position: [-10, 4, -7],
	}));
	const [rightBar] = useBox(() => ({
		type: "Static",
		args: [1, 4, 1],
		position: [-10, 4, -13],
	}));
	return (
		<>
			<group ref={leftBar}/>
			<group ref={gridRef}>
				<Jumpgrid
					args={args}
					color="#d1e8ff"
					userData={{id: "jumpgrid-1"}}
				/>
			</group>
			<group ref={rightBar}/>
		</>
	);
}

const Skatepark = () => {
	return (
		<group>
			<Ramp
				position={[-5, -1.5, -10]}
				rotation={[0, 0, (75 * Math.PI) / 180]}
				userData={{id: "ramp-1"}}
			/>
			<JumpGridInstance
				position={[-10, 1, -10]}
				rotation={[0, (90 * Math.PI) / 180, 0]}
			/>
			<Ramp
				position={[-15, -1.5, -10]}
				rotation={[0, 0, (-75 * Math.PI) / 180]}
				userData={{id: "ramp-2"}}
			/>
		</group>
	);
};

export default Skatepark;

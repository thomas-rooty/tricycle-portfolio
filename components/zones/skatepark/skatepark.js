import {useBox} from "@react-three/cannon";
import React from "react";
import Jumpgrid from "./jumpgrid";
import Barrier from "../barrier/mesh/barrier";

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

const _Barrier = ({args, position, rotation}) => {
	const [barrierRef] = useBox(() => ({
		type: "Static",
		args,
		position,
		rotation,
	}));

	return (
		<group ref={barrierRef}>
			<Barrier/>
		</group>
	);
}

const Barriers = () => {
	return (
		<group>
			{_Barrier({
				args: [8, 4, 1],
				position: [3, 0, -7],
			})}
			{_Barrier({
				args: [8, 4, 1],
				position: [3, 0, -13],
			})}
			{_Barrier({
				args: [8, 4, 1],
				position: [-23, 0, -7],
			})}
			{_Barrier({
				args: [8, 4, 1],
				position: [-23, 0, -13],
			})}
			{_Barrier({
				args: [8, 4, 1],
				position: [-5.5, 0, -7],
			})}
			{_Barrier({
				args: [8, 4, 1],
				position: [-5.5, 0, -13],
			})}
			{_Barrier({
				args: [8, 4, 1],
				position: [-14.5, 0, -7],
			})}
			{_Barrier({
				args: [8, 4, 1],
				position: [-14.5, 0, -13],
			})}
		</group>
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
			<Barriers/>
		</group>
	);
};

export default Skatepark;

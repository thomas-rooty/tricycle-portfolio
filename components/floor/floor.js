import {usePlane} from "@react-three/cannon";
import React from "react";

const Floor = (props) => {
	const [ref] = usePlane(() => ({
		type: "Static",
		material: "ground",
		...props,
	}));
	return (
		<group ref={ref}>
			<mesh receiveShadow>
				<planeGeometry args={[1000, 1000]}/>
				<meshStandardMaterial color="#5eb0ff"/>
			</mesh>
		</group>
	);
};

export default Floor;
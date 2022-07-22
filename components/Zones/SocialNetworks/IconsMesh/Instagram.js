import {useBox} from "@react-three/cannon";
import React from "react";
import InstagramIcon from "./InstagramIcon";

// Args is scale, position is x, y, z
const Icons = () => {
	const [ref] = useBox(() => ({
		type: "Static",
		args: [2, 3, 1],
		position: [7.15, 1.25, -1],
		rotation: [0, 0, 0],
		userData: {
			id: "instagram",
		}
	}));
	return (
		<group ref={ref}>
			<InstagramIcon
				userData={{id: "instagram"}}
			/>
		</group>
	);
};

export default Icons;

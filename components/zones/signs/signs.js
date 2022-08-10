import {useBox} from "@react-three/cannon";
import React from "react";
import SignSkateparkSocial from "./mesh/sign_skateparksocial";

const Signs = () => {
	// SignSkateparkSocial physics box
	const [signSkateparkSocialRef] = useBox(() => ({
		type: "Static",
		args: [1, 10, 1],
		position: [2, 0, -2],
		rotation: [0, -0.3, 0],
		userData: {
			id: "sign_skateparksocial",
		}
	}));

	return (
		<>
			<group ref={signSkateparkSocialRef}>
				<SignSkateparkSocial />
			</group>
		</>
	);
}

export default Signs;
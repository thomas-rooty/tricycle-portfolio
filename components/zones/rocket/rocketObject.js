import {useBox} from "@react-three/cannon";
import React, {useState, useRef} from "react";
import Rocket from "./mesh/rocket";
// Interaction with the rocket
import {useStore} from "../../zustore";
import {useFrame} from "@react-three/fiber";
import {useControls} from "../../../utils/useControls";
import Pad from "../socialnetworks/pad";
import styles from "../../../styles/rocket.module.css";

const ActivationPlatform = ({args, color, position}) => {
    const controls = useControls();
    const [padStrokePos, setPadStrokePos] = useState([position[0], position[1], position[2]]);
    const [alreadyActivated, setAlreadyActivated] = useState(false);

    // Use store
    const addObjectAsHoverable = useStore(state => state.addObjectAsHoverable);
    const hoveredObject = useStore(state => state.hoveredObject);

    // Physics ref
    const pad = useRef();

    // Pass the hoverable object to the store
    useFrame(() => {
        // Register interact with enter key
        const {interact} = controls.current;

        // Add the object to the hoverable objects if it's not already there
        if (pad.current && pad.current.uuid) {
            addObjectAsHoverable(pad.current);
        }

        // Handle the actions when hovered
        if (hoveredObject === pad.current.userData.id) {

            // Open the url in a new tab
            if (interact) {
                if (!alreadyActivated) {
                    // Set the already activated state to true to prevent multiple activations
                    setAlreadyActivated(true);

                    // Start the trip
                    // Rocket take off sound effect
                    const rocketTakeOffSound = new Audio("/assets/sounds/rocket_taking_off_4s.mp3");
                    rocketTakeOffSound.play();

                    // Add shakeSoft class to the body for 16000 seconds, then remove it
                    const body = document.querySelector('body');
                    body.classList.add(styles.shakeSoft);

                    // Open the url in a new tab after 16 seconds
                    setTimeout(() => {
                        body.classList.remove(styles.shakeSoft);
                        window.open("https://3dxp.tcaron.fr", "_blank");
                        console.log("Open the url in a new tab");
                    }, 4000);
                } else {
                    // Can be reactivated after 4 seconds
                    setTimeout(() => {
                        setAlreadyActivated(false);
                    }, 4000);
                }
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
                    id: 'rocketPad',
                }}
            >
                <boxGeometry args={args}/>
            </mesh>
            <Pad
                position={padStrokePos}
            />
        </>
    );
};

const RocketObject = () => {
    // Rocket physics box
    const [rocketRef] = useBox(() => ({
        type: "Static",
        args: [0, 0, 0],
        position: [-20, -0.6, 2],
        rotation: [0, 1, 0],
        userData: {
            id: "rocket",
        }
    }));

    // Outer Left wall physics box
    const [outerLeftWallRef] = useBox(() => ({
        type: "Static",
        args: [1, 10, 8],
        position: [-22, 0, 6],
        rotation: [0, 1, 0],
        userData: {
            id: "leftWall",
        }
    }));

    // Left wall physics box
    const [leftWallRef] = useBox(() => ({
        type: "Static",
        args: [1, 10, 8],
        position: [-21, 0, 4],
        rotation: [0, 1, 0],
        userData: {
            id: "leftWall",
        }
    }));

    // Outer Right wall physics box
    const [outerRightWallRef] = useBox(() => ({
        type: "Static",
        args: [1, 10, 8],
        position: [-17.5, 0, -2],
        rotation: [0, 1, 0],
        userData: {
            id: "rightWall",
        }
    }));

    // Right wall physics box
    const [rightWallRef] = useBox(() => ({
        type: "Static",
        args: [1, 10, 8],
        position: [-18.5, 0, 0],
        rotation: [0, 1, 0],
        userData: {
            id: "rightWall",
        }
    }))

    // Outer Back wall physics box
    const [outerBackWallRef] = useBox(() => ({
        type: "Static",
        args: [1, 10, 9],
        position: [-22, 0, 0.66],
        rotation: [0, 2.6, 0],
        userData: {
            id: "backWall",
        }
    }));

    // Back wall physics box
    const [backWallRef] = useBox(() => ({
        type: "Static",
        args: [1, 10, 6],
        position: [-20, 0, 2],
        rotation: [0, 2.6, 0],
        userData: {
            id: "backWall",
        }
    }));

    return (
        <group ref={rocketRef}>
            <Rocket/>
            <ActivationPlatform
                args={[5, 1, 10]} // width, height, depth of the platform (under the rocket)
                color={'ffffff'}
                position={[0, 0, 0]} // x, y, z relating to the rocket position
            />
            <mesh ref={outerLeftWallRef}/>
            <mesh ref={leftWallRef}/>
            <mesh ref={rightWallRef}/>
            <mesh ref={outerRightWallRef}/>
            <mesh ref={backWallRef}/>
            <mesh ref={outerBackWallRef}/>
        </group>
    );
}

export default RocketObject;
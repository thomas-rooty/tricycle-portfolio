import {useEffect, useState} from 'react';
import {useFrame} from '@react-three/fiber';

const PlayerObject = (props) => {
    const [basePlayerSpeed, setBasePlayerSpeed] = useState(0.04);
    const sprintMultiplier = 1.5;

    // Handle the direction of the player object based on the key pressed
    useEffect(() => {
        document.onkeydown = (e) => {
            // Directions
            if (e.key === 'q' || e.key === 'a') {
                props.setDirection("left");
            } else if (e.key === 'd') {
                props.setDirection("right");
            } else if (e.key === 'z' || e.key === 'w') {
                props.setDirection("forward");
            } else if (e.key === 's') {
                props.setDirection("backward");
            }
            // Will manage the player's diagonal movement

            // Sprint key
            if (e.key === 'Shift') {
                setBasePlayerSpeed(basePlayerSpeed * sprintMultiplier);
            }
        };
        document.onkeyup = (e) => {
            if (e.key === 'q' || e.key === 'd' || e.key === 'z' || e.key === 's' || e.key === 'a' || e.key === 'w') {
                props.setDirection("");
            }
            if (e.key === 'Shift') {
                setBasePlayerSpeed(0.04);
            }
        };
    }, []);

    // Update the player's position based on the direction he is moving to at every frame
    useFrame(() => {
        // Handle straight movement
        if (props.direction === "right") {
            props.setMeshPosition([props.meshPosition[0] - basePlayerSpeed, props.meshPosition[1], props.meshPosition[2]]);
        } else if (props.direction === "left") {
            props.setMeshPosition([props.meshPosition[0] + basePlayerSpeed, props.meshPosition[1], props.meshPosition[2]]);
        } else if (props.direction === "forward") {
            props.setMeshPosition([props.meshPosition[0], props.meshPosition[1], props.meshPosition[2] + basePlayerSpeed]);
        } else if (props.direction === "backward") {
            props.setMeshPosition([props.meshPosition[0], props.meshPosition[1], props.meshPosition[2] - basePlayerSpeed]);
        }

        // Will manage the player's diagonal movement
    });

    return (
        <mesh
            name="playerMesh"
            position={props.meshPosition}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <meshStandardMaterial
                attach="material"
            />
        </mesh>
    );
}

export default PlayerObject;
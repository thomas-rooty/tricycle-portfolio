import {useEffect, useState} from 'react';
import {useFrame} from '@react-three/fiber';

const PlayerObject = (props) => {
    const [basePlayerSpeed, setBasePlayerSpeed] = useState(0.04);
    const sprintMultiplier = 1.5;
    let keys = {
        up: false,
        down: false,
        left: false,
        right: false
    }

    const updateKeyStates = (key, value) => {
        switch(key) {
            case 'z':
                keys.up = value;
                break;
            case 's':
                keys.down = value;
                break;
            case 'q':
                keys.left = value;
                break;
            case 'd':
                keys.right = value;
                break;
        }
    }

    document.addEventListener('keydown', (e) => {
        updateKeyStates(e.key, true);
    });

    document.addEventListener('keyup', (e) => {
        updateKeyStates(e.key, false);
    });

    useFrame(() => {
        if (keys.up) {
            console.log("Moving forward");
        }
        if (keys.down) {
            console.log("Moving backward");
        }
        if (keys.left) {
            console.log("Moving left");
        }
        if (keys.right) {
            console.log("Moving right");
        }
        if (keys.up && keys.left) {
            console.log("Moving forward and left");
        }
        if (keys.up && keys.right) {
            console.log("Moving forward and right");
        }
        if (keys.down && keys.left) {
            console.log("Moving backward and left");
        }
        if (keys.down && keys.right) {
            console.log("Moving backward and right");
        }
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
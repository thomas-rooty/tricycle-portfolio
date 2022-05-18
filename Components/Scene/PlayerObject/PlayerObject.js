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
        switch (key) {
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
            console.log("Going up");
            props.playerPosition[2] += basePlayerSpeed;
            props.setRealPosition([props.playerPosition[0], props.playerPosition[1], props.playerPosition[2]]);
        }
        if (keys.down) {
            console.log("Going down");
            props.playerPosition[0] -= basePlayerSpeed;
        }
        if (keys.left) {
            console.log("Going left");
            props.playerPosition[2] -= basePlayerSpeed;
        }
        if (keys.right) {
            console.log("Going right");
            props.playerPosition[2] += basePlayerSpeed;
        }
    })

    return (
        <mesh
            name="playerMesh"
            position={props.realPosition}
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
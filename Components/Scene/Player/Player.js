import {useRef, useState} from 'react';
import {extend, useFrame, useThree} from '@react-three/fiber';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const Player = () => {
    let camera, gl;
    const controls = useRef();
    const player = useRef();
    let basePlayerSpeed = 0.04;
    const sprintMultiplier = 1.33;
    const [basicCameraPos, setBasicCameraPos] = useState([-2, 5, -5]);
    const CameraController = (basicCameraPos) => {
        extend({OrbitControls});
        return () => {
            ({camera, gl} = useThree());
            camera.position.set(...basicCameraPos);
            useFrame(() => controls.current.update());
            return <orbitControls
                ref={controls}
                args={[camera, gl.domElement]}
                enableZoom={false}
                enableDamping={true}
                enablePan={false}
                enableRotate={false}
                enabled={true}
                castShadow={true}
            />;
        };
    };
    const CameraComponent = CameraController(basicCameraPos);

    let keys = {
        up: false,
        down: false,
        left: false,
        right: false
    };

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
            case 'Shift':
                keys.sprint = value;
                break;
        }
    };

    document.addEventListener('keydown', (e) => {
        updateKeyStates(e.key, true);
    });

    document.addEventListener('keyup', (e) => {
        updateKeyStates(e.key, false);
    });

    useFrame(() => {
        controls.current.target.x = player.current.position.x;
        controls.current.target.y = player.current.position.y;
        controls.current.target.z = player.current.position.z;
        camera.position.set(player.current.position.x - 2, player.current.position.y + 5, player.current.position.z - 5);
        if (keys.up) {
            player.current.position.z += basePlayerSpeed;
        }
        if (keys.down) {
            player.current.position.z -= basePlayerSpeed;
        }
        if (keys.left) {
            player.current.position.x += basePlayerSpeed;
        }
        if (keys.right) {
            player.current.position.x -= basePlayerSpeed;
        }
        if (keys.sprint) {
            player.current.position.z += basePlayerSpeed * sprintMultiplier;
        }
    });

    return (
        <group>
            <CameraComponent/>
            <mesh
                name="playerMesh"
                ref={player}
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
            >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial
                    attach="material"
                />
            </mesh>
        </group>
    );
}

export default Player;
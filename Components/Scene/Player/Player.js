import {useRef} from 'react';
import {extend, useFrame, useThree} from '@react-three/fiber';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const Player = () => {
    let camera, gl;
    const controls = useRef();
    const player = useRef();
    const CameraController = () => {
        extend({OrbitControls});
        return () => {
            ({camera, gl} = useThree());
            camera.position.set([-2, 5, -5]);
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
    const CameraComponent = CameraController();

    /* Keyboard events handler */
    const basePlayerSpeed = 0.04;
    const sprintMultiplier = 1.5;
    let keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        sprint: false,
    };

    const updateKeyStates = (key, value) => {
        switch (key) {
            case 'z' :
            case 'w' :
            case 'ArrowUp' :
                keys.up = value;
                break;
            case 's':
            case 'ArrowDown':
                keys.down = value;
                break;
            case 'q':
            case 'a':
            case 'ArrowLeft':
                keys.left = value;
                break;
            case 'd':
            case 'ArrowRight':
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
        // Make the camera follow the player on each frame
        controls.current.target.x = player.current.position.x;
        controls.current.target.y = player.current.position.y;
        controls.current.target.z = player.current.position.z;
        camera.position.set(player.current.position.x - 2, player.current.position.y + 5, player.current.position.z - 5);

        // Make the player move according to the keyboard input
        if (keys.up) {
            player.current.position.z += keys.sprint ? basePlayerSpeed * sprintMultiplier : basePlayerSpeed;
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
                castShadow
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
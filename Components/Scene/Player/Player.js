import {useEffect, useRef} from 'react';
import {useBox} from "@react-three/cannon";
import {extend, useFrame, useThree} from '@react-three/fiber';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

const Player = () => {
    //////////////////////////////////////
    //     Keyboard and camera logic    //
    //////////////////////////////////////

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
    let keys = {
        up: false,
        down: false,
        left: false,
        right: false,
        shift: false,
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

    /////////////////////////
    //     Player logic    //
    /////////////////////////

    // Player physical reference and properties (speed, jump height, ...)
    const [playerBoxRef, playerBoxApi] = useBox(() => ({ mass: 2, position: [0, 0, 0] }));
    const basePlayerSpeed = 3;
    const sprintMultiplier = 1.5;

    // Used to register the calculated player position after the player has moved with a certain velocity
    const playerPosition = useRef([0, 0, 0]);
    useEffect(() => {
        playerBoxApi.position.subscribe(value => playerPosition.current = value);
    }, []);

    // Handle events on each frames
    useFrame(() => {
        // Make the camera always point to the player
        controls.current.target.x = playerPosition.current[0];
        controls.current.target.y = playerPosition.current[1];
        controls.current.target.z = playerPosition.current[2];

        // Make the camera follow the player
        camera.position.set(playerPosition.current[0] - 2, playerPosition.current[1] + 5, playerPosition.current[2] - 5);

        // Make the player move according to the keyboard input
        if (keys.up) {
            playerBoxApi.velocity.set(0, 0, basePlayerSpeed * (keys.sprint ? sprintMultiplier : 1));
        }
        if (keys.down) {
            playerBoxApi.velocity.set(0, 0, -basePlayerSpeed);
        }
        if (keys.left) {
            playerBoxApi.velocity.set(basePlayerSpeed, 0, 0);
        }
        if (keys.right) {
            playerBoxApi.velocity.set(-basePlayerSpeed, 0, 0);
        }
    });

    return (
        <group>
            <CameraComponent/>
            <mesh
                name="playerMesh"
                ref={playerBoxRef}
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
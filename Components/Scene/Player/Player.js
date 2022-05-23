import {useEffect, useRef} from 'react';
import {useSphere, useBox} from "@react-three/cannon";
import {extend, useFrame, useThree} from '@react-three/fiber';
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import {useFBX} from "@react-three/drei";
import {handleKeyboard, addEventListeners} from "../../Utils/handleKeyboard";

const Player = () => {
    /////////////////////////
    //     Camera logic    //
    /////////////////////////
    let camera, gl;
    const controls = useRef();
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

    /////////////////////////
    //   Keyboard logic    //
    /////////////////////////
    let {keys, updateKeyStates} = handleKeyboard();
    addEventListeners(updateKeyStates);

    /////////////////////////
    //     Player logic    //
    /////////////////////////
    // Variables and references
    const basePlayerSpeed = 3;
    const sprintMultiplier = 1.5;
    const player = useRef();
    const [playerRef, playerControls] = useBox(() => ({mass: 100, position: [0, 0, 0], scale: [0.5, 0.5, 0.5]}));
    const bike = useFBX('/Bike.fbx');
    const bikeRef = useRef();

    // Used to register the calculated player position after the player has moved with a certain velocity
    const playerPosition = useRef([0, 0, 0]);
    const playerVelocity = useRef([0, 0, 0]);
    useEffect(() => {
        playerControls.position.subscribe(value => playerPosition.current = value);
        playerControls.velocity.subscribe((v) => (playerVelocity.current = v));
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
            // Move Forward
            if (keys.up) {
                playerControls.velocity.set(0, -1, basePlayerSpeed * (keys.sprint ? sprintMultiplier : 1));
            }

            // Move Backward
            if (keys.down) {
                playerControls.velocity.set(0, 0, -basePlayerSpeed);
            }

            // Strafe Left
            if (keys.left) {
                playerControls.velocity.set(basePlayerSpeed, 0, 0);
                // Strafe Left and go Backward
                if (keys.down && keys.left) {
                    playerControls.velocity.set(basePlayerSpeed, 0, -basePlayerSpeed / 1.5);
                }
                // Strafe Left and go Forward
                if (keys.up && keys.left) {
                    playerControls.velocity.set(basePlayerSpeed, 0, (basePlayerSpeed * (keys.sprint ? sprintMultiplier : 1)) / 1.5);
                }
            }

            // Strafe Right
            if (keys.right) {
                playerControls.velocity.set(-basePlayerSpeed, 0, 0);
                // Strafe Right and go Backward
                if (keys.down && keys.right) {
                    playerControls.velocity.set(-basePlayerSpeed, 0, -basePlayerSpeed / 1.5);
                }
                // Strafe Right and go Forward
                if (keys.up && keys.right) {
                    playerControls.velocity.set(-basePlayerSpeed, 0, (basePlayerSpeed * (keys.sprint ? sprintMultiplier : 1)) / 1.5);
                }
            }
        }
    );

    return (
        <>
            <group>
                <CameraComponent/>
                <mesh
                    name="playerMesh"
                    ref={playerRef}
                    castShadow
                    scale={[0.01, 0.01, 0.01]}
                >
                    <primitive object={bike}/>
                </mesh>
            </group>
        </>
    );
}

export default Player;
import {Canvas} from '@react-three/fiber';
import {useEffect, useState} from 'react';
import {CameraController} from '../Camera/Camera';
import {MovementsHandler} from "../Functions/MovementsHandler/MovementsHandler";

const Scene = () => {
    const [meshPosition, setMeshPosition] = useState([0, 0, 0]);
    const basicCameraPos = [meshPosition[0]-2, meshPosition[1]+5, meshPosition[2]-5]; // used to set the camera's position in the world

    const CameraObject = CameraController(basicCameraPos, meshPosition);
    const changePosition = MovementsHandler(setMeshPosition, meshPosition);

    useEffect(() => {
        document.addEventListener('keydown', changePosition);
        return () => {
            document.removeEventListener('keydown', changePosition);
        }
    }, [changePosition]);

    return (
        <Canvas>
            <CameraObject/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[0, 4, 0]}/>
            <mesh
                name="cube"
                position={meshPosition}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
            >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial
                    attach="material"
                    color={0xff55ff}
                    roughness={0.5}
                    metalness={0.5}
                />
            </mesh>
            <mesh
                name="floor"
                position={[0, -1, 0]}
                rotation={[0, 0, 0]}
                scale={[100000, 0.01, 100000]}
            >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial
                    attach="material"
                    color={0x55ffff}
                    roughness={0.5}
                    metalness={0.5}
                />
            </mesh>
        </Canvas>
    );
}

export default Scene
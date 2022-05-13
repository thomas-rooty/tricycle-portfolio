import {Canvas} from '@react-three/fiber';
import {useEffect, useState} from 'react';
import {CameraController} from '../Camera/Camera';
import {MovementsHandler} from "../Functions/MovementsHandler/MovementsHandler";
import {Floor} from "./Floor/Floor";
import {PlayerObject} from "./PlayerObject/PlayerObject";

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
            {PlayerObject(meshPosition)}
            <Floor/>
        </Canvas>
    );
}

export default Scene
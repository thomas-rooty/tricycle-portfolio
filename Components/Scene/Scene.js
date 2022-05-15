import {Canvas} from '@react-three/fiber';
import {useEffect, useState} from 'react';
import {CameraController} from '../Camera/Camera';
import {Floor} from "./Floor/Floor";
import {PlayerObject} from "./PlayerObject/PlayerObject";
import {Tree} from "./Tree/Tree";
import Effects from "../Effects/Effects";

const Scene = () => {
    const [meshPosition, setMeshPosition] = useState([0, 0, 0]);
    const basicCameraPos = [meshPosition[0] - 2, meshPosition[1] + 5, meshPosition[2] - 5]; // used to set the camera's position in the world
    const CameraObject = CameraController(basicCameraPos, meshPosition);

    useEffect(() => {
        document.onkeydown = (e) => {
            if (e.key === 'z') {
                console.log('z pressed');
            }
        }
        document.onkeyup = (e) => {
            if (e.key === 'z') {
                console.log('z released');
            }
        }
    }, []);

    return (
        <Canvas>
            <Effects/>
            <CameraObject/>
            <ambientLight intensity={0.10}/>
            <pointLight
                position={[-5, 5, -10]}
                intensity={0.5}
            />
            <directionalLight position={[0, 1, 0]}/>
            {PlayerObject(meshPosition)}
            <Floor/>
            <Tree/>
        </Canvas>
    );
}

export default Scene
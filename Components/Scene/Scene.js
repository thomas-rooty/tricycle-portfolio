import {Canvas} from '@react-three/fiber';
import {useState} from 'react';
import {CameraController} from '../Camera/Camera';
import {Floor} from "./Floor/Floor";
import PlayerObject from "./PlayerObject/PlayerObject";
import {Tree} from "./Tree/Tree";
import Effects from "../Effects/Effects";

const Scene = () => {
    let playerPosition = [0, 0, 0];
    const [meshPosition, setMeshPosition] = useState(playerPosition);
    const [direction, setDirection] = useState("stop");
    const basicCameraPos = [playerPosition[0] - 2, playerPosition[1] + 5, playerPosition[2] - 5]; // used to set the camera's position in the world
    const CameraObject = CameraController(basicCameraPos, playerPosition);

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
            <PlayerObject
                playerPosition={playerPosition}
                realPosition={meshPosition}
                setRealPosition={setMeshPosition}
                direction={direction}
                setDirection={setDirection}
            />
            <Floor/>
            <Tree/>
        </Canvas>
    );
}

export default Scene
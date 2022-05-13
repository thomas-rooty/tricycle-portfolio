import {Canvas} from '@react-three/fiber';
import {useEffect, useState} from 'react';
import {CameraController} from '../Camera/Camera';
import {MovementsHandler} from "../Functions/MovementsHandler/MovementsHandler";
import {Floor} from "./Floor/Floor";
import {PlayerObject} from "./PlayerObject/PlayerObject";
import {Tree} from "./Tree/Tree";
import {EffectComposer, Vignette} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";


const Scene = () => {
    const [meshPosition, setMeshPosition] = useState([0, 0, 0]);
    const basicCameraPos = [meshPosition[0] - 2, meshPosition[1] + 5, meshPosition[2] - 5]; // used to set the camera's position in the world

    const CameraObject = CameraController(basicCameraPos, meshPosition);
    const changePosition = MovementsHandler(setMeshPosition, meshPosition);

    useEffect(() => {
        document.addEventListener('keypress', changePosition);
        return () => {
            document.removeEventListener('keypress', changePosition);
        }
    }, [changePosition]);

    return (
        <Canvas>
            <EffectComposer>
                <Vignette
                    darkness={-0.75}
                    offset={1}
                    offsetDarkness={1}
                    blendFunction={BlendFunction.NORMAL}
                />
            </EffectComposer>
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
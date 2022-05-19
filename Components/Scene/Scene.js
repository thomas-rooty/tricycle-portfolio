import {Canvas} from '@react-three/fiber';
import {useState} from 'react';
import {Floor} from "./Floor/Floor";
import Player from "./Player/Player";
import {Tree} from "./Tree/Tree";
import Effects from "../Effects/Effects";

const Scene = () => {
    let playerPosition = [0, 0, 0];

    return (
        <Canvas>
            <Effects/>
            <ambientLight intensity={0.10}/>
            <pointLight
                position={[-5, 5, -10]}
                intensity={0.5}
            />
            <directionalLight position={[0, 1, 0]}/>
            <Player />
            <Floor/>
            <Tree/>
        </Canvas>
    );
}

export default Scene
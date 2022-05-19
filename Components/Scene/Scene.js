import {useRef} from "react";
import {Canvas} from '@react-three/fiber';
import {Floor} from "./Floor/Floor";
import Player from "./Player/Player";
import Trees from "./Assets/Tree/Trees";
import Effects from "../Effects/Effects";

const Scene = () => {
    const sun = useRef();
    return (
        <Canvas
            shadows
        >
            <Effects/>
            <ambientLight intensity={0.10}/>
            <pointLight
                ref={sun}
                position={[5, 8, -10]}
                intensity={0.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />
            <directionalLight position={[0, 1, 0]}/>
            <Player/>
            <Floor/>
            <Trees/>
        </Canvas>
    );
}

export default Scene
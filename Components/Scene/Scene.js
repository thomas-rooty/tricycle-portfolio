import {Canvas} from '@react-three/fiber';
import {Floor} from "./Floor/Floor";
import Player from "./Player/Player";
import Trees from "./Assets/Tree/Trees";
import Effects from "../Effects/Effects";

const Scene = () => {
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
            <Trees/>
        </Canvas>
    );
}

export default Scene
import {Canvas} from '@react-three/fiber';

const Scene = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <pointLight position={[2, 2, 2]}/>
            <mesh
                position={[0, 0, 0]}
                rotation={[2, 0, 2]}
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
        </Canvas>
    );
}

export default Scene
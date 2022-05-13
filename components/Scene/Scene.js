import {Canvas, extend, useFrame, useThree} from '@react-three/fiber';
import {useEffect, useRef, useState} from 'react';
import {degrees} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'
import {degToRad} from "three/src/math/MathUtils";

const Scene = () => {
    const [meshPosition, setMeshPosition] = useState([0, 0, 0]);

    extend({OrbitControls});
    const Controls = () => {
        const {camera, gl} = useThree();
        const controls = useRef();
        camera.position.set(meshPosition[0], meshPosition[1], meshPosition[2]-5);
        useFrame(() => controls.current.update());
        return <orbitControls
            ref={controls}
            args={[camera, gl.domElement]}
            enableZoom={false}
            enableDamping={true}
            enablePan={false}
            enableRotate={false}
            target={meshPosition}
            enabled={true}
        />;
    }

    const changePosition = (event) => {
        // Handle cases where keys Z, Q, S, D are pressed individually
        switch (event.key) {
            case 'z':
                setMeshPosition([meshPosition[0], meshPosition[1], meshPosition[2] + 0.1]);
                break;
            case 'q':
                setMeshPosition([meshPosition[0] + 0.1, meshPosition[1], meshPosition[2]]);
                break;
            case 's':
                setMeshPosition([meshPosition[0], meshPosition[1], meshPosition[2] - 0.1]);
                break;
            case 'd':
                setMeshPosition([meshPosition[0] - 0.1, meshPosition[1], meshPosition[2]]);
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        document.addEventListener('keydown', changePosition);
        return () => {
            document.removeEventListener('keydown', changePosition);
        }
    }, [changePosition]);

    return (
        <Canvas>
            <Controls/>
            <ambientLight intensity={0.5}/>
            <pointLight position={[2, 2, 2]}/>
            <mesh
                position={meshPosition}
                rotation={[-35, -20, 0]}
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
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[1, 1, 1]}
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
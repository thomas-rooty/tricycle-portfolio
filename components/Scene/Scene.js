import {Canvas} from '@react-three/fiber';
import {useEffect, useState} from 'react';

const Scene = () => {
    const changePosition = (event) => {
        // Handle cases where keys Z, Q, S, D are pressed individually
        switch (event.key) {
            case 'z':
                setMeshPosition([meshPosition[0], meshPosition[1], meshPosition[2] - 0.1]);
                break;
            case 'q':
                setMeshPosition([meshPosition[0] - 0.1, meshPosition[1], meshPosition[2]]);
                break;
            case 's':
                setMeshPosition([meshPosition[0], meshPosition[1], meshPosition[2] + 0.1]);
                break;
            case 'd':
                setMeshPosition([meshPosition[0] + 0.1, meshPosition[1], meshPosition[2]]);
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

    const [meshPosition, setMeshPosition] = useState([0, 0, 0]);


    return (
        <Canvas>
            <ambientLight intensity={0.5}/>
            <pointLight position={[2, 2, 2]}/>
            <mesh
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
        </Canvas>
    );
}

export default Scene
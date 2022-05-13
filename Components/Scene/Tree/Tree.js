import {useRef} from "react";

export const Tree = () => {
    const tree = useRef();
    return (
        <group ref={tree}>
            <mesh
                name="leaves"
                position={[0, 1, 0]}
                rotation={[0, 0, 0]}
                scale={[1, 1.7, 1]}
            >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial
                    attach="material"
                    color={0x32CD32}
                />
            </mesh>
            <mesh
                name="trunk"
                position={[0, 0, 0]}
                rotation={[0, 0, 0]}
                scale={[0.3, 1, 0.3]}
            >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial
                    attach="material"
                    color={0x964B00}
                />
            </mesh>
        </group>
    );
}
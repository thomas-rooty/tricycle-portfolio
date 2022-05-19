import {useRef} from "react";

export const Tree = (props) => {
    const tree = useRef();
    const trunkPos = props.position;
    const leavesPos = [props.position[0], props.position[1] + 1, props.position[2]];
    return (
        <group ref={tree}>
            <mesh
                name="leaves"
                position={leavesPos}
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
                position={trunkPos}
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
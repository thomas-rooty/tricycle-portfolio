import {useBox} from "@react-three/cannon";

export const Tree = (props) => {
    const [treeRef, treeApi] = useBox(() => ({ mass: 6, position: props.position, ...props }));
    return (
        <group>
            <mesh
                name="leaves"
                ref={treeRef}
                castShadow
            >
                <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
                <meshStandardMaterial
                    attach="material"
                    color={0x32CD32}
                />
            </mesh>
        </group>
    );
}
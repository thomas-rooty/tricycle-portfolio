import {usePlane} from "@react-three/cannon";

export const Floor = (props) => {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props }))
    return (
        <mesh ref={ref} receiveShadow>
            <planeGeometry attach="geometry" args={[10000, 10000]} />
            <meshStandardMaterial color={"#2596be"} />
        </mesh>
    )
}
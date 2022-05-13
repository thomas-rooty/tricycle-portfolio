export const PlayerObject = (meshPosition) => {
    return (
        <mesh
            name="cube"
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
    );
}
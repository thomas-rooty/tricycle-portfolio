export const PlayerObject = (meshPosition) => {
    return (
        <mesh
            name="playerMesh"
            position={meshPosition}
            rotation={[0, 0, 0]}
            scale={[1, 1, 1]}
        >
            <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
            <meshStandardMaterial
                attach="material"
            />
        </mesh>
    );
}
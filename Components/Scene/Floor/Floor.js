export const Floor = () => {
    return <mesh
        name="floor"
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
        scale={[100000, 0.01, 100000]}
    >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
        <meshStandardMaterial
            attach="material"
            color={0x55ffff}
            roughness={0.5}
            metalness={0.5}
        />
    </mesh>;
}
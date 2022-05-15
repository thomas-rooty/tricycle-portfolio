export const Floor = () => {

    return <mesh
        name="floor"
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
        scale={[10000, 1, 10000]}
        receiveShadow={true}
        castShadow={false}
    >
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]}/>
        <meshStandardMaterial
            color={0xbf8d4e}
            attach="material"
        />
    </mesh>;
}
/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'

const Barrier = ({ ...props }) => {
  const { nodes, materials } = useSpline('https://prod.spline.design/jO7ZncTsXgBIQVfK/scene.splinecode')
  return (
    <>
      <group {...props} scale={0.01} dispose={null}>
        <group name="Pieds" position={[0.64, 68.99, -14.92]}>
          <mesh
            name="Cylinder 3"
            geometry={nodes['Cylinder 3'].geometry}
            material={materials['Cylinder 3 Material']}
            castShadow
            receiveShadow
            position={[-0.64, 0, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={[0.16, 1, 0.16]}
          />
          <mesh
            name="Cylinder 2"
            geometry={nodes['Cylinder 2'].geometry}
            material={materials['Cylinder 2 Material']}
            castShadow
            receiveShadow
            position={[371.64, 0, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={[0.16, 1, 0.16]}
          />
          <mesh
            name="Cylinder"
            geometry={nodes.Cylinder.geometry}
            material={materials['Cylinder Material']}
            castShadow
            receiveShadow
            position={[-371.64, 0, 0]}
            rotation={[Math.PI, 0, 0]}
            scale={[0.16, 1, 0.16]}
          />
        </group>
        <group name="Barrieres" position={[0, 126.43, 0]}>
          <mesh
            name="Main_Barrier 2"
            geometry={nodes['Main_Barrier 2'].geometry}
            material={materials['Main_Barrier 2 Material']}
            castShadow
            receiveShadow
            position={[0, -41.58, 0]}
            scale={[8, 1, 0.3]}
          />
          <mesh
            name="Main_Barrier"
            geometry={nodes.Main_Barrier.geometry}
            material={materials['Main_Barrier Material']}
            castShadow
            receiveShadow
            position={[0, 41.58, 0]}
            scale={[8, 1, 0.3]}
          />
        </group>
      </group>
    </>
  )
}

export default Barrier
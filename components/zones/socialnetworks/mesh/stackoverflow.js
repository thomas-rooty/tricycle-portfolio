/*
  Auto-generated by Spline
*/

import useSpline from '@splinetool/r3f-spline'

const Stackoverflow = ({...props}) => {
  const {nodes, materials} = useSpline('https://prod.spline.design/Iyeajy6gqDiubwQb/scene.splinecode')
  return (
    <>
      <group {...props} dispose={null} position={[0.15, 0, 0]} scale={0.012}>
        <mesh
          name="Orange_bar_3 2"
          geometry={nodes['Orange_bar_3 2'].geometry}
          castShadow
          receiveShadow
          position={[27.43, 175.43, -6.39]}
          rotation={[0, 0, -0.61]}
          scale={[0.59, 0.44, 1]}
        >
          <meshStandardMaterial
            attach="material"
            color="#f79b52"
          />
        </mesh>
        <mesh
          name="Orange_bar_3"
          geometry={nodes.Orange_bar_3.geometry}
          castShadow
          receiveShadow
          position={[8.11, 141.57, -6.39]}
          rotation={[0, 0, -0.43]}
          scale={[0.59, 0.44, 1]}
        >
          <meshStandardMaterial
            attach="material"
            color="#f79b52"
          />
        </mesh>
        <mesh
          name="Orange_bar_2"
          geometry={nodes.Orange_bar_2.geometry}
          castShadow
          receiveShadow
          position={[-4.66, 101.47, -6.39]}
          rotation={[0, 0, -0.19]}
          scale={[0.59, 0.44, 1]}
        >
          <meshStandardMaterial
            attach="material"
            color="#f79b52"
          />
        </mesh>
        <mesh
          name="Orange_bar_1 2"
          geometry={nodes['Orange_bar_1 2'].geometry}
          castShadow
          receiveShadow
          position={[-8.5, 61.85, -6.39]}
          scale={[0.59, 0.44, 1]}
        >
          <meshStandardMaterial
            attach="material"
            color="#f79b52"
          />
        </mesh>
        <mesh
          name="Orange_bar_1"
          geometry={nodes.Orange_bar_1.geometry}
          castShadow
          receiveShadow
          position={[-8.5, 61.85, -6.39]}
          scale={[0.59, 0.44, 1]}
        >
          <meshStandardMaterial
            attach="material"
            color="#f79b52"
          />
        </mesh>
        <group name="Bottom_container" position={[-8.5, 49.9, 2.61]}>
          <mesh
            name="Rectangle 2"
            geometry={nodes['Rectangle 2'].geometry}
            castShadow
            receiveShadow
            position={[75.14, 0, -9]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[0.42, 0.44, 1]}
          >
            <meshStandardMaterial
              attach="material"
              color="#dbd9db"
            />
          </mesh>
          <mesh
            name="Rectangle"
            geometry={nodes.Rectangle.geometry}
            castShadow
            receiveShadow
            position={[0, -23.02, -9]}
            scale={[1, 0.44, 1]}
          >
            <meshStandardMaterial
              attach="material"
              color="#dbd9db"
            />
          </mesh>
        </group>
      </group>
    </>
  )
}

export default Stackoverflow;
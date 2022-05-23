import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Physics, useCylinder, usePlane} from '@react-three/cannon'
import {OrbitControls, Environment} from '@react-three/drei'
import Vehicle from './Tricycle/Vehicle'

const App = () => {
    return (
        <>
            <Canvas dpr={[1, 1.5]} shadows >
                <fog attach="fog" args={['#171720', 10, 50]}/>
                <color attach="background" args={['#171720']}/>
                <ambientLight intensity={0.1}/>
                <spotLight position={[10, 10, 10]} angle={4} intensity={1} castShadow penumbra={1}/>
                <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
                    <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{id: 'floor'}}/>
                    <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 0.5, 0]}
                             wheelRadius={0.3}/>
                    <Pillar position={[-5, 2.5, -5]} userData={{ id: 'pillar-1' }} />
                </Physics>
                <Suspense fallback={null}>
                    <Environment preset="night"/>
                </Suspense>
            </Canvas>
            <div style={{position: 'absolute', top: 30, left: 40}}>
        <pre>
          ZQSD to drive, space to brake
          <br/>R to reset
        </pre>
            </div>
        </>
    )
}

const Pillar = ({ args = [0.7, 0.7, 5, 16], ...props }) => {
    const [ref] = useCylinder(() => ({ mass: 1, args, ...props }))
    return (
        <mesh ref={ref} castShadow>
            <cylinderGeometry args={args} />
            <meshNormalMaterial />
        </mesh>
    )
}

const Plane = (props) => {
    const [ref] = usePlane(() => ({type: 'Static', material: 'ground', ...props}))
    return (
        <group ref={ref}>
            <mesh receiveShadow>
                <planeGeometry args={[100, 100]}/>
                <meshStandardMaterial color="#303030"/>
            </mesh>
        </group>
    )
}

export default App;
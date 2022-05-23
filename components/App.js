import React, {Suspense} from 'react'
import {Canvas} from '@react-three/fiber'
import {Physics, usePlane} from '@react-three/cannon'
import {OrbitControls, Environment} from '@react-three/drei'
import Vehicle from './Vehicle/Vehicle'

const App = () => {
    return (
        <>
            <Canvas dpr={[1, 1.5]} shadows camera={{position: [0, 5, 15], fov: 50}}>
                <fog attach="fog" args={['#171720', 10, 50]}/>
                <color attach="background" args={['#171720']}/>
                <ambientLight intensity={0.1}/>
                <spotLight position={[10, 10, 10]} angle={0.5} intensity={1} castShadow penumbra={1}/>
                <Physics broadphase="SAP" contactEquationRelaxation={4} friction={1e-3} allowSleep>
                    <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{id: 'floor'}}/>
                    <Vehicle position={[0, 2, 0]} rotation={[0, -Math.PI / 4, 0]} angularVelocity={[0, 0.5, 0]}
                             wheelRadius={0.3}/>
                </Physics>
                <Suspense fallback={null}>
                    <Environment preset="night"/>
                </Suspense>
                <OrbitControls/>
            </Canvas>
            <div style={{position: 'absolute', top: 30, left: 40}}>
        <pre>
          Must run fullscreen!
          <br/>
          ZQSD to drive, space to brake
          <br/>R to reset
        </pre>
            </div>
        </>
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
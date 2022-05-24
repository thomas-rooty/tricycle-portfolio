import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Effects } from "./Effects/Effects";
import { Physics, useBox, useCylinder, usePlane } from "@react-three/cannon";
import { OrbitControls, Environment } from "@react-three/drei";
import Vehicle from "./Tricycle/Vehicle";
import Skatepark from "./Zones/Skatepark/Skatepark";

const App = () => {
  return (
    <>
      <Canvas dpr={[1, 1.5]} shadows>
        <Effects />
        <fog attach="fog" args={["#325a80", 10, 50]} />
        <color attach="background" args={["#325a80"]} />
        <ambientLight intensity={0.4} />
        <spotLight
          position={[10, 10, 10]}
          angle={0.4}
          intensity={1}
          castShadow
          penumbra={1}
        />
        <spotLight
          position={[50, 50, 50]}
          angle={0.4}
          intensity={0.5}
          castShadow
          penumbra={1}
        />
        <Physics
          broadphase="SAP"
          contactEquationRelaxation={4}
          friction={1e-3}
          allowSleep
        >
          <Plane rotation={[-Math.PI / 2, 0, 0]} userData={{ id: "floor" }} />
          <Vehicle
            position={[0, 2, 0]}
            rotation={[0, -Math.PI / 4, 0]}
            angularVelocity={[0, 0.5, 0]}
            wheelRadius={0.3}
          />
          <Skatepark />
        </Physics>
        <Suspense fallback={null}>
          <Environment preset="night" />
        </Suspense>
      </Canvas>
      <div style={{ position: "absolute", top: 30, left: 40 }}>
        <pre>
          ZQSD to drive, space to brake
          <br />R to reset
        </pre>
      </div>
    </>
  );
};

const Plane = (props) => {
  const [ref] = usePlane(() => ({
    type: "Static",
    material: "ground",
    ...props,
  }));
  return (
    <group ref={ref}>
      <mesh receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#5eb0ff" />
      </mesh>
    </group>
  );
};

export default App;

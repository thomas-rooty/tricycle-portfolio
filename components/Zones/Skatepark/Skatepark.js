import { useBox } from "@react-three/cannon";
import React from "react";
import JumpGrid from "./JumpGrid";

const Ramp = ({ args = [5, 7, 4.5], ...props }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    args,
    ...props,
  }));
  return (
    <mesh ref={ref} castShadow>
      <boxGeometry args={args} />
      <meshStandardMaterial color="#96cbff" />
    </mesh>
  );
};

const JumpGridInstance = ({ args = [6, 2, 1], ...props }) => {
  const [gridRef] = useBox(() => ({
    type: "Static",
    args,
    ...props,
  }));
  return (
    <group ref={gridRef}>
      <JumpGrid
        args={args}
        color="#d1e8ff"
        userData={{ id: "jumpgrid-1" }}
      />
    </group>
  );
}

const Skatepark = () => {
  return (
    <group>
      <Ramp
        position={[-5, -1.5, -10]}
        rotation={[0, 0, (75 * Math.PI) / 180]}
        userData={{ id: "ramp-1" }}
      />
      <JumpGridInstance
        position={[-10, 1, -10]}
        rotation={[0, (90 * Math.PI) / 180, 0]}
      />
      <Ramp
        position={[-15, -1.5, -10]}
        rotation={[0, 0, (-75 * Math.PI) / 180]}
        userData={{ id: "ramp-2" }}
      />
    </group>
  );
};

export default Skatepark;

import { useBox } from "@react-three/cannon";
import React from "react";

export const Ramp = ({ args = [5, 7, 4.5], ...props }) => {
  const [ref] = useBox(() => ({
    type: "Static",
    mass: 10,
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

const Skatepark = () => {
  return (
    <group>
      <Ramp
        position={[-5, -1.5, -10]}
        rotation={[0, 0, (75 * Math.PI) / 180]}
        userData={{ id: "ramp-1" }}
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

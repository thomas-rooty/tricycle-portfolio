import { forwardRef } from "react";
import { useBox } from "@react-three/cannon";
import Tricycle from "./mesh/tricycle";
const uncollidableShapes = ["floor"];
const TricyclePhysics = forwardRef(
  ({ args = [1.7, 1, 2.2], mass = 500, ...props }, ref) => {
    // tricycle
    const [, api] = useBox(
      () => ({
        mass,
        args,
        allowSleep: false,
        onCollide: (e) => {
          if (
            e.body.userData.id &&
            !uncollidableShapes.includes(e.body.userData.id)
          ) {
            console.log("bonk", e.body.userData);
            console.log(e);
          }
        },
        ...props,
      }),
      ref
    );
    return (
      <mesh ref={ref} api={api}>
        <Tricycle />
      </mesh>
    );
  }
);

export default TricyclePhysics;

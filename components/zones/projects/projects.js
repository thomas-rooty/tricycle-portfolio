import {useBox} from "@react-three/cannon";
import React, {useRef} from "react";
import McLever from "./assets/mcLever";
import RedstoneOff from "./assets/redstoneOff";
import {useControls} from "../../../utils/useControls";
import {useStore} from "../../zustore";
import {useFrame} from "@react-three/fiber";

const ActivationZone = ({args, position}) => {
  const controls = useControls();

  // Use store
  const addObjectAsHoverable = useStore((state) => state.addObjectAsHoverable);
  const hoveredObject = useStore((state) => state.hoveredObject);

  // Physics ref
  const zone = useRef();

  // Pass the hoverable object to the store
  useFrame(() => {
    // Register interact with enter key
    const {interact} = controls.current;

    // Add the object to the hoverable objects if it's not already there
    if (zone.current && zone.current.uuid) {
      addObjectAsHoverable(zone.current);
    }

    // Handle the actions when hovered
    if (hoveredObject === zone.current.userData.id) {
      // Handle the actions when interacted
      if (interact) {
        setTimeout(() => {
          console.log("Pulled lever");
        }, 500);
      }
    }
  });

  return (
    <>
      <mesh
        ref={zone}
        position={position}
        rotation={[0, 0, 0]}
        userData={{
          id: "leverActivationZone",
        }}
      >
        <boxGeometry args={args}/>
        <meshBasicMaterial color={"#000000"} transparent opacity={0} depthWrite={false}/>
      </mesh>
    </>
  );
};

const RedstoneWire = ({position, rotation}) => {
  return (
    <>
      <RedstoneOff position={position} rotation={rotation}/>
    </>
  );
}

const Projects = () => {
  const [leverRef] = useBox(() => ({
    type: "Static",
    args: [1.5, 2, 2],
    position: [5, 0, 8],
    rotation: [0, Math.PI / -1.5, 0],
    userData: {
      id: "mcLever",
    },
  }));

  return (
    <>
      <group ref={leverRef}>
        <ActivationZone args={[5, 2, 5]} position={[0, 0, 1.5]}/>
        <McLever/>
      </group>
      <RedstoneWire position={[6.1, 0, 7.5]} rotation={[0, Math.PI / -7, 0]}/>
    </>
  );
};

export default Projects;

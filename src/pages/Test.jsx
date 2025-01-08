import React from "react";
import Squares from "../components/Squares";
import "../style/test.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

const Model = () => {
  const gltf = useGLTF("/model.glb"); // Path to your .glb file in the public folder
  return (<primitive object={gltf.scene}
     scale={[2, 2, 2]} 
     position={[0, -1, 0]} // Adjust position: x=0, y=-1, z=0
      />);
};

const Test = () => {
  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Squares Component */}
      <Squares
        speed={0.1}
        squareSize={40}
        borderColor="#fff"
        hoverFillColor="#222"
      />

      {/* Canvas for 3D Model */}
      <Canvas
        style={{
          position: "absolute", // Overlay the Canvas
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none", // Make Canvas non-interactive
        }}
        camera={{ position: [0, 1, 5] }}
      >
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <Model />
        <OrbitControls enableZoom={false} /> {/* Disable Zoom */}
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Test;
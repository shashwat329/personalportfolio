// // import React from "react";
// import React, { useState, useEffect } from 'react';
// import Squares from "../components/Squares";
// import "../style/Test.css";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

// const WelcomeMsg = () => {
//   const [sentence, setSentence] = useState("");
//   const letters = ["H"," ", "i", " ", "w", "e", "l", "c", "o", "m", "e", " ", "t", "o", " ", "m", "y", " ", "w", "e", "b", "s", "i", "t", "e", "!"];

//   useEffect(() => {
//     setSentence("");
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < letters.length) {
//         setSentence(prev => prev + (letters[index] || ""));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 300);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <p
//       style={{
//         position: "absolute",
//         top: "20%",
//         left: "2rem",
//         transform: "translateY(-50%)",
//         color: "#fff",
//         zIndex: 10,
//         fontSize: "2rem",
//       }}
//     >
//       {sentence}
//     </p>
//   );
// };
// const Model = () => {
//   const gltf = useGLTF("/model.glb"); 
  
//   return (<primitive object={gltf.scene}
//      scale={[2, 2, 2]} 
//      position={[0, -1, 0]} 
//       />);
// };

// const Test = () => {
//   return (
//     <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
//       {/* Squares Component */}
//       <Squares
//         speed={0.1}
//         squareSize={40}
//         borderColor="#fff"
//         hoverFillColor="#222"
//       />

//       {/* Canvas for 3D Model */}
//      <WelcomeMsg classname = "welcomemsg"/>
//       <Canvas
//         style={{
//           position: "absolute", // Overlay the Canvas
//           top: 0,
//           left: 450,
//           width: "63%",
//           height: "100%",
//           pointerEvents: "all", // Make Canvas non-interactive
//         }}
//         camera={{ position: [0, 1, 5] }}
//       >
//         <ambientLight intensity={0.3} />
//         <directionalLight position={[5, 5, 5]} intensity={1} />
//         <Model classname="model" />
//         <OrbitControls enableZoom={false} /> {/* Disable Zoom */}
//         <Environment preset="sunset" />
//       </Canvas>
//     </div>
//   );
// };

// export default Test;
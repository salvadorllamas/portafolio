import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = ({ imgUrl }) => {
  const [decal] = useTexture([imgUrl]);
  // Reducir la frecuencia de actualización a 32ms
  const [rotation, setRotation] = useState({
    x: Math.random() * Math.PI * 0.00008,
    y: Math.random() * Math.PI * 0.00008,
    speed: Math.random() * 0.0001,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation((prevRotation) => ({
        ...prevRotation,
        x: prevRotation.x + prevRotation.speed,
        y: prevRotation.y + prevRotation.speed,
      }));
    }, 32); // Actualiza la rotación cada 32ms

    return () => clearInterval(interval);
  }, []);

  return (
    <Float
      speed={1.75}
      rotation={[rotation.x, rotation.y, 0]}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color="#fff8eb"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          flatShading
          map={decal}
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  return (
    <Canvas frameloop="demand" gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;

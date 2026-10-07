import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { FirstPersonControls, OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";

const Computers = ({ isMobile }) => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
<hemisphereLight intensity={1.5} groundColor="black" />
<spotLight
  position={[-20, 50, 10]}
  angle={0.12}
  penumbra={1}
  intensity={3}
  decay={0}
  castShadow
  shadow-mapSize={1024}
/>
<pointLight intensity={3} decay={0} />
      <primitive
        object={computer.scene}
        scale={isMobile? 0.7: 0.75}
        position={isMobile?[0,-3,-2.2]:[0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
const mediaQuery = window.matchMedia("(max-width: 500px)");

      setIsMobile(mediaQuery.matches);
      const handleMediaQueryChange = (event) => {
        setIsMobile(event.matches);
      }
      mediaQuery.addEventListener('change',
      handleMediaQueryChange);
      return () => {
        mediaQuery.removeEventListener('change',
        handleMediaQueryChange
        );
      }
    },[]);
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [25, 3, 5], fov: 30 }}
      gl={{ preserveDrawingBuffer: false }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI - Math.PI / 2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
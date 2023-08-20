import { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, SpotLight, useGLTF } from "@react-three/drei";
import CanvasLoader from "../Loader";
const Computers = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  // Define scale values based on screen size
  const scale = window.innerWidth < 768 ? 0.5 : 0.7; // Adjust the breakpoint and scale values as needed
  return (
    <mesh>
      {/* mesh is a part of three js used for defining 3d object shap geometry etc */}
      <hemisphereLight intensity={6.5} groundColor="black" />
      <pointLight intensity={20} />
      <SpotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadowMapSize={1024}
      />
      {/* caontain actual 3d object */}

      <primitive
        object={computer.scene}
        scale={scale}
        position={[0, -3.7, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};
// contains
const ComputersCanvas = () => {
  return (
    // canvas renders a 3d componet
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};
export default ComputersCanvas;

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Environment, ContactShadows } from "@react-three/drei";

function Model() {
  const { scene } = useGLTF("/models/iphone17silver.glb");
  return <primitive object={scene} scale={25} position={[0, 0, 0]} />;
}

function IphoneModel() {
  return (
    <div style={{ width: "100%", height: "500px", cursor: "grab" }}>
      <Canvas camera={{ position: [0, 0, 12], fov: 35 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} />
          <directionalLight position={[-5, -5, -5]} intensity={0.3} />
          <Environment preset="city" />
          <Model />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={1.5}
          />
          <ContactShadows position={[0, -2, 0]} opacity={0.3} blur={2} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default IphoneModel;
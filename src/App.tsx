import { Canvas } from "@react-three/fiber";
import "./App.css";
import { CameraControls } from "@react-three/drei";
import { useRef } from "react";
import { Gltf } from "@react-three/drei";
import Questionmark from "./components/Questionmark";
import { Sky } from "@react-three/drei";
import { Stats } from "@react-three/drei";

function App() {
  const cameraControlRef = useRef<CameraControls | null>(null);

  return (
    <div id="canvas-container">
      <Canvas>
        <CameraControls ref={cameraControlRef} distance={20} />
        <Sky sunPosition={[50, 20, 100]} />
        <ambientLight intensity={1.0} />
        <directionalLight color="white" position={[5, 5, 5]} intensity={5.0} />
        <Stats />
        <Questionmark
          gltfObject={
            <Gltf
              src="https://grafproj.s3.eu-central-1.amazonaws.com/assets/questionmark.glb"
              position={[0, 0, 0]}
              receiveShadow
              castShadow
            />
          }
          moveValue={-1.4}
          delayValue={300}
        />

        <Questionmark
          gltfObject={
            <Gltf
              src=".https://grafproj.s3.eu-central-1.amazonaws.com/assets/dot.glb"
              position={[0, -2, 0]}
              receiveShadow
              castShadow
            />
          }
          moveValue={-0.5}
          delayValue={300}
        />
      </Canvas>
    </div>
  );
}

export default App;

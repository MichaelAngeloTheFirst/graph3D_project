import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easeCubicInOut } from "d3-ease";

import { useSpring, animated } from "@react-spring/three";

export default function Questionmark({
  gltfObject,
  moveValue,
  delayValue,
}: {
  gltfObject: JSX.Element;
  moveValue: number;
  delayValue: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const { x, y, z } = useSpring({
    from: { x: 0, y: 0, z: 0 },
    to: { x: 0, y: moveValue, z: 0 },
    loop: { reverse: true },
    config: { duration: 2000, easing: easeCubicInOut },
    delay: delayValue,
  });

  useFrame(() => {
    meshRef.current?.position.set(x.get(), y.get(), z.get());
    meshRef.current?.rotateY(0.01);
  });

  return (
    <animated.mesh ref={meshRef} position={[0, 0, 0]}>
      {gltfObject}
    </animated.mesh>
  );
}

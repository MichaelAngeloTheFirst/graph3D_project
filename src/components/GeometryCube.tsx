export default function GeometryCube({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[1, 16, 16]} />
      <meshStandardMaterial color="hotpink" transparent />
      <ambientLight intensity={0.1} />
      <directionalLight color="blue" position={[0, 0, 5]} />
    </mesh>
  );
}

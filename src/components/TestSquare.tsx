export default function TestSquare({
  position,
}: {
  position: [number, number, number];
}) {
  return (
    <mesh position={position}>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="hotpink" transparent />
      <ambientLight intensity={0.5} />
      {/* <directionalLight color="blue" position={[0, 0, 0]} /> */}
    </mesh>
  );
}

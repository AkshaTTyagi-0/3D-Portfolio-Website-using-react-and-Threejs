import { Html, useProgress } from "@react-three/drei";

export default function CanvasLoader() {
  const { progress } = useProgress();
  return (
    <Html as="div" center className="flex flex-col items-center">
      <p className="text-sm text-white font-extrabold mt-10">{progress.toFixed(2)}%</p>
    </Html>
  );
}
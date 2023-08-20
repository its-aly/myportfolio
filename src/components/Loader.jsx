import { Html, useProgress } from "@react-three/drei";

const Loader = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <span className="canvas-load"> </span>
      <p
        style={{
          fontSize: 14,
          color: "puple",
          fontWeight: 800,
          marginTop: 150,
        }}
      >
        {progress.toFixed()}%
      </p>
    </Html>
  );
};

export default Loader;

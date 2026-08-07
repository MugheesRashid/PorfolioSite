import { Canvas } from "@react-three/fiber";
import { Planet } from "../components/Planet";
import { Environment, Float, Lightformer } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import AnimatedHeaderSection from "../components/AnimatedHeaderSection";
const Hero = ({ loading }) => {
  const isMobile = useMediaQuery({ maxWidth: 853 });
  const text = `Full Stack Developer & Aspiring Medical AI Researcher
building modern products, exploring healthcare AI,
and shaping meaningful software for the future`;
  return (
    <section id="home" className="relative flex flex-col justify-end min-h-screen" aria-labelledby="hero-title">
      <AnimatedHeaderSection
        subTitle={"Full Stack Developer • Aspiring Medical AI Researcher"}
        title={"MUGHEES RASHID"}
        text={text}
        textColor={"text-black"}
        loading={loading}
        as="h1"
        titleId="hero-title"
      />
      <figure
        className="absolute inset-0 -z-50"
        style={{ width: "100vw", height: "100vh" }}
      >
        <Canvas
          shadows
          camera={{ position: [0, 0, -10], fov: 17.5, near: 1, far: 20 }}
        >
          <ambientLight intensity={0.5} />
          <Float speed={0.5}>
            <Planet scale={isMobile ? 0.7 : 1} loading={loading} />
          </Float>
          <Environment resolution={256}>
            <group rotation={[-Math.PI / 3, 4, 1]}>
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 5, -9]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[0, 3, 1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[-5, -1, -1]}
                scale={10}
              />
              <Lightformer
                form={"circle"}
                intensity={2}
                position={[10, 1, 0]}
                scale={16}
              />
            </group>
          </Environment>
        </Canvas>
      </figure>  
    </section>
  );
};

export default Hero;

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sparkles } from "@react-three/drei";

const RotatingCube = () => {
	const meshRef = React.useRef();
	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
		}
	});
	return (
		<mesh ref={meshRef}>
			<cylinderGeometry args={[1, 1, 1]} />
			<meshLambertMaterial color={0x9cddff} emissive={0x9cddff} />
			<Sparkles
				count={100}
				scale={10}
				size={10}
				speed={0.5}
				noise={0.2}
				color="orange"
			/>
		</mesh>
	);
};
const App = () => {
	return (
		<Canvas
			style={{
				height: "100vh",
				width: "100vw",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<OrbitControls enableZoom enablePan enableRotate />
			<directionalLight position={[1, 1, 1]} intensity={10} color={0x9cddff} />
			<color attach="background" args={[0xf0f0f0]} />
			<RotatingCube />
		</Canvas>
	);
};

export default App;

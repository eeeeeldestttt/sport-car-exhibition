// src/components/CarPerformanceStats.jsx
import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  CartesianGrid,
} from "recharts";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

// Loader untuk GLTF/GLB model dengan pengaturan khusus per mobil
function CarModel({ modelPath, adjustments }) {
  const { scene } = useGLTF(modelPath);
  return (
    <primitive
      object={scene}
      scale={adjustments.scale}
      position={adjustments.position}
      rotation={adjustments.rotation}
    />
  );
}

// Tooltip custom untuk chart
function CustomTooltip({ active, payload, label }) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-800 text-white text-sm p-2 rounded shadow-md">
        <p className="font-semibold">{label}</p>
        <p>Top Speed: {payload[0]?.value} km/h</p>
        <p>0-100 km/h: {payload[1]?.value} s</p>
      </div>
    );
  }
  return null;
}

export default function CarPerformanceStats() {
  const { ref, inView } = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  // Data mobil + path model + perbaikan scale/position
  const carData = [
    {
      name: "Aventador",
      topSpeed: 350,
      acceleration: 2.9,
      model: "/models/aventador.glb",
      adjustments: { scale: 1, position: [0, -1, 0], rotation: [0, Math.PI, 0] },
    },
    {
      name: "F8 Tributo",
      topSpeed: 340,
      acceleration: 2.9,
      model: "/models/f8trib.glb",
      adjustments: { scale: 1, position: [0, -1, 0], rotation: [0, Math.PI, 0] },
    },
    {
      name: "Jesko",
      topSpeed: 480,
      acceleration: 2.5,
      model: "/models/jesko.glb",
      adjustments: { scale: 0.1, position: [0, 0, 0], rotation: [0, Math.PI, 0] },
    },
    {
      name: "Bolide",
      topSpeed: 500,
      acceleration: 2.2,
      model: "/models/bolide.glb",
      adjustments: { scale: 0.1, position: [0, -0.8, 0], rotation: [0, Math.PI, 0] },
    },
    {
      name: "Senna",
      topSpeed: 335,
      acceleration: 2.8,
      model: "/models/senna.glb",
      adjustments: { scale: 1, position: [0, -1, 0], rotation: [0, Math.PI, 0] },
    },
    {
      name: "La Voiture",
      topSpeed: 420,
      acceleration: 2.4,
      model: "/models/lavoiture.glb",
      adjustments: { scale: 0.02, position: [0, -0.8, 0], rotation: [0, Math.PI, 0] },
    },
  ];

  return (
    <div ref={ref} className="bg-[#1f2937] rounded-2xl shadow-lg p-6 space-y-10">
      {/* Card Mobil + Preview 3D */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {carData.map((car, idx) => (
          <div
            key={idx}
            className="bg-gray-800 p-5 rounded-xl shadow-md flex flex-col items-center text-white hover:scale-105 transform transition-all duration-300"
          >
            {/* PREVIEW 3D MODEL */}
            <div className="w-full h-48 mb-4">
              <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
                <ambientLight intensity={0.7} />
                <directionalLight position={[5, 5, 5]} intensity={1} />
                <CarModel modelPath={car.model} adjustments={car.adjustments} />
                <OrbitControls enableZoom={false} />
              </Canvas>
            </div>

            <h3 className="text-xl font-bold mb-2">{car.name}</h3>
            <div className="text-center">
              <p className="text-lg">Top Speed</p>
              <p className="text-3xl font-extrabold text-blue-400">
                {startCount && <CountUp end={car.topSpeed} duration={2} suffix=" km/h" />}
              </p>
            </div>
            <div className="text-center mt-4">
              <p className="text-lg">0-100 km/h</p>
              <p className="text-3xl font-extrabold text-yellow-400">
                {startCount && (
                  <CountUp end={car.acceleration} duration={2} decimals={1} suffix=" s" />
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* GRAPH CHART */}
      <div className="w-full h-[500px] bg-gray-900 rounded-2xl p-6 shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">
          Grafik Performa Mobil
        </h2>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={carData}
            margin={{ top: 20, right: 30, left: 10, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis dataKey="name" stroke="#d1d5db" />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#d1d5db"
              label={{
                value: "Top Speed (km/h)",
                angle: -90,
                position: "insideLeft",
                fill: "#d1d5db",
              }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#d1d5db"
              label={{
                value: "0-100 km/h (s)",
                angle: 90,
                position: "insideRight",
                fill: "#d1d5db",
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ color: "#e5e7eb" }} />
            <Bar yAxisId="left" dataKey="topSpeed" fill="#3b82f6" name="Top Speed" />
            <Bar yAxisId="right" dataKey="acceleration" fill="#facc15" name="0-100 km/h" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

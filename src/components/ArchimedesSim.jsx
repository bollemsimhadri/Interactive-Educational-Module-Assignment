import { useState } from "react";
import { motion } from "framer-motion";

export default function ArchimedesSim() {
  const [density, setDensity] = useState(0.5);
  const isFloating = density < 1;

  return (
    <div className="p-6 bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl shadow-lg w-[380px] text-white">
      <h2 className="text-xl font-bold mb-3 text-cyan-300">
        Archimedes’ Principle
      </h2>
      <p className="mb-2 text-gray-200">Adjust object density:</p>

      <input
        type="range"
        min="0.1"
        max="2"
        step="0.1"
        value={density}
        onChange={(e) => setDensity(parseFloat(e.target.value))}
        className="w-full accent-cyan-400"
      />
      <p className="mt-1 text-cyan-200">Density: {density.toFixed(1)}</p>\

      <div className="relative w-72 h-72 mt-6 flex justify-center items-center mx-auto">

        <div className="relative w-64 h-64 bg-blue-400/30 border border-blue-200 rounded-lg overflow-hidden backdrop-blur-sm">

          <div className="absolute bottom-0 w-full h-1/2 bg-blue-500/70" />

          <motion.div
            className="w-16 h-16 bg-red-400 rounded-lg mx-auto shadow-md"
            animate={{
              y: isFloating ? 80 : 160,
            }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </div>

        <span className="absolute top-0 text-sm font-medium text-cyan-300">
          Water Surface
        </span>
        <span className="absolute bottom-0 text-sm font-medium text-cyan-300">
          Container Bottom
        </span>
        <span className="absolute left-0 -ml-16 text-sm font-medium rotate-[-90deg] text-green-300">
          Buoyant Force ↑
        </span>
        <span className="absolute right-0 -mr-16 text-sm font-medium rotate-[90deg] text-red-300">
          Gravity ↓
        </span>
      </div>

      <p
        className={`mt-3 text-center font-semibold ${isFloating ? "text-green-300" : "text-red-300"
          }`}
      >
        {isFloating
          ? "The object floats (density < water)."
          : "The object sinks (density > water)."}
      </p>
    </div>
  );
}

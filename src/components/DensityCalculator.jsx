import { useState } from "react";

export default function DensityCalculatorSim() {
  const [mass, setMass] = useState(1);
  const [volume, setVolume] = useState(1);

  const density = mass / volume;
  const waterDensity = 1.0;

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">
      <div className="p-6 bg-gray-900 text-white rounded-xl shadow-lg w-[350px] border border-gray-700">
        <h2 className="text-xl font-bold mb-3 text-blue-400">Density Calculator</h2>
        <p className="mb-4 text-gray-300">
          Density (ρ) is mass per unit volume. ρ = m / V
        </p>

        <div className="flex flex-col gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-300">Mass (kg):</label>
            <input
              type="number"
              value={mass}
              onChange={(e) => setMass(parseFloat(e.target.value) || 0)}
              className="border border-gray-700 rounded px-2 py-1 w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">Volume (m³):</label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value) || 0)}
              className="border border-gray-700 rounded px-2 py-1 w-full bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        <div className="mt-4 p-3 rounded bg-gray-800 text-center border border-gray-700">
          <p>
            <strong className="text-blue-400">Calculated Density:</strong>{" "}
            {density.toFixed(2)} kg/m³
          </p>
          <p
            className={`mt-2 font-semibold ${density <= waterDensity ? "text-green-400" : "text-red-400"
              }`}
          >
            {density <= waterDensity
              ? "This object would FLOAT in water."
              : "This object would SINK in water."}
          </p>
        </div>
      </div>


      <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[450px] text-white space-y-4">
        <h2 className="text-xl font-bold mb-2 text-blue-400">Density Concept</h2>
        <p>
          Density is a physical property of matter that describes the **mass of a substance per unit volume**.
        </p>

        <h2 className="text-xl font-bold mb-2 text-blue-400">Formula:</h2>
        <p>
          <span className="font-semibold">ρ = m / V</span>
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>ρ = Density (kg/m³)</li>
          <li>m = Mass (kg)</li>
          <li>V = Volume (m³)</li>
        </ul>

        <h2 className="text-xl font-bold mb-2 text-blue-400">Key Points:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>If an object’s density &lt; water density &rarr; object floats.</li>
          <li>If an object’s density &gt; water density &rarr; object sinks.</li>
          <li>Helps in determining buoyancy in fluids.</li>
          <li>Used in shipbuilding, hydrometry, and fluid mechanics studies.</li>
        </ul>

      </div>
    </div>
  );
}

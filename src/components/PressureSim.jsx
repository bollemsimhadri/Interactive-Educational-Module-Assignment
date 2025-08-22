import { useState } from "react";

export default function PressureSim() {
  const [depth, setDepth] = useState(0);
  const density = 1000;
  const g = 9.8;
  const pressure = (density * g * depth) / 1000;

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">

      <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[350px] text-white">
        <h2 className="text-xl font-bold mb-2 text-blue-400">Pressure vs Depth</h2>
        <p className="mb-2">Move the ball deeper into water:</p>

        <input
          type="range"
          min="0"
          max="10"
          step="0.5"
          value={depth}
          onChange={(e) => setDepth(parseFloat(e.target.value))}
          className="w-full"
        />
        <p className="mt-1">Depth: {depth.toFixed(1)} m</p>


        <div className="relative w-64 h-64 bg-blue-300 rounded-lg mt-6 overflow-hidden mx-auto">

          <div className="absolute bottom-0 w-full h-full bg-blue-400" />


          <div
            className="absolute left-28 w-10 h-10 bg-red-500 rounded-full border-2 border-white transition-all duration-300"
            style={{ bottom: `${depth * 10}px` }}
          />
        </div>

        <p className="mt-3 text-center font-medium">
          Pressure at this depth ≈ {pressure.toFixed(1)} kPa
        </p>
      </div>


      <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[350px] text-white space-y-4">
        <h2 className="text-xl font-bold mb-2 text-blue-400">Definition:</h2>
        <p>
          Pressure at a point in a fluid increases with depth. The deeper you go,
          the more weight of fluid is above the point, so the pressure is higher.
        </p>

        <h2 className="text-xl font-bold mb-2 text-blue-400">Formula:</h2>
        <p>
          <span className="font-semibold">
            P = P<sub>0</sub> + ρ g h
          </span>
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>P = Pressure at depth</li>
          <li>P<sub>0</sub> = Surface / atmospheric pressure</li>
          <li>ρ = Density of fluid</li>
          <li>g = Acceleration due to gravity</li>
          <li>h = Depth of point below surface</li>
        </ul>

        <h2 className="text-xl font-bold mb-2 text-blue-400">Key Points:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Pressure increases linearly with depth.</li>
          <li>It acts in all directions at a point.</li>
          <li>Used in dams, submarines, and hydraulic systems.</li>
        </ul>
      </div>
    </div>
  );
}

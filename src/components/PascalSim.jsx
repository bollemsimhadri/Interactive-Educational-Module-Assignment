import { useState } from "react";
import { motion } from "framer-motion";

export default function PascalSim() {
  const [force, setForce] = useState(10);

  const A1 = 1;
  const A2 = 5;


  const pressure = force / A1;

  const outputForce = pressure * A2;

  return (
    <div className="flex flex-col md:flex-row gap-6 justify-center flex-wrap">

      <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[350px] text-white">
        <h2 className="text-xl font-bold mb-2 text-blue-400">Pascal’s Law</h2>
        <p className="mb-2">Apply force on the small piston:</p>

        <input
          type="range"
          min="1"
          max="50"
          step="1"
          value={force}
          onChange={(e) => setForce(parseFloat(e.target.value))}
          className="w-full"
        />
        <p className="mt-1">Input Force: {force} N</p>


        <div className="relative w-64 h-64 bg-blue-300 rounded-lg mt-6 mx-auto flex justify-around items-end overflow-hidden">

          <motion.div
            className="w-12 bg-gray-500 text-center text-white rounded-t-md"
            style={{ height: "60px" }}
            animate={{ y: -force / 5 }}
          >
            A1
          </motion.div>


          <motion.div
            className="w-20 bg-gray-700 text-center text-white rounded-t-md"
            style={{ height: "60px" }}
            animate={{ y: -outputForce / 10 }}
          >
            A2
          </motion.div>
        </div>

        <p className="mt-3 text-center font-medium">
          Output Force: {outputForce.toFixed(1)} N
        </p>
        <p className="text-sm text-gray-400 mt-1 text-center">
          Pressure is transmitted equally → Force is multiplied!
        </p>
      </div>

      <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[500px] text-white space-y-4">
        <h2 className="text-xl font-bold mb-2 text-blue-400">Definition:</h2>
        <p>
          Pascal’s Law states that pressure applied to a confined fluid is transmitted
          undiminished in all directions throughout the fluid.
        </p>

        <h2 className="text-xl font-bold mb-2 text-blue-400">Formula:</h2>
        <p>
          <span className="font-semibold">
            F1 / A1 = F2 / A2
          </span>
        </p>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>F1 = Input force on small piston</li>
          <li>A1 = Area of small piston</li>
          <li>F2 = Output force on large piston</li>
          <li>A2 = Area of large piston</li>
        </ul>

        <h2 className="text-xl font-bold mb-2 text-blue-400">Key Points:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Pressure is transmitted equally in all directions in a confined fluid.</li>
          <li>Small force on small piston can lift a large load on bigger piston.</li>
          <li>Fluid must be incompressible and confined.</li>
        </ul>

        <h2 className="text-xl font-bold mb-2 text-blue-400">Applications:</h2>
        <ul className="list-disc list-inside space-y-1 text-sm">
          <li>Hydraulic lift for cars</li>
          <li>Hydraulic brakes in vehicles</li>
          <li>Hydraulic presses in factories</li>
          <li>Dentist chairs and elevators</li>
        </ul>
      </div>
    </div>
  );
}

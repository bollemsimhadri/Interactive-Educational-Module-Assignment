import { FaTint, FaWind, FaHeartbeat } from "react-icons/fa";

export default function FluidTheoryTwo() {
    return (
        <div className="p-6 bg-gray-900 from-blue-50 to-blue-100 rounded-2xl shadow-lg max-w-4xl mx-auto">
       
            <section className="mb-6 bg-white rounded-xl shadow p-5 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-700">Density: A Key Property</h3>
                <p className="mt-1 text-gray-700">
                    Density (ρ) measures how much mass is packed into a volume:
                </p>
                <div className="bg-blue-50 p-2 rounded mt-2 text-center font-mono text-blue-900 font-semibold">
                    ρ = m / V
                </div>
                <p className="mt-2 text-gray-700">
                    Where ρ is density in kg/m³, m is mass in kg, and V is volume in m³.
                </p>

                <div className="mt-4 grid grid-cols-3 gap-4 text-center">
                    <div className="p-3 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl shadow">
                        <p className="font-bold text-blue-800">Water</p>
                        <p className="text-gray-700">1000 kg/m³</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl shadow">
                        <p className="font-bold text-gray-700">Air</p>
                        <p className="text-gray-600">1.2 kg/m³</p>
                    </div>
                    <div className="p-3 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl shadow">
                        <p className="font-bold text-yellow-800">Honey</p>
                        <p className="text-gray-700">1400 kg/m³</p>
                    </div>
                </div>
            </section>

                    <section className="bg-white rounded-xl shadow p-5 hover:shadow-md transition">
                <h3 className="text-lg font-semibold text-blue-700">Fluids in Daily Life</h3>
                <div className="mt-3 grid grid-cols-3 gap-4 text-center">
                    <div className="bg-blue-100 p-3 rounded-xl flex flex-col items-center shadow">
                        <FaTint className="text-blue-600 text-3xl" />
                        <p className="mt-1 font-medium text-blue-800">Drinking Water</p>
                    </div>
                    <div className="bg-gray-200 p-3 rounded-xl flex flex-col items-center shadow">
                        <FaWind className="text-gray-600 text-3xl" />
                        <p className="mt-1 font-medium text-gray-700">Atmosphere</p>
                    </div>
                    <div className="bg-red-100 p-3 rounded-xl flex flex-col items-center shadow">
                        <FaHeartbeat className="text-red-600 text-3xl" />
                        <p className="mt-1 font-medium text-red-700">Blood Flow</p>
                    </div>
                </div>
            </section>

        </div>
    );
}

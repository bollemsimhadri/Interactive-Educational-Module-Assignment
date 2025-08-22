export default function ArchimedesPrinciple() {
    return (
        <div className="flex justify-center gap-6 flex-wrap">
            <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[420px] text-white space-y-6">
                <div>
                    <h2 className="text-xl font-bold mb-2 text-blue-400">Definition:</h2>
                    <p>
                        When a body is wholly or partially immersed in a fluid, it experiences an
                        upward force (called <span className="font-semibold">buoyant force</span>) equal to the
                        weight of the fluid displaced by the body.
                    </p>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2 text-blue-400">Formula:</h2>
                    <p className="mb-2">
                        <span className="font-semibold">
                            Buoyant Force (F<sub>b</sub>) = ρ × V × g
                        </span>
                    </p>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>ρ = Density of fluid</li>
                        <li>V = Volume of displaced fluid</li>
                        <li>g = Acceleration due to gravity</li>
                    </ul>
                </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[420px] text-white space-y-6">
                <div>
                    <h2 className="text-xl font-bold mb-2 text-blue-400">Key Points:</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>The upward force is called <span className="font-semibold">Buoyant Force</span>.</li>
                        <li>It depends only on the <span className="font-semibold">volume of fluid displaced</span>.</li>
                        <li>It always acts vertically upward through the center of displaced fluid.</li>
                        <li>If Weight of body &gt; Buoyant Force → body sinks.</li>
                        <li>If Weight of body = Buoyant Force → body floats in equilibrium.</li>
                        <li>If Weight of body &lt; Buoyant Force → body rises and floats partially.</li>
                    </ul>
                </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[420px] text-white space-y-6 flex flex-col items-center overflow-hidden">
                <h2 className="text-xl font-bold mb-4 text-blue-400">Diagrammatic Explanation:</h2>
                <div className="relative w-32 h-40 flex flex-col justify-center items-center">
                    <div className="bg-blue-700 w-20 h-16 rounded shadow-lg relative z-10 flex justify-center items-center">
                        <span className="text-white font-bold">Object</span>
                    </div>
                    <div className="absolute top-0 animate-bounce">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-green-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19V7m0 0l-2 2m2-2l2 2" />
                        </svg>
                        <p className="text-green-300 text-xs text-center">Buoyant Force</p>
                    </div>
                    <div className="absolute bottom-0 animate-bounce-slow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6 text-red-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v12m0 0l-2-2m2 2l2-2" />
                        </svg>
                        <p className="text-red-300 text-xs text-center">Weight</p>
                    </div>
                </div>
            </div>
            <div className="p-6 bg-gray-900 rounded-xl shadow-md w-[420px] text-white space-y-6">
                <h2 className="text-xl font-bold mb-2 text-blue-400">Applications:</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Ships and boats float on water.</li>
                    <li>Submarines control depth using buoyancy.</li>
                    <li>Hydrometers measure density using Archimedes’ principle.</li>
                    <li>Hot air balloons rise because surrounding air is denser.</li>
                </ul>
            </div>
        </div>
    );
}

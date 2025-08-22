

export default function FluidTheoryOne() {
  return (
    <div className="p-6 bg-gray-900 from-blue-50 to-blue-100 rounded-2xl shadow-lg max-w-4xl mx-auto">
      <h2 className="text-3xl font-extrabold text-blue-800 text-center mb-6">
        Fluid Physics: The Science of Flow
      </h2>

      
      <section className="mb-6 bg-white rounded-xl shadow p-5 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-blue-700">What is a Fluid?</h3>
        <p className="mt-1 text-gray-700">
          Unlike solids, fluids have no fixed shape and can flow freely.
          Both liquids and gases are considered fluids, but with key differences:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Liquids have a fixed volume but take the shape of their container.</li>
          <li>Gases expand to fill their entire container.</li>
        </ul>
      </section>

      <section className="mb-6 bg-white rounded-xl shadow p-5 hover:shadow-md transition">
        <h3 className="text-lg font-semibold text-blue-700">Ideal vs Real Fluids</h3>
        <p className="mt-1 text-gray-700">
          In physics, we often start with an{" "}
          <strong className="text-yellow-600">ideal fluid</strong> model:
        </p>
        <ul className="list-disc ml-6 mt-2 text-gray-600">
          <li>Incompressible (density remains constant)</li>
          <li>No viscosity (flows without internal friction)</li>
        </ul>
        <p className="mt-2 text-gray-700">
          Real fluids have{" "}
          <strong className="text-yellow-600">viscosity</strong> — resistance to flow —
          which varies dramatically between different fluids.
        </p>
      </section>

    </div>
  );
}

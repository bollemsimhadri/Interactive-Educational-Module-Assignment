import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArchimedesSim from "./components/ArchimedesSim";
import PressureSim from "./components/PressureSim";
import ArchimedesPrinciple from "./components/ArchimedesPrinciple";
import PascalSim from "./components/PascalSim";
import DensityCalculator from "./components/DensityCalculator";
import FluidTheoryOne from "./components/FluidTheoryOne";
import FluidTheoryTwo from "./components/FluidTheoryTwo";


import "./App.css";

function App() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    autoplay: false,
    adaptiveHeight: true,
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center bg-black">

      <div className="relative z-10 w-full flex flex-col items-center">

        <header className="w-full bg-black text-white py-6 text-center shadow-lg">
          <h1 className="text-3xl font-bold">Fluids Interactive Module</h1>
          <p className="text-sm opacity-90">Class 10 Physics Learning</p>
        </header>


        <main className="mt-10 w-full px-6 pb-16 mt-0" >
          <Slider {...settings}>

            <div>
              <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch w-full">
                <div className="bg-[#1a2238] text-white rounded-2xl shadow-lg p-6 flex-1">
                  <h2 className="text-xl font-semibold mb-4 text-blue-300">
                    Fluid Theory
                  </h2>
                  <FluidTheoryOne />
                </div>

                <div className="bg-[#1a2238] text-white rounded-2xl shadow-lg p-6 flex-1">
                  <h2 className="text-xl font-semibold mb-4 text-blue-300">
                    Archimedes’ Principle
                  </h2>
                  <ArchimedesSim />
                </div>

                <div className="bg-[#1a2238] text-white rounded-2xl shadow-lg p-6 flex-1">
                  <FluidTheoryTwo />
                </div>
              </div>
            </div>


            <div>
              <div className="bg-[#1a2238] text-white rounded-2xl shadow-lg p-8 w-full max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-blue-300">
                  Archimedes’ Principle
                </h2>
                <ArchimedesPrinciple />
              </div>
            </div>


            <div>
              <div className="bg-[#1a2238] text-white rounded-2xl shadow-lg p-8 w-full max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-blue-300">
                  Pressure vs Depth
                </h2>
                <PressureSim />
              </div>
            </div>


            <div>
              <div className="bg-[#1a2238] text-white rounded-2xl shadow-lg p-8 w-full max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-blue-300">
                  Pascal’s Law
                </h2>
                <PascalSim />
              </div>
            </div>


            <div>
              <div className="bg-[#1a2238] text-white rounded-2xl shadow-lg p-8 w-full max-w-6xl mx-auto">
                <h2 className="text-xl font-semibold mb-4 text-blue-300">
                  Density Calculator
                </h2>
                <DensityCalculator />
              </div>
            </div>
          </Slider>
        </main>
      </div>
    </div>
  );
}

export default App;

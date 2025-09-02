import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <About />
    </div>
  );
}

export default App;

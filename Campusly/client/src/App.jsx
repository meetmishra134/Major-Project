import React from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import KeyHighlights from "./components/KeyHighlights";

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <KeyHighlights />
    </div>
  );
}

export default App;

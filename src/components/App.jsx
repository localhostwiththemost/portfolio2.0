import "../sass/styles.js";
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);
  const [slide, setSlide] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function loadSlide() {
    setSlide(true);
  }

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content darkMode={darkMode} slide={slide} loadSlide={loadSlide} />
      <Footer />
    </>
  );
}

export default App;

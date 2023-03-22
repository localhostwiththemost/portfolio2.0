import "../sass/styles.js";
import React from "react";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import Content from "./Content.jsx";

function App() {
  //const [darkMode, setDarkMode] = React.useState(true);
  const [darkMode, setDarkMode] = React.useState(() => {
    const lsDarkMode = localStorage.getItem("darkMode");
    if (lsDarkMode !== null) {
      return lsDarkMode === "true";
    } else {
      // If "darkMode" is not stored in local storage, set the default value and store it
      localStorage.setItem("darkMode", "true");
      return true;
    }
  });

  const [slide, setSlide] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  function loadSlide() {
    setSlide(true);
  }

  React.useEffect(() => {
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Content darkMode={darkMode} slide={slide} loadSlide={loadSlide} />
      <Footer />
    </>
  );
}

export default App;

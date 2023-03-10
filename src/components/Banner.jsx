import { useState, useEffect } from "react";

function Banner() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset / 3;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="banner">
      <h1
        className="banner-text"
        style={{ transform: `translate(-${scrollPosition}px)` }}
      >
        Building &#9888; Learning &#9888; Scrolling &#9888; Coding &#9888;
        Dreaming &#9888; Refactoring &#9888; Reading &#9888; Testing &#9888;
        Loading &#9888; Designing &#9888; Debugging &#9888; Optimizing &#9888;
        Automating &#9888; Deploying &#9888; Growing &#9888; Wireframing &#9888;
      </h1>
    </div>
  );
}

export default Banner;

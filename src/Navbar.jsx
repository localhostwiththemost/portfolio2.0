function Navbar(props) {
  return (
    <nav className={props.darkMode ? "dark" : ""}>
      <a href="#section-aboutme">
        <div className="nav-logo">👨🏼‍💻</div>
      </a>
      <div className="toggler">
        <p className="toggler--light">Light</p>
        <div className="toggler--slider" onClick={props.toggleDarkMode}>
          <div className="toggler--slider--circle"></div>
        </div>
        <p className="toggler--dark">Dark</p>
      </div>
    </nav>
  );
}

export default Navbar;

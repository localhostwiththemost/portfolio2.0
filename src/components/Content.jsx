import React from "react";
import { useInView } from "react-intersection-observer";
import Modal from "./Modal.jsx";
import { send } from "emailjs-com";
import Banner from "./Banner.jsx";

function Content(props) {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    message: "",
  });

  const [showModal, setShowModal] = React.useState(false);

  const { ref: headerRef, inView: headerIsVisible } = useInView();
  const { ref: toolkitRef, inView: toolkitIsVisible } = useInView();
  const { ref: appsRef, inView: appsIsVisible } = useInView();
  const { ref: aboutmeRef, inView: aboutmeIsVisible } = useInView();
  const { ref: connectRef, inView: connectIsVisible } = useInView();

  const openModal = () => {
    setShowModal(true);
  };

  function handleChange(event) {
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    Array.from(document.querySelectorAll("input")).forEach(
      (input) => (input.value = "")
    );
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    send("service_oou22fm", "template_1mv8z0u", formData, "94ZC5dO1EAfKCk0KP")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        openModal();
      })
      .catch((err) => {
        console.log("FAILED...", err);
      });
  }

  return (
    <>
      <main className={props.darkMode ? "dark" : ""}>
        <header>
          <div className="intro-container">
            <h1
              ref={headerRef}
              className={headerIsVisible ? "hidden-left show" : "hidden-left"}
            >
              Hi, I'm Joe
            </h1>
            <h2
              ref={headerRef}
              className={headerIsVisible ? "slideToRight" : ""}
            >
              A Front End Developer
            </h2>

            <div
              ref={headerRef}
              className={
                headerIsVisible ? "slideUp link-container" : "link-container"
              }
            >
              <div className="link-item--container">
                <a href="#section-connect">
                  <p>Hire Me</p>
                </a>
                <span className="blue-arrow">&nbsp;&#8250;</span>
              </div>
              <div className="link-item--container">
                <a href="#section-apps">
                  <p>My Apps</p>
                </a>
                <span className="blue-arrow">&nbsp;&#8250;</span>
              </div>
            </div>
          </div>
        </header>

        <Banner />

        <section className="section-toolkit">
          <div
            ref={toolkitRef}
            className={
              toolkitIsVisible
                ? "hidden-left show heading-container"
                : "hidden-left heading-container"
            }
          >
            <h1>My Toolkit</h1>
          </div>

          <div className="logo-container">
            <div
              ref={toolkitRef}
              className={
                toolkitIsVisible
                  ? "hidden-left show logo-item--container"
                  : "hidden-left logo-item--container"
              }
            >
              <ion-icon name="logo-html5" id="logo-html5"></ion-icon>
              <h2 className="logo-label">HTML5</h2>
            </div>

            <div
              ref={toolkitRef}
              className={
                toolkitIsVisible
                  ? "hidden-left show logo-item--container"
                  : "hidden-left logo-item--container"
              }
            >
              <ion-icon name="logo-css3" id="logo-css3"></ion-icon>
              <h2 className="logo-label">CSS3</h2>
            </div>

            <div
              ref={toolkitRef}
              className={
                toolkitIsVisible
                  ? "hidden-left show logo-item--container"
                  : "hidden-left logo-item--container"
              }
            >
              <ion-icon name="logo-sass" id="logo-sass"></ion-icon>
              <h2 className="logo-label">SASS</h2>
            </div>

            <div
              ref={toolkitRef}
              className={
                toolkitIsVisible
                  ? "hidden-left show logo-item--container"
                  : "hidden-left logo-item--container"
              }
            >
              <ion-icon name="logo-javascript" id="logo-javascript"></ion-icon>
              <h2 className="logo-label">JavaScript</h2>
            </div>

            <div
              ref={toolkitRef}
              className={
                toolkitIsVisible
                  ? "hidden-left show logo-item--container"
                  : "hidden-left logo-item--container"
              }
            >
              <ion-icon name="logo-react" id="logo-react"></ion-icon>
              <h2 className="logo-label">React</h2>
            </div>

            <div
              ref={toolkitRef}
              className={
                toolkitIsVisible
                  ? "hidden-left show logo-item--container"
                  : "hidden-left logo-item--container"
              }
            >
              <ion-icon name="logo-github"></ion-icon>
              <h2 className="logo-label">Github</h2>
            </div>
          </div>
        </section>

        <section className="section-apps" id="section-apps">
          <div
            ref={appsRef}
            className={
              appsIsVisible
                ? "hidden-left show heading-container heading-container--apps"
                : "hidden-left heading-container heading-container--apps"
            }
          >
            <h1>My Apps</h1>
          </div>

          <div className="img-row">
            <div className="img-container--item">
              <img
                src="src/images/petamigo.webp"
                alt="React pet adoption app"
                className="app-img__1"
                loading="lazy"
              />
              <div className="overlay">
                <h2>Pet Adoption App</h2>
                <div className="btn-container">
                  <a
                    href="https://petamigo-7f92b.web.app/"
                    target="_blank"
                    rel="noopener"
                    className="button"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/localhostwiththemost/petamigo"
                    target="_blank"
                    rel="noopener"
                    className="button"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>

            <div className="img-container--item">
              <img
                src="src/images/hooloo.webp"
                alt="React streaming service frontend"
                className="app-img__2"
                loading="lazy"
              />
              <div className="overlay">
                <h2>Streaming Service Frontend</h2>
                <div className="btn-container">
                  <a
                    href="https://hooloo.netlify.app"
                    target="_blank"
                    rel="noopener"
                    className="button"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/localhostwiththemost/hooloo"
                    target="_blank"
                    rel="noopener"
                    className="button"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="img-row">
            <div className="img-container--item">
              <img
                src="src/images/quiz.webp"
                alt="React computer science quiz"
                className="app-img__3"
                loading="lazy"
              />
              <div className="overlay">
                <h2>React CS Quiz</h2>
                <div className="btn-container">
                  <a
                    href="https://cs-trivia.netlify.app/"
                    target="_blank"
                    rel="noopener"
                    className="button"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/localhostwiththemost/react-quiz"
                    target="_blank"
                    rel="noopener"
                    className="button"
                  >
                    Repo
                  </a>
                </div>
              </div>
            </div>

            <div className="img-container--item">
              <img
                src="src/images/keyboard.webp"
                alt="Coming Soon"
                className="app-img__4"
                loading="lazy"
              />
              <div className="overlay">
                <h2>Coming Soon</h2>
                {/* <div className="btn-container">
                  <a
                    href="https://jstodo-project.netlify.app/"
                    target="_blank"
                    rel="noopener"
                    className="button"
                  >
                    Live
                  </a>
                  <a
                    href="https://github.com/localhostwiththemost/jstodo"
                    target="_blank"
                    rel="noopener"
                    className="button"
                  >
                    Repo
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </section>

        <section className="section-aboutme" id="section-aboutme">
          <div
            ref={aboutmeRef}
            className={
              aboutmeIsVisible
                ? "hidden-left show heading-container"
                : "hidden-left heading-container"
            }
          >
            <h1>About Me</h1>
          </div>

          <div
            ref={aboutmeRef}
            className={
              aboutmeIsVisible
                ? "fadeIn about-me--container"
                : "about-me--container"
            }
          >
            <img src="src/images/me.webp" alt="A photo of Joe" loading="lazy" />

            <div className="about-me--text">
              <p>
                Hi, I'm Joe; a front end developer. I've always had a passion
                for putting things together. Whether that be from scratch or
                with an already established foundation, my end goal has always
                been the same: <span className="WOW">W</span>
                <span className="WOW">O</span>
                <span className="WOW">W</span> the user. If you find my work
                interesting or share a love for tech, feel free to reach out
                using the form below.
              </p>
            </div>
          </div>
        </section>

        <section className="section-connect" id="section-connect">
          <div className="connect-heading-container">
            <h1
              ref={connectRef}
              className={connectIsVisible ? "hidden-left show" : "hidden-left"}
            >
              Let's Connect
            </h1>
            <h2
              ref={connectRef}
              className={connectIsVisible ? "slideToRight" : ""}
            >
              And Talk Tech
            </h2>
          </div>

          {showModal ? <Modal setShowModal={setShowModal} /> : null}
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <input
                type="name"
                placeholder="Name"
                onChange={handleChange}
                name="name"
                value={formData.name}
                id="input-name"
                required
              />
              <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
                id="input-email"
                required
              />
              <textarea
                placeholder="Message"
                onChange={handleChange}
                value={formData.message}
                id="input-message"
                name="message"
              />
              <button>Submit</button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}

export default Content;

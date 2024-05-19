import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import About from "./Components/About";
import ContactMe from "./Components/ContactMe";
// import Resume from "./Components/Resume";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import { useContext } from "react";
import { ThemeContext } from "./Context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  if (theme) {
    document.querySelector(":root").style.backgroundColor = "#fff";
    document.querySelector(":root").style.transition =
      "background-color 1s ease, color 1s ease";
    document.querySelector("#root").style.backgroundColor = "#fff";
    document.querySelector("#root").style.transition =
      "background-color 1s ease, color 1s ease";
  } else {
    document.querySelector(":root").style.backgroundColor = "#212529";
    document.querySelector(":root").style.transition =
      "background-color 1s ease, color 1s ease";
    document.querySelector("#root").style.backgroundColor = "#212529";
    document.querySelector("#root").style.transition =
      "background-color 1s ease, color 1s ease";
  }
  return (
    //TODO add and remove classname is it better
    <div className={`App ${theme ? "light" : "dark"}`}>
      <Navigation />
      <About />
      <Projects />
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

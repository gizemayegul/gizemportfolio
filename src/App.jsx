import Navigation from "./Components/Navigation";
import Projects from "./Components/Projects";
import About from "./Components/About";
import ContactMe from "./Components/ContactMe";
import Resume from "./Components/Resume";
import Footer from "./Components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import DarkMode from "./Components/DarkMode";

function App() {
  return (
    //TODO add and remove classname is it better
    <div className="App">
      <Navigation />
      <About />
      <Projects />
      {/* <Resume /> */}
      <ContactMe />
      <Footer />
    </div>
  );
}

export default App;

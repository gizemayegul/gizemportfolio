import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Resume from './Components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className='App'>
      <Navigation/>
      <About/>
      <Projects/>
      <Resume/>
      <Contact/>
    </div>
  );
}

export default App;
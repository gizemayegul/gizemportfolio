import Navigation from './Components/Navigation';
import Projects from './Components/Projects';
import About from './Components/About';
import ContactMe from './Components/ContactMe';
import Resume from './Components/Resume';
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {


  return (
    <div className='App'>
     
      <Navigation/>
      <About/>
      <Projects/>
      <Resume/>
      <ContactMe />
    </div>
  );
}

export default App;
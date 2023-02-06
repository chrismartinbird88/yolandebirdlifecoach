import './App.css';
import {NavBar} from './Components/NavBar.js';
import {Home} from './Components/Home';
import {About} from './Components/About';
import {Qualifications} from './Components/Qualifications';
import {Benefits} from './Components/Benefits';
import {Map} from './Components/Map';
import {Contact} from './Components/Contact';
import {Footer} from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <br/><br/>
      <Home/>
      <br/><br/>
      <About/>
      <br/><br/>
      <Qualifications/>
      <br/><br/>
      <Benefits/>
      <br/><br/>
      <Map/>
      <br/><br/>
      <Contact/>
      <br/><br/>
      <Footer/>
    </div>
  );
}

export default App;

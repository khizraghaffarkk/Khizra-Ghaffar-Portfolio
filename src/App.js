import { Route, Routes,useLocation } from 'react-router-dom';
import './App.scss';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import Home from './containers/Home';
import About from './containers/About';
import Contact from './containers/Contact';
import Portfolio from './containers/Portfolio';
import Resume from './containers/Resume';
import Skills from './containers/Skills';
import Navbar from './components/navBar';

import particlesConfig from './utils.js/particles';

function App() {
 const location=useLocation();
 console.log(location);

  const loadParticles = async (main)=>{
    console.log("Initializing particles...");
    await loadFull(main);
    console.log("Particles loaded successfully!");
  }

  const renderParticleJsInnHomePage = location.pathname ==="/";
  
  return (
    <div className="App">
      {/* particles */}
      
      {
        renderParticleJsInnHomePage && 
        <Particles id='particles' init={loadParticles} options={particlesConfig}/>
 
      }
      
      {/* navbar */}
      <Navbar />
      {/* main content */}
      <div className='App__main-page-content'>
      <Routes>
        <Route index path="/" element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/portfolio' element={<Portfolio />}/>
        <Route path='/resume' element={<Resume />}/>
        <Route path='/skills' element={<Skills />}/>
      </Routes>
      </div>
      
    </div>
  );
}

export default App;

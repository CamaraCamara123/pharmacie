import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer';
import Navbar from './Header';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='mainP'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Card from './components/Card';
import { BrowserRouter , Route, Routes} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          {/* <Route path='/Card/:user' Component={Card} /> */}
          <Route path='/card/:user' element = {<Card/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

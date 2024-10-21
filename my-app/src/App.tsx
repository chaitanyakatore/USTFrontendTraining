import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar'; 
import About from './components/About';  
import Contact from './components/Contact';
import Projects from './components/Projects'; 

type Props = {};

const App = (props: Props) => {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<h1>Welcome to My Website</h1>} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

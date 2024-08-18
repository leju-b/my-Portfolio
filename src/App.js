import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import GetInTouch from './components/GetInTouch/GetInTouch';
import Footer from './components/Footer/Footer';
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <div>
       <style>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap');
                body {
                    font-family: 'Poppins', sans-serif;
                }
            `}
        </style>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <GetInTouch />
      <Footer />
    </div>
  );
}

export default App;

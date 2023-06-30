import './App.css'
import Amit from './Navbar';
import Text from './Text';
import About from './About';
import wave from './wave';
import React, { useState } from 'react'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#061724'
      // document.body.style.color = 'white'
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      // document.body.style.color = '#061724'
    }
  }

  return (
    // <Amit title= "amit" />
    <>
      <BrowserRouter>
        <Amit className="Amit" mode={mode} toggleMode={toggleMode} />
        <Routes>
          <Route exact path="" element={<><Text className="Amit" mode={mode} /></>} />
          <Route exact path="/about" element={<> <About mode={mode} /></>} />
          <Route exact path='/about'/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

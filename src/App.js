import React from 'react';
import About from './components/About';
import coverImage from "../src/assets/cover/0.jpg"

import './App.css';

function App() {
  return (
    <div>
      <About/>
      <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />

    </div>
  );
}

export default App;

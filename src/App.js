import React, {useState} from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Gallery from "./components/Gallery";
import coverImage from "../src/assets/cover/0.jpg"

import './App.css';

function App() {
  const [categories] = useState([
    {
      name: 'websites',
      description: 'Photos of current website projects I have completed.',
    },
    { name: 'github', description: 'Visit my github!' },
    { name: 'linkedIn', description: 'Visit my LinkedIn profile' },
    { name: 'About Me', description: 'Why do I want to be a developer?' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          <Gallery></Gallery>
          <About></About>
        </div>
      </main>
    </div>
  );
}

export default App;


import Brand from './components/Brand';
import Colorpalette from './components/Colorpalette';
import Elements from './components/Elements';
import Home from './components/Home';
import Icons from './components/Icons';
import Imagery from './components/Imagery';
import Layout from './components/Layout'
import Logo from './components/Logo';
import Typography from './components/Typography';
import React, { useState } from 'react';


import logoImage from './images/logo_spaces.png';
import './App.css';

function App() {
  const [element, setElement] = useState("Home")
  return (
    <div>
      <div className="banner">
        <a onClick={() => setElement("Home")}><img src={logoImage} alt={"logo"} className="logo"/></a>
        <div className="header-title">
          <h1>Style guide</h1>
        </div>
      </div>
      
      <div className="content-wrapper">
        <nav>
            <h2>Go to section</h2>
            <ul>
                <li>
                    <a onClick={() => setElement("Brand")} >Brand Personality</a>
                </li>
                <li>
                    <a onClick={() => setElement("Colorpalette")} >Colorpalette</a>
                </li>
                <li>
                    <a onClick={() => setElement("Elements")} >Elements</a>
                </li>
                <li>
                    <a onClick={() => setElement("Icons")} >Icons</a>
                </li>
                <li>
                    <a onClick={() => setElement("Imagery")}  >Imagery</a>
                </li>
                <li>
                    <a onClick={() => setElement("Layout")} >Layout</a>
                </li>
                <li>
                    <a onClick={() => setElement("Logo")} >Logo</a>
                </li>
                <li>
                    <a onClick={() => setElement("Typography")} >Typography</a>
                </li>
            </ul>
        </nav>

        <div className="content-container">
          { element === "Brand" && <Brand /> }
          { element === "Colorpalette" && <Colorpalette /> }
          { element === "Elements" && <Elements /> }
          { element === "Home" && <Home /> }
          { element === "Imagery" && <Imagery /> }
          { element === "Icons" && <Icons /> }
          { element === "Layout" && <Layout /> }
          { element === "Logo" && <Logo /> }
          { element === "Typography" && <Typography /> }
        </div>
      </div>
    </div>
  );
}

export default App;

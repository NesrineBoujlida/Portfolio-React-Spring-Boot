import Portfolio from "./components/portfolio/Portfolio";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Motivation from "./components/motivation/Motivation";
import Intro  from "./components/intro/Intro";
import Menu from "./components/menu/Menu";
import Skills from "./components/skills/Skills";
import "./app.scss"
import "./App.css";


import { useState } from "react";

function App() {
  const[menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    <div className="sections">
   <Intro/>
   
  
   <Portfolio/>
   <Skills/>
    <Motivation/>
  
    <Contact/>
    
    </div>
    </div>
  );
}

export default App;

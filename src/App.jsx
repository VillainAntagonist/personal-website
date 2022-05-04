import TopBar from "./components/topbar/TopBar";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/contact";
import './app.scss';
import {useState} from "react";
import Menu from "./components/menu/menu";

function App() {
    const [menuOpen, setMenuOpen] =useState(false)
  return (
    <div className="app">
      <TopBar menuOpen={menuOpen} setMenuOpen={setMenuOpen }/>
        <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
        <div className="sections">
            <Intro/>
            <Skills/>
            <Portfolio/>
            <Contact/>
        </div>
    </div>
  );
}

export default App;

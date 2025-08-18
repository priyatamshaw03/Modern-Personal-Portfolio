import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About";
import Skills from "./components/Skills";
import Profile from "./components/Profile";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import Footer from "./components/Footer";



function App() {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    <>
    <div className="dark:bg-[#0b061f] relative">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <About/>
      <Skills/>
      <Profile/>
      <Projects />
      <Contact/>
      <Footer />
    </div>
    </>
  )
}

export default App

import About from "./components/about/About"
import Education from "./components/education/Education"
import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import HeroSection from "./components/hero-section/HeroSection"
import Projects from "./components/projects/Projects"
import Skills from "./components/skills/Skills"



function App() {
  

  return (
    <div className="bg-[#f8f9fa]">
    <Header />
    <HeroSection />
    <About />
    <Education />
    <Projects />
    <Skills />
    <Footer />
    </div>
  )
}

export default App

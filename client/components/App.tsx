
import Nav from "./Nav"
import Projects from "./Projects"
import About from "./About"
import Contact from "./Contact"
import Learning from "./Learning"




const App = () => {
  
  return (
    <>
    <Nav/>
      <div className="landing-img flex content-center justify-start flex-wrap">
        <div className="flex flex-col justify-center w-1/2 content-center flex-wrap shrink">
          
          <h1 className="mr-5 text-6xl mb-5">Katie Davies</h1>
          <p>A Full-stack Developer with a passion for learning and teaching!</p>
          
      </div>


    </div>
    <div id="about">
    <About/>
    </div>
    <div id="projects">
    <Projects />
    </div>
    <div id="learning">
      <Learning/>
    </div>
    <div id="contact">
      <Contact/>
    </div>
    

    </>
  )
}

export default App

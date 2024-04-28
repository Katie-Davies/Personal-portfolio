import Nav from './Nav'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Learning from './Learning'
import DirtRider from './DirtRider'
import MealEasy from './MealEasy'
import Todos from './Todos'
import Prompter from './Prompter'
import Foundations from './Foundations'

const App = () => {
  return (
    <>
      <Nav />
      <div className="landing-img flex content-center justify-start flex-wrap">
        <div className="flex flex-col justify-center w-1/2 content-center flex-wrap shrink">
          <h1 className="mr-5 text-6xl mb-5">Katie Davies</h1>
          <p>
            A Full-stack Developer with a passion for learning and teaching!
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div id="about">
          <div className="w-full h-20 bg-white"></div>
          <About />
        </div>
        <div id="projects" className="h-auto">
          <Projects />
        </div>
        <div className="h-20 bg-white"></div>
        <div id="contact" className="h-auto ">
          <Contact />
        </div>
      </div>
    </>
  )
}

export default App

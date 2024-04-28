import Nav from './Nav'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Footer from './Footer'

const App = () => {
  return (
    <>
      <Nav />
      <div className="landing-img flex content-center justify-start flex-wrap">
        <div className="flex flex-col justify-center w-1/2 content-center flex-wrap shrink">
          <h1 className="mr-5 text-2xl mb-5 lg:text-6xl">Katie Davies</h1>
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
        <div id="contact" className="h-auto ">
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App

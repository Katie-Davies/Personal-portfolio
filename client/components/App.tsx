import { Outlet } from "react-router-dom"
import Nav from "./Nav"




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

    <Outlet/>
    </>
  )
}

export default App

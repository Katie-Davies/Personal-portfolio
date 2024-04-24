import { Outlet } from "react-router-dom"




const App = () => {
  
  return (
    <>
      <div className="landing-img flex content-center justify-start flex-wrap">
        <div className="flex justify-center w-1/2">
          
          <h1 className="mr-5 text-6xl">Katie Davies</h1>
          
      </div>


    </div>
    <Outlet/>
    </>
  )
}

export default App

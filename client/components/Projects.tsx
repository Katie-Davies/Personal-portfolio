
import DirtRider from "./DirtRider"
import Foundations from "./Foundations"
import MealEasy from "./MealEasy"
import Prompter from "./Prompter"
import Todos from "./Todos"

function Projects() {

  return (
  <>
  <div className="flex justify-center">
  <h1>Projects</h1>
  </div>
<div className="flex flex-col content-center flex-wrap h-lvh">
  <DirtRider/>
  <MealEasy/>
    <Todos/>
    <Prompter/>
    <Foundations />
  
</div>
  {/* <button onMouseEnter={handleHover}>Hover test </button> */}
  </>)
}

export default Projects
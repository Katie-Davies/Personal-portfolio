
import DirtRider from "./DirtRider"
import MealEasy from "./MealEasy"

function Projects() {

  return (
  <>
  <div className="flex justify-center">
  <h1>Projects</h1>
  </div>
<div className="flex flex-col content-center flex-wrap h-lvh">
  <DirtRider/>
  <MealEasy/>
</div>
  {/* <button onMouseEnter={handleHover}>Hover test </button> */}
  </>)
}

export default Projects
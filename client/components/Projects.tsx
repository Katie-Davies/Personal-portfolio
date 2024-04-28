import DirtRider from './DirtRider'
import Foundations from './Foundations'
import MealEasy from './MealEasy'
import Prompter from './Prompter'
import Todos from './Todos'

function Projects() {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl mb-10 ">
          Projects
        </h1>
      </div>
      <div className="flex flex-col h-auto">
        <div className="flex justify-center">
          <DirtRider />
        </div>
        <div>
          <MealEasy />
        </div>
        <div>
          <Todos />
        </div>
        <div>
          <Prompter />
        </div>
        <div>
          <Foundations />
        </div>
      </div>
    </>
  )
}

export default Projects

import DirtRider from './DirtRider'
import Disney from './Disney'

import MealEasy from './MealEasy'
import Prompter from './Prompter'
import Todos from './Todos'

function Projects() {
  return (
    <>
      <div className="bg-white h-20 w-full"></div>
      <div className="flex justify-center">
        <h1 className="text-base md:text-2xl lg:text-4xl mb-10 font-bold">
          Projects
        </h1>
      </div>
      <div className="flex flex-col h-auto">
        <div className="flex justify-center">
          <DirtRider />
        </div>
        <div className="flex justify-center">
          <MealEasy />
        </div>
        <div className="flex justify-center">
          <Todos />
        </div>
        <div className="flex justify-center">
          <Prompter />
        </div>
        <div className="flex justify-center">
          <Disney />
        </div>
      </div>
    </>
  )
}

export default Projects

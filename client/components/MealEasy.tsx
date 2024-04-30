function MealEasy() {
  return (
    <>
      <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto">
        <div className="mealeasy-bg flex content-start justify-center flex-wrap ml-5">
          <div className="flex content-center flex-wrap w-2/3 justify-center mt-10">
            <ul>
              <li className="font-bold mb-3 text-2xl">MealEasy</li>
              <li>
                <strong>Status:</strong> Deployed V1 | Development V2
              </li>
              <li>
                <strong>Tech: </strong>React | React-Router | Node | Express |
                Typescript | sqlite | Auth0 | REST API | Unit-Testing
              </li>

              <li className="mt-3">
                This was my final group project to create a meal planner app to
                ease the weekly stress of finding recipes. Users are able to set
                preferences, load more recipes, select and view shopping lists.
                They can then reselect plans from previous weeks.
              </li>
              <li className="mt-2">
                <strong>Next Steps:</strong> User adding own recipes, using a
                non-relational database and deploying on cloud.
              </li>
            </ul>
          </div>
        </div>
        <div className="flex content-center flex-wrap">
          <a
            href="https://meal-easy.pushed.nz/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="client/assets/mealeasy.png"
              alt="view of MealEasy website"
              className="max-w-sm scale-90 hover:scale-100"
            ></img>
          </a>
        </div>
      </div>
    </>
  )
}

export default MealEasy

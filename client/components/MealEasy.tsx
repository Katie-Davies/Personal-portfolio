function MealEasy() {
  return (
    <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto">
      <div className="mealeasy-bg flex content-start justify-center flex-wrap ml-5">
        <div className="flex content-center flex-wrap w-2/3 justify-center mt-10">
          <ul>
            <li>
              <strong>Status:</strong> Deployed
            </li>
            <li>
              <strong>Tech: </strong>React | React-Router | Node | Express |
              Typescript | sqlite3 | Dokku
            </li>

            <li className="mt-5">
              This was my first full-stack application and deployment, creating
              a simple todos list. It was a challenge to explore how to work
              with different data types and how this can change the
              functionality in the front. Working with booleans to be able to
              use checkboxes.
            </li>
            <li>
              <strong>Stretches:</strong> Adding the option to edit a todo.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <a href="https://meal-easy.pushed.nz/" target="_blank" rel="noreferrer">
          <img
            src="client/assets/greenLogo.png"
            alt="MealEasy Logo"
            className="w-40"
          ></img>
        </a>
        <a href="https://meal-easy.pushed.nz/" target="_blank" rel="noreferrer">
          <img
            src="client/assets/mealeasy.png"
            alt="view of MealEasy website"
            className="max-w-sm"
          ></img>
        </a>
      </div>
    </div>
  )
}

export default MealEasy

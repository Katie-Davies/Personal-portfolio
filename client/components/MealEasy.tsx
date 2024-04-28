function MealEasy() {
  return (
    <>
      <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto">
        <div className="mealeasy-bg flex content-start justify-center flex-wrap ml-5">
          <div className="flex content-center flex-wrap w-2/3 justify-center mt-10">
            <ul>
              <li className="font-bold">MealEasy</li>
              <li>
                <strong>Status:</strong> Deployed
              </li>
              <li>
                <strong>Tech: </strong>React | React-Router | Node | Express |
                Typescript | sqlite3 | Auth0 | Dokku
              </li>

              <li className="mt-3">
                This was my first full-stack application and deployment,
                creating a simple todos list. It was a challenge to explore how
                to work with different data types and how this can change the
                functionality in the front. Working with booleans to be able to
                use checkboxes.
              </li>
              <li>
                <strong>Stretches:</strong> Adding the option to edit a todo.
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
              className="max-w-sm"
            ></img>
          </a>
        </div>
      </div>
    </>
  )
}

export default MealEasy

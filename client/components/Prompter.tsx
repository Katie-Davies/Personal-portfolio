function Prompter() {
  return (
    <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto">
      <div className="prompter-bg flex content-start justify-center flex-wrap ml-5">
        <div className="flex content-center flex-wrap w-2/3 justify-center mt-10">
          <ul>
            <li className="font-bold mb-2">Prompter</li>
            <li>
              <strong>Status:</strong> Completed
            </li>
            <li>
              <strong>Tech: </strong>React | React-Router | Node | Express |
              Typescript | sqlite3 | Auth0
            </li>

            <li className="mt-3">
              This was my first full-stack application and deployment, creating
              a simple todos list. It was a challenge to explore how to work
              with different data types and how this can change the
              functionality in the front. Working with booleans to be able to
              use checkboxes.
            </li>
          </ul>
        </div>
      </div>
      <div className="flex content-center flex-wrap">
        <a
          href="https://github.com/Katie-Davies/Prompter-Friday-Project"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="client/assets/prompter-bg.png"
            alt="view of Prompter website"
            className="max-w-sm"
          ></img>
        </a>
      </div>
    </div>
  )
}
export default Prompter

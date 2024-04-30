function Todos() {
  return (
    <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto">
      <div className="flex content-center flex-wrap">
        <a
          href="https://kate-todos.pushed.nz/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="client/assets/todos-bg.png"
            alt="view of todos website"
            className="max-w-sm scale-90 hover:scale-100"
          ></img>
        </a>
      </div>

      <div className="todos-bg flex content-start justify-center flex-wrap ml-5">
        <div className="flex content-center flex-wrap w-2/3 justify-center mt-10">
          <ul>
            <li className="font-bold mb-3 text-2xl">Todos</li>
            <li>
              <strong>Status:</strong> Deployed V1
            </li>
            <li>
              <strong>Tech: </strong>React | Node | Express | Typescript |
              sqlite3 | Dokku
            </li>

            <li className="mt-3">
              This was my first full-stack application and deployment, creating
              a simple todos list. It was a challenge to explore how to work
              with different data types and how this can change the
              functionality in the front. Working with booleans to be able to
              use checkboxes.
            </li>
            <li className="mt-5">
              <strong>Next steps:</strong> Adding the option to edit a todo.
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Todos

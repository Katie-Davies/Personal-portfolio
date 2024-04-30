function Prompter() {
  return (
    <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto sm:m-5">
      <div className="prompter-bg flex content-start justify-center flex-wrap ml-5">
        <div className="flex content-center flex-wrap w-2/3 justify-center mt-10 mr-5">
          <ul>
            <li className="font-bold mb-3 text-2xl">Prompter</li>
            <li>
              <strong>Status:</strong> Completed
            </li>
            <li>
              <strong>Tech: </strong>React | React-Router | Node | Express |
              Typescript | sqlite3 | Auth0
            </li>

            <li className="mt-3">
              A Friday group project based on Reddit to create a fun place for
              people to find icebreaker questions and post their response. This
              was our first project implementing Auth0 to allow users to have
              their own accounts.
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
            className="max-w-sm scale-90 hover:scale-100"
          ></img>
        </a>
      </div>
    </div>
  )
}
export default Prompter

function Disney() {
  return (
    <>
      <div className="flex mb-5 justify-center flex-wrap mx-5 h-auto">
        <div className="flex content-center flex-wrap">
          <a
            href="https://github.com/Katie-Davies/Disney-Trivia"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="client/assets/disneygame.png"
              alt="view of disney trivia website"
              className="max-w-sm scale-90 hover:scale-100"
            ></img>
          </a>
        </div>

        <div className="dirtrider-bg flex content-start justify-center flex-wrap ml-5">
          <div className="flex content-center flex-wrap w-2/3 justify-center mt-10">
            <ul>
              <li className="font-bold mb-2 text-2xl">Disney Trivia</li>
              <li>
                <strong>Status:</strong> Completed V1
              </li>
              <li>
                <strong>Tech: </strong>React | React-Router | Node | Express |
                Typescript | sqlite | Unit Testing | React Toastify
              </li>

              <li className="mt-2">
                A fun project to create a short disney trivia game. Practising
                my skills with using a database and using useQuery and
                useMutation to access the data. I also learnt how to use React
                Toastify library.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Disney

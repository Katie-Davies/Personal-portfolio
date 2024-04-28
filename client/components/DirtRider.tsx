function DirtRider() {
  // function handleHover (e) {
  // return

  // }
  return (
    <>
      <div className="flex mb-5 flex-wrap mx-5">
        <div>
          <a
            href="https://github.com/Katie-Davies/DirtRider"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="client/assets/dirtrider.png"
              alt="DirtriderLogo"
              className="w-40"
            ></img>
          </a>
          <a
            href="https://github.com/Katie-Davies/DirtRider"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="client/assets/dirtriderview.png"
              alt="view of dirtrider website"
              className="max-w-sm"
            ></img>
          </a>
        </div>

        <div className="dirtrider-bg flex content-start justify-center flex-wrap">
          <div className="flex content-center flex-wrap w-2/3 justify-center mt-10">
            <ul>
              <li>
                <strong>Status:</strong> Development
              </li>
              <li>
                <strong>Tech: </strong>React | React-Router | Node | Express |
                Typescript | SQL | Azure AD B2C
              </li>
              <li>
                <strong>Currently learning:</strong> PostgreSQL and Azure AD.
              </li>
              <li className="mt-5">
                This is a personal project based on a need I noticed when
                shopping for my own dirtbike. Being able to try out different
                bikes to see which ones suits you best. Allowing people to rent
                out their bikes and make money when they are not using them.
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* <button onMouseEnter={handleHover}>Hover test </button> */}
    </>
  )
}

export default DirtRider

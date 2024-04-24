import { useState } from "react"

function DirtRider() {
const [isHovered, setIsHovered] = useState(false)

// function handleHover (e) {
// return 


// }
  return (
  <>
<div className="flex justify-around w-2/3 mb-5">

      <div
        className="hover-trigger "
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="https://github.com/Katie-Davies/DirtRider" target="_blank" rel="noreferrer"><img src="client/assets/dirtrider.png" alt="DirtriderLogo" className="w-64"></img></a>
        <img src="client/assets/dirtriderview.png" alt="view of dirtrider website"></img>

      </div>
      {/* {isHovered && (
        <div className="card ">
          <img src="client/assets/dirtriderview.png" alt="view of dirtrider website" className="w-1/4"></img>
        </div>
      )} */}
      <div className="flex content-center flex-wrap ml-5">
      <h3 className="mb-2"><strong>Status:</strong> Development</h3>
      <h3 className="mb-2"><strong>Tech: </strong>React | React-Router | Node | Express | Typescript | SQL | Azure AD B2C </h3>
      <p className="mb-2">This is a personal project based on a need I noticed when shopping for my own dirtbike. Being able to try out different bikes to see which ones suits you best. Allowing people to rent out their bikes and make money when they are not using them. </p>
      <br/>
      <p>Currently learning PostgreSQL and Azure AD. </p>

      </div>
  


    </div>
  {/* <button onMouseEnter={handleHover}>Hover test </button> */}
  </>)
}

export default DirtRider
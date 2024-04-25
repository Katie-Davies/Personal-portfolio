import { useState } from "react"

function MealEasy() {
const [isHovered, setIsHovered] = useState(false)

// function handleHover (e) {
// return 


// }
  return (
  <>


      <div
        className="hover-trigger"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <a href="https://github.com/Katie-Davies/DirtRider" target="_blank" rel="noreferrer"><img src="client/assets/dirtrider.png" alt="DirtriderLogo" className="w-64"></img></a>

      </div>
      {isHovered && (
        <div className="card ">
          <img src="client/assets/dirtriderview.png" alt="view of dirtrider website"></img>
        </div>
      )}
    
  



  {/* <button onMouseEnter={handleHover}>Hover test </button> */}
  </>)
}

export default MealEasy
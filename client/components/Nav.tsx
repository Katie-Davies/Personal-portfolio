function Nav() {
  return (
    <div className="fixed flex justify-between w-full bg-white">
      <h1 className="md:m-3 sm:m-2 lg:m-4 px-3">Katie Davies </h1>
      <div className="flex justify-around">
        <a href="#about" className="md:m-3 sm:m-2 lg:m-4 px-3">
          About
        </a>
        <a href="#projects" className="md:m-3 sm:m-2 lg:m-4 px-3 ">
          Projects
        </a>
        <a href="#learning" className="md:m-3 sm:m-2 lg:m-4 px-3 ">
          Learning
        </a>
        <a href="#contact" className="md:m-3 sm:m-2 lg:m-4 px-3 ">
          Contact
        </a>
      </div>
    </div>
  )
}

export default Nav

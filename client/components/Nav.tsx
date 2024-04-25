function Nav () {
  return (
  <div className="fixed flex justify-between w-full">
    <h1 className="md:m-4 sm:m-4 lg:m-6">Katie Davies </h1>
    <div className="flex justify-around">
      <a href="#about" className="md:m-4 sm:m-4 lg:m-6 px-3">About</a>
      <a href="#projects"className="md:m-4 sm:m-4 lg:m-6 px-3 ">Projects</a>
      <a href="#Learning"className="md:m-4 sm:m-4 lg:m-6 px-3 ">Learning</a>
      <a href="#contact" className="md:m-4 sm:m-4 lg:m-6 px-3 ">Contact</a>
    </div>
    </div>)
}

export default Nav
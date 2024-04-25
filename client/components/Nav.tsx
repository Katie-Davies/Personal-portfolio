function Nav () {
  return (
  <div className="fixed flex justify-between w-full">
    <h1 className="md:m-4 sm:m-4 lg:m-6">Katie Davies </h1>
    <div className="flex justify-around">
      <a href="#about" className="md:m-4 sm:m-4 lg:m-6 px-3">About</a>
      <h1 className="md:m-4 sm:m-4 lg:m-6 px-3 ">Projects</h1>
      <h1 className="md:m-4 sm:m-4 lg:m-6 px-3 ">Learning</h1>
      <h1 className="md:m-4 sm:m-4 lg:m-6 px-3 ">Contact</h1>
    </div>
    </div>)
}

export default Nav
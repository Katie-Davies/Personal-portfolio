function Nav() {
  const handleClick = (id: string) => {
    const heading = document.getElementById(id)
    if (heading) {
      // scroll through slowly
      heading.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadPdf = () => {
    const pdfUrl = 'client/assets/KatieDavies2024-updateCv.pdf'
    // Open the PDF file in a new window/tab
    window.open(pdfUrl, '_blank')
  }

  return (
    <div className="fixed flex justify-between w-full bg-white">
      <h1 className="md:m-3 sm:m-2 lg:m-4 px-3">Katie Davies </h1>
      <div className="flex justify-around">
        <button
          onClick={() => handleClick('about')}
          className="md:m-3 sm:m-2 lg:m-4 px-3"
        >
          About
        </button>
        <button
          onClick={() => handleClick('projects')}
          className="md:m-3 sm:m-2 lg:m-4 px-3 "
        >
          Projects
        </button>
        <button
          onClick={handleDownloadPdf}
          className="md:m-3 sm:m-2 lg:m-4 px-3 "
        >
          CV
        </button>
        <button
          onClick={() => handleClick('contact')}
          className="md:m-3 sm:m-2 lg:m-4 px-3 "
        >
          Contact
        </button>
      </div>
    </div>
  )
}

export default Nav

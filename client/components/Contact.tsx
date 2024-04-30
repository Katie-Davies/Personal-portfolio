function Contact() {
  return (
    <div className="contact-img flex justify-center flex-col content-center flex-wrap">
      <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl mb-20 text-center font-bold">
        Contact
      </h1>
      <div className="flex justify-around w-1/2 flex-wrap">
        <a href="https://www.linkedin.com/in/katie-davies-36351b275/">
          <img
            src="client/assets/LinkedIN_black.png"
            alt="linked in logo"
            className=" h-10 w-10 mt-3"
          ></img>
        </a>
        <a href="https://github.com/Katie-Davies">
          <img
            src="client/assets/GitHub_black.png"
            alt="github logo"
            className="h-10 w-10 mt-3"
          ></img>
        </a>
        <a href="https://medium.com/@millerkatie1990">
          <img
            src="client/assets/Medium_black.png"
            alt="Medium logo"
            className=" h-10 w-10 mt-3"
          ></img>
        </a>
      </div>
    </div>
  )
}

export default Contact

function Contact() {
  return (
    <div className="contact-img flex justify-center flex-col content-center flex-wrap">
      <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl mb-20 text-center">
        Contact
      </h1>
      <div className="flex justify-around w-1/3">
        <a href="https://www.linkedin.com/in/katie-davies-36351b275/">
          <img
            src="client/assets/LI-Logo.png"
            alt="linked in logo"
            className=" h-10 w-28"
          ></img>
        </a>
        <a href="https://github.com/Katie-Davies">
          <img
            src="client/assets/GitHub_Logo.png"
            alt="linked in logo"
            className=" h-10 w-20"
          ></img>
        </a>
      </div>
    </div>
  )
}

export default Contact

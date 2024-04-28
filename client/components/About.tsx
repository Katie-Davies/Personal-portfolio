function About() {
  return (
    <div className="w-full flex flex-col content-center mt-10 flex-wrap mb-20">
      <div className="flex justify-center flex-col flex-wrap content-center">
        <img
          src="client/assets/about.png"
          alt="3 swirls"
          className="w-44 h-auto"
        ></img>
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-4xl mb-5 text-center font-bold">
          About
        </h1>
      </div>
      <div className="flex flex-col flex-wrap content-center">
        <p className="text-center w-2/3 mb-5">
          I am a full-stack software developer with a passion for crafting
          meaningful digital experiences.
        </p>
        <p className="text-center w-2/3 mb-5">
          With a background in education as a Primary teacher, I bring a unique
          perspective to software development. My experience as a teacher taught
          me the value of adaptability, collaboration, and problem-solving
          skills that I now apply to coding every day.
        </p>
        <p className="text-center w-2/3 mb-5">
          As a lifelong learner, I thrive on the constant evolution of
          technology and the endless opportunities it presents for innovation.
          Whether it&apos;s building web applications, tinkering with new
          frameworks, or diving into the latest programming languages, I&apos;m
          always eager to expand my skill set and tackle new challenges.
        </p>
        <p className="text-center w-2/3 mb-5">
          I&apos;m a firm believer in the power of collaboration and teamwork.
          Working alongside talented individuals who share a common goal is
          where I truly thrive. Together, we can turn ideas into reality and
          create impactful solutions that make a difference in people&apos;s
          lives.
        </p>
        <p className="text-center w-2/3 mb-5">
          I&apos;m excited to continue my journey as a software developer,
          pushing boundaries, solving problems, and making a positive impact
          along the way. Let&apos;s build something amazing together!
        </p>
      </div>
    </div>
  )
}

export default About

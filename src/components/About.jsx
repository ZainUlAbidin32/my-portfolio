import { FaBriefcase, FaCode, FaGraduationCap, FaLaptopCode, FaTools } from "react-icons/fa"
import { FiPenTool } from "react-icons/fi"

const About = () => {
  return (
    <div id="about" className="flex flex-col  items-center px-4 py-8 gap-4 bg-gray-900 text-white lg:px-30 lg:gap-8">
      <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold lg:text-5xl">About Us</h2>
      </div>
      <div className="bg-gray-800 rounded-xl px-6 py-6 lg:text-xl">
        I’m a passionate web developer who loves turning ideas into modern,
          functional, and user-friendly websites. My approach is centered on
          clean design, strong performance, and creating digital experiences
          that truly matter.
      </div>
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="bg-gray-800 px-6 py-6 rounded-xl flex flex-col gap-4 hover:bg-amber-600 transition-all duration-300 cursor-pointer">
            <FiPenTool size={40}/>
            <h3 className="text-xl font-bold">DESIGN</h3>
            <p>I focus on crafting clean, attractive, and intuitive interfaces.
              From color choices to layout, every detail is carefully designed
              to make websites visually appealing and easy to navigate.</p>
        </div>
        <div className="bg-gray-800 px-6 py-6 rounded-xl flex flex-col gap-4  hover:bg-amber-600 transition-all duration-300 cursor-pointer">
            <FaCode size={40}/>
            <h3 className="text-xl font-bold">DEVELOPMENT</h3>
            <p>I build responsive and efficient websites using the latest web
              technologies. My goal is to ensure seamless functionality across
              devices while maintaining speed, performance, and scalability.</p>
        </div>
        <div className="bg-gray-800 px-6 py-6 rounded-xl flex flex-col gap-4  hover:bg-amber-600 transition-all duration-300 cursor-pointer">
            <FaTools size={40}/>
            <h3 className="text-xl font-bold">MAINTENANCE</h3>
            <p>Websites need care even after launch. I provide ongoing support,
            updates, and optimizations to keep websites secure, up-to-date, and
            running smoothly.</p>
        </div>
      </div>
      <div className="flex w-full items-center justify-between gap-3 bg-gray-800 px-6 py-6 rounded-xl lg:gap-9 lg:w-full lg:px-24">
        <div className="flex flex-col items-center gap-1">
            <FaBriefcase className="text-amber-600 text-lg lg:text-4xl"/>
            <p className="font-bold lg:text-xl">10+</p>
            <h4 className="text-xs lg:text-base">Projects</h4>
        </div>
        <div className="flex flex-col items-center gap-1">
            <FaCode className="text-amber-600 text-lg lg:text-4xl"/>
            <p className="font-bold lg:text-xl">15+</p>
            <h4 className="text-xs lg:text-base">Technologies</h4>
        </div>
        <div className="flex flex-col items-center gap-1">
            <FaGraduationCap className="text-amber-600 text-lg lg:text-4xl"/>
            <p className="font-bold lg:text-xl">2+</p>
            <h4 className="text-xs lg:text-base">Learning</h4>
        </div>
        <div className="flex flex-col items-center gap-1">
            <FaLaptopCode className="text-amber-600 text-lg lg:text-4xl"/>
            <p className="font-bold lg:text-xl">500+</p>
            <h4 className="text-xs lg:text-base">Coding Hours</h4>
        </div>
      </div>
    </div>
  )
}

export default About
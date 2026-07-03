import { FaFacebook,  FaGithub,   FaLinkedin,  } from "react-icons/fa"
import HeroBgImage from "../assets/images/Image.png"
import { HiOutlineMail } from "react-icons/hi"

const Home = () => {
  return (
    <div id="home" className="relative flex flex-col text-white h-90 items-center justify-center px-4 overflow-x-hidden lg:items-start lg:px-30 lg:h-125">
      <img src={HeroBgImage} className="absolute inset-0 w-full h-full object-cover translate-x-20
      lg:object-contain lg:translate-x-80" alt="" />
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col gap-4">
        <p className="text-orange-600 font-bold lg:text-lg">HELLO, MY NAME IS</p>
        <h1 className="text-4xl lg:text-6xl">
            Zain Ul Abidin
        </h1>
        <p className="lg:text-lg">I'M a Software Engineer & MERN Stack Developer</p>
        <div className="flex gap-4 items-center">
            <a href="https://www.facebook.com/zain.ul.abidin.361784" target="_blank" className="bg-gray-800 rounded-full p-3">
                <FaFacebook size={20}/>
            </a>
            <a href="https://www.linkedin.com/in/zain-ul-abidin-453543270/" target="_blank" className="bg-gray-800 rounded-full p-3">
                <FaLinkedin size={20}/>
            </a>
            <a href="https://github.com/ZainUlAbidin32" target="_blank" className="bg-gray-800 rounded-full p-3">
                <FaGithub size={20}/>
            </a>
            <a href="mailto:iamzain0032@gmail.com" target="_blank" className="bg-gray-800 rounded-full p-3">
                <HiOutlineMail size={20}/>
            </a> 
        </div>
      </div>
    </div>
  )
}

export default Home

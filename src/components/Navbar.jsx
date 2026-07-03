import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  return (
    <div className="fixed top-0 w-full z-50 flex justify-between items-center text-white bg-gray-900 px-4 py-4 lg:px-8">
      <div className="text-xl font-bold">&lt;ZA /&gt;</div>
      <button
        className="font-bold lg:hidden"
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <IoClose size={30} /> : <HiOutlineMenu size={30} />}
      </button>
      {open && (
        <div className="absolute left-0 top-full flex flex-col items-center bg-gray-900 text-white w-full text-lg gap-1 py-1">
          <a href="#home" onClick={()=>setOpen(false)}>Home</a>
          <a href="#about" onClick={()=>setOpen(false)}>About Me</a>
          <a href="#skills" onClick={()=>setOpen(false)}>Skills</a>
          <a href="#projects" onClick={()=>setOpen(false)}>Projects</a>
          <a href="#contact" onClick={()=>setOpen(false)}>Contact</a>
        </div>
      )}
      <div className="hidden lg:flex lg:items-center lg:gap-10 lg:font-bold">
        <a
          href="#home"
          onClick={() => setActive("home")}
          className={
            active === "home"
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          Home
        </a>
        <a
          href="#about"
          onClick={() => setActive("about")}
          className={
            active === "about"
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          About
        </a>
        <a
          href="#skills"
          onClick={() => setActive("skills")}
          className={
            active === "skills"
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          Skills
        </a>
        <a
          href="#projects"
          onClick={() => setActive("projects")}
          className={
            active === "projects"
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          Projects
        </a>
        <a
          href="#contact"
          onClick={() => setActive("contact")}
          className={
            active === "contact"
              ? "text-orange-500 border-b-2 border-orange-500"
              : ""
          }
        >
          Contact
        </a>
      </div>
      <div className="hidden lg:block">
        <a href="#connect">
          <button className="bg-orange-600 text-white py-2 px-4 font-bold cursor-pointer">
          Let's Talk
        </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;

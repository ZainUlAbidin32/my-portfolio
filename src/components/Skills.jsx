import skill1 from "../assets/images/HTML.png";
import skill2 from "../assets/images/CSS.png";
import skill3 from "../assets/images/JS.png";
import skill4 from "../assets/images/REACT.png";
import skill5 from "../assets/images/TAILWIND.png";
import skill6 from "../assets/images/FIGMA.png";
const Skills = () => {
  return (
    <div id="skills" className="flex flex-col  items-center px-4 py-20 gap-4 bg-gradient-to-t from-gray-800 to-black text-white lg:px-30 lg:gap-15">
      <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold lg:text-5xl">Skills</h2>
      </div>   
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        <div className="flex flex-col gap-2 px-10 py-5 border border-green-600 rounded-xl w-full">
          <div className="flex items-center gap-6 justify-between">
            <img src={skill1} className="h-15" alt="" />
            <h4 className="font-bold">HTML</h4>
            <p className="font-bold">90%</p>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full">
            <div className="w-[90%] h-full bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-10 py-5 border border-green-600 rounded-xl w-full">
          <div className="flex items-center gap-6 justify-between">
            <img src={skill2} className="h-15" alt="" />
            <h4 className="font-bold">CSS</h4>
            <p className="font-bold">85%</p>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full">
            <div className="w-[85%] h-full bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-10 py-5 border border-green-600 rounded-xl w-full">
          <div className="flex items-center gap-6 justify-between">
            <img src={skill3} className="h-15" alt="" />
            <h4 className="font-bold">JS</h4>
            <p className="font-bold">80%</p>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full">
            <div className="w-[80%] h-full bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-10 py-5 border border-green-600 rounded-xl w-full">
          <div className="flex items-center gap-6 justify-between">
            <img src={skill4} className="h-15" alt="" />
            <h4 className="font-bold">REACT</h4>
            <p className="font-bold">80%</p>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full">
            <div className="w-[80%] h-full bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-10 py-5 border border-green-600 rounded-xl w-full">
          <div className="flex items-center justify-between">
            <img src={skill5} className="h-15" alt="" />
            <h4 className="font-bold">TAILWIND CSS</h4>
            <p className="font-bold">90%</p>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full">
            <div className="w-[90%] h-full bg-orange-500 rounded-full"></div>
          </div>
        </div>
        <div className="flex flex-col gap-2 px-10 py-5 border border-green-600 rounded-xl w-full">
          <div className="flex items-center justify-between">
            <img src={skill6} className="h-15" alt="" />
            <h4 className="font-bold">FIGMA</h4>
            <p className="font-bold">70%</p>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full">
            <div className="w-[70%] h-full bg-orange-500 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
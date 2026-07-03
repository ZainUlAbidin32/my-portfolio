const ProjectCard = ({image, name, desc, live, code}) => {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-gray-800 justify-between  overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <img src={image} className="h-50 lg:h-80 object-cover" alt="" />
      <h5 className="px-3 text-amber-600 font-bold text-xl">{name}</h5>
      <p className="px-3">{desc}</p>
      <div className="flex justify-between px-3 gap-4 pb-3">
        <button className="py-2 px-4 bg-amber-600 w-full rounded-xl font-bold cursor-pointer hover:text-amber-600 hover:border-2 hover:border-amber-600 hover:bg-white hover:transition-all"><a href={live} target="_blank">LIVE</a></button>
        <button className="py-2 px-4 bg-amber-600 w-full rounded-xl font-bold cursor-pointer hover:text-amber-600 hover:border-2 hover:border-amber-600 hover:bg-white hover:transition-all"><a href={code} target="_blank">CODE</a></button>
      </div>
    </div>
  )
}

export default ProjectCard
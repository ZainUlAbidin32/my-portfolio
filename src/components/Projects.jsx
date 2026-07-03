import netflix from '../assets/images/Netflix.png'
import gmail from '../assets/images/Gmail.png'
import linkedin from '../assets/images/Linkedin.png'
import movie from '../assets/images/Movie.png'
import agency from '../assets/images/Agency-AI.jpeg'
import enside from '../assets/images/Enside.jpeg'
import ProjectCard from './ProjectCard'

const Projects = () => {
    const projects = [
        {
          image: netflix,
          name: "NetFlix Clone",
          live: "https://zainulabidin32.github.io/netflix-clone/",
          code: "https://github.com/ZainUlAbidin32/netflix-clone",
          desc: "Developed a responsive Netflix clone using HTML, CSS, and React, ensuring a seamless user experience across all devices and screen sizes. Integrated the TMDb API to fetch and display real-time movie data, enhancing functionality and providing dynamic content.",
        },
        {
          image: gmail,
          name: "Gmail Clone",
          live: "https://zainulabidin32.github.io/gmail-clone/",
          code: "https://github.com/ZainUlAbidin32/gmail-clone",
          desc: "Developed a Gmail clone using HTML, CSS, and React, replicating the core functionality of Gmail and similar user interface. Implemented email composition features , allowing users to create and send new emails, enhancing the app’s functionality.",
        },
        {
          image: linkedin,
          name: "Linkedin Clone",
          live: "https://zainulabidin32.github.io/linkedin-clone/",
          code: "https://github.com/ZainUlAbidin32/linkedin-clone",
          desc: "Built a LinkedIn clone using HTML for structure, CSS and Bootstrap for styling, and React.js for a dynamic user interface. Integrated Firebase for backend services, including user authentication, database storage, and real-time functionality.",
        },
        {
          image: movie,
          name: "Movies Rating App",
          live: "https://zainulabidin32.github.io/linkedin-clone/",
          code: "https://zainulabidin32.github.io/movie-app/",
          desc: "Developed a responsive movie information and rating application using HTML, CSS, and Vanilla JavaScript, providing users with an intuitive interface to explore movies. Integrated a free movie API to fetch and display real-time details and ratings, enhancing functionality and delivering dynamic content.",
        },
        {
          image: agency,
          name: "Agency AI",
          live: "https://agency-ai0.netlify.app/",
          code: "https://github.com/ZainUlAbidin32/Agency-AI",
          desc: "Built a modern website frontend using React and Tailwind CSS. The website includes multiple pages such as Home, Services, Our Work, and Contact Us. It is fully responsive across all devices, featuring a clean, modern UI design focused on showcasing agency services and portfolio work with a smooth user experience."
        },
        {
          image: enside,
          name: "Enside Clone",
          live: "https://enside-clone.netlify.app/",
          code: "https://github.com/ZainUlAbidin32/Enside-Clone",
          desc: "Developed a responsive clone of the Enside website using React, Tailwind CSS, React Icons, and Motion. Recreated the original design with a modern, interactive user interface, smooth animations, and a fully responsive layout, ensuring an engaging user experience across all devices.",
        }
      ];
  return (
    <div id='projects' className="flex flex-col  items-center px-4 py-20 gap-4 bg-gray-900 text-white lg:px-30 lg:gap-15">
      <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold lg:text-5xl">Projects</h2>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((p,i)=>(
            <ProjectCard key={i} image={p.image} name={p.name} desc={p.desc} live={p.live} code={p.code} />
        ))}
      </div>
    </div>
  )
}

export default Projects
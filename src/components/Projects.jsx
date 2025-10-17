import React from 'react'
import "../style/Projectstyle.css"
 const projects = [
  {
    name: "VibeCodingCheck",
    description: "Platform for coding challenges and exercises.",
    link: "https://github.com/jayeshpatel882006/VibeCodingCheck",
  },
  {
    name: "E-Commerce React Frontend",
    description: "Responsive React frontend for e-commerce site.",
    link: "https://github.com/jayeshpatel882006/e-commerce-react-frontend",
  },
  {
    name: "E-Commerce Spring Backend",
    description: "Spring Boot backend for managing products and orders.",
    link: "https://github.com/jayeshpatel882006/e-commerce-spring-backend",
  },
  {
    name: "Jayesh Portfolio 2025",
    description: "React portfolio showcasing skills and projects.",
    link: "https://github.com/jayeshpatel882006/jayeshportfolio2025",
  },
  {
    name: "DeepSeek with EReact",
    description: "React project exploring AI and deep learning.",
    link: "https://github.com/jayeshpatel882006/deepseek-with-ereact",
  },
  {
    name: "DAA",
    description: "Design and Analysis of Algorithms implementations.",
    link: "https://github.com/jayeshpatel882006/DAA",
  },
  {
    name: "SpringFirst",
    description: "Basic Spring Boot backend project.",
    link: "https://github.com/jayeshpatel882006/springfirst",
  },
  {
    name: "Portfolio 2025",
    description: "Modern portfolio design with React and Tailwind.",
    link: "https://github.com/jayeshpatel882006/portfolio2025",
  },
  {
    name: "Jayesh 2025 Portfolio",
    description: "Polished portfolio version showing projects.",
    link: "https://github.com/jayeshpatel882006/jayesh2025portfolio",
  },
  {
    name: "YouTube MERN",
    description: "Video platform using MERN stack.",
    link: "https://github.com/jayeshpatel882006/youtubeMern",
  },
  {
    name: "Ecommerce React",
    description: "Reusable React components for e-commerce UI.",
    link: "https://github.com/jayeshpatel882006/Ecommerce-React",
  },
  {
    name: "Recipe App (Next.js)",
    description: "Recipe discovery app built with Next.js.",
    link: "https://github.com/jayeshpatel882006/Recipe-App-NextJs-",
  },
  {
    name: "Portfolio 2023",
    description: "Older portfolio version from 2023.",
    link: "https://github.com/jayeshpatel882006/portfolio2023",
  },
  {
    name: "Card Flip Game",
    description: "Memory card matching game in React.",
    link: "https://github.com/jayeshpatel882006/CardFlipGame",
  },
  {
    name: "Project Diploma",
    description: "Diploma project showcasing early web work.",
    link: "https://github.com/jayeshpatel882006/PROJECTDiploma",
  },
  {
    name: "MERN Notebook",
    description: "MERN app for managing personal notes.",
    link: "https://github.com/jayeshpatel882006/mernNotebook",
  },
  {
    name: "Text Converter",
    description: "App for quick text transformations.",
    link: "https://github.com/jayeshpatel882006/TextConverter",
  },
  {
    name: "QR Code Generator",
    description: "Generate QR codes instantly.",
    link: "https://github.com/jayeshpatel882006/qrCodeGenrator",
  },
  {
    name: "News App",
    description: "React app displaying real-time news.",
    link: "https://github.com/jayeshpatel882006/newsApp",
  },
  {
    name: "MERN Project (Feb 2024)",
    description: "Full MERN stack CRUD app with auth.",
    link: "https://github.com/jayeshpatel882006/mernProjectfeb2024",
  },
  {
    name: "Notes",
    description: "Simple note-taking React app.",
    link: "https://github.com/jayeshpatel882006/notes",
  },
  {
    name: "TextNotetionOne",
    description: "Experimental note management app.",
    link: "https://github.com/jayeshpatel882006/textnotetionone",
  },
  {
    name: "Teest",
    description: "Repository for testing experiments.",
    link: "https://github.com/jayeshpatel882006/teest",
  },
  {
    name: "Testing",
    description: "Repo for experimental coding tests.",
    link: "https://github.com/jayeshpatel882006/testing",
  },
];



const Projects = ({reef}) => {
  return (
    <div ref={reef} className='projectMainDiv maindivs'>
      <p className='nameproject'>Personal Projects</p>
      <div className='projectsubdiv'>
        {projects.map((projectitem,index)=>(
          <>
          <div key={index} className='individualproject'>
            <h3 className='projectname'>{projectitem.name}</h3>
            <p className='projectdesc'>{projectitem.description.length > 30 ? 
            projectitem.description.slice(0,30)+"..." :projectitem.description }</p>
            <Button link={projectitem.link}/>
            </div>
          </>
        ))}
      </div>
    </div>
  )
}

export default Projects


const Button = ({link}) => {
  return (
    <div>
      <div className="button-icon">
        <div className="icon">
          <svg viewBox="0 0 24 24">
            <path d="M12 0.296997C5.37 0.296997 0 5.67 0 12.297C0 17.6 3.438 22.097 8.205 23.682C8.805 23.795 9.025 23.424 9.025 23.105C9.025 22.82 9.015 22.065 9.01 21.065C5.672 21.789 4.968 19.455 4.968 19.455C4.422 18.07 3.633 17.7 3.633 17.7C2.546 16.956 3.717 16.971 3.717 16.971C4.922 17.055 5.555 18.207 5.555 18.207C6.625 20.042 8.364 19.512 9.05 19.205C9.158 18.429 9.467 17.9 9.81 17.6C7.145 17.3 4.344 16.268 4.344 11.67C4.344 10.36 4.809 9.29 5.579 8.45C5.444 8.147 5.039 6.927 5.684 5.274C5.684 5.274 6.689 4.952 8.984 6.504C9.944 6.237 10.964 6.105 11.984 6.099C13.004 6.105 14.024 6.237 14.984 6.504C17.264 4.952 18.269 5.274 18.269 5.274C18.914 6.927 18.509 8.147 18.389 8.45C19.154 9.29 19.619 10.36 19.619 11.67C19.619 16.28 16.814 17.295 14.144 17.59C14.564 17.95 14.954 18.686 14.954 19.81C14.954 21.416 14.939 22.706 14.939 23.096C14.939 23.411 15.149 23.786 15.764 23.666C20.565 22.092 24 17.592 24 12.297C24 5.67 18.627 0.296997 12 0.296997Z" fill="#222229" />
          </svg>
        </div>
        <div className="cube">
          <span className="side front">Source Code</span>
          <a href={link} target='_blank' className="side top">check it on github</a>
        </div>
      </div>
    </div>
  );
}
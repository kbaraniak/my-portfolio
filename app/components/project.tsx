import React, { useRef } from 'react'
import Link from 'next/link';

interface ProjectProps {
   projectName: string;
   projectID: string;
   projectDescription: string;
   projectType: string;
   projectCategory: string;
   projectUrl: string;
}

const Project: React.FC<ProjectProps> = ({ projectName, projectID, projectDescription, projectType, projectCategory, projectUrl }) => {
   const newUrl = "http://" + projectUrl;
   const elmRef = useRef<HTMLInputElement>(null)
   function openProject() {
      elmRef.current.addEventListener("click", () => {
         window.location.href = newUrl
      });
   }

   return (
      <div className="mt-5" id={projectID} ref={elmRef} onClick={openProject}>
         <div className='rounded-lg mx-3 my-2 px-7 py-0 bg-[#4b4b4b80] hover:bg-stone-900 transition-opacity ease-in-out delay-150 cursor-pointer' style={{transition: '0.5s all'}}>
            <div className="project-img w-[19.5rem] max-md:w-[17.5rem] h-60 max-md:h-52 bg-transparent md:mx-3 md:my-2 flex justify-center items-center">
               <div id="frame" className={projectCategory}>
                  <div id="frame-header">
                     <h2 className="font-itim" style={{ fontSize: '22px' }}>{projectType}</h2>
                  </div>
               </div>
            </div>
         </div>
         <h1 className='mt-2 text-center cursor-pointer hover:text-red-600'>
            <Link href={newUrl}>{projectUrl}</Link>
         </h1>
         {/* <div className="badges flex justify-center items-center">
            <div className="html"></div>
            <div className="css"></div>
            <div className="js"></div>
         </div> */}
      </div>
   )
}

export default Project;

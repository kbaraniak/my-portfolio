import React from 'react'

function Project(projectName: string, projectID: string, projectDescription: string, projectType: string, projectUrl: string){
  return (
     <div className="project" id={projectID}>
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <div id="frame" className="social">
                  <div id="frame-header">
                     <h2 className="font-itim">{projectType}</h2>
                  </div>
               </div>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>{projectUrl}</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
     </div>
  )
}

export default Project;

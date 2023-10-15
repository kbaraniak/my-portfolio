import { useEffect, useState } from 'react';
import '../styles/my_projects.css';
import '../styles/animation.css';


const Projects = () => {
   useEffect(() => {
      const proj1 = document.getElementById("project1");
      const proj2 = document.getElementById("project2");
      const proj3 = document.getElementById("project3");
      const proj4 = document.getElementById("project4");
      if (proj1) {
         proj1.addEventListener("click", () => {
            window.location.href = "https://klubuntu.eu.org";
         });
      }
      if (proj2) {
         proj2.addEventListener("click", () => {
            window.location.href = "https://klbu.eu.org";
         });
      }
      if (proj3) {
         proj3.addEventListener("click", () => {
            window.location.href = "https://npws.cloud";
         });
      }
      if (proj4) {
         proj4.addEventListener("click", () => {
            window.location.href = "https://oneros.netlify.app";
         });
      }
   }, []);
   return (
      <main className="flex flex-row flex-wrap justify-center">
         <div className="project" id="project1">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <div id="frame" className="social">
                  <div id="frame-header">
                     <h2 className="font-itim">Social Page</h2>
                  </div>
               </div>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>klubuntu.eu.org</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
         </div>
         <div className="project" id="project2">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <div id="frame" className="tools">
                  <div id="frame-header">
                     <h2>Tools Page</h2>
                  </div>
               </div>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>klbu.eu.org</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
         </div>
         <div className="project" id="project3">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <div id="frame" className="npws">
                  <div id="frame-header">
                     <h2>Cloud Service</h2>
                  </div>
               </div>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>npws.cloud</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
         </div>
         <div className="project" id="project4">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <div id="frame" className="oneros">
                  <div id="frame-header">
                     <h2>One OS for Devices</h2>
                  </div>
               </div>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>oneros.netlify.app</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
         </div>
      </main>
   );
}

export default Projects;
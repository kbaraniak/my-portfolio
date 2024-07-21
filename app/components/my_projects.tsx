import Project from './project';
import '../styles/my_projects.css';
import '../styles/animation.css';


const Projects = () => {
   return (
      <main className="flex flex-row flex-wrap justify-center">
         <Project projectName="Tools Page" projectID="project-1" projectDescription="Social Page" projectType="Social Page" projectCategory="social" projectUrl="klubuntu.eu.org"/>
         <Project projectName="Tools Page" projectID="project-2" projectDescription="Tools Page" projectType="Tools Page" projectCategory="tools" projectUrl="klbu.eu.org"/>
         <Project projectName="OnerOS" projectID="project-3" projectDescription="OnerOS" projectType="One OS for Devices" projectCategory="oneros" projectUrl="oneros.netlify.app"/>
      </main>
   );
}

export default Projects;

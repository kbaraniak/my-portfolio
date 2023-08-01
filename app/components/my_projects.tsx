import '../styles/my_projects.css'

const Projects = () => {
   return (
      <main className="flex flex-row flex-wrap justify-center">
         <div className="project" id="project1">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <iframe src="https://www.time.is/"></iframe>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>Time.is</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
         </div>
         <div className="project" id="project2">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <iframe src="https://bing.com/"></iframe>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>Bing.com</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
         </div>
         <div className="project" id="project3">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <iframe src="https://chat.openai.com"></iframe>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>Open AI</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
         </div>
         <div className="project" id="project4">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <iframe src="https://trojmiasto.pl"></iframe>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>Trojmiasto</h1>
            <div className="badges flex justify-center items-center">
               <div className="html"></div>
               <div className="css"></div>
               <div className="js"></div>
            </div>
         </div>
         
         <div className="project" id="project4">
            <div className="project-img w-70 h-60 bg-transparent mx-3 my-2 rounded-lg flex justify-center items-center">
               <iframe src="https://szemud.pl"></iframe>
            </div>
            <h1 className='text-center cursor-pointer hover:text-amber-100'>Ten Kierunek</h1>
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
import '../styles/collaborations.css'

const handleClick1 = () => {
   console.log('[EASTER-Egg]: Puri-Devs is a non-profit organization that brings together 3 of my colleagues and we create projects together');
   window.open("http://github.com/Puri-Devs", '_blank');
};

const handleClick2 = () => {
   console.log('[EASTER-Egg]: Klubuntu Projects is my other open-source projects for improvement community live');
   window.open("https://github.com/klubuntu", '_blank');
};

const Collaboration = () => {
   return (
      <main className="flex flex-row flex-wrap justify-center">
         <div className="collaboration bg-slate-700 h-100 w-100 max-phone:h-95 max-md:h-98 col-min:w-105 max-col-box:w-128 max-minpc:w-128 rounded-lg hover:selected" id="puri_devs" onClick={handleClick1}>
            <h3>Puri Devs</h3>
         </div>
         <div className="collaboration bg-red-700 h-100 w-100 max-phone:h-95 max-md:h-98 col-min:w-105 max-col-box:w-128 max-minpc:w-128 rounded-lg hover:selected" id="klubuntu" onClick={handleClick2}>
            <h3>Klubuntu</h3>
         </div>
      </main>
   );
}


export default Collaboration;
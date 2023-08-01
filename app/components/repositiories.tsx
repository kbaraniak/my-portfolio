import "../styles/my_projects.css";
import React, { useEffect, useState } from "react";
import getRepos from "./api/list";

const Repositories: React.FC = () => {
   const [repositoriesHtml, setRepositoriesHtml] = useState<string>("");

   useEffect(() => {
      const fetchRepositories = async () => {
         try {
            const html = await getRepos();
            setRepositoriesHtml(html);
         } catch (error) {
            console.error(error);
         }
      };

      fetchRepositories();
   }, []);

   return (
      <main className="test">
         {/* Render the repositories HTML */}
         <div id="repositories" dangerouslySetInnerHTML={{ __html: repositoriesHtml }} />
      </main>
   );
};

export default Repositories;

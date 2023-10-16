import "../styles/my_projects.css";
import React, { useEffect, useState } from "react";
import getRepos from "./api/new_list";

const Repositories: React.FC = () => {
   const [repositoriesHtml, setRepositoriesHtml] = useState<string>("");
   const [errorHtml, setErrorHtml] = useState<string>("");
   const [valueLoaded, setValueLoaded] = useState(false);
   const [valueError, setValueError] = useState(false);

   useEffect(() => {
      const fetchRepositories = async () => {
         try {
            const html = await getRepos(); // Wait for the promise to resolve
            if (typeof html === "string") {
              setRepositoriesHtml(html);
              setValueLoaded(true);
            } else {
              console.error("getRepos() did not return a string");
              console.error(html)
              setValueError(true);
              setErrorHtml(html);
            }
         } catch (error) {
            console.error(error);
         }
      };

      fetchRepositories();
   }, []);

   return (
      <main className="test">
         {/* Render the repositories HTML */}
         {!valueLoaded && <p className="loading">Loading repositories ...</p>}
         {valueError && <p className="loading red" dangerouslySetInnerHTML={{ __html: errorHtml }} /> }
         {valueLoaded && <div id="repositories" dangerouslySetInnerHTML={{ __html: repositoriesHtml }} /> }
      </main>
   );
};

export default Repositories;

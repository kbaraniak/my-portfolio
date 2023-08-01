require('dotenv').config();
import GitHub from 'github-api';
const getRepos = () => {
   var gh = new GitHub({
      token: 'process.env.GT_TOKEN'
   });

   const me = gh.getUser();

   return me.listRepos()
      .then((data) => {
         const avatar = data.data[0].owner.avatar_url;
         const repositories = [];
         for (const repo of data.data) {
            if (repo.owner.login === "kbaraniak") {
               const url = repo.html_url
               const repositoryHtml = `<div class="repository bg-gray-700 h-24 w-98 rounded-lg hover:selected" onclick="window.open('${url}')">\n<img src="${avatar}"/><h4>${repo.name}</h4></div>`;
               repositories.push(repositoryHtml);
            }
         }
         return repositories.join('\n');
      })
      .catch((error) => {
         console.error(error);
      });
} 

export default getRepos

import axios from 'axios';

const getRepos = async () => {
  const username = "kbaraniak";
  try {
    const response = await axios.get(`https://api.github.com/users/${username}/repos`);
    const repositories = [];
    if (response.data && Array.isArray(response.data)) {
      for (const elm of response.data) {
        if (elm.owner && elm.owner.avatar_url && elm.name && elm.html_url) {
          const avatar = elm.owner.avatar_url;
          let repo = elm.name.substr(0,21);
          let url = elm.html_url;
          const repositoryHtml = `<div class="repository bg-gray-700 h-24 w-98 rounded-lg hover:selected" onclick="window.open('${url}')">\n<div class="flex justify-center items-center mx-auto"><img src="${avatar}"/><h4>${repo}</h4></div></div>`;
          repositories.push(repositoryHtml);
        }
      }
    }
    return repositories.join('\n');
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default getRepos;

document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector("#name");
    const userNameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector("#repos");
    const followersElement = document.querySelector("#followers");
    const followingElement = document.querySelector("#following");
    const linkElement = document.querySelector('#link');

    try {
        fetch('https://api.github.com/users/amosbarbato')
        .then(function(res) {
            return res.json();
        })
        
        .then(function(json){
            nameElement.innerHTML = json.name;
            userNameElement.innerHTML = "@" + json.login;
            avatarElement.setAttribute('src', json.avatar_url);
            reposElement.innerHTML = json.public_repos;
            followersElement.innerHTML = json.followers;
            followingElement.innerHTML = json.following;
            linkElement.setAttribute('href', json.html_url);
            linkElement.innerText = 'Ver no Github';
        })
    } catch (error) {
        console.error('Erro ao tentar obter dados do Github:', error);
    }
})
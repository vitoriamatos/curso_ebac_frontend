$(document).ready(function () {

    const endpoint = `https://api.github.com/users/vitoriamatos`


    fetch(endpoint)
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            const repositorys = json.public_repos;
            const followers = json.followers;
            const following = json.following;
            const name = json.name;
            const login = json.login;

            $('#repository').text(repositorys);
            $('#followers').text(followers);
            $('#following').text(following);
            $('#name').text(name);
            $('#login').text(`@${login}`);
        })
})
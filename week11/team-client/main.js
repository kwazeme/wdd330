import { makeRequest } from './helpers.js';
import Auth from './auth.js'

const auth = new Auth();

document.getElementById("login").addEventListener("submit", (event) => {
    event.preventDefault();

    auth.login(onLoginSuccess);
});


async function onLoginSuccess(token) {
    document.getElementById("addPost").classList.remove("hidden");

    let data = await makeRequest('posts', 'GET', null, token);
    document.getElementById("output").innerText = JSON.stringify(data, null, 2);
}


document.getElementById("addPost").addEventListener("submit", async (event) => {
    let title = document.getElementById("title").value;
    let content = document.getElementById("content").value;
    let name = document.getElementById("name").value;

    let body = {
        title: title,
        name: name,
        content: content
    };

    try {
        const data = await makeRequest("posts/", "POST", body, auth.token);
    } catch (error) {
        console.log(error);
    }
});
import api from '../services/api.js';

const username = document.getElementById('username');
const buddy = document.getElementById('animal-avatar');
const mood = document.getElementById('mood');
const treats = document.getElementById('treats');

const user = api.getUser();

if(!user) {
    window.location = '../../';
}

username.textContent = user.name;
buddy.src = '../../assets/' + user.buddy + '.png';
mood.textContent = user.mood;
treats.textContent = user.treats;
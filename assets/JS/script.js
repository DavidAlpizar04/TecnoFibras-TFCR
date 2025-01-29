// Navbar
window.addEventListener("load", () => {
    const logo = document.querySelector(".logo");
    logo.classList.add("bounce");

    // Check authentication status
    fetch('http://localhost:3001/check-auth', {
        method: 'GET',
        credentials: 'include' // Include credentials for session
    })
    .then(response => {
        if (response.ok) {
            // User is authenticated
            document.getElementById('commentForm').style.display = 'block'; // Show comment form
        } else {
            // User is not authenticated
            document.getElementById('commentForm').style.display = 'none'; // Hide comment form
            document.getElementById('loginPrompt').style.display = 'block'; // Show login prompt
        }
    })
    .catch(error => {
        console.error('Error checking authentication:', error);
    });
});

let lastScrollY = window.scrollY; 
const header = document.querySelector("header");  

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        header.classList.add("hidden");
    } else {
        header.classList.remove("hidden");
    }
    lastScrollY = window.scrollY;  
});

//Section Clients
function toggleSection() {
    const section = document.querySelector('.hidden-section');
    section.classList.toggle('expanded'); 
}

//Formulario
const user = JSON.parse(localStorage.getItem('login_success')) || false;
const signInButton = document.getElementById('signInButton');
const logoutButton = document.getElementById('logout');

if (user) {
    signInButton.style.display = 'none';
    logoutButton.style.display = 'block';
} else {
    signInButton.style.display = 'block';
    logoutButton.style.display = 'none';
}

logoutButton.addEventListener('click', () => {
    Swal.fire({
        title: (`Hasta luego, ${user.name}!`),
        icon: "info",
        showCloseButton: false,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: `
        <a class="btn-logout-1-a" href="/user-auth/public/sign-in.html">Iniciar Sesión</a> 
        `,
        customClass: {
            confirmButton: "btn-logout-1",
            cancelButton: "btn-logout-2",
            popup: "popup-class",
            title: "title-class",
            icon: "icon-class",
        },
        cancelButtonText: `
        <a class="btn-logout-2" href="index.html">Volver</a>
        `,
    });
    localStorage.removeItem('login_success');
    signInButton.style.display = 'block';
    logoutButton.style.display = 'none';
});

// Animacion Swish de scroll
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".catalogo-container .card");
    const section = document.getElementById("catalogo");

    const handleScroll = () => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (sectionTop <= windowHeight && sectionBottom >= 0) {
            cards.forEach(card => card.classList.add("active"));
            cards.forEach(card => card.classList.remove("exit"));
        } else {
            cards.forEach(card => card.classList.remove("active"));
            cards.forEach(card => card.classList.add("exit"));
        }
    };

    window.addEventListener("scroll", handleScroll);
});

// Idioma
const flagsElement = document.getElementById("flags");

const changeLanguage = async language => {
    const requestJson = await fetch(`./assets/languages/${language}.json`);
    const texts = await requestJson.json();

    const textsToChange = document.querySelectorAll("[data-section]");

    for (const textToChange of textsToChange) {
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;

        textToChange.innerHTML = texts[section][value];
    }
};

flagsElement.addEventListener('click', (e) => {
    changeLanguage(e.target.parentElement.dataset.language);
});

// Comment functionality
const comments = JSON.parse(localStorage.getItem('comments')) || [];

document.getElementById('commentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const userName = document.getElementById('userName').value;
    const userComment = document.getElementById('userComment').value;
    const commentDate = new Date().toLocaleString();

    const newComment = {
        name: userName,
        comment: userComment,
        date: commentDate,
        likes: 0,
        dislikes: 0,
        reports: 0
    };

    comments.push(newComment);
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
    this.reset();
});

function loadComments() {
    const commentsContainer = document.getElementById('commentsContainer');
    commentsContainer.innerHTML = '';

    comments.forEach((comment, index) => {
        const commentElement = document.createElement('div');
        commentElement.classList.add('comment');
        commentElement.innerHTML = `
            <p><strong>${comment.name}</strong> (${comment.date})</p>
            <p>${comment.comment}</p>
            <button onclick="likeComment(${index})">Like (${comment.likes})</button>
            <button onclick="dislikeComment(${index})">Dislike (${comment.dislikes})</button>
            <button onclick="reportComment(${index})">Report</button>
        `;
        commentsContainer.appendChild(commentElement);
    });
}

function likeComment(index) {
    comments[index].likes++;
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
}

function dislikeComment(index) {
    comments[index].dislikes++;
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
}

function reportComment(index) {
    comments[index].reports++;
    if (comments[index].reports >= 3) {
        comments.splice(index, 1); // Remove comment if it receives 3 reports
    }
    localStorage.setItem('comments', JSON.stringify(comments));
    loadComments();
}

// Load comments on page load
document.addEventListener('DOMContentLoaded', loadComments);

import { projects } from './projects.js';

// Set the current year in the year element
const year = document.getElementById("year");
const date = new Date();
const currentYear = date.getFullYear();
year.textContent = currentYear;

// Variables for dark/light mode functionality
const lightDarkMode = document.getElementById("light-dark-mode");
const modeFlip = document.getElementById("mode-flip");
const modeIcon = document.getElementById("mode-icon");

let isDarkMode = true;
let rotationInProgress = false;
let currentDegrees = 0;
let x = 0;

lightDarkMode.addEventListener("click", flip);

// Update social profile icon links based on mode
function updateIcons() {
    const linkedinIcon = document.querySelector('a[href*="linkedin"] .social-icon image');
    const githubIcon = document.querySelector('a[href*="github"] .social-icon image');

    if (linkedinIcon && githubIcon) {
        if (isDarkMode) {
            linkedinIcon.setAttribute('href', './SVG/linkedin-white.svg');
            githubIcon.setAttribute('href', './SVG/github-white.svg');
        } else {
            linkedinIcon.setAttribute('href', './SVG/linkedin-black.svg');
            githubIcon.setAttribute('href', './SVG/github-black.svg');
        }
    }
}

// Flip dark/light mode icon
function flip() {
    if (rotationInProgress) return;

    rotationInProgress = true;

    const targetDegrees = currentDegrees === 0 ? 180 : 0;
    const rotationDirection = currentDegrees === 0 ? 1 : -1;
    const maxX = lightDarkMode.clientWidth - modeIcon.clientWidth;
    const targetX = isDarkMode ? maxX : 0;

    let timerId = setInterval(frame, 1);
    let degrees = currentDegrees;

    function frame() {
        if (Math.abs(degrees - targetDegrees) < 1 && Math.abs(x - targetX) < 1) {
            clearInterval(timerId);
            rotationInProgress = false;
            currentDegrees = targetDegrees;
            isDarkMode = !isDarkMode;

            document.documentElement.classList.toggle("light-mode", !isDarkMode);
            document.documentElement.classList.toggle("dark-mode", isDarkMode);

            updateIcons();
            updateNavbarToggler();

            return;
        } else {
            if (degrees !== targetDegrees) {
                degrees += rotationDirection * 1.5;
                degrees = Math.max(0, Math.min(180, degrees));
            }
            if (x !== targetX) {
                x += isDarkMode ? 2 : -2;
                x = Math.max(0, Math.min(maxX, x));
            }
            modeFlip.style.transform = `rotateY(${degrees}deg)`;
            modeIcon.style.transform = `translateX(${x}px)`;
        }
    }
}

// Update navbar toggler for light/dark mode
function updateNavbarToggler() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    if (navbar) {
        navbar.style.backgroundColor = 'var(--nav-bg-color)';
    }

    if (navbarToggler) {
        navbarToggler.style.backgroundColor = 'var(--toggler-bg-color)';
    }
}

// Initialize light/dark mode and other settings on page load
document.addEventListener('DOMContentLoaded', () => {
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.add('light-mode');
    }
    updateIcons();
    updateNavbarToggler();

    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const titleSection = document.querySelector('.title');
    titleSection.style.height = `calc(100vh - ${navbarHeight}px)`;

    activatePortfolioSection('dev');
    activateAboutSection('about');
});

window.activatePortfolioSection = function (section) {
    setTimeout(() => {
        const activePill = document.getElementById('nav-pill');
        const targetNav = document.getElementById(`${section}-nav`);

        if (!activePill || !targetNav) {
            console.error('Missing nav-pill or target-nav element');
            return;
        }

        const targetRect = targetNav.getBoundingClientRect();
        const containerRect = document.querySelector('.work-nav').getBoundingClientRect();
        const leftOffset = targetRect.left - containerRect.left;

        activePill.style.left = `${leftOffset}px`;
        activePill.style.width = `${targetRect.width}px`;

        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        targetNav.classList.add('active');

        const grid = document.getElementById('projects-grid');
        grid.innerHTML = ''; 

        const selectedProjects = projects[section];

        selectedProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';

            const imageSrc = Array.isArray(project.images) ? project.images[0].url : project.images;
            const imageAlt = Array.isArray(project.images) ? project.images[0].alt : project.title;

            projectItem.innerHTML = `
                <div class="project-card">
                    <img src="${imageSrc}" alt="${imageAlt}" class="project-image">
                    <div class="project-footer">
                        <span class="project-category">${project.category}</span>
                        <h3 class="project-title">${project.title}</h3>
                    </div>
                </div>
            `;
            projectItem.onclick = () => {
                if (project.title === 'City of Portland' && project.type === 'dev') {
                    window.showPortlandOverlay(project);
                } else if (project.title === 'Pizza Ordering System' && project.type === 'dev') {
                    window.showBrickyardOverlay(project);
                } else if (project.title === 'The VIA Agency' && project.type === 'dev') {
                    window.showVIADevOverlay(project);
                } else if (project.title === 'Fusion F1' && project.type === 'dev') {
                    window.showF1Overlay(project);
                } else if (project.title === 'The VIA Agency' && project.type === 'design') {
                    window.showVIADesignOverlay(project);
                } else if (project.title === 'Quala Water Bottles' && project.type === 'design') {
                    window.showQualaOverlay(project);
                } else if (project.title === 'Solana Solar' && project.type === 'design') {
                    window.showSolanaOverlay(project);
                } else if (project.title === 'Mobile App UI Designs' && project.type === 'design') {
                    window.showMobileOverlay(project);
                } else if (project.title === 'Miscellaneous' && project.type === 'design') {
                    window.showMiscOverlay(project);
                } else if (project.title === 'Breakout Game' && project.type === 'game' ) {
                    window.showBreakoutOverlay(project);
                } else if (project.title === 'Dice Roller' && project.type === 'game' ) {
                    window.showDiceOverlay(project);
                } else if (project.title === 'Snake Game' && project.type === 'game' ) {
                    window.showSnakeOverlay(project);
                } else if (project.title === 'Pong Game' && project.type === 'game' ) {
                    window.showPongOverlay(project);
                } else if (project.title === 'Tic-Tac-Toe Game' && project.type === 'game' ) {
                    window.showTicTacToeOverlay(project);
                } else if (project.title === 'Simon Game' && project.type === 'game' ) {
                    window.showSimonOverlay(project);
                } else if (project.title === 'Space Invaders Game' && project.type === 'game' ) {
                    window.showSpaceInvadersOverlay(project);
                }  
            };
            grid.appendChild(projectItem);
        });
    }, 100);
};

window.activateAboutSection = function (section) {
    setTimeout(() => {
        const activePill = document.getElementById('about-nav-pill');
        const targetNav = document.getElementById(`${section}-nav`);

        if (!activePill || !targetNav) {
            console.error('Missing about-nav-pill or target-nav element');
            return;
        }

        const targetRect = targetNav.getBoundingClientRect();
        const containerRect = document.querySelector('.about-nav').getBoundingClientRect();
        const leftOffset = targetRect.left - containerRect.left;

        activePill.style.left = `${leftOffset}px`;
        activePill.style.width = `${targetRect.width}px`;

        document.querySelectorAll('.about-item').forEach(item => item.classList.remove('active'));
        targetNav.classList.add('active');

        const grid = document.getElementById('about-grid');
        grid.innerHTML = '';

        if (section === 'about') {
            const aboutContainer = document.createElement('div');
            aboutContainer.className = 'about-container';
        
            const profileImage = document.createElement('div');
            profileImage.className = 'about-profile-image';
            profileImage.innerHTML = `
                <img src="./Images/Portrait.jpeg" alt="Profile Image">
            `;
        
            const aboutText = document.createElement('div');
            aboutText.className = 'about-text';

            const bioHeader = document.createElement('p');
            bioHeader.className = 'bio-header';

            const detailsParagraph = document.createElement('p');
            detailsParagraph.className = 'details';
        
            const resumeLink = document.createElement('a');
            resumeLink.href = './Documents/Resume 2024.pdf';
            resumeLink.target = '_blank';
            resumeLink.rel = 'noopener noreferrer';
            resumeLink.textContent = 'View Resume';

            const resumeParagraph = document.createElement('p');
            resumeParagraph.className = 'details';

            const universityLink = document.createElement('a');
            universityLink.href = 'https://roux.northeastern.edu/';
            universityLink.target = '_blank';
            universityLink.rel = 'noopener noreferrer';
            universityLink.textContent = 'The Roux Institute at Northeastern University';
        
            detailsParagraph.appendChild(document.createTextNode('Hi, I\'m Sam Treadwell. I\'m originally from the Burlington, VT area and found my way to Portland, ME for grad school. I began my transition into tech in the Spring of 2022 when I enrolled in the Master\'s in Computer Science program at '));
            detailsParagraph.appendChild(universityLink);
            detailsParagraph.appendChild(document.createTextNode('. Since then I\'ve gained project experience in multiple programming languages and found a passion for web development and design. '));
            detailsParagraph.appendChild(resumeLink);


            const techHeader = document.createElement('p');
            techHeader.className = 'tech-header';
            
            techHeader.appendChild(document.createTextNode('Tech Stack'));
            bioHeader.appendChild(document.createTextNode('Bio'));

            aboutText.appendChild(bioHeader);
            aboutText.appendChild(detailsParagraph);  
            aboutText.appendChild(techHeader);
        
            aboutContainer.appendChild(profileImage);
            aboutContainer.appendChild(aboutText);
        
            grid.appendChild(aboutContainer); 

            const project = {
                title: 'Icons',
                icons: [
                    { url: './Icons/Python.png', link: 'https://www.python.org/' },
                    { url: './Icons/Java.png', link: 'https://www.java.com/en/' },
                    { url: './Icons/HTML.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                    { url: './Icons/CSS.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                    { url: './Icons/JavaScript-logo.png', link: 'https://www.javascript.com/' },
                    { url: './Icons/React-logo.png', link: 'https://react.dev/' },
                    { url: './Icons/Tailwind.png', link: 'https://tailwindcss.com/' },
                    { url: './Icons/Figma.png', link: 'https://www.figma.com/' },
                    { url: './Icons/Sketch.png', link: 'https://www.sketch.com/' }
                ]
            };
        
            window.activateIcons = function (project) {
                const iconsContainer = document.createElement('div');
                iconsContainer.className = 'icons-container';
        
                project.icons.forEach(icon => {
                    const iconLink = document.createElement('a');
                    iconLink.href = icon.link;
                    iconLink.target = '_blank';
                    iconLink.rel = 'noopener noreferrer';
        
                    const iconImg = document.createElement('img');
                    iconImg.src = icon.url;
                    iconImg.alt = 'Icon';
                    iconImg.className = 'project-icon';
                    iconImg.width = 'auto';
                    iconImg.height = 40;
        
                    iconLink.appendChild(iconImg);
                    iconsContainer.appendChild(iconLink);
                });
        
                aboutText.appendChild(iconsContainer);
            };

            window.activateIcons(project);

        } else if (section === 'music') {
            const tracks = [
                "2VjySzgGQeZcMGWuPMAnBF",
                "1672RT45nXNUb28fzzPxn8",
                "09AWmqTAIk1cPQUzxyDUiA",
                "3EsfULMMzZJOGWL6ZsTQaH",
                "4lMLL0QOt8dLRp5UGXjZLi",
                "1xhkbc481N3PiE28jj4pmN",
                "2H30WL3exSctlDC9GyRbD4",
                "5B2mJIk8yso3ugyvfHR62A",
                "3KfbEIOC7YIv90FIfNSZpo",
                "5ylmBa4MNb3BBoOOckRIVf",
                "3xpO8JkZJChlLu9AvfJ6VX",
                "6e7l6mCJipZb9UoZBvtwNZ"
            ]

            tracks.forEach((track, index) => {
                const spotifyTrack = document.createElement('div');
                spotifyTrack.className = 'spotify-track'; 
                spotifyTrack.innerHTML = `
                    <iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/${track}?utm_source=generator" 
                        width="100%" height="152" frameBorder="0" allowfullscreen="" 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="eager">
                    </iframe>
                `;

                const delay = index * 0.5; 
                spotifyTrack.style.animationDelay = `${delay}s`;

                grid.appendChild(spotifyTrack);
            });

        } else if (section === 'hobbies') {
            const icons = [
                { url: './Icons/Snowboarding.png', alt: "Snowboarding" },
                { url: './Icons/Skateboarding.png', alt: "Skateboarding" },
                { url: './Icons/Biking.png', alt: "Biking" },
                { url: './Icons/Hiking.png', alt: "Hiking" },
                { url: './Icons/Swimming.png', alt: "Swimming" },
                { url: './Icons/Traveling.png', alt: "Traveling" },
                { url: './Icons/Cooking.svg', alt: "Cooking" },
                { url: './Icons/Photography.png', alt: "Photography" },
                { url: './Icons/Drawing.png', alt: "Drawing" },
                { url: './Icons/Music.png', alt: "Music" },
                { url: './Icons/Gardening.png', alt: "Plant Dad" }
            ];
        
            const hobbies = ['Snowboarding', 'Skateboarding', 'Biking', 'Hiking', 'Swimming', 'Traveling', 'Cooking', 'Photography', 'Drawing', 'Music', 'Plant Dad'];
        
            const aboutContainer2 = document.createElement('div');
            aboutContainer2.className = 'about-container-2';
        
            hobbies.forEach((hobby, index) => {
                const hobbyDiv = document.createElement('div');
                hobbyDiv.className = 'hobby-item';
        
                const iconElement = document.createElement('img');
                iconElement.src = icons[index].url;
                iconElement.alt = icons[index].alt;
                iconElement.className = 'hobby-icon';
        
                const textElement = document.createElement('p');
                textElement.textContent = hobby;
        
                hobbyDiv.appendChild(iconElement);
                hobbyDiv.appendChild(textElement);
        
                // Random delay between 0 and 2 seconds
                const randomDelay = Math.random() * 2; // Adjust multiplier for longer delays
        
                // Apply delay to the hobbyDiv
                hobbyDiv.style.animationDelay = `${randomDelay}s`;
        
                aboutContainer2.appendChild(hobbyDiv);
            });
        
            grid.appendChild(aboutContainer2);
        }            
    }, 100);
};


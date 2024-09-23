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

    activateSection('dev');
});

// Activate a section and update the projects grid
window.activateSection = function (section) {
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

        // Update active class
        document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
        targetNav.classList.add('active');

        // Clear the existing projects from the grid
        const grid = document.getElementById('projects-grid');
        grid.innerHTML = ''; // Clear the grid before adding new items

        // Get the relevant projects based on the section
        const selectedProjects = projects[section];

        selectedProjects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';

            // Handle single and multiple images
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
                if (project.title === 'Pizza Ordering System') {
                    window.showBrickyardOverlay(project);
                } else if (project.title === 'The VIA Agency') {
                    window.showVIAOverlay(project);
                } else if (project.title === 'Fusion F1') {
                    window.showF1Overlay(project);
                }
            };
            grid.appendChild(projectItem);
        });
    }, 100);
};
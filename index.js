const lightDarkMode = document.getElementById("light-dark-mode");
const modeFlip = document.getElementById("mode-flip");
const modeIcon = document.getElementById("mode-icon");

let isDarkMode = true;
let rotationInProgress = false;
let currentDegrees = 0;
let x = 0;

lightDarkMode.addEventListener("click", flip);

// Update social profile icon links
function updateIcons() {
    const linkedinIcon = document.querySelector('a[href*="linkedin"] .social-icon image');
    const githubIcon = document.querySelector('a[href*="github"] .social-icon image');

    if (linkedinIcon && githubIcon) {
        if (isDarkMode) {
            linkedinIcon.setAttribute('href', '/SVG/linkedin-white.svg');
            githubIcon.setAttribute('href', '/SVG/github-white.svg');
        } else {
            linkedinIcon.setAttribute('href', '/SVG/linkedin-black.svg');
            githubIcon.setAttribute('href', '/SVG/github-black.svg');
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

// Update document for light/dark mode
function updateNavbarToggler() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // console.log('Updating navbar toggler');
    // console.log('isDarkMode:', isDarkMode);

    if (navbar) {
        navbar.style.backgroundColor = 'var(--nav-bg-color)';
        // console.log('Navbar background color:', getComputedStyle(navbar).backgroundColor);
    }

    if (navbarToggler) {
        navbarToggler.style.backgroundColor = 'var(--toggler-bg-color)';
        // console.log('Navbar toggler background color:', getComputedStyle(navbarToggler).backgroundColor);
    }
}

// Update DOM for light/dark mode
document.addEventListener('DOMContentLoaded', () => {
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.add('light-mode');
    }
    updateIcons();
    updateNavbarToggler();
});

// Update DOM for light/dark mode
document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const titleSection = document.querySelector('.title');
    titleSection.style.height = `calc(100vh - ${navbarHeight}px)`;
});

function activateSection(section) {
    // Get the active pill element
    const activePill = document.getElementById('nav-pill');
    const targetNav = document.getElementById(`${section}-nav`);

    // Calculate the position and size of the clicked nav item
    const targetRect = targetNav.getBoundingClientRect();
    const containerRect = document.querySelector('.work-nav').getBoundingClientRect();
    const leftOffset = targetRect.left - containerRect.left;

    // Move the active pill to the new position with smooth transition
    activePill.style.left = `${leftOffset}px`;
    activePill.style.width = `${targetRect.width}px`;

    // Clear existing active states
    document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));
    targetNav.classList.add('active');

    // Update the grid with the relevant projects for the active section
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = ''; // Clear existing projects

    let projects = [];
    if (section === 'dev') {
        projects = [
            { title: 'Development Project 1', category: 'Web Development', imgURL: '', details: 'Details of Development Project 1' },
            { title: 'Development Project 2', category: 'Web Development',  imgURL: '', details: 'Details of Development Project 2' },
            { title: 'Development Project 3',  category: 'Web Development', imgURL: '', details: 'Details of Development Project 3' },
            { title: 'Development Project 4',  category: 'Web Development', imgURL: '', details: 'Details of Development Project 4' }
        ];
    } else if (section === 'design') {
        projects = [
            { title: 'Design Project 1', category: 'Web Development', imgURL: '', details: 'Details of Design Project 1' },
            { title: 'Design Project 2', category: 'Web Development', imgURL: '',details: 'Details of Design Project 2' }
        ];
    } else if (section === 'arcade') {
        projects = [
            { title: 'Arcade Project 1', category: 'Web Development', imgURL: '', details: 'Details of Arcade Project 1' }
        ];
    }

    projects.forEach(project => {
        const projectItem = document.createElement('div');
        projectItem.className = 'project-item';

        projectItem.innerHTML = `
            <div class="project-card">
                <img src="${project.imgURL}" alt="${project.title}" class="project-image">
                <div class="prject-footer">
                    <span class="project-category">${project.category}</span>
                    <h3 class="project-title">${project.title}</h3>
                </div>
            </div>
        `;
        projectItem.onclick = () => showOverlay(project.details);
        grid.appendChild(projectItem);
    });
}

// Activate 'Development' section by default on page load
document.addEventListener('DOMContentLoaded', () => {
    activateSection('dev');
});

function showOverlay(projectDetails) {
    // Set overlay content
    const overlayText = document.getElementById('overlay-text');
    overlayText.innerHTML = `<p>${projectDetails}</p>`;

    // Display the overlay
    const overlay = document.getElementById('content-overlay');
    overlay.style.display = 'flex';
}

function closeOverlay() {
    // Hide the overlay
    const overlay = document.getElementById('content-overlay');
    overlay.style.display = 'none';
}

function showOverlay(sectionName) {
    const overlayText = document.getElementById('overlay-text');
    overlayText.textContent = `${sectionName} Content`;

    const overlay = document.getElementById('content-overlay');
    overlay.style.display = 'flex'; 

    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => item.classList.remove('active')); 
    document.getElementById(`${sectionName.toLowerCase()}-nav`).classList.add('active'); 
}

function closeOverlay() {
    const overlay = document.getElementById('content-overlay');
    overlay.style.display = 'none';
}


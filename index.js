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
            projectItem.onclick = () => showOverlay(project);
            grid.appendChild(projectItem);
        });
    }, 100);
};

window.showOverlay = function (project) {
    // Get all necessary elements by their IDs
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer = document.getElementById('overlay-images-container');

    // Clear previous images and text in the overlay container
    overlayImagesContainer.innerHTML = '';
    overlayText.innerHTML = '';

    // Set the title of the overlay
    overlayTitle.textContent = project.title;

    // Display the fullScreenImage if it exists
    if (project.fullScreenImage) {
        overlayImage.src = project.fullScreenImage;
        overlayImage.style.display = 'block'; // Show the full-screen image
    } else {
        overlayImage.style.display = 'none'; // Hide if not available
    }

    // Set the text content including role, date, and details
    overlayText.innerHTML = `
        <div class="heading">
            <h3 class="role">${project.role}</h3>
            <h4 class="date">${project.date}</h4>
        </div>
        <div class="subheading">
            <h4 class="project">${project.category}</h4>
            <div class="icons-container">
                ${project.title === 'The VIA Agency' ?
                    project.icons.slice(0, 5).map((icon) => `
                        <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="50px">
                        </a>
                    `).join('')
                : ''}
            </div>
        </div>
        <p class="details">${project.details}</p>
        ${project.embedUrl ? `<div class="embed-container"><embed id="embed-element" src="${project.embedUrl}" style="width: 90vw; height: 85vh"></div>` : ''}
        <p class="details">${project.details2}</p>
    `;

    // Handle video display
    if (project.videos) {
        // Create video container
        const videoContainer = document.createElement('div');
        videoContainer.id = 'overlay-video-container';
        videoContainer.innerHTML = `
            <video id="overlay-video" class="video" controls>
                <source id="video-source" src="${project.videos}" type="video/mp4">
                Your browser does not support the video tag. 
            </video>
        `;
        overlayText.appendChild(videoContainer); // Append the video container to overlay text

        if (project.details3) {
            const details3Paragraph = document.createElement('p');
            details3Paragraph.className = 'details';
            details3Paragraph.textContent = project.details3;
            overlayText.appendChild(details3Paragraph);
        }
    }

    // Add the second category after the video
    if (project.secondCategory) {
        overlayText.innerHTML += `
        <div class="subheading">
            <h4 class="second-category">${project.secondCategory}</h4>
            <div class="icons-container">
                ${project.title === 'The VIA Agency' ?
                    project.icons.slice(5).map((icon) => `
                        <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="60px" style="border-radius: 50px;">
                        </a>
                    `).join('')
                : ''}
            </div>
        </div>
        <div class="subtext">
            <h5 id="subtext">Boredom-Blaster ARM & HAMMER™ Baking Soda AI Chatbot</h5>
        </div>
        `;
    }

    // If project.images is an array, show additional images below the full-screen image
    if (Array.isArray(project.images)) {
        // Create a main container for images and text
        const mainContainer = document.createElement('div');
        mainContainer.className = 'main-container'; // Add a class for styling
    
        // Create a container for the first two images
        const topImagesContainer = document.createElement('div');
        topImagesContainer.className = 'top-images-container'; // Add a class for styling
    
        // Display the first two images side by side
        project.images.slice(1, 3).forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = image.alt || project.title;
            imgElement.className = 'overlay-additional-image';
            topImagesContainer.appendChild(imgElement);
        });
    
        // Create a container for the third image and text
        const bottomContainer = document.createElement('div');
        bottomContainer.className = 'bottom-container'; // Add a class for styling
    
        // Add the third image
        const imgElement3 = document.createElement('img');
        imgElement3.src = project.images[3].url;
        imgElement3.alt = project.images[3].alt || project.title;
        imgElement3.className = 'overlay-additional-image';
        bottomContainer.appendChild(imgElement3);
    
        // Add the details4 text to the right of the third image
        const detailsTextElement = document.createElement('p');
        detailsTextElement.className = 'image-text';
        detailsTextElement.innerHTML = project.details4 || 'Default text';
        bottomContainer.appendChild(detailsTextElement);

        const chatButton = document.createElement('button');
        chatButton.className = 'btn btn-primary';
        chatButton.textContent = 'Chat with Boredom-Blaster!';
        chatButton.onclick = function() {
            botpress.toggle();
        }

        bottomContainer.appendChild(chatButton);

        // Append the containers to the main container
        mainContainer.appendChild(topImagesContainer);
        mainContainer.appendChild(bottomContainer);
    
        // Append the main container to the overlay
        overlayImagesContainer.appendChild(mainContainer);
    }
    
    // Show the overlay
    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
}
    
// Close the overlay function
window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open');
    }
};


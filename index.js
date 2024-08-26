const lightDarkMode = document.getElementById("light-dark-mode");
const modeFlip = document.getElementById("mode-flip");
const modeIcon = document.getElementById("mode-icon");

let isDarkMode = true;
let rotationInProgress = false;
let currentDegrees = 0;
let x = 0;

lightDarkMode.addEventListener("click", flip);

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

function updateNavbarToggler() {
    const navbar = document.querySelector('.navbar');
    const navbarToggler = document.querySelector('.navbar-toggler');

    console.log('Updating navbar toggler');
    console.log('isDarkMode:', isDarkMode);

    if (navbar) {
        navbar.style.backgroundColor = 'var(--nav-bg-color)';
        console.log('Navbar background color:', getComputedStyle(navbar).backgroundColor);
    }

    if (navbarToggler) {
        navbarToggler.style.backgroundColor = 'var(--toggler-bg-color)';
        console.log('Navbar toggler background color:', getComputedStyle(navbarToggler).backgroundColor);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    if (isDarkMode) {
        document.documentElement.classList.add('dark-mode');
    } else {
        document.documentElement.classList.add('light-mode');
    }
    updateIcons();
    updateNavbarToggler();
});

document.addEventListener("DOMContentLoaded", function() {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    const titleSection = document.querySelector('.title');
    titleSection.style.height = `calc(100vh - ${navbarHeight}px)`;
});
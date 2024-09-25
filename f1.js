window.showF1Overlay = function (project) {
    // Get the necessary overlay elements by their IDs
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer = document.getElementById('overlay-images-container');
    const embedContainer = document.getElementById('embed-element');
    const fallbackImageContainer = document.getElementById('fallback-image-container');

    // Clear any previous content in the overlay container
    overlayImagesContainer.innerHTML = '';
    overlayText.innerHTML = '';
    fallbackImageContainer.innerHTML = '';

    // Set the title of the overlay
    overlayTitle.textContent = project.title;

    // Display the main image if available
    if (project.fullScreenImage) {
        overlayImage.src = project.fullScreenImage;
        overlayImage.style.display = 'block';
    } else {
        overlayImage.style.display = 'none';
    }

    // Set the HTML structure for the overlay content
    overlayText.innerHTML = `
        <div class="heading">
            <h3 class="role">${project.role}</h3>
            <h4 class="date">${project.date}</h4>
        </div>
        <div class="subheading">
            <h4 class="project">${project.category}</h4>
            <div class="icons-container">
                ${project.title === 'Fusion F1' ?
                    project.icons.slice(0, 4).map((icon) => `
                        <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="50px">
                        </a>
                    `).join('')
                : ''}
            </div>
        </div>
        <p class="details">${project.details}</p>
        ${project.embedUrl ? `<div class="f1-embed-container"><embed id="embed-element" src="${project.embedUrl}" style="width: 90vw; height: 85vh"></div>` : ''}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
        <div class="f1-embed-container" style="display: none";>
            <embed id="embed-element" src="${project.embedUrl}" style="width: 90vw; height: 85vh">
        </div>
        <div class="fallback-wrapper">        
            <div id="fallback-image-container"></div>
        </div>
        <p class="details-2">${project.details2}</p>
        <p class="details-3">${project.details3}</p>
        <div class="image-container">
            <div style="background-image: url('${project.images[1].url}');"></div>
        </div>
        <p class="details-4">${project.details4}</p>
        <div class="image-container">
            <div style="background-image: url('${project.images[2].url}');"></div>
        </div>
    `;

    const screenWidth = window.innerWidth;

    if (screenWidth < 992 && project.fallbackImage) {
        const fallbackImage = document.createElement('img');
        fallbackImage.src = project.fallbackImage;
        fallbackImage.alt = 'Website preview';
        fallbackImage.style.width = "100%";
        fallbackImage.style.height = "auto";

        fallbackImageContainer.appendChild(fallbackImage);
        embedContainer.style.display = 'none';
    } else if (project.embedUrl) {
        embedContainer.style.display = 'block';
    }

    // Show the overlay
    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
};

// Function to close the overlay
window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open');
    }
};

window.showQualaOverlay = function (project) {
    // Get the necessary overlay elements by their IDs
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');

    console.log('Overlay triggered for project:', project);

    // Clear any previous content in the overlay container
    overlayText.innerHTML = '';

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
                ${project.title === 'Quala Water Bottles' && project.type === 'design' ?
            project.icons.slice(0, 2).map((icon) => `
                        <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="50px">
                        </a>
                    `).join('')
            : ''}
            </div>
        </div>
        <p class="details">${project.details}</p>
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
        videoContainer.style.display = 'block';

        const imgElement = document.createElement('img');
        imgElement.classList.add('quala-figma-img');
        imgElement.src = project.images[1].url;
        videoContainer.appendChild(imgElement);

        const imgElement2 = document.createElement('img');
        imgElement2.classList.add('quala-figma-img');
        imgElement2.src = project.images[2].url;
        videoContainer.appendChild(imgElement2);
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
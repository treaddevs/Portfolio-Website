window.showVIADesignOverlay = function (project) {
    // Get all necessary elements by their IDs
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer = document.getElementById('overlay-images-container-2');

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
                ${project.title === 'The VIA Agency' && project.type === 'design' ?
                    project.icons.slice(0, 2).map((icon) => `
                        <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="40px">
                        </a>
                    `).join('')
            : ''}
            </div>
        </div>
        <p class="details">${project.details}</p>
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
        </div>
        <div class="subtext">
            <h5 id="subtext">ALICE Campaign</h5>
        </div>
        `;
    }

    // Check for 'United Way of Southern Maine' and display only one image
    if (project.secondCategory === 'United Way of Southern Maine' && project.images.length > 0) {
        // Create a single image container
        const singleImageContainer = document.createElement('div');
        singleImageContainer.className = 'single-image-container'; // Add a class for styling

        // Create an image element for the first image
        const imgElement = document.createElement('img');
        imgElement.src = project.images[1].url;  // Display only the first image
        imgElement.alt = project.images[1].alt || project.title;
        imgElement.className = 'overlay-additional-image';

        // Set width and height
        imgElement.style.width = '50vw';
        imgElement.style.height = '90vh';

        // Append the image to the container
        singleImageContainer.appendChild(imgElement);

        // Append the single image container to the overlay
        overlayImagesContainer.appendChild(singleImageContainer);
    }

    // Show the overlay
    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
};

// Close the overlay function
window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open');
    }
};
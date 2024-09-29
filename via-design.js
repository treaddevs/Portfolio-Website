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
                    project.icons.slice(0, 1).map((icon) => `
                        <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="40px">
                        </a>
                    `).join('')
            : ''}
            </div>
        </div>
        <p class="details">${project.details}</p>
    `;  

    // Add second section
    if (project.secondCategory) {
        overlayText.innerHTML += `
        <div class="subheading">
            <h4 class="second-category-2">${project.secondCategory}</h4>
            <div class="icons-container">
            <a href="https://example.com" target="_blank" rel="noopener noreferrer">
                <img src="./Icons/UWSM-Logo-Square.png" alt="Icon" class="project-icon-UWSM" width="auto" height="120px">
            </a>
            ${project.additionalIcons && project.additionalIcons.length > 0 ? 
                project.additionalIcons.map(icon => `
                    <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                        <img src="${icon.url}" alt="${icon.alt}" class="project-icon" width="auto" height="40px">
                    </a>2
                `).join('') : ''}
        </div>
        </div>
        <div class="subtext">
            <h5 id="subtext">ALICE Campaign</h5>
        </div>
        <p class="details">${project.details2}</p>
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

        // Check screen width
        if (window.innerWidth < 992) {
            // Set styles for small screens
            imgElement.style.width = '90vw';  // Larger image on small screens
            imgElement.style.height = 'auto'; // Maintain aspect ratio
        } else {
            // Set styles for larger screens
            imgElement.style.width = '50vw';  // Default for larger screens
            imgElement.style.height = '90vh'; // Default for larger screens
        }

        // Append the image to the container
        singleImageContainer.appendChild(imgElement);

        // Append the single image container to the overlay
        overlayImagesContainer.appendChild(singleImageContainer);
    }

    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container-2';
    
    bottomContainer.innerHTML = `
        <div class="subheading">
            <h4 class="third-category">${project.thirdCategory}</h4>
        </div>
        <p class="details">${project.details3}</p>
    `;

    // Append the bottom container after the last image
    overlayImagesContainer.appendChild(bottomContainer);

    // Check for 'United Way of Southern Maine' and display only one image
    if (project.secondCategory === 'United Way of Southern Maine' && project.images.length > 0) {
        // Create a single image container
        const singleImageContainer2 = document.createElement('div');
        singleImageContainer2.className = 'single-image-container-2'; // Add a class for styling

        // Create an image element for the first image
        const imgElement = document.createElement('img');
        imgElement.src = project.images[2].url;  // Display only the first image
        imgElement.alt = project.images[2].alt || project.title;
        imgElement.className = 'overlay-additional-image';

        imgElement.style.width = '90vw';  // Larger image on small screens
        imgElement.style.height = 'auto'; // Maintain aspect ratio

        // Append the image to the container
        singleImageContainer2.appendChild(imgElement);

        // Append the single image container to the overlay
        overlayImagesContainer.appendChild(singleImageContainer2);
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
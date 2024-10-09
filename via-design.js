window.showVIADesignOverlay = function (project) {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer2 = document.getElementById('overlay-images-container-2');

    console.log('Overlay triggered for project:', project);

    overlayImagesContainer2.innerHTML = '';
    overlayText.innerHTML = '';

    overlayTitle.textContent = project.title;

    if (project.fullScreenImage) {
        overlayImage.src = project.fullScreenImage;
        overlayImage.style.display = 'block';
    } else {
        overlayImage.style.display = 'none';
    }

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

    if (project.secondCategory) {
        overlayText.innerHTML += `
            <div class="subheading">
                <h4 class="second-category-2">${project.secondCategory}</h4>
                <div class="icons-container">
                    <a href="https://www.unitedforalice.org/state-overview/Maine" target="_blank" rel="noopener noreferrer">
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
        overlayImagesContainer2.appendChild(singleImageContainer);
    }

    const bottomContainer = document.createElement('div');
    bottomContainer.className = 'bottom-container-2';

    bottomContainer.innerHTML = `
        <div class="subheading">
            <h4 class="third-category">${project.thirdCategory}</h4>
        </div>
        <p class="details">${project.details3}</p>
    `;

    overlayImagesContainer2.appendChild(bottomContainer);

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
        overlayImagesContainer2.appendChild(singleImageContainer2);
    }

    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
};

window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer2 = document.getElementById('overlay-images-container-2');

    // Clear overlay title and text
    if (overlayTitle) overlayTitle.textContent = '';
    if (overlayText) overlayText.innerHTML = '';

    // Hide and reset overlay image
    if (overlayImage) {
        overlayImage.style.display = 'none';
        overlayImage.src = '';
    }

    // Clear the images container
    if (overlayImagesContainer2) {
        overlayImagesContainer2.innerHTML = '';
    }

    // Remove all dynamic content generated in the overlay
    const dynamicClasses = [
        'single-image-container', 
        'single-image-container-2', 
        'overlay-additional-image', 
        'bottom-container-2'
    ];
    dynamicClasses.forEach(className => {
        const elements = document.getElementsByClassName(className);
        while (elements.length > 0) {
            elements[0].remove(); // Remove elements until none are left
        }
    });

    // Hide the overlay
    if (overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open'); // Remove overlay-open class
    }
};


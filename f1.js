window.showF1Overlay = function (project) {
    // Get the necessary overlay elements by their IDs
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer = document.getElementById('overlay-images-container');

    // Clear any previous content in the overlay container
    overlayImagesContainer.innerHTML = '';
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
    `;

    // Optionally, create a Bootstrap carousel for additional images if needed
    const carouselContainer = document.createElement('div');
    carouselContainer.id = 'carouselExampleIndicators';
    carouselContainer.className = 'carousel slide';
    carouselContainer.setAttribute('data-bs-ride', 'carousel');

    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';

    const innerCarousel = document.createElement('div');
    innerCarousel.className = 'carousel-inner';

    // Loop through additional images starting from index 1 if necessary
    project.images.slice(1).forEach((image, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('data-bs-target', '#carouselExampleIndicators');
        button.setAttribute('data-bs-slide-to', index.toString());
        button.setAttribute('aria-label', `Slide ${index + 2}`);

        if (index === 0) {
            button.classList.add('active');
            button.setAttribute('aria-current', 'true');
        }
        indicators.appendChild(button);

        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;

        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.alt || project.title;
        imgElement.className = 'd-block w-100';

        item.appendChild(imgElement);
        innerCarousel.appendChild(item);
    });

    // Append indicators and carousel items to the carousel container
    carouselContainer.appendChild(indicators);
    carouselContainer.appendChild(innerCarousel);

    // Add carousel control buttons
    const prevButton = document.createElement('button');
    prevButton.className = 'carousel-control-prev';
    prevButton.type = 'button';
    prevButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
    prevButton.setAttribute('data-bs-slide', 'prev');
    prevButton.innerHTML = `
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    `;

    const nextButton = document.createElement('button');
    nextButton.className = 'carousel-control-next';
    nextButton.type = 'button';
    nextButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
    nextButton.setAttribute('data-bs-slide', 'next');
    nextButton.innerHTML = `
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    `;

    carouselContainer.appendChild(prevButton);
    carouselContainer.appendChild(nextButton);

    // Append the entire carousel to the overlay images container if necessary
    overlayImagesContainer.appendChild(carouselContainer);

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

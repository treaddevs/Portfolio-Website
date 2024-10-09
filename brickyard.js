window.showBrickyardOverlay = function (project) {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer = document.getElementById('overlay-images-container');
    const fallbackWrapper = document.querySelector('.fallback-wrapper');

    console.log('Overlay triggered for project:', project);

    fallbackWrapper.innerHTML = '';
    overlayImagesContainer.innerHTML = '';
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
                ${project.title === 'Pizza Ordering System' && project.type === 'dev' && project.icons.length > 0 ?
                    `<a href="${project.icons[0].link}" target="_blank" rel="noopener noreferrer">
                        <img src="${project.icons[0].url}" alt="Icon" class="java-icon" width="auto" height="75px">
                    </a>`
                : ''}
            </div>
        </div>
        <p class="details">${project.details}</p>
        <p class="details">${project.details2}</p>
    `;

    // Bootstrap carousel for additional images
    const carouselContainer = document.createElement('div');
    carouselContainer.id = 'carouselExampleIndicators';
    carouselContainer.className = 'carousel slide';
    carouselContainer.setAttribute('data-bs-ride', 'carousel');

    const indicators = document.createElement('div');
    indicators.className = 'carousel-indicators';

    const innerCarousel = document.createElement('div');
    innerCarousel.className = 'carousel-inner';

    // Loop through images starting from index 1 to omit the first image
    project.images.slice(1).forEach((image, index) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.setAttribute('data-bs-target', '#carouselExampleIndicators');
        button.setAttribute('data-bs-slide-to', index.toString());
        button.setAttribute('aria-label', `Slide ${index + 2}`); // Adjust slide number

        if (index === 0) {
            button.classList.add('active');
            button.setAttribute('aria-current', 'true');
        }
        indicators.appendChild(button);

        // Carousel items
        const item = document.createElement('div');
        item.className = `carousel-item ${index === 0 ? 'active' : ''}`;

        const imgElement = document.createElement('img');
        imgElement.src = image.url;
        imgElement.alt = image.alt || project.title;
        imgElement.className = 'd-block w-100';

        item.appendChild(imgElement);
        innerCarousel.appendChild(item);
    });

    carouselContainer.appendChild(indicators);
    carouselContainer.appendChild(innerCarousel);

    // Control buttons
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

    // Append the entire carousel to the overlay-images-container
    overlayImagesContainer.appendChild(carouselContainer);

    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
};

window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    const overlayImagesContainer = document.getElementById('overlay-images-container');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayText = document.getElementById('overlay-text');
    const overlayImage = document.getElementById('overlay-image');

    if (overlayImagesContainer) {
        overlayImagesContainer.innerHTML = ''; 
    }
    if (overlayTitle) {
        overlayTitle.textContent = '';
    }
    if (overlayText) {
        overlayText.innerHTML = ''; 
    }
    if (overlayImage) {
        overlayImage.src = ''; 
        overlayImage.style.display = 'none';
    }
    if (overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open');
    }
};


// window.showBrickyardOverlay = function (project) {
//     const overlay = document.getElementById('content-overlay');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayImage = document.getElementById('overlay-image');
//     const overlayText = document.getElementById('overlay-text');
//     const overlayImagesContainer = document.getElementById('overlay-images-container');
//     const fallbackWrapper = document.querySelector('.fallback-wrapper');

//     console.log('Overlay triggered for project:', project);

//     fallbackWrapper.innerHTML = '';
//     overlayImagesContainer.innerHTML = '';
//     overlayText.innerHTML = '';

//     overlayTitle.textContent = project.title;

//     if (project.fullScreenImage) {
//         overlayImage.src = project.fullScreenImage;
//         overlayImage.style.display = 'block';
//     } else {
//         overlayImage.style.display = 'none';
//     }

//     overlayText.innerHTML = `
//         <div class="heading">
//             <h3 class="role">${project.role}</h3>
//             <h4 class="date">${project.date}</h4>
//         </div>
//         <div class="subheading">
//             <h4 class="project">${project.category}</h4>
//             <div class="icons-container">
//                 ${project.title === 'Pizza Ordering System' && project.type === 'dev' && project.icons.length > 0 ?
//                     `<a href="${project.icons[0].link}" target="_blank" rel="noopener noreferrer">
//                         <img src="${project.icons[0].url}" alt="Icon" class="java-icon" width="auto" height="75px">
//                     </a>`
//                 : ''}
//             </div>
//         </div>
//         <p class="details">${project.details}</p>
//         <p class="details">${project.details2}</p>
//     `;

//     // Bootstrap carousel for additional images
//     const carouselContainer = document.createElement('div');
//     carouselContainer.id = 'carouselExampleIndicators';
//     carouselContainer.className = 'carousel slide';
//     carouselContainer.setAttribute('data-bs-ride', 'carousel');

//     const indicators = document.createElement('div');
//     indicators.className = 'carousel-indicators';

//     const innerCarousel = document.createElement('div');
//     innerCarousel.className = 'carousel-inner';

//     // Loop through images starting from index 1 to omit the first image
//     project.images.slice(1).forEach((image, index) => {
//         const button = document.createElement('button');
//         button.type = 'button';
//         button.setAttribute('data-bs-target', '#carouselExampleIndicators');
//         button.setAttribute('data-bs-slide-to', index.toString());
//         button.setAttribute('aria-label', `Slide ${index + 2}`); // Adjust slide number

//         if (index === 0) {
//             button.classList.add('active');
//             button.setAttribute('aria-current', 'true');
//         }
//         indicators.appendChild(button);

//         // Carousel items
//         const item = document.createElement('div');
//         item.className = `carousel-item ${index === 0 ? 'active' : ''}`;

//         const imgElement = document.createElement('img');
//         imgElement.src = image.url;
//         imgElement.alt = image.alt || project.title;
//         imgElement.className = 'd-block w-100';

//         item.appendChild(imgElement);
//         innerCarousel.appendChild(item);
//     });

//     carouselContainer.appendChild(indicators);
//     carouselContainer.appendChild(innerCarousel);

//     // Control buttons
//     const prevButton = document.createElement('button');
//     prevButton.className = 'carousel-control-prev';
//     prevButton.type = 'button';
//     prevButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
//     prevButton.setAttribute('data-bs-slide', 'prev');
//     prevButton.innerHTML = `
//         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Previous</span>
//     `;

//     const nextButton = document.createElement('button');
//     nextButton.className = 'carousel-control-next';
//     nextButton.type = 'button';
//     nextButton.setAttribute('data-bs-target', '#carouselExampleIndicators');
//     nextButton.setAttribute('data-bs-slide', 'next');
//     nextButton.innerHTML = `
//         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//         <span class="visually-hidden">Next</span>
//     `;

//     carouselContainer.appendChild(prevButton);
//     carouselContainer.appendChild(nextButton);

//     // Append the entire carousel to the overlay-images-container
//     overlayImagesContainer.appendChild(carouselContainer);

//     overlay.style.display = 'flex';
//     document.body.classList.add('overlay-open');
// };

// window.closeOverlay = function () {
//     const overlay = document.getElementById('content-overlay');
//     const overlayImagesContainer = document.getElementById('overlay-images-container');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayText = document.getElementById('overlay-text');
//     const overlayImage = document.getElementById('overlay-image');

//     if (overlayImagesContainer) {
//         overlayImagesContainer.innerHTML = ''; 
//     }
//     if (overlayTitle) {
//         overlayTitle.textContent = '';
//     }
//     if (overlayText) {
//         overlayText.innerHTML = ''; 
//     }
//     if (overlayImage) {
//         overlayImage.src = ''; 
//         overlayImage.style.display = 'none';
//     }
//     if (overlay) {
//         overlay.style.display = 'none';
//         document.body.classList.remove('overlay-open');
//     }
// };

window.showBrickyardOverlay = function (project) {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const fallbackImageContainer = document.getElementById('fallback-image-container');
    const overlayImagesContainer = document.getElementById('overlay-images-container');
    const overlayImagesContainer2 = document.getElementById('overlay-images-container-2');

    console.log('Overlay triggered for project:', project);

    fallbackImageContainer.textContent = '';
    overlayImagesContainer.textContent = '';
    overlayImagesContainer2.textContent = '';
    overlayText.textContent = '';

    overlayTitle.textContent = project.title;

    if (project.fullScreenImage) {
        overlayImage.src = project.fullScreenImage;
        overlayImage.style.display = 'block';
    } else {
        overlayImage.style.display = 'none';
    }

    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');
    
    const roleElement = document.createElement('h3');
    roleElement.classList.add('role');
    roleElement.textContent = project.role;
    
    const dateElement = document.createElement('h4');
    dateElement.classList.add('date');
    dateElement.textContent = project.date;

    headingDiv.appendChild(roleElement);
    headingDiv.appendChild(dateElement);

    overlayText.appendChild(headingDiv);

    const subheadingDiv = document.createElement('div');
    subheadingDiv.classList.add('subheading');

    const projectCategory = document.createElement('h4');
    projectCategory.classList.add('project');
    projectCategory.textContent = project.category;

    subheadingDiv.appendChild(projectCategory);

    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');

    if (project.title === 'Pizza Ordering System' && project.type === 'dev' && project.icons.length > 0) {
        const iconLink = document.createElement('a');
        iconLink.href = project.icons[0].link;
        iconLink.target = '_blank';
        iconLink.rel = 'noopener noreferrer';

        const iconImage = document.createElement('img');
        iconImage.src = project.icons[0].url;
        iconImage.alt = 'Icon';
        iconImage.classList.add('java-icon');
        iconImage.style.height = '75px';
        iconImage.style.width = 'auto';

        iconLink.appendChild(iconImage);
        iconsContainer.appendChild(iconLink);
    }

    subheadingDiv.appendChild(iconsContainer);
    overlayText.appendChild(subheadingDiv);

    const detailsParagraph = document.createElement('p');
    detailsParagraph.classList.add('details');

    const swingLink = document.createElement('a');
    swingLink.href = 'https://web.mit.edu/6.005/www/sp14/psets/ps4/java-6-tutorial/components.html';
    swingLink.target = '_blank';
    swingLink.rel = 'noopener noreferrer';
    swingLink.textContent = 'Swing';

    detailsParagraph.appendChild(document.createTextNode('During the summer of 2023 I was working a job as a line chef at a local pizza shop a few blocks from my campus while taking Object-Oriented Design (CS 5004) at the Roux Institute at Northeastern University. For the final project I decided to expand on my mid-semester project of developing a pizza ordering system for the restaurant. I chose to use the '));
    detailsParagraph.appendChild(swingLink);
    detailsParagraph.appendChild(document.createTextNode(' GUI widget toolkit for Java. I structured the system using the model-view-controller (MVC) architecture. I stored pizza toppings as a custom enum data type with corresponding arrays for associated small and large toppings prices.'));
    overlayText.appendChild(detailsParagraph);

    const detailsParagraph2 = document.createElement('p');
    detailsParagraph2.classList.add('details');

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/treaddevs/Pizza-App-GUI';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.textContent = 'View project on GitHub';

    detailsParagraph2.appendChild(githubLink);

    overlayText.appendChild(detailsParagraph2);

    if (project.images && project.images.length > 1) {
        const carouselContainer = document.createElement('div');
        carouselContainer.id = 'carouselExampleIndicators';
        carouselContainer.classList.add('carousel', 'slide');
        carouselContainer.setAttribute('data-bs-ride', 'carousel');

        const indicators = document.createElement('div');
        indicators.classList.add('carousel-indicators');

        const innerCarousel = document.createElement('div');
        innerCarousel.classList.add('carousel-inner');

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
            imgElement.classList.add('d-block', 'w-100');

            item.appendChild(imgElement);
            innerCarousel.appendChild(item);
        });

        carouselContainer.appendChild(indicators);
        carouselContainer.appendChild(innerCarousel);

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
        overlayImagesContainer.appendChild(carouselContainer);
    }

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
        overlayImagesContainer.textContent = ''; 
    }
    if (overlayTitle) {
        overlayTitle.textContent = '';
    }
    if (overlayText) {
        overlayText.textContent = ''; 
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

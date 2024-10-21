// window.showSolanaOverlay = function (project) {
//     const overlay = document.getElementById('content-overlay');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayImage = document.getElementById('overlay-image');
//     const overlayText = document.getElementById('overlay-text');
//     const overlayImagesContainer2 = document.getElementById('overlay-images-container-2');

//     console.log('Overlay triggered for project:', project);

//     overlayImagesContainer2.innerHTML = '';
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
//                 ${project.title === 'Solana Solar' && project.type === 'design' ?
//                 project.icons.slice(0, 1).map((icon) => `
//                             <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
//                                 <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="50px">
//                             </a>
//                         `).join('')
//                 : ''}
//             </div>
//         </div>
//         <p class="details">${project.details}</p>
//     `;

//     const mainContainer = document.createElement('div');
//     mainContainer.id = 'main-container';
//     overlayText.appendChild(mainContainer); 

//     if (project.images?.[1]?.url) {
//         const imgElement = document.createElement('img');
//         imgElement.classList.add('solana-figma-img');
//         imgElement.src = project.images[1].url;
//         mainContainer.appendChild(imgElement);
//     }

//     overlay.style.display = 'flex';
//     document.body.classList.add('overlay-open');
// };

// window.closeOverlay = function () {
//     const overlay = document.getElementById('content-overlay');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayImage = document.getElementById('overlay-image');
//     const overlayText = document.getElementById('overlay-text');
//     const mainContainer = document.getElementById('main-container');

//     if (overlayTitle) overlayTitle.textContent = '';

//     if (overlayImage) {
//         overlayImage.src = ''; 
//         overlayImage.style.display = 'none'; 
//     }

//     if (overlayText) overlayText.innerHTML = ''; 

//     if (mainContainer) {
//         mainContainer.innerHTML = ''; // Clear all content within mainContainer
//         mainContainer.remove();
//     }

//     if (overlay) {
//         overlay.style.display = 'none'; 
//         document.body.classList.remove('overlay-open'); 
//     }
// };

window.showSolanaOverlay = function (project) {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer2 = document.getElementById('overlay-images-container-2');

    console.log('Overlay triggered for project:', project);

    // Clear existing content safely
    overlayImagesContainer2.innerHTML = '';
    overlayText.innerHTML = '';

    // Set overlay title
    overlayTitle.textContent = project.title;

    // Handle the full screen image
    if (project.fullScreenImage) {
        overlayImage.src = project.fullScreenImage;
        overlayImage.style.display = 'block';
    } else {
        overlayImage.style.display = 'none';
    }

    // Create the main container structure
    const headingDiv = document.createElement('div');
    headingDiv.classList.add('heading');

    const roleHeading = document.createElement('h3');
    roleHeading.classList.add('role');
    roleHeading.textContent = project.role;

    const dateHeading = document.createElement('h4');
    dateHeading.classList.add('date');
    dateHeading.textContent = project.date;

    headingDiv.appendChild(roleHeading);
    headingDiv.appendChild(dateHeading);

    const subheadingDiv = document.createElement('div');
    subheadingDiv.classList.add('subheading');

    const categoryHeading = document.createElement('h4');
    categoryHeading.classList.add('project');
    categoryHeading.textContent = project.category;

    subheadingDiv.appendChild(categoryHeading);

    // Icons container
    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');

    if (project.title === 'Solana Solar' && project.type === 'design') {
        project.icons.slice(0, 1).forEach((icon) => {
            const iconLink = document.createElement('a');
            iconLink.href = icon.link;
            iconLink.target = '_blank';
            iconLink.rel = 'noopener noreferrer';

            const iconImg = document.createElement('img');
            iconImg.src = icon.url;
            iconImg.alt = 'Icon';
            iconImg.classList.add('project-icon');
            iconImg.style.width = 'auto';
            iconImg.style.height = '50px';

            iconLink.appendChild(iconImg);
            iconsContainer.appendChild(iconLink);
        });
    }

    subheadingDiv.appendChild(iconsContainer);

    // Add project details
    const detailsParagraph = document.createElement('p');
    detailsParagraph.classList.add('details');
    detailsParagraph.textContent = project.details;

    overlayText.appendChild(headingDiv);
    overlayText.appendChild(subheadingDiv);
    overlayText.appendChild(detailsParagraph);

    // Main content container for additional images
    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    overlayText.appendChild(mainContainer); 

    // Add image if present
    if (project.images?.[1]?.url) {
        const imgElement = document.createElement('img');
        imgElement.classList.add('solana-figma-img');
        imgElement.src = project.images[1].url;
        mainContainer.appendChild(imgElement);
    }

    // Display the overlay
    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
};

window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const mainContainer = document.getElementById('main-container');

    if (overlayTitle) overlayTitle.textContent = '';
    if (overlayImage) {
        overlayImage.src = ''; 
        overlayImage.style.display = 'none'; 
    }
    if (overlayText) overlayText.innerHTML = ''; 
    if (mainContainer) {
        mainContainer.innerHTML = ''; 
        mainContainer.remove();
    }
    if (overlay) {
        overlay.style.display = 'none'; 
        document.body.classList.remove('overlay-open'); 
    }
};

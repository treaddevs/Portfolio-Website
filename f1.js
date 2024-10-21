// window.showF1Overlay = function (project) {
//     const overlay = document.getElementById('content-overlay');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayImage = document.getElementById('overlay-image');
//     const overlayText = document.getElementById('overlay-text');
//     const overlayImagesContainer = document.getElementById('overlay-images-container');
//     const embedContainer = document.getElementById('embed-element');
//     const fallbackImageContainer = document.getElementById('fallback-image-container');

//     console.log('Overlay triggered for project:', project);

//     // Check if fallbackImageContainer exists
//     if (!fallbackImageContainer) {
//         console.error('Fallback image container not found');
//         return; // Exit the function if not found
//     }

//     overlayImagesContainer.innerHTML = '';
//     overlayText.innerHTML = '';
//     fallbackImageContainer.innerHTML = '';

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
//                 ${project.title === 'Fusion F1' && project.type === 'dev' ?
//                     project.icons.slice(0, 4).map((icon) => `
//                         <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
//                             <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="50px">
//                         </a>
//                     `).join('')
//                 : ''}
//             </div>
//         </div>
//         <p class="details">${project.details}</p>
//         ${project.embedUrl ? `<div class="f1-embed-container"><embed id="embed-element" src="${project.embedUrl}" style="width: 90vw; height: 85vh"></div>` : ''}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
//         <div class="f1-embed-container" style="display: none";>
//             <embed id="embed-element" src="${project.embedUrl}" style="width: 90vw; height: 85vh">
//         </div>
//         <div class="fallback-wrapper">        
//             <div id="fallback-image-container"></div>
//         </div>
//         <p class="details-2">${project.details2}</p>
//         <p class="details-3">${project.details3}</p>
//         <div class="image-container">
//             <div style="background-image: url('${project.images[1].url}');"></div>
//         </div>
//         <p class="details-4">${project.details4}</p>
//         <div class="image-container">
//             <div style="background-image: url('${project.images[2].url}');"></div>
//         </div>
//     `;

//     const screenWidth = window.innerWidth;

//     if (screenWidth < 992 && project.fallbackImage) {
//         const fallbackImage = document.createElement('img');
//         fallbackImage.src = project.fallbackImage;
//         fallbackImage.alt = 'Website preview';
//         fallbackImage.style.width = "100%";
//         fallbackImage.style.height = "auto";

//         fallbackImageContainer.appendChild(fallbackImage);
//         embedContainer.style.display = 'none';
//     } else if (project.embedUrl) {
//         embedContainer.style.display = 'block';
//     }

//     overlay.style.display = 'flex';
//     document.body.classList.add('overlay-open');
// };

// window.closeOverlay = function () {
//     const overlay = document.getElementById('content-overlay');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayImage = document.getElementById('overlay-image');
//     const overlayText = document.getElementById('overlay-text');
//     const overlayImagesContainer = document.getElementById('overlay-images-container');
//     const embedContainer = document.getElementById('embed-element');
//     const fallbackImageContainer = document.getElementById('fallback-image-container');

//     if (overlayTitle) overlayTitle.textContent = '';
//     if (overlayImage) {
//         overlayImage.src = ''; 
//         overlayImage.style.display = 'none'; 
//     }
//     if (overlayText) overlayText.innerHTML = ''; 
//     if (overlayImagesContainer) overlayImagesContainer.innerHTML = '';
//     if (embedContainer) {
//         embedContainer.src = ''; 
//         embedContainer.style.display = 'none';
//     }
//     if (fallbackImageContainer) fallbackImageContainer.innerHTML = ''; 

//     if (overlay) {
//         overlay.style.display = 'none'; 
//         document.body.classList.remove('overlay-open'); 
//     }
// };

window.showF1Overlay = function (project) {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const embedContainer = document.getElementById('embed-element');
    const fallbackImageContainer = document.getElementById('fallback-image-container');
    const overlayImagesContainer = document.getElementById('overlay-images-container');
    const overlayImagesContainer2 = document.getElementById('overlay-images-container-2');

    console.log('Overlay triggered for project:', project);

    if (!fallbackImageContainer) {
        console.error('Fallback image container not found');
        return;
    }

    fallbackImageContainer.textContent = '';
    overlayImagesContainer.innerHTML = '';
    overlayImagesContainer2.innerHTML = '';
    overlayText.innerHTML = '';

    overlayTitle.textContent = project.title;

    if (project.fullScreenImage) {
        overlayImage.src = project.fullScreenImage;
        overlayImage.style.display = 'block';
    } else {
        overlayImage.style.display = 'none';
    }

    const headingDiv = document.createElement('div');
    headingDiv.className = 'heading';

    const roleHeading = document.createElement('h3');
    roleHeading.className = 'role';
    roleHeading.textContent = project.role;
    headingDiv.appendChild(roleHeading);

    const dateHeading = document.createElement('h4');
    dateHeading.className = 'date';
    dateHeading.textContent = project.date;
    headingDiv.appendChild(dateHeading);

    overlayText.appendChild(headingDiv);

    const subheadingDiv = document.createElement('div');
    subheadingDiv.className = 'subheading';

    const categoryHeading = document.createElement('h4');
    categoryHeading.className = 'project';
    categoryHeading.textContent = project.category;
    subheadingDiv.appendChild(categoryHeading);

    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'icons-container';

    if (project.title === 'Fusion F1' && project.type === 'dev' && project.icons.length > 0) {
        project.icons.slice(0, 4).forEach(icon => {
            const iconLink = document.createElement('a');
            iconLink.href = icon.link;
            iconLink.target = '_blank';
            iconLink.rel = 'noopener noreferrer';

            const iconImg = document.createElement('img');
            iconImg.src = icon.url;
            iconImg.alt = 'Icon';
            iconImg.className = 'project-icon';
            iconImg.style.height = '50px';
            iconLink.appendChild(iconImg);

            iconsContainer.appendChild(iconLink);
        });
    }

    subheadingDiv.appendChild(iconsContainer);
    overlayText.appendChild(subheadingDiv);

    const detailsPara = document.createElement('p');
    detailsPara.className = 'details';
    detailsPara.textContent = project.details;
    overlayText.appendChild(detailsPara);

    const screenWidth = window.innerWidth;
    if (screenWidth >= 992 && project.embedUrl) {
        const embedElement = document.createElement('embed');
        embedElement.id = 'embed-element';
        embedElement.src = project.embedUrl;
        embedElement.style.width = '90vw';
        embedElement.style.height = '85vh';
        overlayText.appendChild(embedElement);
        embedContainer.style.display = 'block';  
        fallbackImageContainer.style.display = 'none';  
    } else {
        embedContainer.style.display = 'none';  
        if (project.fallbackImage) {
            const fallbackImage = document.createElement('img');
            fallbackImage.src = project.fallbackImage;
            fallbackImage.alt = 'Website preview';
            fallbackImage.style.width = '100%';
            fallbackImage.style.height = 'auto';
            fallbackImageContainer.appendChild(fallbackImage);
            fallbackImageContainer.style.display = 'block';  
        }
    }

    if (project.details2) {
        const detailsPara2 = document.createElement('p');
        detailsPara2.className = 'details-2';
        detailsPara2.textContent = project.details2;
        overlayText.appendChild(detailsPara2);
    }

    if (project.details3) {
        const detailsPara3 = document.createElement('p');
        detailsPara3.className = 'details-3';
        detailsPara3.textContent = project.details3;
        overlayText.appendChild(detailsPara3);
    }

    if (project.images && project.images.length > 1) {
        const imageContainer1 = document.createElement('div');
        imageContainer1.className = 'image-container';
        imageContainer1.style.backgroundImage = `url('${project.images[1].url}')`;
        imageContainer1.style.backgroundSize = 'cover'; 
        imageContainer1.style.backgroundPosition = 'center'; 
        imageContainer1.style.backgroundRepeat = 'no-repeat';  
        overlayText.appendChild(imageContainer1);
    }

    if (project.details4) {
        const detailsPara4 = document.createElement('p');
        detailsPara4.className = 'details-4';
        detailsPara4.textContent = project.details4;
        overlayText.appendChild(detailsPara4);
    }

    if (project.images && project.images.length > 2) {
        const imageContainer2 = document.createElement('div');
        imageContainer2.className = 'image-container';
        imageContainer2.style.backgroundImage = `url('${project.images[2].url}')`;
        imageContainer2.style.backgroundSize = 'cover';  
        imageContainer2.style.backgroundPosition = 'center';  
        imageContainer2.style.backgroundRepeat = 'no-repeat';  
        overlayText.appendChild(imageContainer2);
    }

    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
};

window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer = document.getElementById('overlay-images-container');
    const embedContainer = document.getElementById('embed-element');
    const fallbackImageContainer = document.getElementById('fallback-image-container');

    if (overlayTitle) overlayTitle.textContent = '';
    if (overlayImage) {
        overlayImage.src = '';
        overlayImage.style.display = 'none';
    }
    if (overlayText) overlayText.textContent = '';
    if (overlayImagesContainer) overlayImagesContainer.textContent = '';
    if (embedContainer) {
        embedContainer.src = '';
        embedContainer.style.display = 'none';
    }
    if (fallbackImageContainer) fallbackImageContainer.textContent = '';

    overlay.style.display = 'none';
    document.body.classList.remove('overlay-open');
};

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
            iconLink.appendChild(iconImg);

            iconsContainer.appendChild(iconLink);
        });
    }

    subheadingDiv.appendChild(iconsContainer);
    overlayText.appendChild(subheadingDiv);

    const detailsParagraph = document.createElement('p');
    detailsParagraph.className = 'details';

    const imdbLink = document.createElement('a');
    imdbLink.href = 'https://www.imdb.com/title/tt8289930/';
    imdbLink.target = '_blank';
    imdbLink.rel = 'noopener noreferrer';
    imdbLink.textContent = 'Formula 1: Drive to Survive';

    detailsParagraph.appendChild(document.createTextNode('Being the first website I built from the ground up, my goal was to reimagine and redesign the website of an existing brand. Captivated by the intensity of the Netflix series '));
    detailsParagraph.appendChild(imdbLink);
    detailsParagraph.appendChild(document.createTextNode(', I decided to start with Formula 1 for its global influence, international innovation, acceptance of use for educational purposes, asset/font availability, and presence of public APIs.'));
    overlayText.appendChild(detailsParagraph);

    const detailsParagraph2 = document.createElement('p');
    detailsParagraph2.className = 'details';

    const githubLink = document.createElement('a');
    githubLink.href = 'https://treaddevs.github.io/Fusion-F1/';
    githubLink.target = '_blank';
    githubLink.rel = 'noopener noreferrer';
    githubLink.textContent = 'https://treaddevs.github.io/Fusion-F1/';
   
    detailsParagraph2.appendChild(githubLink);

    overlayText.appendChild(detailsParagraph2);

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
        const detailsParagraph2 = document.createElement('p');
        detailsParagraph2.className = 'details-2';
        detailsParagraph2.textContent = project.details2;
        overlayText.appendChild(detailsParagraph2);
    }

    if (project.details3) {
        const detailsParagraph3 = document.createElement('p');
        detailsParagraph3.className = 'details-3';
        detailsParagraph3.textContent = project.details3;
        overlayText.appendChild(detailsParagraph3);
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

    const detailsParagraph4 = document.createElement('p');
    detailsParagraph4.className = 'details';

    const f1Link = document.createElement('a');
    f1Link.href = 'https://www.formula1.com/';
    f1Link.target = '_blank';
    f1Link.rel = 'noopener noreferrer';
    f1Link.textContent = 'https://www.formula1.com/';

    detailsParagraph4.appendChild(document.createTextNode('The driver rankings/standings section is modeled after the same currently found on the Formula 1 website '));
    detailsParagraph4.appendChild(f1Link);
    detailsParagraph4.appendChild(document.createTextNode('. This component uses the F1 Ergast Developer API to load the driver data (Note: this API is being deprecated at the end of the 2024 season)'));
    overlayText.appendChild(detailsParagraph4);

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

    history.pushState({ overlayOpen: true }, "");
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
    if (overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open');
    }
    if (history.state?.overlayOpen) history.back();
};

window.addEventListener("popstate", function(event) {
    if (!event.state?.overlayOpen) closeOverlay();
});
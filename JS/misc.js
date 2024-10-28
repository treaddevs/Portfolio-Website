// window.showMiscOverlay = function (project) {
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
//         </div>
//         <div class="subheading">
//             <h4 class="project">${project.category}</h4>
//             <div class="icons-container">
//                 ${project.title === 'Miscellaneous' && project.type === 'design' ?
//                 project.icons.slice(0, 2).map((icon) => `
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
//     mainContainer.style.display = 'block';

//     const detailsAndImages = [
//         { imgSrc: project.images?.[0]?.url, imgClass: 'muse-figma-img' },
//         { detail: project.details2, imgSrc: project.images?.[1]?.url, imgClass: 'muse-1-img' },
//         { detail: project.details3, imgSrc: project.images?.[2]?.url, imgClass: 'muse-2-img' }
//     ];

//     detailsAndImages.forEach(item => {
//         const detailParagraph = document.createElement('p');
//         detailParagraph.textContent = item.detail;
//         detailParagraph.classList.add('mobile-details');
//         mainContainer.appendChild(detailParagraph);

//         const imgElement = document.createElement('img');
//         imgElement.classList.add(item.imgClass);
//         imgElement.src = item.imgSrc;
//         mainContainer.appendChild(imgElement);
//     });

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
//         mainContainer.remove();
//     }

//     if (overlay) {
//         overlay.style.display = 'none'; 
//         document.body.classList.remove('overlay-open'); 
//     }
// };

window.showMiscOverlay = function (project) {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer2 = document.getElementById('overlay-images-container-2');

    console.log('Overlay triggered for project:', project);

    overlayImagesContainer2.innerHTML = '';
    overlayText.innerHTML = '';
    overlayTitle.textContent = project.title;

    overlayImage.style.display = project.fullScreenImage ? 'block' : 'none';
    overlayImage.src = project.fullScreenImage || '';

    const heading = document.createElement('div');
    heading.classList.add('heading');
    const roleElement = document.createElement('h3');
    roleElement.className = 'role';
    roleElement.textContent = project.role;
    heading.appendChild(roleElement);
    
    const subheading = document.createElement('div');
    subheading.classList.add('subheading');
    const projectElement = document.createElement('h4');
    projectElement.className = 'project';
    projectElement.textContent = project.category;
    
    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');
    if (project.title === 'Miscellaneous' && project.type === 'design') {
        project.icons.slice(0, 2).forEach(icon => {
            const anchor = document.createElement('a');
            anchor.href = icon.link;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';
            const img = document.createElement('img');
            img.src = icon.url;
            img.alt = 'Icon';
            img.className = 'project-icon';
            img.width = 'auto';
            img.height = '50px';
            anchor.appendChild(img);
            iconsContainer.appendChild(anchor);
        });
    }
    subheading.appendChild(projectElement);
    subheading.appendChild(iconsContainer);
    
    overlayText.appendChild(heading);
    overlayText.appendChild(subheading);
    
    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    overlayText.appendChild(mainContainer);
    mainContainer.style.display = 'block';

    const detailsAndImages = [
        { detail: project.details, imgSrc: project.images?.[0]?.url, imgClass: 'muse-figma-img' },
        { detail: project.details2, imgSrc: project.images?.[1]?.url, imgClass: 'muse-1-img' },
        { detail: project.details3, imgSrc: project.images?.[2]?.url, imgClass: 'muse-2-img' }
    ];

    detailsAndImages.forEach(item => {
        if (item.detail) {
            const detailParagraph = document.createElement('p');
            detailParagraph.textContent = item.detail;
            detailParagraph.classList.add('mobile-details');
            mainContainer.appendChild(detailParagraph);
        }
        if (item.imgSrc) {
            const imgElement = document.createElement('img');
            imgElement.classList.add(item.imgClass);
            imgElement.src = item.imgSrc;
            mainContainer.appendChild(imgElement);
        }
    });

    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');

    history.pushState({ overlayOpen: true }, "");
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
    if (mainContainer) mainContainer.remove();
    if (overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open');
    }
    if (history.state?.overlayOpen) history.back();
};

window.addEventListener("popstate", function(event) {
    if (!event.state?.overlayOpen) closeOverlay();
});


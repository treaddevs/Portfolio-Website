// window.showMobileOverlay = function (project) {
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
//                 ${project.title === 'Mobile App UI Designs' && project.type === 'design' ?
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
//         { detail: project.details3, imgSrc: project.images?.[2]?.url, imgClass: 'muse-2-img' },
//         { detail: project.details4, imgSrc: project.images?.[3]?.url, imgClass: 'muse-3-img' },
//         { detail: project.details5, imgSrc: project.images?.[4]?.url, imgClass: 'muse-4-img' },
//         { detail: project.details6, imgSrc: project.images?.[5]?.url, imgClass: 'elev8-1-img' },
//         { detail: project.details7, imgSrc: project.images?.[6]?.url, imgClass: 'elev8-2-img' }
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

//     if (mainContainer) {
//         mainContainer.remove(); 
//     }
//     if (overlayTitle) {
//         overlayTitle.textContent = '';
//     }
//     if (overlayImage) {
//         overlayImage.src = '';
//         overlayImage.style.display = 'none';
//     }
//     if (overlayText) {
//         overlayText.innerHTML = ''; 
//     }
//     if (overlay) {
//         overlay.style.display = 'none';
//         document.body.classList.remove('overlay-open');
//     }
// };

window.showMobileOverlay = function (project) {
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
    overlayText.appendChild(headingDiv);

    const subheadingDiv = document.createElement('div');
    subheadingDiv.classList.add('subheading');
    const projectCategory = document.createElement('h4');
    projectCategory.classList.add('project');
    projectCategory.textContent = project.category;
    subheadingDiv.appendChild(projectCategory);

    if (project.title === 'Mobile App UI Designs' && project.type === 'design') {
        const iconsContainer = document.createElement('div');
        iconsContainer.classList.add('icons-container');
        project.icons.slice(0, 2).forEach((icon) => {
            const iconLink = document.createElement('a');
            iconLink.href = icon.link;
            iconLink.target = '_blank';
            iconLink.rel = 'noopener noreferrer';
            const iconImage = document.createElement('img');
            iconImage.src = icon.url;
            iconImage.alt = 'Icon';
            iconImage.classList.add('project-icon');
            iconLink.appendChild(iconImage);
            iconsContainer.appendChild(iconLink);
        });
        subheadingDiv.appendChild(iconsContainer);
    }
    overlayText.appendChild(subheadingDiv);

    const detailsParagraph = document.createElement('p');
    detailsParagraph.className = 'details';

    const behanceLink = document.createElement('a');
    behanceLink.href = 'https://www.behance.net/';
    behanceLink.target = '_blank';
    behanceLink.rel = 'noopener noreferrer';
    behanceLink.textContent = 'Behance';

    const dribbbleLink = document.createElement('a');
    dribbbleLink.href = 'https://dribbble.com/';
    dribbbleLink.target = '_blank';
    dribbbleLink.rel = 'noopener noreferrer';
    dribbbleLink.textContent = 'Dribbble';

    const awwwardsLink = document.createElement('a');
    awwwardsLink.href = 'https://www.awwwards.com/';
    awwwardsLink.target = '_blank';
    awwwardsLink.rel = 'noopener noreferrer';
    awwwardsLink.textContent = 'Awwwards';

    detailsParagraph.appendChild(document.createTextNode('This section is comprised of some mobile UI designs I did in Figma over winter break 2023. I enjoy designing and understand concepts such as user-centered design, consistency, heirarchy, accessibility, simplicity, color theory, use of white/negative space, the rule of thirds in photo composition, and content. I find inspiration from clean and elegant designs from online sources like '));
    detailsParagraph.appendChild(behanceLink);
    detailsParagraph.appendChild(document.createTextNode(', '));
    detailsParagraph.appendChild(dribbbleLink);
    detailsParagraph.appendChild(document.createTextNode(', and '));
    detailsParagraph.appendChild(awwwardsLink);
    detailsParagraph.appendChild(document.createTextNode(' (for web design).'));

    overlayText.appendChild(detailsParagraph);

    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    overlayText.appendChild(mainContainer);

    const detailsAndImages = [
        { imgSrc: project.images?.[0]?.url, imgClass: 'muse-figma-img' },
        { detail: project.details2, imgSrc: project.images?.[1]?.url, imgClass: 'muse-1-img' },
        { detail: project.details3, imgSrc: project.images?.[2]?.url, imgClass: 'muse-2-img' },
        { detail: project.details4, imgSrc: project.images?.[3]?.url, imgClass: 'muse-3-img' },
        { detail: project.details5, imgSrc: project.images?.[4]?.url, imgClass: 'muse-4-img' },
        { detail: project.details6, imgSrc: project.images?.[5]?.url, imgClass: 'elev8-1-img' },
        { detail: project.details7, imgSrc: project.images?.[6]?.url, imgClass: 'elev8-2-img' }
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

    if (mainContainer) {
        mainContainer.remove(); 
    }
    if (overlayTitle) {
        overlayTitle.textContent = ''; 
    }
    if (overlayImage) {
        overlayImage.src = ''; 
        overlayImage.style.display = 'none'; 
    }
    if (overlayText) {
        overlayText.innerHTML = ''; 
    }
    if (overlay) {
        overlay.style.display = 'none'; 
        document.body.classList.remove('overlay-open');
    }
    if (history.state?.overlayOpen) history.back();
};

window.addEventListener("popstate", function(event) {
    if (!event.state?.overlayOpen) closeOverlay();
});
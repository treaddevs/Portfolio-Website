// window.showQualaOverlay = function (project) {
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
//                 ${project.title === 'Quala Water Bottles' && project.type === 'design' ?
//             project.icons.slice(0, 2).map((icon) => `
//                         <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
//                             <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="50px">
//                         </a>
//                     `).join('')
//             : ''}
//             </div>
//         </div>
//         <p class="details">${project.details}</p>
//     `;

//     if (project.videos) {
//         const videoContainer = document.createElement('div');
//         videoContainer.id = 'overlay-video-container';
//         videoContainer.innerHTML = `
//             <video id="overlay-video" class="video" controls>
//                 <source id="video-source" src="${project.videos}" type="video/mp4">
//                 Your browser does not support the video tag. 
//             </video>
//         `;
//         overlayText.appendChild(videoContainer); // Append the video container to overlay text
//         videoContainer.style.display = 'block';

//         const imgElement = document.createElement('img');
//         imgElement.classList.add('quala-figma-img');
//         imgElement.src = project.images[1].url;
//         videoContainer.appendChild(imgElement);

//         const imgElement2 = document.createElement('img');
//         imgElement2.classList.add('quala-figma-img');
//         imgElement2.src = project.images[2].url;
//         videoContainer.appendChild(imgElement2);
//     }

//     overlay.style.display = 'flex';
//     document.body.classList.add('overlay-open');
// };

// window.closeOverlay = function () {
//     const overlay = document.getElementById('content-overlay');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayImage = document.getElementById('overlay-image');
//     const overlayText = document.getElementById('overlay-text');
//     const videoContainer = document.getElementById('overlay-video-container');

//     if (overlayTitle) overlayTitle.textContent = '';

//     if (overlayImage) {
//         overlayImage.src = ''; 
//         overlayImage.style.display = 'none'; 
//     }

//     if (overlayText) overlayText.innerHTML = ''; 

//     if (videoContainer) {
//         videoContainer.remove();
//     }

//     if (overlay) {
//         overlay.style.display = 'none'; 
//         document.body.classList.remove('overlay-open'); 
//     }
// };

window.showQualaOverlay = function (project) {
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
    headingDiv.appendChild(roleHeading);

    const dateHeading = document.createElement('h4');
    dateHeading.classList.add('date');
    dateHeading.textContent = project.date;
    headingDiv.appendChild(dateHeading);

    overlayText.appendChild(headingDiv);

    const subheadingDiv = document.createElement('div');
    subheadingDiv.classList.add('subheading');

    const projectHeading = document.createElement('h4');
    projectHeading.classList.add('project');
    projectHeading.textContent = project.category;
    subheadingDiv.appendChild(projectHeading);

    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');

    if (project.title === 'Quala Water Bottles' && project.type === 'design') {
        project.icons.slice(0, 2).forEach(icon => {
            const anchor = document.createElement('a');
            anchor.href = icon.link;
            anchor.target = '_blank';
            anchor.rel = 'noopener noreferrer';

            const iconImg = document.createElement('img');
            iconImg.src = icon.url;
            iconImg.alt = 'Icon';
            iconImg.classList.add('project-icon');
            iconImg.width = 'auto';
            iconImg.height = 50;

            anchor.appendChild(iconImg);
            iconsContainer.appendChild(anchor);
        });
    }

    subheadingDiv.appendChild(iconsContainer);
    overlayText.appendChild(subheadingDiv);

    const amazonLink = document.createElement('a');
    amazonLink.href = 'https://www.amazon.com/Enerbone-Motivational-Drinking-Carrying-Leakproof/dp/B097SDRNHM';
    amazonLink.target = '_blank';
    amazonLink.rel = 'noopener noreferrer';
    amazonLink.textContent = 'Enerbone 32 oz Drinking Water Bottle';

    const detailsParagraph = document.createElement('p');
    detailsParagraph.classList.add('details');
    detailsParagraph.appendChild(document.createTextNode('Quala Water Bottles is a fictional company based on an existing product sourced from multiple online retailers. ('));
    detailsParagraph.appendChild(amazonLink);
    detailsParagraph.appendChild(document.createTextNode(') For this project, I designed an E-Commerce UI that displays multiple screens to guide the user experience and inform the purchasing decision. I designed this UI in Figma'));

    overlayText.appendChild(detailsParagraph);

    if (project.videos) {
        const videoContainer = document.createElement('div');
        videoContainer.id = 'overlay-video-container';

        const videoElement = document.createElement('video');
        videoElement.id = 'overlay-video';
        videoElement.classList.add('video');
        videoElement.controls = true;

        const videoSource = document.createElement('source');
        videoSource.id = 'video-source';
        videoSource.src = project.videos;
        videoSource.type = 'video/mp4';

        videoElement.appendChild(videoSource);
        videoContainer.appendChild(videoElement);
        overlayText.appendChild(videoContainer);

        videoContainer.style.display = 'block';

        const imgElement1 = document.createElement('img');
        imgElement1.classList.add('quala-figma-img');
        imgElement1.src = project.images[1].url;
        videoContainer.appendChild(imgElement1);

        const imgElement2 = document.createElement('img');
        imgElement2.classList.add('quala-figma-img');
        imgElement2.src = project.images[2].url;
        videoContainer.appendChild(imgElement2);
    }

    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
};

window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const videoContainer = document.getElementById('overlay-video-container');

    if (overlayTitle) overlayTitle.textContent = '';
    if (overlayImage) {
        overlayImage.src = ''; 
        overlayImage.style.display = 'none'; 
    }
    if (overlayText) overlayText.innerHTML = ''; 
    if (videoContainer) {
        videoContainer.remove();
    }
    if (overlay) {
        overlay.style.display = 'none'; 
        document.body.classList.remove('overlay-open'); 
    }
};


window.showPortlandOverlay = function (project) {
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

    if (project.title === 'City of Portland' && project.type === 'dev') {
        project.icons.slice(0, 1).forEach(icon => {
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

    const detailsParagraph = document.createElement('p');
    detailsParagraph.classList.add('details');
    detailsParagraph.appendChild(document.createTextNode('For my Project Capstone course my team and I are developing a communication system between the City of Portland Department of Economic Opportunity and their connected organizations that teach English for Speakers of Other Languages (ESOL). Our goal is to help administrators receive information about class schedules, waitlists, and more and help prospective students join waitlists and enroll in ESL/ESOL courses. We aim to use a pub/sub messaging pattern architecture. Here are the preliminary UI designs.'));

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

    history.pushState({ overlayOpen: true }, "");
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
    if (history.state?.overlayOpen) history.back();
};

window.addEventListener("popstate", function(event) {
    if (!event.state?.overlayOpen) closeOverlay();
});

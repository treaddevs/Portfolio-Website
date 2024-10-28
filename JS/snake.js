window.showSnakeOverlay = function (project) {
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

    const subheadingDiv = document.createElement('div');
    subheadingDiv.classList.add('subheading');

    const categoryHeading = document.createElement('h4');
    categoryHeading.classList.add('project');
    categoryHeading.textContent = project.category;

    subheadingDiv.appendChild(categoryHeading);

    const iconsContainer = document.createElement('div');
    iconsContainer.classList.add('icons-container');

    if (project.title === 'Snake Game' && project.type === 'game') {
        project.icons.slice(0, 1).forEach((icon) => {
            const iconLink = document.createElement('a');
            iconLink.href = icon.link;
            iconLink.target = '_blank';
            iconLink.rel = 'noopener noreferrer';

            const iconImg = document.createElement('img');
            iconImg.src = icon.url;
            iconImg.alt = 'Icon';
            iconImg.classList.add('project-icon');
            iconLink.appendChild(iconImg);
            iconsContainer.appendChild(iconLink);
        });
    }

    subheadingDiv.appendChild(iconsContainer);

    const controlsDiv = document.createElement('div');
    controlsDiv.classList.add('controls');

    const controlsHeading = document.createElement('h6');
    controlsHeading.classList.add('player');
    controlsHeading.textContent = project.controls;

    const arrowDiv = document.createElement('div');
    arrowDiv.classList.add('keys');

    if (project.images?.[1]?.url) {
        const imgElement = document.createElement('img');
        imgElement.classList.add('keys-img');
        imgElement.src = project.images[1].url;
        arrowDiv.appendChild(imgElement);
    }

    const detailsParagraph = document.createElement('p');
    detailsParagraph.className = 'details';

    const youtubeLink = document.createElement('a');
    youtubeLink.href = 'https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=19657s';
    youtubeLink.target = '_blank';
    youtubeLink.rel = 'noopener noreferrer';
    youtubeLink.textContent = 'Bro Code JavaScript Full Course 2022';

    detailsParagraph.appendChild(document.createTextNode('This JavaScript Snake Game was built based on this tutorial '));
    detailsParagraph.appendChild(youtubeLink);
    detailsParagraph.appendChild(document.createTextNode('. Use the arrow keys to move the snake around and eat the red apples to keep growing. Watch out for the walls or it\'s game over!'));

    overlayText.appendChild(headingDiv);
    overlayText.appendChild(subheadingDiv);
    overlayText.appendChild(controlsHeading);
    overlayText.appendChild(arrowDiv);
    overlayText.appendChild(detailsParagraph);

    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    overlayText.appendChild(mainContainer);

    const codePenEmbed = document.createElement('div');
    codePenEmbed.style.height = '650px'; 
    codePenEmbed.style.margin = '1em 0';
    codePenEmbed.style.padding = '1em'; 
    codePenEmbed.style.boxSizing = 'border-box'; 

    const iframe = document.createElement('iframe');
    iframe.height = '650'; 
    iframe.style.width = '100%'; 
    iframe.title = 'Snake Game';
    iframe.src = 'https://codepen.io/treaddevs/embed/JjgOQwj?default-tab=result'; 
    iframe.loading = 'lazy'; 
    iframe.allowTransparency = 'true';
    iframe.allowFullscreen = 'true'; 

    codePenEmbed.appendChild(iframe);
    mainContainer.appendChild(codePenEmbed);

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
    if (mainContainer) {
        mainContainer.innerHTML = '';
        mainContainer.remove();
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
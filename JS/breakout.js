window.showBreakoutOverlay = function (project) {
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

    if (project.title === 'Breakout Game' && project.type === 'game') {
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

    const detailsParagraph = document.createElement('p');
    detailsParagraph.className = 'details';

    const observablehqLink = document.createElement('a');
    observablehqLink.href = 'https://observablehq.com/';
    observablehqLink.target = '_blank';
    observablehqLink.rel = 'noopener noreferrer';
    observablehqLink.textContent = 'Observable';

    const codepenLink = document.createElement('a');
    codepenLink.href = 'https://codepen.io/trending';
    codepenLink.target = '_blank';
    codepenLink.rel = 'noopener noreferrer';
    codepenLink.textContent = 'CodePen';

    detailsParagraph.appendChild(document.createTextNode('This JavaScript Breakout Game was built in my Web Development class (CS 5610) within an '));
    detailsParagraph.appendChild(observablehqLink);
    detailsParagraph.appendChild(document.createTextNode(' notebook. For this website, I migrated my code to '));
    detailsParagraph.appendChild(codepenLink);
    detailsParagraph.appendChild(document.createTextNode(' so I could embed the iframe within this overlay.'));

    overlayText.appendChild(headingDiv);
    overlayText.appendChild(subheadingDiv);
    overlayText.appendChild(detailsParagraph);

    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    overlayText.appendChild(mainContainer);

    const codePenEmbed = document.createElement('div');
    codePenEmbed.style.height = '500px';
    codePenEmbed.style.margin = '1em 0';
    codePenEmbed.style.padding = '1em';
    codePenEmbed.style.boxSizing = 'border-box';

    const iframe = document.createElement('iframe');
    iframe.height = '500';
    iframe.style.width = '100%';
    iframe.title = 'Breakout Game';
    iframe.src = 'https://codepen.io/treaddevs/embed/OJKOebb?default-tab=result';
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
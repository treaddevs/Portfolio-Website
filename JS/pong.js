window.showPongOverlay = function (project) {
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

    if (project.title === 'Pong Game' && project.type === 'game') {
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

    const player1Div = document.createElement('div');
    player1Div.classList.add('player-1');

    const player1Heading = document.createElement('h6');
    player1Heading.classList.add('player');
    player1Heading.textContent = project.players[0];

    player1Div.appendChild(player1Heading);

    const wsDiv = document.createElement('div');
    wsDiv.classList.add('keys');

    if (project.images?.[1]?.url) {
        const imgElement = document.createElement('img');
        imgElement.classList.add('keys-img');
        imgElement.src = project.images[1].url;
        wsDiv.appendChild(imgElement);
    }

    const player2Div = document.createElement('div');
    player2Div.classList.add('player-2');

    const player2Heading = document.createElement('h6');
    player2Heading.classList.add('player');
    player2Heading.textContent = project.players[1];

    player2Div.appendChild(player2Heading);

    const updownDiv = document.createElement('div');
    updownDiv.classList.add('keys');

    if (project.images?.[2]?.url) {
        const imgElement = document.createElement('img');
        imgElement.classList.add('keys-img');
        imgElement.src = project.images[2].url;
        updownDiv.appendChild(imgElement);
    }

    const detailsParagraph = document.createElement('p');
    detailsParagraph.className = 'details';

    const youtubeLink = document.createElement('a');
    youtubeLink.href = 'https://www.youtube.com/watch?v=lfmg-EJ8gm4&t=19657s';
    youtubeLink.target = '_blank';
    youtubeLink.rel = 'noopener noreferrer';
    youtubeLink.textContent = 'Bro Code JavaScript Full Course 2022';

    detailsParagraph.appendChild(document.createTextNode('This JavaScript Pong Game was built based on this tutorial '));
    detailsParagraph.appendChild(youtubeLink);

    overlayText.appendChild(headingDiv);
    overlayText.appendChild(subheadingDiv);
    overlayText.appendChild(player1Heading);
    overlayText.appendChild(wsDiv);
    overlayText.appendChild(player2Heading);
    overlayText.appendChild(updownDiv);
    overlayText.appendChild(detailsParagraph);

    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    overlayText.appendChild(mainContainer);

    const codePenEmbed = document.createElement('div');
    codePenEmbed.style.height = '800px'; 
    codePenEmbed.style.margin = '1em 0';
    codePenEmbed.style.padding = '1em'; 
    codePenEmbed.style.boxSizing = 'border-box'; 

    const iframe = document.createElement('iframe');
    iframe.height = '800'; 
    iframe.style.width = '100%'; 
    iframe.title = 'Pong Game';
    iframe.src = 'https://codepen.io/treaddevs/embed/ZEgagoY?default-tab=result'; 
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
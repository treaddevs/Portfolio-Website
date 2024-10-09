window.showSolanaOverlay = function (project) {
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

    overlayText.innerHTML = `
        <div class="heading">
            <h3 class="role">${project.role}</h3>
            <h4 class="date">${project.date}</h4>
        </div>
        <div class="subheading">
            <h4 class="project">${project.category}</h4>
            <div class="icons-container">
                ${project.title === 'Solana Solar' && project.type === 'design' ?
                project.icons.slice(0, 1).map((icon) => `
                            <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                                <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="50px">
                            </a>
                        `).join('')
                : ''}
            </div>
        </div>
        <p class="details">${project.details}</p>
    `;

    const mainContainer = document.createElement('div');
    mainContainer.id = 'main-container';
    overlayText.appendChild(mainContainer); 

    if (project.images?.[1]?.url) {
        const imgElement = document.createElement('img');
        imgElement.classList.add('solana-figma-img');
        imgElement.src = project.images[1].url;
        mainContainer.appendChild(imgElement);
    }

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
        mainContainer.innerHTML = ''; // Clear all content within mainContainer
        mainContainer.remove();
    }

    if (overlay) {
        overlay.style.display = 'none'; 
        document.body.classList.remove('overlay-open'); 
    }
};

window.showVIADevOverlay = function (project) {
    function loadBotpressWebchat() {
        const injectScript = document.createElement('script');
        injectScript.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
        injectScript.onload = () => {
            const configScript = document.createElement('script');
            configScript.src = "https://mediafiles.botpress.cloud/7686e2be-d35c-4bf3-9470-5c5c02904ea4/webchat/v2.1/config.js";
            document.body.appendChild(configScript);
        };
        document.body.appendChild(injectScript);
    }

    loadBotpressWebchat();

    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer = document.getElementById('overlay-images-container');
    const fallbackWrapper = document.querySelector('.fallback-wrapper');

    console.log('Overlay triggered for project:', project);

    overlayImagesContainer.innerHTML = '';
    overlayText.innerHTML = '';

    overlayTitle.textContent = project.title;

    if (project.fullScreenImage) {
        overlayImage.src = project.fullScreenImage;
        overlayImage.style.display = 'block'; 
    } else {
        overlayImage.style.display = 'none'; 
    }

    fallbackWrapper.style.display = 'none';

    overlayText.innerHTML = `
        <div class="heading">
            <h3 class="role">${project.role}</h3>
            <h4 class="date">${project.date}</h4>
        </div>
        <div class="subheading">
            <h4 class="project">${project.category}</h4>
            <div class="icons-container">
                ${project.title === 'The VIA Agency' && project.type === 'dev' ?
                    project.icons.slice(0, 5).map((icon) => `
                        <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="40px">
                        </a>
                    `).join('')
                : ''}
            </div>
        </div>
        <p class="details">${project.details}</p>
        ${project.embedUrl ? `<div class="via-embed-container"><embed id="embed-element" src="${project.embedUrl}" style="width: 90vw; height: 85vh"></div>` : ''}
        <p class="details">${project.details2}</p>
    `;  

    if (project.videos) {
        const videoContainer = document.createElement('div');
        videoContainer.id = 'overlay-video-container';
        videoContainer.innerHTML = `
            <video id="overlay-video" class="video" controls>
                <source id="video-source" src="${project.videos}" type="video/mp4">
                Your browser does not support the video tag. 
            </video>
        `;
        overlayText.appendChild(videoContainer); 

        if (project.details3) {
            const details3Paragraph = document.createElement('p');
            details3Paragraph.className = 'details';
            details3Paragraph.textContent = project.details3;
            overlayText.appendChild(details3Paragraph);
        }
    }

    if (project.secondCategory) {
        overlayText.innerHTML += `
        <div class="subheading">
            <h4 class="second-category">${project.secondCategory}</h4>
            <div class="icons-container">
                ${project.title === 'The VIA Agency' && project.type === 'dev' ?
                project.icons.slice(5).map((icon) => `
                        <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
                            <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="40px" style="border-radius: 50px;">
                        </a>
                    `).join('')
                : ''}
            </div>
        </div>
        <div class="subtext">
            <h5 id="subtext">Boredom-Blaster ARM & HAMMER™ Baking Soda AI Chatbot</h5>
        </div>
        `;
    }

    if (Array.isArray(project.images)) {
        const mainContainer = document.createElement('div');
        mainContainer.className = 'main-container'; 

        const topImagesContainer = document.createElement('div');
        topImagesContainer.className = 'top-images-container'; 

        project.images.slice(1, 3).forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = image.alt || project.title;
            imgElement.className = 'overlay-additional-image';
            topImagesContainer.appendChild(imgElement);
        });

        const bottomContainer = document.createElement('div');
        bottomContainer.className = 'bottom-container';

        const imgElement3 = document.createElement('img');
        imgElement3.src = project.images[3].url;
        imgElement3.alt = project.images[3].alt || project.title;
        imgElement3.className = 'overlay-additional-image';
        bottomContainer.appendChild(imgElement3);

        const textButtonContainer = document.createElement('div');
        textButtonContainer.className = 'text-button-container'; 

        if (project.title === 'The VIA Agency' && project.type === 'dev') {
            // Add the chat button
            const chatButton = document.createElement('button');
            chatButton.className = 'btn btn-primary';
            chatButton.textContent = 'Chat with Boredom-Blaster!';
            chatButton.onclick = function () {
                botpress.toggle();
            };
            textButtonContainer.appendChild(chatButton);
        }

        const detailsTextElement = document.createElement('p');
        detailsTextElement.className = 'image-text';
        detailsTextElement.innerHTML = project.details4 || 'Default text';
        textButtonContainer.appendChild(detailsTextElement);
        
        bottomContainer.appendChild(textButtonContainer);
        mainContainer.appendChild(topImagesContainer);
        mainContainer.appendChild(bottomContainer);
        overlayImagesContainer.appendChild(mainContainer);
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
    const fallbackWrapper = document.querySelector('.fallback-wrapper');
    const videoContainer = document.getElementById('overlay-video-container');
    const bpContainer = document.querySelector('.bpContainer');

    overlayTitle.innerHTML = ''; 
    overlayImage.style.display = 'none';
    overlayImage.src = '';
    overlayText.innerHTML = ''; 
    overlayImagesContainer.innerHTML = ''; 
    fallbackWrapper.innerHTML = '';
    
    if (videoContainer) {
        videoContainer.remove();
    }

    if (overlay) {
        overlay.style.display = 'none'; 
        document.body.classList.remove('overlay-open');
    }

    if (bpContainer) {
        bpContainer.remove();
    }
};

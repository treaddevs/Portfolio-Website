window.showVIAOverlay = function (project) {
    function loadBotpressWebchat() {
        // Load the Botpress webchat inject script
        const injectScript = document.createElement('script');
        injectScript.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
        injectScript.onload = () => {
            // Load the configuration script after the inject script has loaded
            const configScript = document.createElement('script');
            configScript.src = "https://mediafiles.botpress.cloud/7686e2be-d35c-4bf3-9470-5c5c02904ea4/webchat/v2.1/config.js";
            document.body.appendChild(configScript);
        };
        document.body.appendChild(injectScript);
    }

    // Call this function when you want to load the webchat
    loadBotpressWebchat();

    // Get all necessary elements by their IDs
    const overlay = document.getElementById('content-overlay');
    const overlayTitle = document.getElementById('overlay-title');
    const overlayImage = document.getElementById('overlay-image');
    const overlayText = document.getElementById('overlay-text');
    const overlayImagesContainer = document.getElementById('overlay-images-container');

    // Clear previous images and text in the overlay container
    overlayImagesContainer.innerHTML = '';
    overlayText.innerHTML = '';

    // Set the title of the overlay
    overlayTitle.textContent = project.title;

    // Display the fullScreenImage if it exists
    if (project.fullScreenImage) {
        overlayImage.src = project.fullScreenImage;
        overlayImage.style.display = 'block'; // Show the full-screen image
    } else {
        overlayImage.style.display = 'none'; // Hide if not available
    }

    // Set the text content including role, date, and details
    overlayText.innerHTML = `
        <div class="heading">
            <h3 class="role">${project.role}</h3>
            <h4 class="date">${project.date}</h4>
        </div>
        <div class="subheading">
            <h4 class="project">${project.category}</h4>
            <div class="icons-container">
                ${project.title === 'The VIA Agency' ?
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

    // Handle video display
    if (project.videos) {
        // Create video container
        const videoContainer = document.createElement('div');
        videoContainer.id = 'overlay-video-container';
        videoContainer.innerHTML = `
            <video id="overlay-video" class="video" controls>
                <source id="video-source" src="${project.videos}" type="video/mp4">
                Your browser does not support the video tag. 
            </video>
        `;
        overlayText.appendChild(videoContainer); // Append the video container to overlay text

        if (project.details3) {
            const details3Paragraph = document.createElement('p');
            details3Paragraph.className = 'details';
            details3Paragraph.textContent = project.details3;
            overlayText.appendChild(details3Paragraph);
        }
    }

    // Add the second category after the video
    if (project.secondCategory) {
        overlayText.innerHTML += `
        <div class="subheading">
            <h4 class="second-category">${project.secondCategory}</h4>
            <div class="icons-container">
                ${project.title === 'The VIA Agency' ?
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

    // Display additional images and content based on project specifics
    if (Array.isArray(project.images)) {
        // Create a main container for images and text
        const mainContainer = document.createElement('div');
        mainContainer.className = 'main-container'; // Add a class for styling

        // Create a container for the first two images
        const topImagesContainer = document.createElement('div');
        topImagesContainer.className = 'top-images-container'; // Add a class for styling

        // Display the first two images side by side
        project.images.slice(1, 3).forEach(image => {
            const imgElement = document.createElement('img');
            imgElement.src = image.url;
            imgElement.alt = image.alt || project.title;
            imgElement.className = 'overlay-additional-image';
            topImagesContainer.appendChild(imgElement);
        });

        // Create a container for the third image and text
        const bottomContainer = document.createElement('div');
        bottomContainer.className = 'bottom-container'; // Add a class for styling

        // Add the third image
        const imgElement3 = document.createElement('img');
        imgElement3.src = project.images[3].url;
        imgElement3.alt = project.images[3].alt || project.title;
        imgElement3.className = 'overlay-additional-image';
        bottomContainer.appendChild(imgElement3);

        // Create a new container for the button and text
        const textButtonContainer = document.createElement('div');
        textButtonContainer.className = 'text-button-container'; // Add a class for styling

        // Conditionally add the chat button and details text only for VIA Agency
        if (project.title === 'The VIA Agency') {
            // Add the chat button
            const chatButton = document.createElement('button');
            chatButton.className = 'btn btn-primary';
            chatButton.textContent = 'Chat with Boredom-Blaster!';
            chatButton.onclick = function () {
                botpress.toggle();
            };
            textButtonContainer.appendChild(chatButton);
        }

        // Add the details4 text below the button
        const detailsTextElement = document.createElement('p');
        detailsTextElement.className = 'image-text';
        detailsTextElement.innerHTML = project.details4 || 'Default text';
        textButtonContainer.appendChild(detailsTextElement);

        // Append the text and button container to the bottom container
        bottomContainer.appendChild(textButtonContainer);

        // Append the containers to the main container
        mainContainer.appendChild(topImagesContainer);
        mainContainer.appendChild(bottomContainer);

        // Append the main container to the overlay
        overlayImagesContainer.appendChild(mainContainer);
    }

    // Show the overlay
    overlay.style.display = 'flex';
    document.body.classList.add('overlay-open');
};

// Close the overlay function
window.closeOverlay = function () {
    const overlay = document.getElementById('content-overlay');
    if (overlay) {
        overlay.style.display = 'none';
        document.body.classList.remove('overlay-open');

        // Hide the Botpress webchat container
        const bpContainer = document.querySelector('.bpContainer');
        if (bpContainer) {
            bpContainer.style.display = 'none';
            bpContainer.remove();
        }
    }
};
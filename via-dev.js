// window.showVIADevOverlay = function (project) {
//     function loadBotpressWebchat() {
//         const injectScript = document.createElement('script');
//         injectScript.src = "https://cdn.botpress.cloud/webchat/v2.1/inject.js";
//         injectScript.onload = () => {
//             const configScript = document.createElement('script');
//             configScript.src = "https://mediafiles.botpress.cloud/7686e2be-d35c-4bf3-9470-5c5c02904ea4/webchat/v2.1/config.js";
//             document.body.appendChild(configScript);
//         };
//         document.body.appendChild(injectScript);
//     }

//     loadBotpressWebchat();

//     const overlay = document.getElementById('content-overlay');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayImage = document.getElementById('overlay-image');
//     const overlayText = document.getElementById('overlay-text');
//     const overlayImagesContainer = document.getElementById('overlay-images-container');
//     const fallbackWrapper = document.querySelector('.fallback-wrapper');

//     console.log('Overlay triggered for project:', project);

//     overlayImagesContainer.innerHTML = '';
//     overlayText.innerHTML = '';

//     overlayTitle.textContent = project.title;

//     if (project.fullScreenImage) {
//         overlayImage.src = project.fullScreenImage;
//         overlayImage.style.display = 'block'; 
//     } else {
//         overlayImage.style.display = 'none'; 
//     }

//     fallbackWrapper.style.display = 'none';

//     overlayText.innerHTML = `
//         <div class="heading">
//             <h3 class="role">${project.role}</h3>
//             <h4 class="date">${project.date}</h4>
//         </div>
//         <div class="subheading">
//             <h4 class="project">${project.category}</h4>
//             <div class="icons-container">
//                 ${project.title === 'The VIA Agency' && project.type === 'dev' ?
//                     project.icons.slice(0, 5).map((icon) => `
//                         <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
//                             <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="40px">
//                         </a>
//                     `).join('')
//                 : ''}
//             </div>
//         </div>
//         <p class="details">${project.details}</p>
//         ${project.embedUrl ? `<div class="via-embed-container"><embed id="embed-element" src="${project.embedUrl}" style="width: 90vw; height: 85vh"></div>` : ''}
//         <p class="details">${project.details2}</p>
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
//         overlayText.appendChild(videoContainer); 

//         if (project.details3) {
//             const details3Paragraph = document.createElement('p');
//             details3Paragraph.className = 'details';
//             details3Paragraph.textContent = project.details3;
//             overlayText.appendChild(details3Paragraph);
//         }
//     }

//     if (project.secondCategory) {
//         overlayText.innerHTML += `
//         <div class="subheading">
//             <h4 class="second-category">${project.secondCategory}</h4>
//             <div class="icons-container">
//                 ${project.title === 'The VIA Agency' && project.type === 'dev' ?
//                 project.icons.slice(5).map((icon) => `
//                         <a href="${icon.link}" target="_blank" rel="noopener noreferrer">
//                             <img src="${icon.url}" alt="Icon" class="project-icon" width="auto" height="40px" style="border-radius: 50px;">
//                         </a>
//                     `).join('')
//                 : ''}
//             </div>
//         </div>
//         <div class="subtext">
//             <h5 id="subtext">Boredom-Blaster ARM & HAMMER™ Baking Soda AI Chatbot</h5>
//         </div>
//         `;
//     }

//     if (Array.isArray(project.images)) {
//         const mainContainer = document.createElement('div');
//         mainContainer.className = 'main-container'; 

//         const topImagesContainer = document.createElement('div');
//         topImagesContainer.className = 'top-images-container'; 

//         project.images.slice(1, 3).forEach(image => {
//             const imgElement = document.createElement('img');
//             imgElement.src = image.url;
//             imgElement.alt = image.alt || project.title;
//             imgElement.className = 'overlay-additional-image';
//             topImagesContainer.appendChild(imgElement);
//         });

//         const bottomContainer = document.createElement('div');
//         bottomContainer.className = 'bottom-container';

//         const imgElement3 = document.createElement('img');
//         imgElement3.src = project.images[3].url;
//         imgElement3.alt = project.images[3].alt || project.title;
//         imgElement3.className = 'overlay-additional-image';
//         bottomContainer.appendChild(imgElement3);

//         const textButtonContainer = document.createElement('div');
//         textButtonContainer.className = 'text-button-container'; 

//         if (project.title === 'The VIA Agency' && project.type === 'dev') {
//             // Add the chat button
//             const chatButton = document.createElement('button');
//             chatButton.className = 'btn btn-primary';
//             chatButton.textContent = 'Chat with Boredom-Blaster!';
//             chatButton.onclick = function () {
//                 botpress.toggle();
//             };
//             textButtonContainer.appendChild(chatButton);
//         }

//         const detailsTextElement = document.createElement('p');
//         detailsTextElement.className = 'image-text';
//         detailsTextElement.innerHTML = project.details4 || 'Default text';
//         textButtonContainer.appendChild(detailsTextElement);
        
//         bottomContainer.appendChild(textButtonContainer);
//         mainContainer.appendChild(topImagesContainer);
//         mainContainer.appendChild(bottomContainer);
//         overlayImagesContainer.appendChild(mainContainer);
//     }

//     overlay.style.display = 'flex';
//     document.body.classList.add('overlay-open');
// };

// window.closeOverlay = function () {
//     const overlay = document.getElementById('content-overlay');
//     const overlayTitle = document.getElementById('overlay-title');
//     const overlayImage = document.getElementById('overlay-image');
//     const overlayText = document.getElementById('overlay-text');
//     const overlayImagesContainer = document.getElementById('overlay-images-container');
//     const videoContainer = document.getElementById('overlay-video-container');
//     const bpContainer = document.querySelector('.bpContainer');

//     overlayTitle.innerHTML = ''; 
//     overlayImage.style.display = 'none';
//     overlayImage.src = '';
//     overlayText.innerHTML = ''; 
//     overlayImagesContainer.innerHTML = ''; 
    
//     if (videoContainer) {
//         videoContainer.remove();
//     }

//     if (overlay) {
//         overlay.style.display = 'none'; 
//         document.body.classList.remove('overlay-open');
//     }

//     if (bpContainer) {
//         bpContainer.remove();
//     }
// };

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
    const fallbackImageContainer = document.getElementById('fallback-image-container');
    const overlayImagesContainer2 = document.getElementById('overlay-images-container-2');

    console.log('Overlay triggered for project:', project);

    fallbackImageContainer.textContent = '';
    overlayImagesContainer.innerHTML = '';
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
    headingDiv.className = 'heading';

    const roleHeading = document.createElement('h3');
    roleHeading.className = 'role';
    roleHeading.textContent = project.role;
    headingDiv.appendChild(roleHeading);

    const dateHeading = document.createElement('h4');
    dateHeading.className = 'date';
    dateHeading.textContent = project.date;
    headingDiv.appendChild(dateHeading);

    overlayText.appendChild(headingDiv);

    const subheadingDiv = document.createElement('div');
    subheadingDiv.className = 'subheading';

    const projectCategory = document.createElement('h4');
    projectCategory.className = 'project';
    projectCategory.textContent = project.category;
    subheadingDiv.appendChild(projectCategory);

    const iconsContainer = document.createElement('div');
    iconsContainer.className = 'icons-container';

    if (project.title === 'The VIA Agency' && project.type === 'dev') {
        project.icons.slice(0, 5).forEach(icon => {
            const iconLink = document.createElement('a');
            iconLink.href = icon.link;
            iconLink.target = '_blank';
            iconLink.rel = 'noopener noreferrer';

            const iconImg = document.createElement('img');
            iconImg.src = icon.url;
            iconImg.alt = 'Icon';
            iconImg.className = 'project-icon';
            iconImg.width = 'auto';
            iconImg.height = 40;

            iconLink.appendChild(iconImg);
            iconsContainer.appendChild(iconLink);
        });
    }
    
    subheadingDiv.appendChild(iconsContainer);
    overlayText.appendChild(subheadingDiv);

    const detailsParagraph = document.createElement('p');
    detailsParagraph.className = 'details';

    const viaAgencyLink = document.createElement('a');
    viaAgencyLink.href = 'https://theviaagency.com';
    viaAgencyLink.target = '_blank';
    viaAgencyLink.rel = 'noopener noreferrer';
    viaAgencyLink.textContent = 'The VIA Agency website';

    detailsParagraph.appendChild(document.createTextNode('The internship began on May 28 as I started modifying Vue.js components to be displayed on '));
    detailsParagraph.appendChild(viaAgencyLink);
    detailsParagraph.appendChild(document.createTextNode('. Initially, I started working on the footer component, restructuring it to have its contents stack vertically when viewing on mobile. After this, I was assigned the GO.DO. component from the Culture section to work on.'));
    overlayText.appendChild(detailsParagraph);

    if (project.embedUrl) {
        const embedContainer = document.createElement('div');
        embedContainer.className = 'via-embed-container';

        const embedElement = document.createElement('embed');
        embedElement.id = 'embed-element';
        embedElement.src = project.embedUrl;
        embedElement.style.width = '90vw';
        embedElement.style.height = '85vh';
        embedContainer.appendChild(embedElement);

        overlayText.appendChild(embedContainer);
    }

    if (project.details2) {
        const details2Paragraph = document.createElement('p');
        details2Paragraph.className = 'details';
        details2Paragraph.textContent = project.details2;
        overlayText.appendChild(details2Paragraph);
    }

    if (project.videos) {
        const videoContainer = document.createElement('div');
        videoContainer.id = 'overlay-video-container';

        const videoElement = document.createElement('video');
        videoElement.id = 'overlay-video';
        videoElement.className = 'video';
        videoElement.controls = true;

        const sourceElement = document.createElement('source');
        sourceElement.id = 'video-source';
        sourceElement.src = project.videos;
        sourceElement.type = 'video/mp4';
        videoElement.appendChild(sourceElement);
        
        videoContainer.appendChild(videoElement);
        overlayText.appendChild(videoContainer);

        if (project.details3) {
            const details3Paragraph = document.createElement('p');
            details3Paragraph.className = 'details';
            details3Paragraph.textContent = project.details3;
            overlayText.appendChild(details3Paragraph);
        }
    }

    if (project.secondCategory) {
        const secondSubheadingDiv = document.createElement('div');
        secondSubheadingDiv.className = 'subheading';

        const secondCategoryHeading = document.createElement('h4');
        secondCategoryHeading.className = 'second-category';
        secondCategoryHeading.textContent = project.secondCategory;
        secondSubheadingDiv.appendChild(secondCategoryHeading);

        const additionalIconsContainer = document.createElement('div');
        additionalIconsContainer.className = 'icons-container';

        if (project.title === 'The VIA Agency' && project.type === 'dev') {
            project.icons.slice(5).forEach(icon => {
                const iconLink = document.createElement('a');
                iconLink.href = icon.link;
                iconLink.target = '_blank';
                iconLink.rel = 'noopener noreferrer';

                const iconImg = document.createElement('img');
                iconImg.src = icon.url;
                iconImg.alt = 'Icon';
                iconImg.className = 'project-icon';
                iconImg.width = 'auto';
                iconImg.height = 40;
                iconImg.style.borderRadius = '50px';

                iconLink.appendChild(iconImg);
                additionalIconsContainer.appendChild(iconLink);
            });
        }

        secondSubheadingDiv.appendChild(additionalIconsContainer);
        overlayText.appendChild(secondSubheadingDiv);

        const subtextDiv = document.createElement('div');
        subtextDiv.className = 'subtext';

        const subtextHeading = document.createElement('h5');
        subtextHeading.id = 'subtext';
        subtextHeading.textContent = 'Boredom-Blaster ARM & HAMMER™ Baking Soda AI Chatbot';
        subtextDiv.appendChild(subtextHeading);
        overlayText.appendChild(subtextDiv);
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
            const chatButton = document.createElement('button');
            chatButton.className = 'btn btn-primary';
            chatButton.textContent = 'Chat with Boredom-Blaster!';
            chatButton.onclick = function () {
                botpress.toggle();
            };
            textButtonContainer.appendChild(chatButton);
        }

        const detailsParagraph4 = document.createElement('p');
        detailsParagraph4.className = 'details';

        const armLink = document.createElement('a');
        armLink.href = 'https://www.armandhammer.com/en/for-everything-soda';
        armLink.target = '_blank';
        armLink.rel = 'noopener noreferrer';
        armLink.textContent = 'ARM & HAMMER™ Baking Soda';

        detailsParagraph4.appendChild(document.createTextNode('The month of July was AI-Infused July at VIA. Our team set out to develop a working AI chatbot for '));
        detailsParagraph4.appendChild(armLink);
        detailsParagraph4.appendChild(document.createTextNode('. Using '));

        const botpressLink = document.createElement('a');
        botpressLink.href = 'https://botpress.com/';
        botpressLink.target = '_blank';
        botpressLink.rel = 'noopener noreferrer';
        botpressLink.textContent = 'Botpress';

        detailsParagraph4.appendChild(botpressLink);
        detailsParagraph4.appendChild(document.createTextNode(', I trained the AI knowledge base on the contents of the website and the individual project/recipe pages. Connecting the Botpress nodes together allowed for developing a basic logical flow to the conversation.'));
        textButtonContainer.appendChild(detailsParagraph4);
        
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
    const videoContainer = document.getElementById('overlay-video-container');
    const bpContainer = document.querySelector('.bpContainer');

    overlayTitle.innerHTML = ''; 
    overlayImage.style.display = 'none';
    overlayImage.src = '';
    overlayText.innerHTML = ''; 
    overlayImagesContainer.innerHTML = ''; 
    
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


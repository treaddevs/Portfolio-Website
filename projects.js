export const projects = {
    dev: [
        {
            title: 'City of Portland',
            category: 'Web Development',
            fullScreenImage: './Images/Portland-logo.png',
            images: './Images/Portland.jpg',
            details: 'Details of Development Project 1'
        },
        {
            title: 'The VIA Agency',
            category: 'Web Development',
            secondCategory: 'Chatbot',
            fullScreenImage: './Images/Atrium.png',
            images: [
                { url: './Images/VIA-logo.jpg' },
                { url: './Images/boredom-blaster-head-orange.jpg' },
                { url: './Images/Botpress-Nodes.png' },
                { url: './Images/boredom-blaser-logo.png' },
            ],
            icons: [
                { url: './Icons/Vue.png', link: 'https://vuejs.org/' },
                { url: './Icons/Nuxt.png', link: 'https://nuxtjs.org/' },
                { url: './Icons/Tailwind.png', link: 'https://tailwindcss.com/' },
                { url: './Icons/Swiper.png', link: 'https://swiperjs.com/' },
                { url: './Icons/Storyblok.png', link: 'https://www.storyblok.com/' },
                { url: './Icons/Botpress.png', link: 'https://botpress.com/' },
            ],
            role: 'Creative Technology Intern',
            date: '(May-August 2024)',
            videos: './Videos/VIA.mp4',
            embedUrl: 'https://www.theviaagency.com/culture',
            details: 'The internship began on May 28 as I started modifying Vue.js components to be displayed on <a href="https://theviaagency.com" target="_blank">The VIA Agency website</a>. Initially, I started working on the footer component, restructuring it to have its contents stack vertically when viewing on mobile. After this, I was assigned the GO.DO. component from the Culture section to work on.',
            details2: 'Basing my development on the Figma design file, I added a transition to the first image card allowing it to fade in and slide into place from the left. Next to the first image, I included a container to explain GO.DO. and an overlay section that allows the user can view when clicking on the "Take the Tour" button. I intalled a Swiper.js slideshow component so the user can view toggle through the images in the slideshow and view the titles stored on Storyblok. I included pagination so the user can see what image they are viewing in the series. Exiting the overlay, below this section there are three more image cards stacked on top of each other.',
            details3: 'The biggest challenges for me were navigating the Tailwind CSS utility classes as these were new to me, and ensuring the best view on mobile. On mobile, I used the CSS clamp() function to ensure font sizes were readable and changed the visibilty for how the header section with the GO.DO. text would display based on screen size. For wider screens, the GO.DO. text and tour button appear adjacent to the transition image, while on mobile they stack vertically to save space and ensure readability.',
            details4: 'The month of July was AI-Infused July at VIA. Our team set out to develop a working AI chatbot for <a href="https://www.armandhammer.com/en/for-everything-soda" target="_blank">ARM & HAMMER™ Baking Soda</a>. Using <a href="https://botpress.com/" target="_blank">Botpress</a>, I trained the AI knowledge base on the contents of the website and the individual project/recipe pages. Connecting the Botpress nodes together allowed for developing a basic logical flow to the conversation.'
        },
        {
            title: 'Fusion F1',
            category: 'Web Development',
            fullScreenImage: './Images/F1-Deezen.jpg',
            images: './Images/Formula1.jpg',
            details: 'Details of Development Project 3',
            images: [
                { url: './Images/Formula1.jpg' },
                { url: './Images/3D_Carousel.png' },
                { url: './Images/Rankings.png' }
            ],
            fallbackImage: './Images/Fusion-F1_Website.png',
            icons: [
                { url: './Icons/HTML.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { url: './Icons/CSS.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { url: './Icons/JS.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { url: './Icons/Bootstrap.png', link: 'https://getbootstrap.com/' }
            ],
            role: 'Vanilla Code Web Development',
            date: '(Spring/Summer 2024)',
            embedUrl: 'https://treaddevs.github.io/Fusion-F1/',
            details: 'Being the first website I built from the ground up, my goal was to reimagine and redesign the website of an existing brand. Captivated by the intensity of the Netflix series <a href="https://www.imdb.com/title/tt8289930/"><em>Formula 1: Drive to Survive</em></a>, I decided to start with Formula 1 for its global influence, international innovation, acceptance of use for educational purposes, asset/font availability, and presence of public APIs. <a href="https://treaddevs.github.io/Fusion-F1/">https://treaddevs.github.io/Fusion-F1/</a>',
            details2: 'I decided to use a dark theme because white text is easier to read on a dark background and chose to embed engaging components. I also used motion and color in the background color splash theme since F1 is flashy and explosive. Colors were also coordinated in the navbar where the text for each drivers name matches their team color, as well as the date elements connected to the timeline on the teams pages.',
            details3: 'The project includes interactive components such as the race schedule accordion with cards, shuffling concept car carousel, 3D Sketchfab model iframe embed, hover effects, and more.',
            details4: 'The driver rankings/standings section is modeled after the same currently found on the Formula 1 website <a href="https://www.formula1.com/">https://www.formula1.com/</a>. This component uses the F1 Ergast Developer API to load the driver data (Note: this API is being deprecated at the end of the 2024 season)'
        },
        {
            title: 'Pizza Ordering System',
            category: 'Desktop Application',
            fullScreenImage: './Images/Brickyard-Counter.jpg',
            images: [
                { url: './Images/Brickyard-Hollow-Dark.jpg', alt: "Brickyard Hollow Dark logo" },
                { url: './Images/Order.png', alt: "Order Pizza start screen" },
                { url: './Images/Menu.png', alt: "Order Pizza from Menu" },
                { url: './Images/Receipt1.png', alt: "Receipt 1" },
                { url: './Images/BYO.png', alt: "Build-your-own pizza" },
                { url: './Images/Receipt2.png', alt: "Receipt 2" },
            ],
            icons: [
                { url: './Icons/Java.png', link: 'https://www.java.com/en/' },
            ],
            role: "Java Object-Oriented Design Project",
            date: "(Summer 2023)",
            details: 'During the summer of 2023 I was working a job as a line chef at a local pizza shop a few blocks from my campus while taking Object-Oriented Design (CS 5004) at the Roux Institute at Northeastern University. For the final project I decided to expand on my mid-semester project of developing a pizza ordering system for the restaurant. I chose to use the <a href="https://web.mit.edu/6.005/www/sp14/psets/ps4/java-6-tutorial/components.html">Swing</a> GUI widget toolkit for Java. I structured the system using the model-view-controller (MVC) architecture. I stored pizza toppings as a custom enum data type with corresponding arrays for associated small and large toppings prices.',
            details2: '<a href="https://github.com/treaddevs/Pizza-App-GUI">View project on GitHub</a>'
        }
    ],
    design: [
        {
            title: 'Design Project 1',
            category: 'Web Development',
            images: '',
            details: 'Details of Design Project 1'
        },
        {
            title: 'Design Project 2',
            category: 'Web Development',
            images: '',
            details: 'Details of Design Project 2'
        }
    ],
    arcade: [
        {
            title: 'Arcade Project 1',
            category: 'Web Development',
            images: '',
            details: 'Details of Arcade Project 1'
        }
    ]
}
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
            type: 'dev',
            category: 'Web Development',
            secondCategory: 'Chatbot',
            fullScreenImage: './Images/Atrium.png',
            images: [
                { url: './Images/VIA-logo.jpg', alt: 'The VIA Agency Logo' },
                { url: './Images/boredom-blaster-head-orange.jpg', alt: 'The Boredom Blaster Logo Orange' },
                { url: './Images/Botpress-Nodes.png', alt: 'Botpress Screenshot' },
                { url: './Images/boredom-blaser-logo.png', alt: 'The Boredom Blaster Logo' },
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
            type: 'dev',
            category: 'Web Development',
            fullScreenImage: './Images/F1-Deezen.jpg',
            images: './Images/Formula1.jpg',
            details: 'Details of Development Project 3',
            images: [
                { url: './Images/Formula1.jpg', alt: 'Formula 1 Logo' },
                { url: './Images/3D_Carousel.png', alt: '3D carousel component screenshot' },
                { url: './Images/Rankings.png', alt: 'Driver rankings screenshot' }
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
            type: 'dev',
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
            title: 'Solana Solar',
            type: 'design',
            category: 'UI Design',
            images: [
                { url: './Images/Solana.png', alt: 'Solana Solar UI' },
                { url: './Images/Solana_UI.png', alt: 'Solana Solar Figma UI' }
            ],
            icons: [
                { url: './Icons/Figma.png', link: 'https://www.figma.com/' }
            ],
            role: 'Dashboard UI Design',
            date: '(Summer 2024)',
            details: "Solana Solar represents a fictional solar software company. This dashboard UI displays many critical metrics including: inverter power, feed-in power, load power, yield energy, exported energy, self-use energy, meter power, meter energy, UPS input voltage, and utility meter uptime. This dashboard is composed of digital widgets that display relevant information for each section and can be rearranged based on the user's preferences."
        },
        {
            title: 'Quala Water Bottles',
            type: 'design',
            category: 'UI Design',
            images: [
                { url: './Images/Quala.png', alt: 'Quala UI' },
                { url: './Images/Quala_Sketch.png', alt: 'Quala Sketch Screenshot' },
                { url: './Images/Quala_Figma.png', alt: 'Quala Figma Screenshot' },
            ],
            icons: [
                { url: './Icons/Figma.png', link: 'https://www.figma.com/' },
                { url: './Icons/Sketch.png', link: 'https://www.sketch.com/' }
            ],
            role: 'E-Commerce UI Design',
            date: '(Summer 2024)',
            videos: './Videos/Quala.mp4',
            embedUrl: 'https://www.figma.com/proto/B8tjTB7fRbdnrszJxEgKvZ/Quala?node-id=30-541&node-type=canvas&t=qb36rLT8gAoRtYY6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
            details: 'Quala Water Bottles is a fictional company based on an existing product sourced from multiple online retailers. (<a href="https://www.amazon.com/Enerbone-Motivational-Drinking-Carrying-Leakproof/dp/B097SDRNHM" target="_blank">Enerbone 32 oz Drinking Water Bottle</a>) For this project, I designed an E-Commerce UI that displays multiple screens to guide the user experience and inform the purchasing decision. I designed this UI in Figma.'
        },
        {
            title: 'The VIA Agency',
            type: 'design',
            category: 'UI + Graphic Design',
            secondCategory: 'United Way of Southern Maine',
            thirdCategory: 'Chatbot UI',
            fullScreenImage: './Images/Atrium.png',
            images: [
                { url: './Images/VIA-logo.jpg' },
                { url: './Images/ALICE.png' },
                { url: './Images/Chatbot.png' },
            ],
            icons: [
                { url: './Icons/Figma.png', link: 'https://www.figma.com/' },
                { url: './Icons/UWSM-Logo-Square.png', link: 'https://www.unitedforalice.org/state-overview/Maine' }
            ],
            role: 'Creative Technology Intern',
            date: '(May-August 2024)',
            details: 'During my role as Creative Technology Intern at VIA I had the opportunity to work on a variety of projects in both the development and design spaces. This section features some of the graphic and UI design work that were highlights of my summer intern experience.',
            details2: 'During the summer internship our team had the opportunity to work on a collaborative campaign for our client United Way of Southern Maine. I used my graphic design skills in this piece which is adaptable as both a digital and print opportunity.',
            details3: 'When the chatbot assignment was presented to me I was immediately interested and took the initiative to start by designing a preliminary user interface to show the team. Once this was accepted I went ahead with implementing the actual chatbot which I was able to achieve using the Botpress platform.'
        },
        {
            title: 'Mobile App UI Designs',
            type: 'design',
            category: 'UI Design',
            images: [
                { url: './Images/Muse.png', alt: 'Figma Muse music UI' },
                { url: './Images/Muse-1.png', alt: 'Muse app start screen' },
                { url: './Images/Muse-2.png', alt: 'Muse app screen 2' },
                { url: './Images/Muse-3.png', alt: 'Muse app screen 3' },
                { url: './Images/Muse-4.png', alt: 'Muse app audio controls' },
                { url: './Images/Elev8-1.png', alt: 'Elev8 app' },
                { url: './Images/Elev8-2.png', alt: 'Elev8 app resort conditions'}
            ],
            icons: [
                { url: './Icons/Figma.png', link: 'https://www.figma.com/' },
                { url: './Icons/MaterialDesign.png', link: 'https://m3.material.io/' }
            ],
            role: 'Mobile App UI Designs',
            date: '(Winter 2023)',
            details: 'This section is comprised of some mobile UI designs I did in Figma over winter break 2023. I enjoy designing and understand concepts such as user-centered design, consistency, heirarchy, accessibility, simplicity, color theory, use of white/negative space, the rule of thirds in photo composition, and content. I find inspiration from clean and elegant designs from online sources like <a href="https://www.behance.net/">Behance</a>, <a href="https://dribbble.com/">Dribble</a>, and <a href="https://www.awwwards.com/">Awwwards</a> (for web design).',
            details2: 'The Muse app is a mockup app designed to give the user a music mix tailored to their taste based on the weather conditions of the day. The acoustic ambiance matches the vibe outside.',
            details3: 'The Muse app welcomes you with a start screen based on past interactions while displaying current conditions.',
            details4: 'Once the sound is selected, the user can enjoy standard controls with lyrics displayed (if applicable).',
            details5: 'Dynamic sound settings allow the user to tailor the tune to their taste.',
            details6: 'Elev8 is a mockup app designed to shows ski resort conditions, information, and data.',
            details7: 'Application demo illustrating an information dashboard for evaluating mountain resort weather and conditions.'
        },
        {
            title: 'Miscellaneous',
            type: 'design',
            category: 'UI + Graphic Design',
            images: [
                { url: './Images/Profile.jpg', alt: 'Social media user interface' },
                { url: './Images/LeafPhone.jpg', alt: 'Garden growing out of iPhone graphic design' },
                { url: './Images/FutureCity.png', alt: 'Singapore, the city of the future graphic design' }
            ],
            icons: [
                { url: './Icons/Figma.png', link: 'https://www.figma.com/' },
                { url: './Icons/Sketch.png', link: 'https://www.sketch.com/' }
            ],
            role: 'Misc Design',
            details: 'This section is comprised of miscellaneous UI and graphic design work I have created as side projects.'
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
export const projects = {
    dev: [
        {
            title: 'City of Portland',
            type: 'dev',
            category: 'Web Development',
            fullScreenImage: '../Images/Portland-logo.png',
            images: [
                { url: '../Images/Portland.jpg', alt: 'City of Portland' },
                { url: '../Images/ESL-Dashboard.png', alt: 'ESL Dashboard UI' },
                { url: '../Images/Notifications.png', alt: 'Notifications UI' },
                { url: '../Images/Post.png', alt: 'Create a post UI'}
            ],
            icons: [
                { url: '../Icons/Figma.png', link: 'https://www.figma.com/' },
            ],
            role: 'Capstone Project',
            date: '(Fall 2024 - Spring 2025)',
            videos: '../Videos/StudentView.mp4'
        },
        {
            title: 'The VIA Agency',
            type: 'dev',
            category: 'Web Development',
            secondCategory: 'Chatbot',
            fullScreenImage: '../Images/Atrium.png',
            images: [
                { url: '../Images/VIA-logo.jpg', alt: 'The VIA Agency Logo' },
                { url: '../Images/boredom-blaster-head-orange.jpg', alt: 'The Boredom Blaster Logo Orange' },
                { url: '../Images/Botpress-Nodes.png', alt: 'Botpress Screenshot' },
                { url: '../Images/boredom-blaser-logo.png', alt: 'The Boredom Blaster Logo' },
            ],
            icons: [
                { url: '../Icons/Vue.png', link: 'https://vuejs.org/' },
                { url: '../Icons/Nuxt.png', link: 'https://nuxtjs.org/' },
                { url: '../Icons/Tailwind.png', link: 'https://tailwindcss.com/' },
                { url: '../Icons/Swiper.png', link: 'https://swiperjs.com/' },
                { url: '../Icons/Storyblok.png', link: 'https://www.storyblok.com/' },
                { url: '../Icons/Botpress.png', link: 'https://botpress.com/' },
            ],
            role: 'Creative Technology Intern',
            date: '(May-August 2024)',
            videos: '../Videos/VIA.mp4',
            embedUrl: 'https://www.theviaagency.com/culture',
            details2: 'Basing my development on the Figma design file, I added a transition to the first image card allowing it to fade in and slide into place from the left. Next to the first image, I included a container to explain GO.DO. and an overlay section that allows the user can view when clicking on the "Take the Tour" button. I intalled a Swiper.js slideshow component so the user can view toggle through the images in the slideshow and view the titles stored on Storyblok. I included pagination so the user can see what image they are viewing in the series. Exiting the overlay, below this section there are three more image cards stacked on top of each other.',
            details3: 'The biggest challenges for me were navigating the Tailwind CSS utility classes as these were new to me, and ensuring the best view on mobile. On mobile, I used the CSS clamp() function to ensure font sizes were readable and changed the visibilty for how the header section with the GO.DO. text would display based on screen size. For wider screens, the GO.DO. text and tour button appear adjacent to the transition image, while on mobile they stack vertically to save space and ensure readability.',
        },
        {
            title: 'Fusion F1',
            type: 'dev',
            category: 'Web Development',
            fullScreenImage: '../Images/F1-Deezen.jpg',
            images: '../Images/Formula1.jpg',
            details: 'Details of Development Project 3',
            images: [
                { url: '../Images/Formula1.jpg', alt: 'Formula 1 Logo' },
                { url: '../Images/3D_Carousel.png', alt: '3D carousel component screenshot' },
                { url: '../Images/Rankings.png', alt: 'Driver rankings screenshot' }
            ],
            fallbackImage: '../Images/Fusion-F1_Website.png',
            icons: [
                { url: '../Icons/HTML.png', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { url: '../Icons/CSS.png', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { url: '../Icons/JS.png', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { url: '../Icons/Bootstrap.png', link: 'https://getbootstrap.com/' }
            ],
            role: 'Vanilla Code Web Development',
            date: '(Spring/Summer 2024)',
            embedUrl: 'https://treaddevs.github.io/Fusion-F1/',
            details2: 'I decided to use a dark theme because white text is easier to read on a dark background and chose to embed engaging components. I also used motion and color in the background color splash theme since F1 is flashy and explosive. Colors were also coordinated in the navbar where the text for each drivers name matches their team color, as well as the date elements connected to the timeline on the teams pages.',
            details3: 'The project includes interactive components such as the race schedule accordion with cards, shuffling concept car carousel, 3D Sketchfab model iframe embed, hover effects, and more.',
        },
        {
            title: 'Pizza Ordering System',
            type: 'dev',
            category: 'Desktop Application',
            fullScreenImage: '../Images/Brickyard-Counter.jpg',
            images: [
                { url: '../Images/Brickyard-Hollow-Dark.jpg', alt: "Brickyard Hollow Dark logo" },
                { url: '../Images/Order.png', alt: "Order Pizza start screen" },
                { url: '../Images/Menu.png', alt: "Order Pizza from Menu" },
                { url: '../Images/Receipt1.png', alt: "Receipt 1" },
                { url: '../Images/BYO.png', alt: "Build-your-own pizza" },
                { url: '../Images/Receipt2.png', alt: "Receipt 2" },
            ],
            icons: [
                { url: '../Icons/Java.png', link: 'https://www.java.com/en/' },
            ],
            role: "Java Object-Oriented Design Project",
            date: "(Summer 2023)",
        }
    ],
    design: [
        {
            title: 'Solana Solar',
            type: 'design',
            category: 'UI Design',
            images: [
                { url: '../Images/Solana.png', alt: 'Solana Solar UI' },
                { url: '../Images/Solana_UI.png', alt: 'Solana Solar Figma UI' }
            ],
            icons: [
                { url: '../Icons/Figma.png', link: 'https://www.figma.com/' }
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
                { url: '../Images/Quala.png', alt: 'Quala UI' },
                { url: '../Images/Quala_Sketch.png', alt: 'Quala Sketch Screenshot' },
                { url: '../Images/Quala_Figma.png', alt: 'Quala Figma Screenshot' },
            ],
            icons: [
                { url: '../Icons/Figma.png', link: 'https://www.figma.com/' },
                { url: '../Icons/Sketch.png', link: 'https://www.sketch.com/' }
            ],
            role: 'E-Commerce UI Design',
            date: '(Summer 2024)',
            videos: '../Videos/Quala.mp4',
            embedUrl: 'https://www.figma.com/proto/B8tjTB7fRbdnrszJxEgKvZ/Quala?node-id=30-541&node-type=canvas&t=qb36rLT8gAoRtYY6-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1',
        },
        {
            title: 'The VIA Agency',
            type: 'design',
            category: 'UI + Graphic Design',
            secondCategory: 'United Way of Southern Maine',
            thirdCategory: 'Chatbot UI',
            fullScreenImage: '../Images/Atrium.png',
            images: [
                { url: '../Images/VIA-logo.jpg' },
                { url: '../Images/ALICE.png' },
                { url: '../Images/Chatbot.png' },
            ],
            icons: [
                { url: '../Icons/Figma.png', link: 'https://www.figma.com/' },
                { url: '../Icons/UWSM-Logo-Square.png', link: 'https://www.unitedforalice.org/state-overview/Maine' }
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
                { url: '../Images/Muse.png', alt: 'Figma Muse music UI' },
                { url: '../Images/Muse-1.png', alt: 'Muse app start screen' },
                { url: '../Images/Muse-2.png', alt: 'Muse app screen 2' },
                { url: '../Images/Muse-3.png', alt: 'Muse app screen 3' },
                { url: '../Images/Muse-4.png', alt: 'Muse app audio controls' },
                { url: '../Images/Elev8-1.png', alt: 'Elev8 app' },
                { url: '../Images/Elev8-2.png', alt: 'Elev8 app resort conditions'}
            ],
            icons: [
                { url: '../Icons/Figma.png', link: 'https://www.figma.com/' },
                { url: '../Icons/MaterialDesign.png', link: 'https://m3.material.io/' }
            ],
            role: 'Mobile App UI Designs',
            date: '(Winter 2023)',
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
                { url: '../Images/Profile.jpg', alt: 'Social media user interface' },
                { url: '../Images/LeafPhone.jpg', alt: 'Garden growing out of iPhone graphic design' },
                { url: '../Images/FutureCity.png', alt: 'Singapore, the city of the future graphic design' }
            ],
            icons: [
                { url: '../Icons/Figma.png', link: 'https://www.figma.com/' },
                { url: '../Icons/Sketch.png', link: 'https://www.sketch.com/' }
            ],
            role: 'Misc Design',
            details: 'This section is comprised of miscellaneous UI and graphic design work I have created as side projects.'
        }
    ],
    arcade: [
        {
            title: 'Breakout Game',
            type: 'game',
            category: 'JavaScript Game',
            images: [
                { url: '../Images/Breakout.png', alt: 'Breakout Game', className: 'game-image' }
            ],
            icons: [
                { url: '../Icons/CodePen-logo.png', link: 'https://codepen.io/trending' }
            ],
            role: 'Game Development'
        },
        {
            title: 'Dice Roller',
            type: 'game',
            category: 'JavaScript Game',
            images: [
                { url: '../Images/DiceRoller.png', alt: 'Dice Roller Game', className: 'game-image' }
            ],
            icons: [
                { url: '../Icons/CodePen-logo.png', link: 'https://codepen.io/trending' }
            ],
            role: 'Game Development',
        },
        {
            title: 'Snake Game',
            type: 'game',
            category: 'JavaScript Game',
            controls: 'Game Controls',
            images: [
                { url: '../Images/Snake.png', alt: 'Snake Game', className: 'game-image' },
                { url: '../Images/ARROWS.png', alt: 'Arrow Keys' }
            ],
            icons: [
                { url: '../Icons/CodePen-logo.png', link: 'https://codepen.io/trending' }
            ],
            role: 'Game Development'
        },
        {
            title: 'Pong Game',
            type: 'game',
            category: 'JavaScript Game',
            players: [
                'Player 1 Controls',
                'Player 2 Controls'
            ],
            images: [
                { url: '../Images/Pong.png', alt: 'Pong Game', className: 'game-image' },
                { url: '../Images/WS.png', alt: 'WS Keys', className: 'game-image' },
                { url: '../Images/UPDOWN.png', alt: 'Up Down Keys', className: 'game-image' }
            ],
            icons: [
                { url: '../Icons/CodePen-logo.png', link: 'https://codepen.io/trending' }
            ],
            role: 'Game Development'
        },
        {
            title: 'Tic-Tac-Toe Game',
            type: 'game',
            category: 'JavaScript Game',
            images: [
                { url: '../Images/Tic-Tac-Toe.png', alt: 'Tic-Tac-Toe Game', className: 'game-image' }
            ],
            icons: [
                { url: '../Icons/CodePen-logo.png', link: 'https://codepen.io/trending' }
            ],
            role: 'Game Development'
        },
        {
            title: 'Simon Game',
            type: 'game',
            category: 'JavaScript Game',
            images: [
                { url: '../Images/Simon.png', alt: 'Simon Game', className: 'game-image' }
            ],
            icons: [
                { url: '../Icons/CodePen-logo.png', link: 'https://codepen.io/trending' }
            ],
            role: 'Game Development'
        },
        {
            title: 'Space Invaders Game',
            type: 'game',
            category: 'JavaScript Game',
            controls: 'Game Controls',
            images: [
                { url: '../Images/SpaceInvaders.png', alt: 'Space Invaders Game', className: 'game-image' },
                { url: '../Images/Controls.png', alt: 'Left Up Down Keys', className: 'game-image' },
            ],
            icons: [
                { url: '../Icons/CodePen-logo.png', link: 'https://codepen.io/trending' }
            ],
            role: 'Game Development'
        }
    ]
}
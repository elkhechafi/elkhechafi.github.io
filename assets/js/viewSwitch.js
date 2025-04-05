document.querySelectorAll('.view').forEach(element => {
    element.addEventListener('click', () => changeView(element.id));
});

const elements = {
    slogan: document.querySelector('.slogan'),
    aboutSection: document.querySelector('.about-content'),
    aboutSpecialText: document.querySelector('.special-text'),
    aboutSubTitle: document.querySelector('.about-subtitle'),
    sectionsContainer: document.querySelector('.content'), // The container where sections will be added dynamically
    servicesTitle: document.querySelector('.services-title')
};

const content = {
    devView: {
        slogan: "Crafting Seamless Digital Experiences",
        about: {
            aboutcontent: "Your online",
            aboutSpecialText: "success",
            aboutcontent2: "is my portfolio",
            sections: [
                {
                    mutedText: "(About Me)",
                    mainTitle: "Creative Brands, Powerful Websites",
                    para: "Hey there! I'm a self-taught developer with a knack for creating seamless and efficient web solutions. From crafting dynamic websites with Vue.js and TypeScript to designing engaging user experiences, I turn coffee into code magic. If you need a tech whiz who can build your digital dreams while making sure the journey is as fun as the destination, you've found your developer!"
                },
                {
                    mutedText: "Section 1: The Spark",
                    mainTitle: "My First Steps into Web Development",
                    para: "It all started with a simple question: \"How do websites work?\" This question sparked a journey that transformed my curiosity into a passion. Without a formal background in computer science, I dove headfirst into the world of web development, armed only with determination and a hunger to create something beautiful and functional."
                },
                {
                    mutedText: "Section 2: The Academic Journey",
                    mainTitle: "The Self-Taught\rJourney",
                    para: "Unlike a traditional path, my education didn’t happen in a classroom—it happened in the trenches of the internet. I spent countless hours scouring forums, watching tutorials, and dissecting code. My early days were filled with trial and error, but every mistake was a lesson learned. My first website was far from perfect, but it was a start—a tangible result of hours of self-study and relentless practice."
                },
                {
                    mutedText: "Section 3: Building Blocks:",
                    mainTitle: "The Foundations of My Skillset",
                    para: "As I progressed, I started to understand the nuances of HTML, the power of CSS, and the magic of JavaScript. I wasn't just learning to code; I was learning to think like a developer. Every project was an opportunity to blend creativity with logic, turning abstract ideas into interactive experiences. I didn’t stop there. I ventured into frameworks like Vue.js, where I could see my ideas come to life faster and more efficiently. Each new tool and technique was another piece of the puzzle, enabling me to craft websites that aren’t just visually appealing, but also intuitive and user-friendly. "
                },
                {
                    mutedText: "Section 4: The Early Projects",
                    mainTitle: " Where Passion Met Perseverance",
                    para: "One of my earliest projects was a personal blog—simple, yet full of character. I poured my heart into it, designing every element from scratch. It was here that I first tasted the satisfaction of seeing a complete, functional website that I had built with my own hands. It wasn’t just about the code; it was about the experience I was creating for the user."
                }
            ]
        },
        services: {
            title: "Your <span>Tech Wizard</span> offer:",
        }
    },
    martechView: {
        slogan: "Creating Captivating Brand Identities",
        about: {
            aboutcontent: "Your brand",
            aboutSpecialText: "image",
            aboutcontent2: "is in safe hands",
            sections: [
                {
                    mutedText: "(About Me)",
                    mainTitle: "Creative Brands, Powerful Websites",
                    para: "Welcome to my corner of the internet! With a master’s degree in marketing and commercial management, and over eight years of experience working with both small agencies and Fortune 500 companies, I'm here to help your brand shine brighter than a supernova. Whether you need innovative strategies or eye-catching campaigns, consider me your marketing magician. Let's turn your brand into the talk of the town!"
                },
                {
                    mutedText: "(Section 1: The Spark)",
                    mainTitle: "Discovering the Power of Marketing",
                    para: "My journey into marketing wasn’t a planned one—it was a discovery,  almost like finding a hidden treasure. It all began when I noticed how a simple message could change perceptions, influence  decisions, and  shape brands. This realization ignited a passion within  me to  understand the psychology behind marketing and the strategies that drive consumer behavior."
                },
                {
                    mutedText: "Section 2: The Academic Journey",
                    mainTitle: "Mastering the Fundamentals",
                    para: "To turn this passion into expertise, I pursued a master’s degree in   marketing and commercial management. Here, I was immersed in the theory  and practice of marketing, from market research and consumer psychology to brand management and digital marketing. It wasn’t just about  learning concepts; it was about applying them in real-world scenarios,   understanding the nuances, and seeing the impact of well-crafted   strategies. My academic journey was more than just  acquiring knowledge; it was about building a strong foundation. This  foundation allowed me  to approach marketing challenges with both  creativity and analytical rigor, blending art and science to create  compelling brand narratives."
                },
                {
                    mutedText: "Section 3: Early Experiences",
                    mainTitle: "Where Learning Met Reality",
                    para: "My academic journey was more than just acquiring knowledge; it was   about building a strong foundation. This foundation allowed me to   approach marketing challenges with both creativity and analytical rigor, blending art and science to create compelling brand narratives. After  my formal education, I dove into the world of marketing with a deep  hunger to make a difference. My early  experiences were a mix of agency  work and corporate projects, each one  teaching me valuable lessons.  Whether it was crafting a campaign for a  small business or working on  brand strategy for a Fortune 500 company, I learned the importance of  adapting strategies to different scales and  industries."
                },
                {
                    mutedText: "Section 4: The Turning Point",
                    mainTitle: "Embracing MarTech for Smarter Strategies",
                    para: "As the digital landscape evolved, so did my approach to marketing. I   realized that to stay ahead, I needed to embrace technology. This led me to delve into MarTech—where marketing meets technology. From CRM   systems to marketing automation tools, I began integrating technology   into my strategies, enabling more personalized, efficient, and effective marketing campaigns. This shift was a turning point in my  career. It  wasn’t just about marketing anymore; it was about leveraging  technology to create smarter, more impactful strategies. This blend of  marketing  expertise and technological savvy became my unique value  proposition,  setting the stage for the next chapter of my journey."
                }
            ]
        },
        services: {
            title: "Your <span>Marketing Magician</span> offer:",
        }
    }
};

function changeView(id) {
    const view = content[id];
    if (!view) return;

    // Update styles
    // Object.entries(view.styles).forEach(([key, value]) => {
    //     document.documentElement.style.setProperty(key, value);
    // });

    //add the data-view to the body
    document.body.dataset.view = id;

    // Update static text content
    elements.slogan.textContent = view.slogan;
    elements.aboutSection.textContent = view.about.aboutcontent;
    elements.aboutSpecialText.textContent = view.about.aboutSpecialText;
    elements.aboutSubTitle.textContent = view.about.aboutcontent2;

    // Clear previous sections
    elements.sectionsContainer.innerHTML = '';

    // Dynamically add new sections
    view.about.sections.forEach(section => {
        const sectionElement = document.createElement('div');
        sectionElement.classList.add('section');

        sectionElement.innerHTML = `
            <p class="muted-text">${section.mutedText}</p>
            <h2 class="main-title">${section.mainTitle}</h2>
            <p class="para">${section.para}</p>
        `;

        elements.sectionsContainer.appendChild(sectionElement);
    });

    elements.servicesTitle.innerHTML = view.services.title;
}

// Initialize default view
changeView('martechView');

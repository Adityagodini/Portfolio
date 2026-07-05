// ==========================================
// PROJECT DATA
// ==========================================
emailjs.init("HyKNZd8NdayWe7ico");
const projects = [

{
   title:"EarlyRisk",

    tech:[

    "Python",

    "Flask",

    "Machine Learning",

    "Random Forest"

    ],
    accent:"#3b82f6",

    features:[

    "96% Prediction Accuracy",

    "Career Guidance",

    "Dashboard",

    "SMOTE"

    ],

    description:

    "EarlyRisk predicts academic risk using machine learning and provides personalized career guidance through an interactive dashboard.",

    image:"images/Earlyrisk.png",
    github: "https://github.com/Adityagodini/EarlyRisk",
    demo: "https://earlyrisk.onrender.com/"
},

{
    title: "Vanta Shaala",
    tech: [
        "HTML",
        "CSS"
    ],
    accent:"#f97316",
    features: [
        "User Authentication",
        "Recipe Search",
        "Favorite Recipes"
    ],
    desc: "Recipe sharing platform.",
    image: "images/vanta-shala.png",
    github: "https://github.com/Adityagodini/Recipe-Sharing-Website",
    demo: "https://vantashaala.netlify.app/"
},

{
    title: "Zomato Clone",
    tech: [
        "React",
        "Node.js",
        "MongoDB",
        "Express"
    ],
    accent:"#ef4444",
    features: [
        "User Authentication",
        "Restaurant Search",
        "Order Management"
    ],
    desc: "Food delivery application inspired by Zomato.",
    image: "images/zomato-clone.png",
    github: "https://github.com/Adityagodini/Food_Delivery_Application",
    demo: "https://food-delivery-application-peach.vercel.app/"
},

{
    title:"GD Room Booking System",
    tech:[
        "Python",
        "Flask",
        "MySQL"
    ],
    accent:"#8b5cf6",
    features: [
        "User Authentication",
        "Room Booking",
        "Availability Check"
    ],
    desc:"A web application for booking GD rooms.",
    image:"images/gd-room.png",
    github:"https://github.com/Adityagodini/gdzone",
    demo:"https://gdzone.netlify.app/"
},


{
    title:"Portfolio Website",
    tech:[
        "HTML",
        "CSS",
        "JavaScript"
    ],
    accent:"#f7b731",
    features: [
        "Responsive Design",
        "Modern UI/UX"
    ],
    desc:"Personal portfolio website.",
    image:"images/portfolio.png",
    github:"https://github.com/yourrepo",
    demo:"https://yourdemo.com"
},

{
    title:"Netflix Clone",
    tech:[
        "HTML",
        "CSS"
    ],
    accent:"#dc2626",
    features: [
        "Responsive Design",
        "Modern UI/UX"
    ],
    desc:"Netflix clone landing page.",
    image:"images/netflix-clone.png",
    github:"https://github.com/Adityagodini/Netflix-clone",
    demo:"https://adityaflix.netlify.app/"
},

{
    title:"SLMS Project",
    tech:[
        "Python",
        "Django",
        "HTML",
        "CSS"
    ],
    accent:"#0ea5e9",
    features: [
        "User Authentication",
        "Leave Application",
        "Approval Workflow"
    ],
    desc:"Staff Leave Management System.",
    image:"images/slms.png",
    github:"https://github.com/Adityagodini/Staff-Leave-Management-System",
    demo:"https://staff-leave-management-system-qv4a.onrender.com/"
},

{
    title:"QR Based Food Ordering System",
    tech:[
        "HTML",
        "CSS",
        "JavaScript"
    ],
    accent:"#22c55e",
    features: [
        "QR Code Scanning",
        "Menu Display",
        "Order Placement"
    ],
    desc:"QR code based restaurant ordering system.",
    image:"images/qr_based_booking.png",
    github:"https://github.com/yourrepo",
    demo:"https://yourdemo.com"
},
];

// ==========================================
// VARIABLES
// ==========================================

let startIndex = 0;
let currentProject = 0;


// ==========================================
// COUNTER
// ==========================================

function updateCounter(){

    document.getElementById("project-counter").innerText =
    `${String(currentProject+1).padStart(2,"0")} / ${String(projects.length).padStart(2,"0")}`;

}


// ==========================================
// BUTTON STATES
// ==========================================

function updateButtons(){

    document.getElementById("prev-btn").disabled =
    startIndex === 0;

    document.getElementById("next-btn").disabled =
    startIndex >= projects.length - 3;

}


// ==========================================
// MAIN SHOWCASE
// ==========================================

function showProject(index){

    currentProject = index;

    document.documentElement.style.setProperty(

    "--project-accent",

    projects[index].accent

    );

    const img =
    document.getElementById("project-img");

    const content =
    document.querySelector(".project-content");

    img.classList.add("fade-out");
    content.classList.add("fade-out");

    setTimeout(()=>{

        img.src =
        projects[index].image;

        img.style.transform="scale(1.08)";

        document.getElementById("project-title").innerText =
        projects[index].title;

        document.getElementById("project-tech").innerHTML =

            projects[index].tech
            .map(item => `<span>${item}</span>`)
            .join("");

        document.getElementById("feature1").innerText =
        projects[index].features[0];

        document.getElementById("feature2").innerText =
        projects[index].features[1];

        document.getElementById("feature3").innerText =
        projects[index].features[2];

        document.getElementById("feature4").innerText =
        projects[index].features[3];

        document.getElementById("github-btn").href =
        projects[index].github;

        document.getElementById("demo-btn").href =
        projects[index].demo;

        img.classList.remove("fade-out");
        setTimeout(()=>{

        img.style.transform="scale(1)";

        },50);
        setTimeout(()=>{

            content.classList.remove("fade-out");

            },120);

    },450);

    updateCounter();

    updateActiveCard();

}


// ==========================================
// ACTIVE MINI CARD
// ==========================================

function updateActiveCard(){

    document
    .querySelectorAll(".mini-project")
    .forEach(card=>{

        card.classList.remove("active-project");

        if(Number(card.dataset.index)===currentProject){

            card.classList.add("active-project");

        }

    });

}


// ==========================================
// MINI CARDS
// ==========================================

function renderMiniCards(){

    const cards=[

        document.getElementById("card1"),
        document.getElementById("card2"),
        document.getElementById("card3")

    ];

    cards.forEach((card,index)=>{

        const project =
        projects[startIndex+index];

        if(project){

            card.style.display="block";

            card.dataset.index =
            startIndex+index;

           card.innerHTML = `

                <img src="${project.image}" alt="">

                <div class="mini-content">

                    <h4>${project.title}</h4>

                    <p>

                        ${Array.isArray(project.tech)
                            ? project.tech.slice(0,2).join(" • ")
                            : project.tech}

                    </p>

                    <span class="mini-view">

                        View Project

                        <i class="fa-solid fa-arrow-right"></i>

                    </span>

                </div>

                `;

            card.onclick=()=>{

                showProject(
                    Number(card.dataset.index)
                );

            };

        }

        else{

            card.style.display="none";

        }

    });

    updateButtons();

    updateActiveCard();

}


// ==========================================
// NEXT BUTTON
// ==========================================

document
.getElementById("next-btn")
.addEventListener("click",()=>{

    if(startIndex < projects.length-3){

        startIndex++;

        renderMiniCards();

        showProject(startIndex);

    }

});


// ==========================================
// PREVIOUS BUTTON
// ==========================================

document
.getElementById("prev-btn")
.addEventListener("click",()=>{

    if(startIndex>0){

        startIndex--;

        renderMiniCards();

        showProject(startIndex);

    }

});

// certificates section 

const certificates = [

{
    title:"META Frontend",
    provider:"Meta × Coursera",
    description:"Completed the Meta Front-End Development course covering HTML, CSS, Responsive Design and modern frontend fundamentals.",
    image:"images/certificates/meta-frontend.png",
    link:"images/certificates/meta-frontend.png"
},

{
    title:"IBM Frontend",
    provider:"IBM × Coursera",
    description:"Completed IBM Frontend Development course focusing on HTML, CSS and JavaScript fundamentals.",
    image:"images/certificates/ibm-frontend.png",
    link:"images/certificates/ibm-frontend.png"
},

{
    title:"Python Essentials",
    provider:"Infosys Springboard",
    description:"Successfully completed Python Essentials covering OOP, Functions, Exception Handling, File Handling and Problem Solving.",
    image:"images/certificates/python.png",
    link:"images/certificates/python.png"
},

{
    title:"TCS iON Career Edge",
    provider:"TCS iON",
    description:"Completed Career Edge course covering communication, aptitude, interview preparation and workplace readiness.",
    image:"images/certificates/tcs-ion.png",
    link:"images/certificates/tcs-ion.png"
},

{
    title:"Deep Learning",
    provider:"DeepLearning.AI",
    description:"Completed Neural Networks and Deep Learning course by DeepLearning.AI.",
    image:"images/certificates/deep-learning.png",
    link:"images/certificates/deep-learning.png"
},

{
    title:"Google Cloud",
    provider:"Google Cloud",
    description:"Completed Google Cloud Generative AI course covering Gemini and modern AI fundamentals.",
    image:"images/certificates/google-cloud.png",
    link:"images/certificates/google-cloud.png"
}

];

const modal =
document.getElementById("certificate-modal");

const modalImage =
document.getElementById("modal-image");

const modalTitle =
document.getElementById("modal-title");

const modalProvider =
document.getElementById("modal-provider");

const modalDescription =
document.getElementById("modal-description");

const modalButton =
document.getElementById("modal-button");

const closeModal =
document.getElementById("close-modal");

const certificateCards =
document.querySelectorAll(".certificate-card");

certificateCards.forEach(card=>{

    card.addEventListener("click",()=>{

        const index =
        card.dataset.index;

        const certificate =
        certificates[index];

        modalImage.src =
        certificate.image;

        modalTitle.innerText =
        certificate.title;

        modalProvider.innerText =
        certificate.provider;

        modalDescription.innerText =
        certificate.description;

        modalButton.href =
        certificate.link;

        modal.classList.add("show");

        document.body.classList.add("modal-open");

    });

});

closeModal.addEventListener("click",()=>{

    modal.classList.remove("show");

    document.body.classList.remove("modal-open");

});

function openCertificate(index){

    const certificate =
    certificates[index];

    modalImage.src =
    certificate.image;

    modalTitle.innerText =
    certificate.title;

    modalProvider.innerText =
    certificate.provider;

    modalDescription.innerText =
    certificate.description;

    modalButton.href =
    certificate.link;

    modal.classList.add("show");

    document.body.style.overflow = "hidden";

}

function hideModal(){

    modal.classList.remove("show");

    document.body.style.overflow = "auto";

}

document
.querySelectorAll(".certificate-card")
.forEach(card=>{

    card.addEventListener("click",()=>{

        openCertificate(
            Number(card.dataset.index)
        );

    });

});

modalImage.addEventListener("click", () => {
    window.open(modalButton.href, "_blank");
});

modal.addEventListener("click",(e)=>{

    if(e.target===modal){

        modal.classList.remove("show");

        document.body.classList.remove("modal-open");

    }

});

document.addEventListener("keydown",(e)=>{

    if(e.key==="Escape"){

        modal.classList.remove("show");

        document.body.classList.remove("modal-open");

    }

});

// ==========================================
// CONTACT FORM
// ==========================================

document
.getElementById("contact-form")
.addEventListener("submit", function(e){

    e.preventDefault();

    const btn = this.querySelector("button");

    btn.innerHTML = "Sending...";
    btn.disabled = true;

    const params = {

        from_name: document.getElementById("name").value,

        from_email: document.getElementById("email").value,

        subject: document.getElementById("subject").value,

        message: document.getElementById("message").value,

        sent_time: new Date().toLocaleString()

    };

emailjs.send(
    "service_utz63he",
    "template_qlxwv6w",
    params
)

.then((response)=>{

    console.log(response);

    btn.innerHTML = "✓ Sent";

    this.reset();

    setTimeout(()=>{

        btn.innerHTML = "Send Message";
        btn.disabled = false;

    },2000);

})

.catch((error)=>{

    console.log(error);

    alert(JSON.stringify(error));

    btn.innerHTML = "❌ Failed";

    setTimeout(()=>{

        btn.innerHTML = "Send Message";
        btn.disabled = false;

    },2000);

});

});


document
.getElementById("backToTop")
.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


// ==========================================
// SCROLL REVEAL
// ==========================================

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }

    });

},{

    threshold:0.15

});

reveals.forEach(section=>{

    observer.observe(section);

});


// ==========================================
// DARK MODE
// ==========================================

const themeToggle = document.getElementById("theme-toggle");

const themeIcon = themeToggle.querySelector("i");

// Load saved theme

if(localStorage.getItem("theme")==="dark"){

    document.body.classList.add("dark");

    themeIcon.classList.replace("fa-moon","fa-sun");

}

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark");

    if(document.body.classList.contains("dark")){

        themeIcon.classList.replace("fa-moon","fa-sun");

        localStorage.setItem("theme","dark");

    }

    else{

        themeIcon.classList.replace("fa-sun","fa-moon");

        localStorage.setItem("theme","light");

    }

});


/* ==========================================
   ACTIVE NAVIGATION
========================================== */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - 250) {

            currentSection = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   TYPING EFFECT
========================================== */

const words = [

    "MCA Student",

    "Web Developer",

    "Python & Django Developer",

    "Machine Learning Enthusiast",

    "Problem Solver"

];

const typingText = document.getElementById("typing-text");

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent = currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;

        }

    }

    else{

        typingText.textContent = currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex === words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 60 : 100);

}

typeEffect();

/* ==========================================
   LOADING SCREEN
========================================== */

window.addEventListener("load",()=>{

    const loader = document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },800);

});
// ==========================================
// INITIAL LOAD
// ==========================================

renderMiniCards();

showProject(0);
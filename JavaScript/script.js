function formValidity() {
    let hasError = false;

    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        name.style.borderColor = 'red';
        hasError = true;
    } else {
        name.style.borderColor = '#AAA';
    }

    const email = document.getElementById('email');
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[^\s@]+\.(com|net|org|edu|gov|mil|int)$/;
    if (email.value.trim() === '') {
        email.style.borderColor = 'red';
        hasError = true;
    } else if (!emailRegex.test(email.value.trim())) {
        email.style.borderColor = 'red';
        hasError = true;
    } else {
        email.style.borderColor = '#AAA';
    }

    const message = document.getElementById('msg');
    if (message.value.trim() === '') {
        message.style.borderColor = 'red';
        hasError = true;
    } else {
        message.style.borderColor = '#AAA';
    }

    if (hasError) {
        event.preventDefault();
    } else {
        alert('Message Sent Successfully!');
        window.location.reload();
        event.preventDefault();
    }
}

window.addEventListener('load', () => {
    window.scrollTo(0, 0);
})

function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");

    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}
window.onscroll = function () { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

    } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

    }
}

function inputCheck() {
    event.target.style.borderColor = '#AAA';
}

var typingEffect = new Typed(".typedText", {
    strings: ["Developer", "Designer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 70,
    backDelay: 2000
})


const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

sr.reveal('.info-card', {})
sr.reveal('.info-name', { delay: 100 })
sr.reveal('.info-text-info', { delay: 200 })
sr.reveal('.info-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.info-image', { delay: 300 })

sr.reveal('.project-box', { interval: 200 })

sr.reveal('.top-header', {})

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })


function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}



const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.scrollY;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

        } else {

            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

        }
    })
}

window.addEventListener('scroll', scrollActive)
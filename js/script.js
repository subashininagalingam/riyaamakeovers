/*==============================
AOS Animation
==============================*/

if (typeof AOS !== "undefined") {
    AOS.init({
        duration: 1000,
        once: true
    });
}

/*==============================
Mobile Menu
==============================*/

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

    if(navMenu.classList.contains("active")){

        menuBtn.innerHTML='<i class="fa-solid fa-xmark"></i>';

    }else{

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    }

});

/*==============================
Close Menu After Click
==============================*/

document.querySelectorAll(".nav-menu a").forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

        menuBtn.innerHTML='<i class="fa-solid fa-bars"></i>';

    });

});



/*==============================
Sticky Navbar
==============================*/

const header=document.querySelector(".header");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        header.style.background="rgba(10,6,18,.95)";

        header.style.boxShadow="0 10px 35px rgba(0,0,0,.35)";

    }

    else{

        header.style.background="rgba(15,6,24,.75)";

        header.style.boxShadow="none";

    }

});


/*==============================
Scroll To Top
==============================*/

const scrollBtn = document.querySelector(".scroll-top");

if (scrollBtn) {
    window.addEventListener("scroll", () => {
        scrollBtn.style.display = window.scrollY > 500 ? "flex" : "none";
    });

    scrollBtn.onclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };
}


/*==============================
Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==============================
Counter Animation
==============================*/

/*==============================
Counter Animation
==============================*/

const counters = document.querySelectorAll(".stat-box h2");
let started = false;

window.addEventListener("scroll", () => {

    const section = document.querySelector(".stats");
    if (!section || started) return;

    const position = section.offsetTop - 500;

    if (window.scrollY > position) {

        started = true;

        counters.forEach(counter => {

            const text = counter.innerText.trim();

            const isPercent = text.includes("%");
            const target = parseInt(text.replace(/\D/g, ""));

            let count = 0;

            const speed = Math.max(1, Math.ceil(target / 80));

            function update() {

                count += speed;

                if (count < target) {

                    counter.innerText = isPercent
                        ? count + "%"
                        : count + "+";

                    requestAnimationFrame(update);

                } else {

                    counter.innerText = text;
                }
            }

            update();

        });

    }

});


/*==============================
Active Menu
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".nav-menu a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-150;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")=="#"+current){

link.classList.add("active");

}

});

});


/*==============================
Image Hover Zoom
==============================*/

document.querySelectorAll(".gallery-grid img").forEach(img=>{

img.addEventListener("mouseenter",()=>{

img.style.transform="scale(1.08)";

});

img.addEventListener("mouseleave",()=>{

img.style.transform="scale(1)";

});

});


/*==============================
Mouse Glow Effect
==============================*/

const glow=document.createElement("div");

glow.className="mouse-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove",(e)=>{

glow.style.left=e.clientX+"px";

glow.style.top=e.clientY+"px";

});

/*=====================================
Booking Popup
=====================================*/

const bookingModal=document.getElementById("bookingModal");

const bookingBtns=document.querySelectorAll(".btn");

const closeModal=document.querySelector(".close-modal");

bookingBtns.forEach(btn=>{

if(btn.innerText.includes("Book")){

btn.addEventListener("click",(e)=>{

e.preventDefault();

bookingModal.classList.add("active");

});

}

});

closeModal.addEventListener("click",()=>{

bookingModal.classList.remove("active");

});

window.addEventListener("click",(e)=>{

if(e.target==bookingModal){

bookingModal.classList.remove("active");

}

});

/*==============================
Preloader
==============================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("preloader").style.opacity="0";

document.getElementById("preloader").style.visibility="hidden";

},1500);

});

const galleryImages=document.querySelectorAll(".gallery-item img");

const lightbox=document.getElementById("lightbox");

const lightboxImg=document.getElementById("lightbox-img");

const closeLightbox=document.querySelector(".close-lightbox");

galleryImages.forEach(img=>{

img.addEventListener("click",()=>{

lightbox.style.display="flex";

lightboxImg.src=img.src;

});

});

if(closeLightbox){

closeLightbox.addEventListener("click",()=>{

lightbox.style.display="none";

});

}

if(lightbox){

lightbox.addEventListener("click",(e)=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

});

}

document.getElementById("bookingForm").addEventListener("submit", function(e){

    e.preventDefault();

    alert("Thank you! Your appointment request has been submitted.");

    document.getElementById("bookingModal").style.display = "none";

});

// Testimonial

const grid = document.querySelector(".testimonial-grid");

if (grid) {

    const cards = Array.from(document.querySelectorAll(".testimonial-card"));

    // Clone first 3 cards
    cards.slice(0, 3).forEach(card => {
        grid.appendChild(card.cloneNode(true));
    });

    let index = 0;
    const gap = 25;

    function slideTestimonials() {

        const width = cards[0].offsetWidth + gap;

        index++;

        grid.style.transition = "transform .6s ease";
        grid.style.transform = `translateX(-${index * width}px)`;

        if (index === cards.length) {

            setTimeout(() => {
                grid.style.transition = "none";
                grid.style.transform = "translateX(0)";
                index = 0;
            }, 600);

        }

    }

    setInterval(slideTestimonials, 2500);

}

document.querySelectorAll(".btn").forEach(btn => {

btn.addEventListener("click", function(e){
    e.preventDefault();
});

});
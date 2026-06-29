/*==============================
AOS Animation
==============================*/

AOS.init({
    duration:1000,
    once:true
});

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

const scrollBtn=document.querySelector(".scroll-top");

window.addEventListener("scroll",()=>{

    if(window.scrollY>500){

        scrollBtn.style.display="flex";

    }

    else{

        scrollBtn.style.display="none";

    }

});

scrollBtn.onclick=()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

};


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

const counters=document.querySelectorAll(".stat-box h2");

let started=false;

window.addEventListener("scroll",()=>{

const section=document.querySelector(".stats");

if(!section) return;

const position=section.offsetTop-500;

if(window.scrollY>position && !started){

started=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=Math.max(20,Math.floor(target/80));

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=count+"+";

requestAnimationFrame(update);

}

else{

if(counter.innerText.includes("%")){

counter.innerText="100%";

}else{

counter.innerText=target+"+";

}

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

const menuBtn = document.querySelector(".menu-btn");
const navMenu = document.querySelector(".nav-menu");

menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    menuBtn.innerHTML = navMenu.classList.contains("active")
        ? '<i class="fa-solid fa-xmark"></i>'
        : '<i class="fa-solid fa-bars"></i>';
});
const heroSection=document.getElementById('section-1');
const aboutSection=document.getElementById('section-2');
const projectSection=document.getElementById('section-3');
const contactSection=document.getElementById('section-4');
const getInTouch=document.getElementById('get-in-touch');

const heroSectionDesktop=document.getElementById('section-1-desktop');
const aboutSectionDesktop=document.getElementById('section-2-desktop');
const projectSectionDesktop=document.getElementById('section-3-desktop');
const contactSectionDesktop=document.getElementById('section-4-desktop');



heroSection.addEventListener("click", ()=>{
    scrollToSection('hero')
  
})

aboutSection.addEventListener("click", ()=>{
    scrollToSection('technology')
    
})

projectSection.addEventListener("click", ()=>{
    scrollToSection('showcase')
    
})

contactSection.addEventListener("click", ()=>{
    scrollToSection('contact')
    
})

/*************************************************************** */ 
heroSectionDesktop.addEventListener("click", ()=>{
    scrollToSection('hero')
  
})

aboutSectionDesktop.addEventListener("click", ()=>{
    scrollToSection('technology')
    
})

projectSectionDesktop.addEventListener("click", ()=>{
    scrollToSection('showcase')
    
})

contactSectionDesktop.addEventListener("click", ()=>{
    scrollToSection('contact')
    
})
/*
if(burger=actif && scroll down){
    buger.remove class
}
*/ 

getInTouch.addEventListener("click", ()=>{
    scrollToSection('contact')
    
})


function scrollToSection(section){
    document.getElementById(section).scrollIntoView({
        behavior: 'smooth'
    });
}
/*
const modalClose=document.getElementById('modal-close');
const contactSubmit =document.getElementById('contact-submit');
const modalContainer=document.getElementById('modal-container');
contactSubmit.addEventListener("submit", ()=>{
    modalContainer.classList.add('modal-active')
})
modalClose.addEventListener("click", ()=>{
    modalContainer.classList.remove('modal-active')
})
*/





const mobileNav=document.getElementById('mobile-nav')
const burger=document.getElementById('burger')
const menuBg=document.getElementById('menu-bg')
const aside=document.getElementById('aside')

function toggleBurgerMenu(){
    burger.classList.toggle('active');
    menuBg.classList.toggle('menu-bg-active')
    mobileNav.classList.toggle('mobile-menu-active')
    aside.classList.toggle('test')
}

burger.addEventListener('click', toggleBurgerMenu)



let lastScrollTop=0;
const header =document.getElementById('header');

window.addEventListener('scroll', ()=>{
    const scrollTop=window.scrollY;
    burger.classList.remove('active');
    menuBg.classList.remove('menu-bg-active')
    mobileNav.classList.remove('mobile-menu-active')
    aside.classList.remove('test')
    scrollTop>lastScrollTop ?  header.style.top="-70px": header.style.top="0"
    lastScrollTop=scrollTop;
    
})

const loaderWrapper=document.querySelector('.loader-wrapper')
const main=document.getElementById("main")
const footer=document.getElementById("footer")

function init(){
    setTimeout(()=>{
        loaderWrapper.classList.add("loading")

        header.classList.remove("loading")
        main.classList.remove("loading")
        footer.classList.remove("loading")
    },2400);
}
init()



/**/ 

let width, height, largeHeader, canvas, ctx, circles, target, animateHeader = true;

// Main
initHeader();
addListeners();

function initHeader() {
  /*Get dom value needed*/
    width = window.innerWidth;
    height = window.innerHeight;
    target = {x: 0, y: height};
  


    largeHeader = document.getElementById('large-header');
    canvas = document.getElementById('demo-canvas');
    canvas.width = width;
    canvas.height = height;
    ctx = canvas.getContext('2d');

    // create particles
    circles = [];
    for(let x = 0; x < width*0.5; x++) {
        let c = new Circle();
        circles.push(c);
    }
    animate();
}

// Event handling
function addListeners() {
    window.addEventListener('scroll', scrollCheck);
    window.addEventListener('resize', resize);
}

function scrollCheck() {
    if(document.body.scrollTop > height) animateHeader = false;
    else animateHeader = true;
}

function resize() {
    width = window.innerWidth;
    height = window.innerHeight;
    largeHeader.style.height = height+'px';
    canvas.width = width;
    canvas.height = height;
}

function animate() {
    if(animateHeader) {
        ctx.clearRect(0,0,width,height);
        for(let i in circles) {
            circles[i].draw();
        }
    }
    requestAnimationFrame(animate);
}

// Canvas manipulation
function Circle() {
    let _this = this;

    // constructor
    (function() {
        _this.pos = {};
        init();
       /* console.log(_this);*/
    })();

    function init() {
        _this.pos.x = Math.random()*width;
        _this.pos.y = height+Math.random()*100;
        _this.alpha = 0.1+Math.random()*0.7;
        _this.scale = 0.1+Math.random()*0.3;
        _this.velocity = Math.random();
    }

    this.draw =()=>{
       if(_this.alpha <= 0) {
            init();
        }
        _this.pos.y -= _this.velocity;
        _this.alpha -= 0.0005;
        ctx.beginPath();
        ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
        ctx.fillStyle = 'rgba(247,56,89,'+ _this.alpha+')';
        ctx.fill();
    }
    
      
}
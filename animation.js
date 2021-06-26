gsap.to("#logo-anime", {rotationY:360, delay:2, duration:3, repeat:-1, repeatDelay:3});

gsap.to(".heading3", { rotationX:360, duration:3, ease:"bounce", delay:2});

gsap.fromTo("#drone",{x:0, y:0, scale:1 }, { x:"63vw", y:"18px", scale:0.2, repeat:-1,
 yoyo:"true",ease:"power1.inOut", duration:12})

// gsap.to(".div-box", {rotation:360, duration:6, repeat:-1, yoyo:"true", ease:"power2.inOut", scale:1.8})

// gsap.to("#home-loading", {duration:1, display:"none"})

// for preloading----------------------------------------
// var preloader = document.getElementById('home-loading');
// function loadFunction(){
//     preloader.style.display='none';
// }

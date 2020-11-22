const bgr = document.querySelector('.bgr');
const slider = document.querySelector('.slider');
const logo = document.querySelector('#logo');
const hl = document.querySelector('.hl');
const navB = document.querySelector('.navbar-brand');
const hld = document.querySelector('.hl3');

const tl = new TimelineMax();

tl.fromTo(bgr, 1,{height:'0%'}, {height: '80%', ease: Power2.easeInOut })
.fromTo(bgr, 1.2, {width:'100%'}, {width:'80%', ease: Power2.easeInOut})
.fromTo(slider, 1.2, {x: '-100%'}, {x:'0%', ease: Power2.easeInOut}, "-=1.2")
.fromTo(navB, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=0.5")
.fromTo(hl, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=0.5")
.fromTo(hld, 0.5, {opacity: 0, x:30}, {opacity:1, x:0}, "-=0.5")
//get DOM elements
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const menuBranding = document.querySelector('.menu-branding');
const navItems = document.querySelectorAll('.nav-item');
const body = document.querySelector('body');
const link = document.querySelectorAll('a');
const main = document.querySelector('main');
const mainScroll = document.getElementById('home');
const topNav = document.querySelector('.top-nav-container');
const scrollTop = window.pageYOffset;
const info = document.querySelector('.info');
const downArrow = document.querySelector('.down-arrow');
const topInfo = document.querySelector('.top-info');
const line = document.querySelectorAll('.line');
const first = document.querySelectorAll('.first');

//scroll function
function pageScroll() {
  var x = document.documentElement.scrollTop;
  var y = info.offsetTop;
  var z = y - x;
  console.log(z);
  if (z <= 560 && z > 350) {
    topInfo.classList.add('show');
    topNav.classList.remove('show-nav');
  } else if (z <= 350 && z > -71) {
    line.forEach(item => item.classList.add('show'));
    downArrow.classList.remove('slow-fade');
    topNav.classList.remove('show-nav');
    topNav.classList.remove('show-about-nav');
  } else if (-350 < z && z < -71) {
    topNav.classList.add('show-nav');
    topNav.classList.remove('show-about-nav');
  } else if (z > -72) {
    topNav.classList.remove('show-nav');
  } else if (z < -450) {
    topNav.classList.add('show-about-nav');
  }
}
//change states
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    menuBranding.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));

    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    menuBranding.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    showMenu = false;
  }
}

link.forEach(item => item.addEventListener('click', pageFade));

function pageFade() {
  body.classList.remove('fade-in');
}

//Down Arrow
function arrowDown() {
  downArrow.classList.add('slow-fade');
}

function pageLoad() {
  body.classList.add('fade-in');
  setTimeout(arrowDown, 2000);
}

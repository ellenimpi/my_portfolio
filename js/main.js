//Selecting DOM items
//DOM = Document Object Model
const menuBtn = document.querySelector(".menu-btn");
const menuBranding = document.querySelector(".menu-branding");
const menuNav = document.querySelector(".menu-nav");
const menu = document.querySelector(".menu");

//querySelector only grabs the first one - we must use
//querySelectorAll which creates a nodelist(similar to array)
const navItems = document.querySelectorAll(".nav-item");

//set initial state of menu
let showMenu = false;

//when we click it rotates - need eventlistener
menuBtn.addEventListener("click", toggle);

function toggle() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menuBranding.classList.add("show");
    menuNav.classList.add("show");
    menu.classList.add("show");

    navItems.forEach(item => item.classList.add("show"));
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menuBranding.classList.remove("show");
    menuNav.classList.remove("show");
    menu.classList.remove("show");

    navItems.forEach(item => item.classList.remove("show"));
    showMenu = false;
  }
}

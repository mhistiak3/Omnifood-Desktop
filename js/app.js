// let mainNav = document.querySelector(".main-nav");
// let btnMobileNav = document.querySelector(".btn-mobile-nav");
// let openBtn = document.querySelector(".icon-mobile-nav[name='menu-outline']");
// let closeBtn = document.querySelector(".icon-mobile-nav[name='close-outline']");

// openBtn.addEventListener('click',()=>{
//     mainNav.classList.add('open')
//     btnMobileNav.classList.add("btnMobileNavClose");
// })
// closeBtn.addEventListener("click", () => {
//   mainNav.classList.remove("open");
//   btnMobileNav.classList.remove("btnMobileNavClose");
// });

// Another way

let mainNav = document.querySelector(".main-nav");
let btnMobileNav = document.querySelector(".btn-mobile-nav");

// let openBtn = document.querySelector(".icon-mobile-nav[name='menu-outline']");
// let closeBtn = document.querySelector(".icon-mobile-nav[name='close-outline']");
let iconMobileNav = document.querySelector(".icon-mobile-nav");

btnMobileNav.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  if (iconMobileNav.getAttribute("name") === "menu-outline") {
    iconMobileNav.setAttribute("name", "close-outline");
  } else {
    iconMobileNav.setAttribute("name", "menu-outline");
  }
  //   btnMobileNav.classList.add("btnMobileNavClose");
});

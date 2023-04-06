// RESPONSIVE MENu
let mainNav = document.querySelector(".main-nav");
let btnMobileNav = document.querySelector(".btn-mobile-nav");
let iconMobileNav = document.querySelector(".icon-mobile-nav");
let mainNavLinks = document.querySelectorAll(".main-nav-link");

mainNavLinks.forEach((mainNavLink) => {
  mainNavLink.addEventListener("click", () => {
    mainNav.classList.remove("open");
    iconMobileNav.setAttribute("name", "menu-outline");
  });
});

btnMobileNav.addEventListener("click", () => {
  mainNav.classList.toggle("open");
  if (iconMobileNav.getAttribute("name") === "menu-outline") {
    iconMobileNav.setAttribute("name", "close-outline");
  } else {
    iconMobileNav.setAttribute("name", "menu-outline");
  }
});

// STATRT DYNAMIC YEAR
const yearEl = document.querySelector(".year");
yearEl.textContent = new Date().getFullYear();

// Sticky Navigation
const sectionHero = document.querySelector(".section-hero");
const header = document.querySelector(".header");
const obs = new IntersectionObserver(
  (entries) => {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }
    if (ent.isIntersecting) {
           document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin:"-80px"
  }
);
obs.observe(sectionHero);

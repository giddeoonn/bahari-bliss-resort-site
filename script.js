const offScreenMenu = document.querySelector(".off-screen-menu");
const offScreenMenuBtn = document.querySelectorAll(".off-screen-menu-btn");
const hamMenu = document.querySelector(".ham-menu");
const closeBtn = document.querySelector(".close-btn");
const blurBg = document.querySelector(".blur");

hamMenu.addEventListener("click", () => {
  offScreenMenu.classList.toggle("active");
  blurBg.classList.toggle("active");
});
closeBtn.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  blurBg.classList.remove("active");
});
offScreenMenuBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    offScreenMenu.classList.remove("active");
    blurBg.classList.remove("active");
  });
});
blurBg.addEventListener("click", () => {
  offScreenMenu.classList.remove("active");
  blurBg.classList.remove("active");
});

const navbar = document.querySelectorAll(".navbar");

window.addEventListener("scroll", () => {
  navbar.forEach((navbar) => {
    if (window.scrollY > 150) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

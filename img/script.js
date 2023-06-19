// Modal window
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Styles, Attributes and Classes ///////////////////////////////////////////////////////////////////////////////////
// Styles
message.style.backgroundColor = "#37383d";
message.style.width = "120%";
message.style.height =
  Number(parseFloat(getComputedStyle(message).height), 10) + 30 + "px";

document.documentElement.style.setProperty("--color-primary", "orangered");

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); // 'Bankist logo'
logo.alt = "Beautiful Minimalist Logo"; // <img ... alt="Beautiful Minimalist Logo">

console.log(logo.src); // 'http://192.168.219.107:5500/13-Advanced-DOM-Bankist/bankist/img/logo.png'
console.log(logo.getAttribute("src")); // 'img/logo.png'

console.log(logo.className); // 'nav__logo'

const link1 = document.querySelector(".twitter-link");
console.log(link1.href); // 'https://twitter.com/jonasschmedtman'
console.log(link1.getAttribute("href")); // 'https://twitter.com/jonasschmedtman'

const link2 = document.querySelector(".nav__link--btn");
console.log(link2.getAttribute("href")); // '#'

// Classes
logo.classList.add("a");
logo.classList.remove("a");
console.log(logo.classList.contains("a")); // false

// Scrolling //////////////////////////////////////////////////////////////////////////////////////////////////////
btnScrollTo.addEventListener("click", function (e) {
  // New Way
  section1.scrollIntoView({ behavior: "smooth" }); // Smooth Scrolling
  /* Old School Way
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: "smooth",
  });
  
  // getBoundingClientRect() : 해당 요소의 뷰포트 상 위치와 크기를 좌표(x, y, width, height 등)로 알려줌. 스크롤 하면 좌표값이 바뀐다.
  const s1coords = section1.getBoundingClientRect();
  // section 1 좌표값
  console.log(s1coords); // DOMRect {x: 0, y: 713.6000366210938, width: 958.4000244140625, height: 1567, top: 713.6000366210938, …}
  // Button 좌표값
  console.log(e.target.getBoundingClientRect()); // DOMRect {x: 30, y: 559.9750366210938, width: 117.6500015258789, …}

  // window.pageXOffset : 얼만큼 스크롤 되었는지 알려줌
  console.log("Current Scroll (x / y)", window.pageXOffset, window.pageYOffset);

  // document.documentElement.clientHeight : 현재 뷰포트 크기 알려줌
  console.log(
    "Viewport height / width",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); */
});

// Events and Event Handlers //////////////////////////////////////////////////////////////////////////////////////////////////////
const h1 = document.querySelector("h1");

// mouseenter
const mouseH1 = function (e) {
  console.log("mouse entered");

  // removeEventListener
  h1.removeEventListener("mouseenter", mouseH1); // 이벤트 한 번만 실행하고 제거
};

h1.addEventListener("mouseenter", mouseH1);
/* Old School Way
h1.onmouseenter = function (e) {
  console.log("mouse entered");
}; */

// setTimeout(() => h1.removeEventListener("mouseenter", mouseH1), 3000); // 일정 시간 지난 뒤 이벤트 제거

/* Event Propagation: Bubbling and Capturing ////////////////////////////////////////////////////////////////////////////////////////
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () =>
  `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)}, ${randomInt(0, 255)})`;
console.log(randomColor(0, 255));

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Link", e.target, e.currentTarget);

  // Stop Propagation
  // e.stopPropagation();
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Container", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomColor();
  console.log("Nav", e.target, e.currentTarget);
}); */

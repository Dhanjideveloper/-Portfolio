let menu = document.querySelector(".menu");
let leftNav = document.querySelector(".leftNav");
const nev = document.querySelector(".navbar");

menu.addEventListener("click", () => {
  leftNav.classList.toggle("ve-repo");
  nev.classList.toggle("h-headrepo");
});

const typed = new Typed(".auto-type", {
  strings: ["Programmer", "Frontend Developer"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

let btn = document.querySelector(".searchIn");
let body = document.querySelector("body");
let mainSec = document.querySelector(".main-sec");
let infoFirstHalfPera = document.querySelector(".info-first-half .pera");
let timelinContant = document.querySelector(".timeline-contant");
let timeCont = document.querySelector("#time-cont");
let timeCont2 = document.querySelector("#time-cont2");
let timeCont3 = document.querySelector("#time-cont3");
let  inputInput = document.querySelector(".inputs input");
let input2 = document.querySelector("#input2")
let input3 = document.querySelector("#input3")
let input4 = document.querySelector("#input4")
let contactBtn = document.querySelector(".contact .btn")

let currentTheam = "dark";

btn.addEventListener("click", () => {
  if (currentTheam === "dark") {
    currentTheam = "light";
    btn.src = "img/moon.png";
    body.style.backgroundColor = "white";
    mainSec.style.color = "black";
    infoFirstHalfPera.style.color = "black";
    timelinContant.style.color = "black";
    timeCont.style.color = "black";
    timeCont2.style.color = "black";
    timeCont3.style.color = "black";
    inputInput.style.borderColor = "black";
    input2.style.borderColor = "black";
    input3.style.borderColor = "black";
    input4.style.borderColor = "black";
    contactBtn.style.color = "black";
    
    btn.innerHTML = "<i>Dark Mode</i>";
  } else {
    currentTheam = "dark";
    btn.src = "img/sun.png";
    body.style.backgroundColor = "";
    mainSec.style.color = "";
    infoFirstHalfPera.style.color = "";
    timelinContant.style.color = "";
    timeCont.style.color = "";
timeCont2.style.color = "";
timeCont3.style.color = "";
inputInput.style.borderColor = "";
input2.style.borderColor = "";
input3.style.borderColor = "";
input4.style.borderColor = "";
contactBtn.style.color = "";
    btn.innerHTML = "<i>Light Mode</i>";
  }
});

 
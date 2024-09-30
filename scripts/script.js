// JavaScript Document
console.log("hi");

let menuIcoon = document.querySelector("header > svg:nth-of-type(4)");

menuIcoon.onclick = openMenu;

function openMenu(){
    let deNav = document.querySelector("nav");
    let deBody = document.querySelector("body");
    deNav.classList.add("toonMenu");
    deBody.classList.add("noScroll");
}

let sluitIcoon = document.querySelector("nav > svg:nth-of-type(4)");

sluitIcoon.onclick = sluitMenu;

function sluitMenu(){
    let deNav = document.querySelector("nav");
    let deBody = document.querySelector("body");
    deNav.classList.remove("toonMenu");
    deBody.classList.remove("noScroll");
}


let buttonMeer = document.querySelector(".pagina2");

 if (buttonMeer){
    buttonMeer.onclick = openMeer;
 }

function openMeer(){
   let meerLaden = document.querySelector(".meerLaden");
   if (meerLaden){
    document.querySelector(".meerLaden").style.display = "grid";
    buttonMeer.style.display = 'none'
   }
}

let R = document.querySelector(':root');

function getR(){
    let rS = getComputedStyle(R);
    alert("The value of --font-p is:" + rS.getPropertyValue('--font-p'));
}

function set(){
    R.style.setProperty('--font-p', '1.5em');
}

let biggerFont = document.querySelector("button:nth-of-type(2)");
biggerFont.onclick = set;

/* Biggerfont code met behulp van chatgpt */


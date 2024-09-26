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


let buttonMeer = document.querySelector("article > button");

buttonMeer.onclick = openMeer;

function openMeer(){
   let meerLaden = document.querySelector(".meerLaden");
    document.querySelector(".meerLaden").style.display = "grid";
    console.log("klik")
}

let filterOpen = document.querySelector(".filteren");

filterOpen.onclick = openFilterMenu;

function openFilterMenu(){
    let deFilters = document.querySelector(".filterMenu");
    deFilters.classList.add("filterInBeeld");
}
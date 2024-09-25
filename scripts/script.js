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


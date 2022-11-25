var home = document.getElementById("home-nav");
var about = document.getElementById("about-nav");
var background = document.getElementById("background-nav");
var projects = document.getElementById("projects-nav");

function removeActive() {
    const list = document.getElementById("nav-list").getElementsByTagName("span");
    for (var i=0, len=list.length; i<len; i++) {
        list[ i ].classList.remove("active");
    }
}

function makeActive(name) {
    var element = document.getElementById(name);
    removeActive();
    element.classList.add("active");
}

home.onclick = function() {makeActive("home-nav");}
about.onclick = function() {makeActive("about-nav");}
background.onclick = function() {makeActive("background-nav");}
projects.onclick = function() {makeActive("projects-nav");}

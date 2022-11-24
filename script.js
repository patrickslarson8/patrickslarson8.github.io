
function removeActive() {
    const list = document.getElementById("nav-list").getElementsByTagName("li");
    for (var i=0, len=list.length; i<len; i++) {
        list[ i ].classList.remove("active");
    }
}

function makeActive(name) {
    removeActive();
    var element = document.getElementById(name);
    element.classList.add("active");
}

var home = document.getElementById("home");
var about = document.getElementById("about");
var background = document.getElementById("background");
var projects = document.getElementById("projects");


home.onclick = function() {makeActive("home");}
about.onclick = function() {makeActive("about");}
background.onclick = function() {makeActive("background");}
projects.onclick = function() {makeActive("projects");}

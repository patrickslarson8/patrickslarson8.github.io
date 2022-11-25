var home_offset = "-392px";
var about_offset = "-292px";
var qual_offset = "-193px";
var projects_offset = "-92px";

var home = document.getElementById("home");
var about = document.getElementById("about");
var background = document.getElementById("background");
var projects = document.getElementById("projects");
var marker_style = document.getElementById("nav-marker").style;

function removeActive() {
    const list = document.getElementById("nav-list").getElementsByTagName("li");
    for (var i=0, len=list.length; i<len; i++) {
        list[ i ].classList.remove("active");
    }
}

function makeActive(name, offset) {
    var element = document.getElementById(name);
    removeActive();
    element.classList.add("active");
    marker_style.left = offset;
}

home.onclick = function() {makeActive("home", home_offset);}
about.onclick = function() {makeActive("about", about_offset);}
background.onclick = function() {makeActive("background", qual_offset);}
projects.onclick = function() {makeActive("projects", projects_offset);}

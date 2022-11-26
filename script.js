var home = document.getElementById("home-nav");
var about = document.getElementById("about-nav");
var background = document.getElementById("background-nav");
var projects = document.getElementById("projects-nav");

var marker_style = document.getElementById("nav-marker").style;
marker_style.visibility = "visible";

home.onclick = function() {marker_style.top = "15px"}
projects.onclick = function() {marker_style.top = "74px"}
about.onclick = function() {marker_style.top = "135px"}
background.onclick = function() {marker_style.top = "193px"}

var csharpbtn = document.getElementById("csharpbtn")
var cppbtn = document.getElementById("cppbtn")
var pythonbtn = document.getElementById("pythonbtn")
var sqlbtn = document.getElementById("sqlbtn")

csharpbtn.addEventListener("click", (event) => {filterSelection(event, "c-sharp")});
cppbtn.addEventListener("click", (event) => {filterSelection(event, "cpp")});
pythonbtn.addEventListener("click", (event) => {filterSelection(event, "python")});
sqlbtn.addEventListener("click", (event) => {filterSelection(event, "sql")});

function filterSelection(event, term) {
    var contentCells, callingBtn, i;
    callingBtn = event.target;
    contentCells = document.getElementsByClassName("content");

    if(callingBtn.classList.contains("btn-active")) {
        console.log("deactivating button");
        callingBtn.classList.remove("btn-active");
        for (i = 0; i < contentCells.length; i++) {
            if (contentCells[i].classList.contains(term)) {
              contentCells[i].classList.remove("content-active");
            }
          }
    }
    else {
        console.log("activating button");
        callingBtn.classList.add("btn-active");
        for (i = 0; i < contentCells.length; i++) {
            if (contentCells[i].classList.contains(term)) {
            contentCells[i].classList.add("content-active");
            }
        }
    }
}
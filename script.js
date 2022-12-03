var marker_style = document.getElementById("nav-marker").style;
marker_style.visibility = "visible";

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

// Make navbar follow along with scroll
const options = {threshold:0.5};


const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const intersecting = entry.isIntersecting
      switch (entry.target.id)
      {
        case "intro": if(entry.intersectionRatio >= options.threshold) {marker_style.top = "15px";} break;
        case "projects-section": if(entry.intersectionRatio >= options.threshold) {marker_style.top = "74px";} break;
        case "about-section": if(entry.intersectionRatio >= options.threshold) {marker_style.top = "135px";} break;
        case "background-section": if(entry.intersectionRatio >= options.threshold) {marker_style.top = "193px";} break;
        case "contact-me-section": if(entry.intersectionRatio >= options.threshold) {marker_style.top = "255px";} break;
        default:
      }
    })
  }, options);

observer.observe(document.getElementById("intro"));
observer.observe(document.getElementById("projects-section"));
observer.observe(document.getElementById("about-section"));
observer.observe(document.getElementById("background-section"));
observer.observe(document.getElementById("contact-me-section"));


// Handle contact form
var form = document.getElementById("contactForm");
      
async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
        'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.innerHTML = "Thanks for your submission!";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    status.innerHTML = "Oops! There was a problem submitting your form"
  });
}
form.addEventListener("submit", handleSubmit)
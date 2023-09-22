window.onload = () => {
  assignPageStyle();
  type();
};

window.onresize = () => {
  assignPageStyle();
};

function assignPageStyle() {
  if (window.innerHeight > window.innerWidth) {
    swapStyleSheet("mobile_stylesheet.css");
    document.querySelector("div.button-container").style.display = "none";
  }
  if (window.innerHeight <= window.innerWidth) {
    swapStyleSheet("desktop_stylesheet.css");
    document.querySelector("div.button-container").style.display = "flex";
  }
}

function swapStyleSheet(stylesheet) {
  document.getElementById("pagestyle").setAttribute("href", stylesheet);
}

// ANIMATIONS

function type() {
  let txt = "Aspiring Developer";
  let typed = document.getElementById("typed");

  for (let i = 0; i < txt.length; i++) {
    setTimeout(() => {
      typed.innerHTML += txt.charAt(i);
    }, 100 * i);
  }
}

let projectSection = document.querySelector("div.projects");
let projectContent = document.querySelector("div.project-content");
let projectDescription = document.querySelector("div.project-description");

let contactSection = document.querySelector("div.contact-info");
let mailIcon = document.getElementById("mail-icon");
let phoneIcon = document.getElementById("phone-icon");
let documentIcon = document.getElementById("document-icon");

addEventListener("scroll", () => {
  setTimeout(() => {
    if (isScrolledIntoView(projectSection)) {
      if (!projectContent.classList.contains("animate__animated")) {
        projectContent.classList.add("animate__animated", "animate__fadeIn");
        projectDescription.classList.add(
          "animate__animated",
          "animate__fadeIn",
          "animate__delay-1s"
        );
        projectSection.style.visibility = "visible";
      }
    }
    if (isScrolledIntoView(contactSection)) {
      if (!mailIcon.classList.contains("animate__animated")) {
        mailIcon.classList.add("animate__animated", "animate__fadeInLeft");
        phoneIcon.classList.add(
          "animate__animated",
          "animate__fadeInLeft",
          "animate__delay-1s"
        );
        documentIcon.classList.add(
          "animate__animated",
          "animate__fadeInLeft",
          "animate__delay-2s"
        );
        contactSection.style.visibility = "visible";
      }
    }
  }, 1000);
});

function isScrolledIntoView(el) {
  let rect = el.getBoundingClientRect();
  let elemTop = rect.top;
  let elemBottom = rect.bottom;

  // Only completely visible elements return true:
  //let isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  // Partially visible elements return true:
  let isVisible = elemTop < window.innerHeight && elemBottom >= 0;
  return isVisible;
}

function openPopUpView(tag, element) {
  if (tag == "img") {
    document.querySelector("img.pop-up-content").src = element;
    document.querySelector("video.pop-up-content").style.display = "none";
    document.querySelector("img.pop-up-content").style.display = "block";
  }
  if (tag == "video") {
    document.querySelector("video.pop-up-content").src = element;
    document.querySelector("img.pop-up-content").style.display = "none";
    document.querySelector("video.pop-up-content").style.display = "block";
  }
  document.querySelector("div.pop-up-container").style.display = "flex";
  document.querySelector("html").style.overflow = "hidden";
}

function closePopUpView() {
  document.querySelector("div.pop-up-container").style.display = "none";
  document.querySelector("html").style.overflow = "auto";
}

function projectScroll(button_id) {
  if (button_id == "forward-button") {
    document.querySelector("div.projects").scrollBy({
      top: 0,
      left: 500,
      behavior: "smooth",
    });
  }
  if (button_id == "back-button") {
    document.querySelector("div.projects").scrollBy({
      top: 0,
      left: -500,
      behavior: "smooth",
    });
  }
}

const devView = document.querySelector(".dev-view");
const martechView = document.querySelector(".martech-view");
const pageNames = document.querySelector("nav");

function shortenViewToggle() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      devView.classList.add("shorten"); martechView.classList.add("shorten");
      pageNames.classList.add("scroll");
    }
    else{
      devView.classList.remove("shorten"); martechView.classList.remove("shorten");
      pageNames.classList.remove("scroll");
    }
  }


// Classes invoking happen here

// Attach scroll event listener to window
window.addEventListener("scroll", shortenViewToggle);
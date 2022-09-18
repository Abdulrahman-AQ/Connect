let navE = document.getElementById("nav-e");
let navI = document.getElementById("nav-i");

navI.onclick = function () {
  navE.classList.toggle("visible");
};

let toTop = document.getElementById("toTop");

document.onscroll = function () {
  if (window.scrollY >= "600") {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
};

toTop.onclick = function () {
  window.scrollTo(0, 0);
};

// FAQ
let q = document.querySelectorAll("#FAQ .question");
let icon = document.querySelectorAll("#FAQ .question i");

q.forEach(function (e) {
  e.onclick = function () {
    this.classList.toggle("active");
  };
});

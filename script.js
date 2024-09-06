// get all Elements

let hamburgerIcon = document.querySelector("#hamburger");
let close = document.querySelector("#closeIcon");
let overlay = document.querySelector(".overlay");
let navlinks = document.querySelector(".navlinks");
let heromockup = document.querySelector(".image-mockups-container");

console.log(hamburgerIcon);

hamburgerIcon.addEventListener("click", (e) => {
  hamburgerIcon.style.display = "none";
  close.style.display = "block";
  overlay.style.display = "block";
  navlinks.style.display = "block";
  heromockup.style.display = "none";
});

close.addEventListener("click", (e) => {
  hamburgerIcon.style.display = "block";
  close.style.display = "none";
  overlay.style.display = "none";
  navlinks.style.display = "none";
  heromockup.style.display = "block";
});

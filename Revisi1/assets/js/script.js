// Bagian: Hamburger-Menu
const navlinks = document.querySelector(".nav-links");

function KlikBroSis(e) {
  e.name = e.name === "menu" ? "close" : "menu";
  navlinks.classList.toggle("top-[9%]");
}
// Bagian: ./ Hamburger-Menu

// Bagian: Typing Otomatic
var Typed = new Typed(".text", {
  strings: ["Our Shoe Store", "Our Shoe Brand", "And", "Find Your Needs In Our Store"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
// Bagian: ./ Typing Otomatic

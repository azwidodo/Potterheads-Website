window.addEventListener("scroll", function() {
  var header = document.getElementsByClassName("header");
  header.classList.toggle("sticky", window.scrollY > 0);
})
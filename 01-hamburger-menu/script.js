const selectButton = document.getElementById("menuToggle");
const selectNav = document.getElementById("sideMenu");
const selectCloseBtn = document.getElementById("closeBtn");

selectButton.addEventListener("click", function() {
    selectNav.classList.add("on");
    selectButton.setAttribute("aria-expanded", "true");
    selectNav.setAttribute("aria-hidden", "false");
});

selectCloseBtn.addEventListener("click", function() {
  selectNav.classList.remove("on");
  selectButton.setAttribute("aria-expanded", "false");
  selectNav.setAttribute("aria-hidden", "true");
});
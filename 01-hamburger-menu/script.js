const selectButton = document.getElementById("menuToggle");
const selectNav = document.getElementById("sideMenu");
const selectCloseBtn = document.getElementById("closeBtn");

selectButton.addEventListener("click", function() {
    selectNav.classList.add("on");
});

selectCloseBtn.addEventListener("click", function() {
  selectNav.classList.remove("on");
});
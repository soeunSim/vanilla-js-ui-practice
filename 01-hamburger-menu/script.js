const selectButton = document.getElementById("menuToggle");
const selectNav = document.getElementById("sideMenu");
const selectCloseBtn = document.getElementById("closeBtn");
const selectMenuOverlay = document.getElementById("overlay");

const focusableElements = ` a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])`;
const focusables = selectNav.querySelectorAll(focusableElements);
const firstFocus = focusables[0];
const lastFocus = focusables[focusables.length - 1];

selectButton.addEventListener("click", function() {
  selectNav.classList.add("on");
  selectMenuOverlay.classList.remove("hidden");

  selectButton.setAttribute("aria-expanded", "true");
  selectNav.setAttribute("aria-hidden", "false");
  selectMenuOverlay.setAttribute("aria-hidden", "false");
  document.body.style.overflow = 'hidden'; 

  requestAnimationFrame(() => {
    firstFocus.focus();
  });    
});

selectCloseBtn.addEventListener("click", function() {
    closeMenu();
});

window.addEventListener('keyup', (event) => {
  if(event.key === "Escape") {
    closeMenu();
  }
})

selectMenuOverlay.addEventListener("click", function() {
  closeMenu();
});

function closeMenu() {
  if (!selectNav.classList.contains("on")) return;

  selectNav.classList.remove("on");
  selectMenuOverlay.classList.add("hidden");
  selectButton.focus();

  selectButton.setAttribute("aria-expanded", "false");
  selectNav.setAttribute("aria-hidden", "true");
  selectMenuOverlay.setAttribute("aria-hidden", "true"); 
  document.body.style.overflow = '';
}

selectNav.addEventListener("keydown", (event) => {
  const checkKeyEventTab = event.key === "Tab";
  const checkKeyWidthShift = event.shiftKey;

  if(checkKeyEventTab && checkKeyWidthShift) {
    if(document.activeElement === firstFocus) {
      event.preventDefault();
      lastFocus.focus();
    }
  }
  if(checkKeyEventTab) {
    if(document.activeElement === lastFocus) {
      event.preventDefault();
      firstFocus.focus();
    }
  }  
});
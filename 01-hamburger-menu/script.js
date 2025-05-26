const selectButton = document.getElementById('menuOpenBtn');
const selectNav = document.getElementById('sideMenu');
const selectCloseBtn = document.getElementById('menuCloseBtn');
const selectMenuOverlay = document.getElementById('overlay');

const focusableElements = 'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
const focusables = selectNav.querySelectorAll(focusableElements);
const firstFocus = focusables[0];
const lastFocus = focusables[focusables.length - 1];

const handleOpenMenu = () => {
  selectNav.classList.add('on');
  selectMenuOverlay.classList.remove('hidden');

  selectButton.setAttribute('aria-expanded', 'true');
  selectNav.setAttribute('aria-hidden', 'false');
  selectMenuOverlay.setAttribute('aria-hidden', 'false');

  document.body.style.overflow = 'hidden';

  requestAnimationFrame(() => {
    firstFocus.focus();
  });
}

const handleCloseMenu = () => {
  if (!selectNav.classList.contains('on')) {
    return;
  }

  selectNav.classList.remove('on');
  selectMenuOverlay.classList.add('hidden');
  selectButton.focus();

  selectButton.setAttribute('aria-expanded', 'false');
  selectNav.setAttribute('aria-hidden', 'true');
  selectMenuOverlay.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

window.addEventListener('keyup', (event) => {
  if (event.key === 'Escape') {
    handleCloseMenu();
  }
});

const handleFocusTrap = (event) => {
  const isTabPressed = event.key === 'Tab';
  const isShiftPressed = event.shiftKey;
  if (!isTabPressed) {
    return;
  }

  if (isTabPressed && isShiftPressed) {
    if (document.activeElement === firstFocus) {
      event.preventDefault();
      lastFocus.focus();
    }
  } else if (isTabPressed) {
    if (document.activeElement === lastFocus) {
      event.preventDefault();
      firstFocus.focus();
    }
  }
};

selectButton.addEventListener('click', handleOpenMenu);
selectCloseBtn.addEventListener('click', handleCloseMenu);
selectMenuOverlay.addEventListener('click', handleCloseMenu);
selectNav.addEventListener('keydown', handleFocusTrap);

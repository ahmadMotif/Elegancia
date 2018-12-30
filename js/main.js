$(document).ready(function () {
  var
  menuBar = $('#ifms-menu-btn'),
  wrapper = $('#ifms-menu-wrapper'),
  overlay = $('#ifms-menu-overlay'),
  closeIcon = $('#ifms-close-svg-icon'),
  openIcon = $('#ifms-menu-svg-icon'),
  open = false;
  menuBar.click(menuIn);

  closeIcon.remove();

  function menuIn() {
    if(!open) {
      openNav();
    } else {
      closeNav();
    }
  }
  function openNav() {
    open = true;
    menuBar.append(closeIcon);
    openIcon.remove();
    wrapper.addClass('open-menu');
    overlay.addClass('open-menu');
  }
  function closeNav() {
    open = false;
    menuBar.append(openIcon);
    closeIcon.remove();
    wrapper.removeClass('open-menu');
    overlay.removeClass('open-menu');
  }

  // Scroll To Elements
  var setctors_sec = $('.ifms-sectors');

  setctors_sec.click(function(e) {
    console.log(123456)
  });
});
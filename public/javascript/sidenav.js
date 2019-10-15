(function(window) {
  'use strict';

  // DOM Elements
  const sidenavTriggers = document.querySelectorAll('.sidenav__trigger');
  const sidenav = document.querySelector('.sidenav');
  const alternativeSidenav = document.querySelector('.sidenav--alternative');

  document.addEventListener('click', hideSidenav);
  for(const trigger of sidenavTriggers) {
    trigger.addEventListener('click', toggleSidenav);
  }

  function toggleSidenav (event) {
    if(event.target.closest('.sidenav__trigger--alternative')) {
      alternativeSidenav.classList.toggle('sidenav--active');
    } else {
      sidenav.classList.toggle('sidenav--active');
    }
  }

  function hideSidenav(event) {
    if(!event.target.closest('.sidenav') && !event.target.closest('.navbar')) {
      if(!event.target.closest('.sidenav--alternative')) {
        sidenav.classList.remove('sidenav--active');
        if(alternativeSidenav != null) {
          alternativeSidenav.classList.remove('sidenav--active');
        }
      }
    }
  }

})(window);

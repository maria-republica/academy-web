(function hiddenHeader(window) {
  'use strict';

  const programNavbar = document.querySelector('.program-navbar');
  const floatButton = document.querySelector('.float_button');
  const morePrograms = document.querySelector('.more-programs');
  const acordeonButton = document.querySelector('.acordeon-button');
  const learningAcordion = document.querySelector('.learning--acordion');
  document.addEventListener('scroll', scrollHandler);

  function scrollHandler() {
    const windowScroll = window.pageYOffset;
    toggleNavbar(windowScroll);
    toggleButton(windowScroll);
  }

  function toggleNavbar(windowScroll) {
    if(windowScroll > 350) {
      programNavbar.classList.add('active');
    } else {
      programNavbar.classList.remove('active');
    }
  }

  function toggleButton(windowScroll) {
    if(windowScroll > 700) {
      floatButton.classList.add('active');
    } else {
      floatButton.classList.remove('active');
    }
  }

  if(acordeonButton) {
    acordeonButton.addEventListener('click', () => {
      learningAcordion.classList.remove('complete');
      learningAcordion.classList.toggle('active');
      setTimeout(function () {
        if(learningAcordion.classList.contains('active')) {
          learningAcordion.classList.add('complete');
        }
      }, 1000);
    });
  }

})(window);

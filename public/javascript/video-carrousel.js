(function videoCarrousel() {
  'use strict';

  const arrowLeft = document.querySelector('.arrow-left');
  const arrowRight = document.querySelector('.arrow-right');

  arrowLeft.addEventListener('click', slideLeft);
  arrowRight.addEventListener('click', slideRight);

//Carrousel

  const carrouselItems = document.querySelectorAll('.carrouselItem');
  const itemWidth = carrouselItems[0].offsetWidth;
  const totalWidth = (carrouselItems.length - 1)  * itemWidth;
  let carrouselCounter = 0;
  let activeItem = 0;

  (function itemsValidation(carrouselItems) {
    if(carrouselItems.length <= 1) {
      arrowLeft.classList.add('hidden');
      arrowRight.classList.add('hidden');
    }
  })(carrouselItems);

  function slideRight() {
    if(carrouselCounter == -totalWidth) {
      carrouselCounter = 0;
      activeItem = 0;
    } else {
      carrouselCounter -= itemWidth;
      activeItem++;
    }
    carrouselMove(carrouselCounter);
  }

  function slideLeft() {
    if(carrouselCounter == 0) {
      carrouselCounter = -totalWidth;
      activeItem = carrouselItems.length - 1;
    } else {
      carrouselCounter += itemWidth;
      activeItem--;
    }
    carrouselMove(carrouselCounter);
  }

  function carrouselMove(carrouselCounter) {
    for(const item of carrouselItems) {
      item.style.transform = 'translateX(' + carrouselCounter +'px)';
      const videoUrl = item.querySelector('.video-iframe').src;
      item.querySelector('.video-iframe').src = videoUrl;
    }
  }

})();
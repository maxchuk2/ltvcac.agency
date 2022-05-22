window.onload = function() {

  let menuBtn = document.querySelector('.menu-btn');
  let overlay = document.querySelector('.overlay');
  let mainNav = document.querySelector('.main-nav');
  let mainNavLinks = document.querySelectorAll('.main-nav__link');
  let logo = document.querySelector('.logo');

  let openMunu = () => {
    mainNav.classList.toggle('opened');
    logo.classList.add('logo--opened');
    menuBtn.classList.toggle('menu-btn--active');
    overlay.classList.toggle('overlay--active');
    mainNavLinks.forEach(item => {
      item.classList.toggle('is-open');
    });
  }

  let closeMenu = () => {
    mainNav.classList.remove('opened');
    logo.classList.remove('logo--opened');
    overlay.classList.remove('overlay--active');
    menuBtn.classList.remove('menu-btn--active');
    mainNavLinks.forEach(item => {
      item.classList.remove('is-open');
    });
  }

  let header = document.querySelector('.header');

  let width = window.screen.width;

  if (width < 767) {
    if (window.pageYOffset > 50) {
      header.classList.add('header--scroll');
    }
  }

  

  window.onscroll = function () {

    

    if (width < 767) {
      if (window.pageYOffset > 50) {
        header.classList.add('header--scroll');
      } else {
        header.classList.remove('header--scroll');
      }
    }
  };

  menuBtn.addEventListener('click', openMunu);
  overlay.addEventListener('click', closeMenu);

  function animateMarquee(el, duration) {
    const innerEl = el.querySelector('.ticker__list');
    const innerWidth = innerEl.offsetWidth;
    const cloneEl = innerEl.cloneNode(true);
    el.appendChild(cloneEl);
    
    let start = performance.now();
    let progress;
    let translateX;
  
    requestAnimationFrame(function step(now) {
      progress = (now - start) / duration;
   
      if (progress > 1) {
        progress %= 1;
        start = now;
      }
  
      translateX = innerWidth * progress;
      
      innerEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
      cloneEl.style.transform = `translate3d(-${translateX}px, 0 , 0)`;
      requestAnimationFrame(step);
    });
  }
  
  const marquee1 = document.querySelector('.ticker');
  
  animateMarquee(marquee1, 10000);

}


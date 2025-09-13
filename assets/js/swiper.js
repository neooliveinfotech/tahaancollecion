
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    640: {
        slidesPerView: 2,
        spaceBetween: 20,
    },
    768: {
        slidesPerView: 4,
        spaceBetween: 40,
    },
    1024: {
        slidesPerView: 1,
        spaceBetween: 50,
    },
    },
});


document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header-nav');
  let lastScrollY = window.scrollY;

  window.addEventListener('scroll', function() {
    const currentScrollY = window.scrollY;

    // Determine scroll direction
    if (currentScrollY > lastScrollY) {
      // Scrolling down
      header.classList.add('scroll-down');
      header.classList.remove('scroll-up');
    } else {
      // Scrolling up
      header.classList.add('scroll-up');
      header.classList.remove('scroll-down');
    }

    // Update the last scroll position
    lastScrollY = currentScrollY;

    // Optional: Keep the header visible at the very top of the page
    if (currentScrollY === 0) {
      header.classList.remove('scroll-down');
      header.classList.add('scroll-up');
    }
  });
});
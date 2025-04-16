
  const wrapper = document.getElementById('slidesWrapper');
  const nextBtn = document.querySelector('.next');
  const prevBtn = document.querySelector('.prev');

  let index = 0;
  const slideCount = document.querySelectorAll('.slide-card').length;
  const visibleSlides = 4;

  function updateSlide() {
    const cardWidth = document.querySelector('.slide-card').offsetWidth + 20; // margin included
    wrapper.style.transform = `translateX(-${index * cardWidth}px)`;
  }

  nextBtn.addEventListener('click', () => {
    if (index < slideCount - visibleSlides) {
      index++;
    } else {
      index = 0;
    }
    updateSlide();
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
    } else {
      index = slideCount - visibleSlides;
    }
    updateSlide();
  });

  // Auto slide
  setInterval(() => {
    if (index < slideCount - visibleSlides) {
      index++;
    } else {
      index = 0;
    }
    updateSlide();
  }, 3000);




let currentIndex = 0;
  const slidesToShow = 3;
  const container = document.getElementById('carousel');
  const slide = document.querySelector('.slide');
  let slideWidth = slide.offsetWidth + 20; // 20px gap
  const totalSlides = document.querySelectorAll('.slide').length;

  function scrollSlides(direction) {
    const maxIndex = totalSlides - slidesToShow;
    currentIndex += direction;
    if (currentIndex < 0) currentIndex = 0;
    if (currentIndex > maxIndex) currentIndex = maxIndex;
    container.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }

  // Auto scroll
  setInterval(() => {
    scrollSlides(1);
    if (currentIndex >= totalSlides - slidesToShow) {
      currentIndex = -1; // so next increment becomes 0
    }
  }, 4000);

  // Fix width on window resize
  window.addEventListener('resize', () => {
    slideWidth = slide.offsetWidth + 20;
    scrollSlides(0); // re-apply transform
  });


   

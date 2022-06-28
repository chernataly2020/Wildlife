// Burger
const header = document.querySelector('.header'),
      headerNav = document.querySelector('.header-nav'),
      burgerElement = header.querySelector('.nav-burger'),
      navListElement = header.querySelector('.nav-list');

burgerElement.addEventListener('click', () => {
  navListElement.classList.toggle('show');
  headerNav.classList.toggle('show');
  burgerElement.classList.toggle('hide');
});

// Slider
const slider = document.querySelector('.slider'),
      sliderItems = slider.querySelector('.slider-items'),
      buttonNext = slider.querySelector('.slider__btn-next'),
      buttonPrev = slider.querySelector('.slider__btn-prev');

let slides = [],
    currentPosition = 0,
    currentSlide = 0,
    quantitySlides = (window.innerWidth > 1200) ? 3 : (window.innerWidth > 768) ? 2 : 1;

    console.log(currentSlide);

function createSlide(parent, content) {
  let el = document.createElement('div');
  el.className = 'slider__item';
  el.innerHTML = content;
  parent.appendChild(el);
  slides.push(el);
  return el;
}

function setPosition(position) {
  if (position > 0) {
    return false;
  } 
  if (position < -(slides.length - quantitySlides) * 100) {
    return false;
  }
  currentPosition = position;
  slides.forEach(slide => slide.style.transform = `translateX(${position}%)`);
}

createSlide(sliderItems, `
  <img class="slider__item-img" src="img/slider/item1.jpg" alt="slider-img">
  <h4 class="slider__item-title">Deer</h4>
  <h5 class="slider__item-subtitle">Naturalist investigation</h5>
`);
createSlide(sliderItems, `
  <img class="slider__item-img" src="img/slider/item2.jpg" alt="slider-img">
  <h4 class="slider__item-title">Squirrel</h4>
  <h5 class="slider__item-subtitle">Kamikaze squirrels</h5>
`);
createSlide(sliderItems, `
  <img class="slider__item-img" src="img/slider/item3.jpg" alt="slider-img">
  <h4 class="slider__item-title">Bird</h4>
  <h5 class="slider__item-subtitle">Birds Fight club</h5>
`);
createSlide(sliderItems, `
  <img class="slider__item-img" src="img/slider/item4.jpg" alt="slider-img">
  <h4 class="slider__item-title">Ladybug</h4>
  <h5 class="slider__item-subtitle">Flying ladybugs</h5>
`);
createSlide(sliderItems, `
  <img class="slider__item-img" src="img/slider/item5.jpg" alt="slider-img">
  <h4 class="slider__item-title">Chipmunk</h4>
  <h5 class="slider__item-subtitle">Chipmunks love nuts</h5>
`);
createSlide(sliderItems, `
  <img class="slider__item-img" src="img/slider/item6.jpg" alt="slider-img">
  <h4 class="slider__item-title">Wolf</h4>
  <h5 class="slider__item-subtitle">Why are wolves predatory</h5>
`);


// Create dots inner slider
let dots = [];
if (window.innerWidth <= 768) {
  buttonNext.parentNode.removeChild(buttonNext);
  buttonPrev.parentNode.removeChild(buttonPrev);

  let dotsWrapper = document.createElement('div');
  dotsWrapper.className = 'slider-dots';
  slider.appendChild(dotsWrapper);

  for (let i = 0; i < slides.length; i++) {
    const el = document.createElement('button');
    el.className = 'slider__dot';
    el.dataset.dot = i;
    el.value = i;
    if (i == 0) {
      el.classList.add('slider__dot--active');
    }
    dotsWrapper.appendChild(el);
    dots.push(el);
  }
}

// Listeners for arrows
buttonNext.addEventListener('click', () => {
  setPosition(currentPosition - 100);
});

buttonPrev.addEventListener('click', () => {
  setPosition(currentPosition + 100);
});

// Switching dots
dots.forEach(dot => {
  dot.addEventListener('click', (e) => {
    currentSlide = e.target.getAttribute('data-dot');
    
    setPosition(currentPosition - (currentSlide * 100));
    currentPosition = 0;

    dots.forEach(elem => {
      elem.classList.remove('slider__dot--active');
      console.log(currentSlide);
      dots[currentSlide].classList.add('slider__dot--active');
    });
    
  });
});

let slide = document.querySelectorAll(".slide-data");
let sliderContainer = document.querySelector(".modal-container");
let dataNumAttribute = 1;
let numberSlide = 4;
let closeButton = document.querySelector(".close-button");
let videoMain = document.querySelectorAll(".video-content");
let n = 0; //coefficient n == 1 - play video, n == 2 payse video 

const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  longSwipes: true,
  
  longSwipesRatio: 0.03,
  longSwipesMs: 0.5,
  shortSwipes: false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});

for (i of slide) {
  i.setAttribute("data-num", dataNumAttribute)
  dataNumAttribute++;
  i.addEventListener("click", showSlide);
  i.addEventListener("click", showSlider);
}

closeButton.addEventListener("click", hiddenGallery);

function showSlider() {
  sliderContainer.classList.add("modal-container_active");
}

function showSlide() {
  numberSlide = this.getAttribute("data-num");
  swiper.slideTo(numberSlide, 0 )
}

function hiddenGallery() {
  sliderContainer.classList.remove("modal-container_active");
  pauseVideo();
}

swiper.on('activeIndexChange', function () {
  pauseVideo();
  n = 0;
});

function pauseVideo() {
  for (i of videoMain) {
    i.pause();
    console.log(123)
  }
}

function playPauseVideoTouch() {
  n++;

  if (n == 1) {
    this.play();
  }

  if (n == 2) {
    console.log("222")
    pauseVideo();
    n = 0;
  }
}

for (i of videoMain) {
  i.addEventListener("touchend", playPauseVideoTouch);
}



 
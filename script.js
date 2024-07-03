// let tl = gsap.timeline();

// tl.from("#cardItem-2,#cardItem-1,#cardItem-4",{
//   right:800,
//   delay:1,
//   duration:1,
//   opacity:0
// },"anim")

// tl.from("#cardItem-3",{
//   left:900,
//   duration:1,
//   delay:1,
//   opacity:0
// },"anim")

function page2Animation() {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      // markers: true,
      start: "top 25%",
      end: "top 100%",
      scrub: 2,
      // pin:true,
      // toggleActions: "play reverse play reverse"
    },
  });

  tl.from(
    "#cardItem-2,#cardItem-1,#cardItem-4,#pgButton-3",
    {
      transform: "translateX(-250%)",
      duration: 1,
      opacity: 0,
    },
    "anim"
  );

  tl.from(
    "#cardItem-3",
    {
      transform: "translateX(250%)",
      duration: 1,
      opacity: 0,
    },
    "anim"
  );
}

page2Animation();

function swiperForPg3() {
  var swiper = new Swiper(".mySwiper-3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 10,
      stretch: -10,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    initialSlide: 1,
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
  });

  gsap.from(".mySwiper-3", {
    opacity: 0,
    duration: 1,
    scale: 0.5,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "body",
      // markers: true,
      start: "top 20%",
      end: "top 100%",
      scrub: 2,
      // pin:true,
      // toggleActions: "play reverse play reverse"
    },
  });
}

swiperForPg3();

var swiper = new Swiper(".mySwiper-5", {
  slidesPerView: 2.7,
  spaceBetween: 30,
  grabCursor: true,
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  breakpoints: {
    // when window width is >= 650px
  
    320: {
      slidesPerView: 1.1,
      spaceBetween: 20,
    },
    550: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 1.4,
      spaceBetween: 20,
    },
    700: {
      slidesPerView: 1.55,
      spaceBetween: 20,
    },
    750: {
      slidesPerView: 1.6,
      spaceBetween: 20,
    },
    800: {
      slidesPerView: 1.66,
      spaceBetween: 20,
    },
    
    900: {
      slidesPerView: 1.9,
      spaceBetween: 20,
    },
    1000: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 2.5,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 2.7,
      spaceBetween: 20,
    },
    // 450: {
    //   slidesPerView: 1.2,
    //   spaceBetween: 20,
    // },
    // 500: {
    //   slidesPerView: 1.2,
    //   spaceBetween: 20,
    // },
    // 600: {
    //   slidesPerView: 1.2,
    //   spaceBetween: 20,
    // },
    // 650: {
    //   slidesPerView: 1.5,
    //   spaceBetween: 20,
    // },
    // 700: {
    //   slidesPerView: 1.6,
    //   spaceBetween: 20,
    // },
    // 768: {
    //   slidesPerView: 1.7,
    //   spaceBetween: 20,
    // },
    // 800: {
    //   slidesPerView: 1.3,
    //   spaceBetween: 20,
    // },
    // 850: {
    //   slidesPerView: 1.9,
    //   spaceBetween: 20,
    // },
    // 900: {
    //   slidesPerView: 2,
    //   spaceBetween: 20,
    // },
    // 950: {
    //   slidesPerView: 2.2,
    //   spaceBetween: 20,
    // },
    // 1000: {
    //   slidesPerView: 2.4,
    //   spaceBetween: 20,
    // },
    // 1050:{
    //   slidesPerView: 2.5,
    //   spaceBetween: 20,
    // },
    // 1200:{
    //   slidesPerView: 2.7,
    //   spaceBetween: 20,
    // }
    // when window width is >= 720px
    // 720: {
    //   slidesPerView: 3,
    //   spaceBetween: 30,
    // },
    // when window width is >= 920px
    // 920: {
    //   slidesPerView: 4,
    //   spaceBetween: 40,
    // }
  }
});

gsap.from(".mySwiper-5", {
  opacity: 0,
  duration: 2,
  transform:"translateX(250%)",
  scrollTrigger: {
    trigger: "#page5",
    scroller: "body",
    // markers: true,
    start: "top 20%",
    end: "top 100%",
    scrub: 2,
    // pin:true,
    // toggleActions: "play reverse play reverse"
  },
});











// 420
// 450
// 500
// 550
// 650
// 768
// 992
// 1200
// 1400









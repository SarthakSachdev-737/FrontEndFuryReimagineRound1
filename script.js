
function loaderAnimation() {
  var tl = gsap.timeline();
  var video = document.getElementById("loaderVideo");
  video.pause();


  tl.to("#logoContainer", {
    duration: 1,
    delay: 0.7,
    y: "-100%",
    opacity: 0,
    ease: "back.in(1.7)",
    onComplete: function () {
      document.getElementById("logoContainer").style.visibility = "hidden";
    },
  });

  tl.from("#loaderVideo ", {
    delay: -0.35,
    onComplete: function () {
      var video = document.getElementById("loaderVideo");
      video.play();
    },
  });

  tl.from("#loaderVideo ", {
    opacity: 0,
  });

  video.onended = function () {
    gsap.to("#loader", {
      duration: 1,
      y: "-100%", // Move loader up
      opacity: 0,
      onComplete: function () {
        // Hide the loader and show the main content
        document.getElementById("loader").style.display = "none";
        document.getElementById("main").style.display = "block";

        // Animate the main content
        gsap.from("#main", {
          duration: 0.5,
          // y: "100%",
          opacity: 0,
        });

        page1Animation();
        page2Animation();
        swiperForPg3();
        page4Animation();
        swiperForPg5();
        page6Animation();

      },
    });
  };
}

loaderAnimation();

function page1Animation() {
  var tl = gsap.timeline();
  console.log("animation started");

  tl.from("#nav-home", {
    opacity: 0,
    duration: 0.1,
    y: -50,
  });
  tl.from("#logo-home", {
    opacity: 0,
    duration: 1,
    y: -50,
  });
  gsap.from("#info-home .ul-home li", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
  gsap.from("#support-home .ul-home li", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
  gsap.from("#icons-home .ul-home li", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
  tl.from("#hero-home img ", {
    x: -1000,
    duration: 1,
    opacity: 0,
    ease: "power2.out",
  });

  tl.from("#text-home", {
    opacity: 0,
    y: -30,
    duration: 0.8,
  });
  tl.from("#p-home", {
    opacity: 0,
    y: 30,
    duration: 0.5,
  });
  tl.from("#button-home", {
    opacity: 0,
    y: 30,
    duration: 0.5,
  });
}


function page2Animation() {
  console.log("animation started");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#page2",
      scroller: "body",
      // markers: true,
      start: "top 30%",
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


function swiperForPg3() {
  console.log("animation started");
  var swiper = new Swiper(".mySwiper-3", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 15,
      stretch: 20,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
    initialSlide: 2,
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
      start: "top 35%",
      end: "top 100%",
      scrub: 2,
      // pin:true,
      // toggleActions: "play reverse play reverse"
    },
  });
}


function page4Animation() {
  console.log("animation started");
  var tl = gsap.timeline({
    scrollTrigger: {
    trigger: ".shopnow-container",
    scroller:"body",
    start: "top 35%",
    end: "top 100%",
    scrub: 2,
    // markers:true
  }});

  // tl.from(".header", {
  //   delay: 1,
  //   duration: 1.5,
  //   y: 20,
  //   opacity: 0,
  //   scrollTrigger: {
  //     trigger: ".header",
  //     start: "top center",
  //     end: "+=100",
  //     scrub: true,
  //   },
  // });

  tl.from(".left-top", {
    delay: 1,
    duration: 1.5,
    x: -100,
    opacity: 0,
  },"anim");

  tl.from(".shopnow-right", {
    delay: 1,
    duration: 1.5,
    x: 100,
    opacity: 0,
  },"anim");

  tl.from(".left-bottom", {
    delay: 1,
    duration: 1.5,
    x: -100,
    opacity: 0,
  },"anim");
}


function swiperForPg5() {
  console.log("animation started");
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
    },
  });

  gsap.from(".mySwiper-5", {
    opacity: 0,
    duration: 2,
    transform: "translateX(250%)",
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
}


function page6Animation() {
  console.log("animation started");

  var tl = gsap.timeline();

  tl.from(".learn-container", {
    duration: 2,
    opacity: 0,
    y: 20,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".learn-container",
      scroller: "body",
      start: "top 50%",
      end: "top 100%",
      scrub: 2,
      
    },
  });
}



var timeline = gsap.timeline();

timeline.from("#nav-home", {
  opacity: 0,
  duration: 0.1,
  y: -50,
});
timeline.from("#logo-home", {
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
timeline.from("#hero-home img ", {
  x: -1000,
  duration: 1,
  opacity: 0,
  ease: "power3.out",
});

timeline.from("#text-home", {
  opacity: 0,
  y: -30,
  duration: 0.8,
});
timeline.from("#p-home", {
  opacity: 0,
  y: 30,
  duration: 0.5,
});
timeline.from("#button-home", {
  opacity: 0,
  y: 30,
  duration: 0.5,
});

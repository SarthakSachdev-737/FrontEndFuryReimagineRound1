var timeline = gsap.timeline();

timeline.from("#nav", {
  opacity: 0,
  duration: 0.1,
  y: -50,
});
timeline.from("#logo", {
  opacity: 0,
  duration: 1,
  y: -50,
});
gsap.from("#info ul li", {
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
gsap.from("#support ul li", {
  opacity: 0,
  duration: 1,
  stagger: 0.5,
});
gsap.from("#icons ul li", {
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
timeline.from("#hero img ", {
  x: -1000,
  duration: 1,
  opacity: 0,
  ease: "power2.out",
});

timeline.from("#text", {
  opacity: 0,
  y: -30,
  duration: 0.8,
});
timeline.from("p", {
  opacity: 0,
  y: 30,
  duration: 0.5,
});
timeline.from("#button", {
  opacity: 0,
  y: 30,
  duration: 0.5,
});

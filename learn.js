
var timeline = gsap.timeline();

timeline.from('.learn',{
    delay:5,
    duration: 2,
    opacity: 0,
    y: 20,
    ease: "power2.out",
    scrollTrigger:{
        trigger: ".learn",
        scroller:'body',
        start: "top center",
        end: "bottom center",
        scrub: true,
    }
})


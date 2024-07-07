var timeline = gsap.timeline();

timeline.from('.header',{
    delay:1,
    duration: 1.5,
    y: 20,
    opacity: 0,
    scrollTrigger:{
        trigger: ".header",
        start: "top center",
        end: "+=100",
        scrub: true,
    }
})

timeline.from(".left-top",{
    delay:1,
    duration: 1.5,
    x: -100,
    opacity: 0,
    scrollTrigger:{
        trigger: ".header",
        start: "top 10%",
        end: "+=100",
        scrub: true,
    }
})

timeline.from(".shopnow-right",{
    delay:1,
    duration: 1.5,
    x: 100,
    opacity: 0,

    scrollTrigger:{
        trigger: ".header",
        start: "top 10%",
        end: "+=100",
        scrub: true,
    }
})
timeline.from('.left-bottom',{
    delay:1,
    duration: 1.5,
    x: -100,
    opacity: 0,
    scrollTrigger:{
        trigger: ".header",
        start: "bottom 1%",
        end: "+=100",
        scrub: true,
    }
})


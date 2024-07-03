
var timeline = gsap.timeline();

timeline.from('#image-box-learn',{
    opacity:0,
    y:50,
    duration:1,
    ease: "power1.out",
    delay: 0.5,
})
timeline.from('#text-learn h1',{
    opacity:0,
    y:50,
    duration:1,
    ease: "power1.out",
    
})

timeline.from('#text-learn h2',{
    opacity:0,
    y:50,
    duration:0.8,
    ease: "power1.out",

})

timeline.from('#text-learn #button-learn',{
    opacity:0,
    y:50,
    duration:0.5,
    ease: "power1.out",

})
timeline.from('#footer-learn',{
    opacity:0,
    y:50,
    duration:0.5,
    ease: "power1.out", 
})
timeline.from('#hr2-learn',{
    opacity:0,
    y:50,
    duration:0.5,
    ease: "power1.out",

})
timeline.from('#copyright-learn',{
    opacity:0,
    y:50,
    duration:0.5,
})

var timeline = gsap.timeline();

timeline.from('#image-box',{
    opacity:0,
    y:50,
    duration:1,
    ease: "power1.out",
    delay: 0.5,
})
timeline.from('#text h1',{
    opacity:0,
    y:50,
    duration:1,
    ease: "power1.out",
    
})

timeline.from('#text h2',{
    opacity:0,
    y:50,
    duration:0.8,
    ease: "power1.out",

})

timeline.from('#text #button',{
    opacity:0,
    y:50,
    duration:0.5,
    ease: "power1.out",

})
timeline.from('footer',{
    opacity:0,
    y:50,
    duration:0.5,
    ease: "power1.out", 
})
timeline.from('hr',{
    opacity:0,
    y:50,
    duration:0.5,
    ease: "power1.out",

})
timeline.from('#copyright',{
    opacity:0,
    y:50,
    duration:0.5,
})
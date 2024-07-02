
var timeline = gsap.timeline();

timeline.from('.header',{
   opacity:0,
   y:-50,
   duration:1.5,
})

gsap.from('.content1',{
    opacity:0,
    x:-50,
    duration:1,
    delay:1.7
})

// timeline.from('#first img',{
//     opacity:0,
//     x:-50,
//     duration:1,
//     scrollTrigger:{
//         trigger:'#first img',
//         scoller:'body',
//         start:'top center',
//         pin:true,
//         scrub:2
//     }
// })

timeline.from('#firstText',{
    opacity:0,
    y:-10,
    delay:1,
    scrollTrigger:{
        trigger:'#firstText',
        scoller:'body',
        start:'top center',
        pin:true,
        scrub:2
    }
})
timeline.from('#first #button',{
    opacity:0,
    y:-10,
    delay:0.05,
    scrollTrigger:{
        trigger:'#button',
        scoller:'body',
        start:'top center',
        pin:true,
        scrub:2
    }
})
timeline.from('#secondText',{
    opacity:0,
    y:-10,
    delay:0.05,
    scrollTrigger:{
        trigger:'#secondText',
        scoller:'body',
        start:'top center',
        pin:true,
        scrub:2
    }
})
timeline.from('#second #button',{
    opacity:0,
    y:-10,
    scrollTrigger:{
        trigger:'#button',
        scoller:'body',
        start:'top center',
        pin:true,
        scrub:2
    }
})
gsap.from('.content2',{
    opacity:0,
    y:50,
    duration:1,
    delay:1.7
})

gsap.from('.two',{
    opacity:0,
    x:50,
    duration:1,
    delay:1.7
})



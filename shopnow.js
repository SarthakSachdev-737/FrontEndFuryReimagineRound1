
var timeline = gsap.timeline();

timeline.from('.header-shopnow',{
   opacity:0,
   y:-50,
   duration:1.5,
})

gsap.from('.content1-shopnow',{
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

timeline.from('#firstText-shopnow',{
    opacity:0,
    y:-10,
    delay:1,
    scrollTrigger:{
        trigger:'#firstText-shopnow',
        scoller:'body',
        start:'top center',
        pin:true,
        scrub:2
    }
})
timeline.from('#first-shopnow #button-shopnow',{
    opacity:0,
    y:-10,
    delay:0.05,
    scrollTrigger:{
        trigger:'#button-shopnow',
        scoller:'body',
        start:'top center',
        pin:true,
        scrub:2
    }
})
timeline.from('#secondText-shopnow',{
    opacity:0,
    y:-10,
    delay:0.05,
    scrollTrigger:{
        trigger:'#secondText-shopnow',
        scoller:'body',
        start:'top center',
        pin:true,
        scrub:2
    }
})
timeline.from('#second-shopnow #button-shopnow',{
    opacity:0,
    y:-10,
    scrollTrigger:{
        trigger:'#button-shopnow',
        scoller:'body',
        start:'top center',
        pin:true,
        scrub:2
    }
})
gsap.from('.content2-shopnow',{
    opacity:0,
    y:50,
    duration:1,
    delay:1.7
})

gsap.from('.two-shopnow',{
    opacity:0,
    x:50,
    duration:1,
    delay:1.7
})



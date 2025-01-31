
// // const scroll = new LocomotiveScroll({
// //     el: document.querySelector('#main'),
// //     smooth: true
// // });


// // gsap.registerPlugin(ScrollTrigger);

// // // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// // const locoScroll = new LocomotiveScroll({
// //   el: document.querySelector("#main"),
// //   smooth: true
// // });
// // // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// // locoScroll.on("scroll", ScrollTrigger.update);

// // // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
// // ScrollTrigger.scrollerProxy("#main", {
// //   scrollTop(value) {
// //     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
// //   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
// //   getBoundingClientRect() {
// //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
// //   },
// //   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
// //   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// // });




// // // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// // ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// // // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
// // ScrollTrigger.refresh();


// var tl =  gsap.timeline();
// tl.to(".page1 h1",{
//     transform:"translateX(-200%)",
//     // stragger:3,
//     scrollTrigger:{
//         trigger:".page2",
//         scroller:"body",
//         // pin:".page1",
//         markers:true,
//         start:"top 98%",
//         end:"top -110%",
//         scrub:4,

//     }
  
// })
// .to(".page2 h1 ",{
//     opacity: 2,
    

//      scrollTrigger:{
//         trigger:".page2 h1 ",
//         scroller:"body",
//         // markers:true,
//         start:"top 40%",
//         end:"top 0%",
//         scrub:5,   
//         delay:2,
//         // ease: "power2.inOut" 
//         ease: "power1.out",

//     }

// })
// .to(".page3 h1 ",{
//     opacity: 2,
    

//      scrollTrigger:{
//         trigger:".page3 h1 ",
//         scroller:"body",
//         // markers:true,
//         start:"top 40%",
//         end:"top 0%",
//         scrub:5,   
//         delay:2,
//         // ease: "power2.inOut" 
//         ease: "power1.out",

//     }

// })
// .to(".page5 h1 ",{
//     // opacity: 2,
    
//     // pin:true,
//      scrollTrigger:{
//         trigger:".page5 h1 ",
//         scroller:"body",
//         // markers:true,
//         pin:true,
//         start:"top 10%",
//         end:"top -230%",
//         scrub:2,   
//         delay:8,
//         // ease: "power2.inOut" 
//         ease: "power1.out",

//     }

// })


// var elems = document.querySelectorAll(".elems");

// elems.forEach(function (elem) {
//   var overlay = elem.querySelector(".overlay");

//   elem.addEventListener("mouseenter", function () {
//     overlay.style.opacity = 1;
//   });

//   elem.addEventListener("mouseleave", function () {
//     overlay.style.opacity = 0;
//   });
// });









var tl = gsap.timeline();
tl.to(".page1 h1", {
  transform: "translateX(-200%)",
  stagger: 3, // Corrected typo
  scrollTrigger: {
    trigger: ".page2 ",
    scroller: "body",
    // pin:true,
    // markers: true,
    start: "top 98%",
    end: "top -110%",
    scrub: 4, // Corrected missing comma
  },
})
.to(".page2 h1", {
  opacity: 2,
  scrollTrigger: {
    trigger: ".page2 h1",
    scroller: "body",
    start: "top 40%",
    end: "top 0%",
    scrub: 5,
    delay: 2,
    ease: "power1.out",
  },
})
.to(".page3 h1", {
  opacity: 2,
  scrollTrigger: {
    trigger: ".page3 h1",
    scroller: "body",
    start: "top 40%",
    end: "top 0%",
    scrub: 5,
    delay: 2,
    ease: "power1.out",
  },
})
.to(".page5 h1", {
  scrollTrigger: {
    trigger: ".page5 h1",
    scroller: "body",
    pin: true,
    start: "top 10%",
    end: "top -230%",
    scrub: 2,
    delay: 8,
    ease: "power1.out",
  },
});

var elems = document.querySelectorAll(".elems");

elems.forEach(function (elem) {
  var overlay = elem.querySelector(".overlay");

  elem.addEventListener("mouseenter", function () {
    overlay.style.opacity = 1;
  });

  elem.addEventListener("mouseleave", function () {
    overlay.style.opacity = 0;
  });
});


Shery.mouseFollower({

  // ease: "cubic-bezier(0.23, 1, 0.320, 1)",


});
Shery.textAnimate(".page2 h1" , {
  //Parameters are optional.
  style: 1,
  y: 1,
  // delay: 0.1,
  duration: 0.1,
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  multiplier: 0.1,
});

Shery.imageEffect(".page11 .img",{
  style:6,
  // debug:true,
  // gooey:true,
  // debug: true, // Debug Panel
  config: 
    {"noiseDetail":{"value":3.05,"range":[0,100]},"distortionAmount":{"value":5.95,"range":[0,10]},"scale":{"value":35.88,"range":[0,100]},"speed":{"value":1,"range":[0,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.2561811240851988},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":false},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.31,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":83}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.55,"range":[0,2]},"noise_scale":{"value":22.9,"range":[0,100]}}
  
})
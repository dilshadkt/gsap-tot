// // gsap.to("#box", {
// //   x: 1000,
// //   duration: 2,
// //   delay: 0.25,
// //   rotation: 360,
// //   repeat: -1,
// //   yoyo: true,
// // });

// var tl = gsap.timeline();
// tl.from("h2", {
//   opacity: 0,
//   y: -30,
//   duration: 1,
//   delay: 0.25,
// });

// tl.from("li", {
//   y: -50,
//   opacity: 0,
//   stagger: 0.3,
//   duration: 1,
// });
// tl.from("h1", {
//   y: 100,
//   opacity: 0,
//   scale: 2,
// });

// gsap.from("#page1 #box", {
//   opacity: 0,
//   rotate: 360,
//   delay: 0.25,
//   duration: 1,
// });
// gsap.from("h1", {
//   x: 300,
//   duration: 1,
//   scrollTrigger: {
//     trigger: "h1",
//     scroller: "body",
//     markers: true,
//     start: "top 300px",
//   },
// });

// gsap.from("#page3 #box", {
//   scale: 0,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page3 #box",
//     scroller: "body",
//     markers: true,
//     start: "top 70%",
//     end: "top 30%",
//     scrub: 2,
//     pin: true,
//   },
// });

gsap.to("#page2 h1", {
  transform: "translate(-230%)",

  yoy: true,
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    markers: true,
    start: "top 0%",
    end: "end -100%",
    scrub: 2,
    pin: true,
  },
});

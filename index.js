// gsap.to("#box", {
//   x: 1000,
//   duration: 2,
//   delay: 0.25,
//   rotation: 360,
//   repeat: -1,
//   yoyo: true,
// });

var tl = gsap.timeline();
tl.from("h2", {
  opacity: 0,
  y: -30,
  duration: 1,
  delay: 0.25,
});

tl.from("li", {
  y: -50,
  opacity: 0,
  stagger: 0.3,
  duration: 1,
});
tl.from("h1", {
  y: 100,
  opacity: 0,
  scale: 2,
});

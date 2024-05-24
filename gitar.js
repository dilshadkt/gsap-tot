let path = `M 0 100 Q 600 100 1200 100`;
let final = `M 0 100 Q 600 100 1200 100`;

const string = document.querySelector(".gitar");

string.addEventListener("mousemove", (det) => {
  path = `M 0 100 Q ${det.x} ${det.y} 1200 100`;

  gsap.to("svg path", {
    attr: { d: path },
    duration: 0.3,
    ease: "power#.out",
  });
});

string.addEventListener("mouseleave", () => {
  gsap.to("svg path", {
    attr: { d: final },
    duration: 1.5,
    ease: "elastic.out(1,0.2)",
  });
});

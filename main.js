var tl = gsap.timeline();

tl.from(".greendot",{duration: 1.3, opacity: 0, y: 400, delay: 0.3});
tl.from(".orangedot", {duration: 1.3, opacity: 0, y: 400, stagger: 0.7}, "-=0.5");

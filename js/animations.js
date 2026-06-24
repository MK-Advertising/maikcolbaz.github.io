gsap.registerPlugin(ScrollTrigger);

gsap.to('.reveal', {
    opacity: 1,
    y: 0,
    duration: 1,
    stagger: 0.15,
    ease: 'power3.out'
});

gsap.from('.hero-video video', {
    scale: 1.08,
    duration: 2,
    ease: 'power2.out'
});

document.addEventListener('DOMContentLoaded', () => {
    // Animate header
    gsap.from('.navbar', { duration: 1, y: '-100%', ease: 'bounce' });

    // Animate hero section
    gsap.from('.hero h1', { duration: 1, opacity: 0, y: 50, delay: 0.5 });
    gsap.from('.hero h2', { duration: 1, opacity: 0, y: 50, delay: 0.7 });
    gsap.from('.hero p', { duration: 1, opacity: 0, y: 50, delay: 0.9 });

    // Animate project cards
    gsap.from('.project-card', {
        duration: 0.8,
        opacity: 0,
        y: 50,
        stagger: 0.2,
        scrollTrigger: {
            trigger: '#projects',
            start: 'top 80%',
        },
    });

    // Animate skills
    gsap.from('.skills-list li', {
        duration: 0.5,
        opacity: 0,
        y: 20,
        stagger: 0.1,
        scrollTrigger: {
            trigger: '#skills',
            start: 'top 80%',
        },
    });

    // Animate contact form
    gsap.from('#contact form', {
        duration: 1,
        opacity: 0,
        y: 50,
        scrollTrigger: {
            trigger: '#contact',
            start: 'top 80%',
        },
    });
});
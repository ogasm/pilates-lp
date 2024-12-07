// animation.js
const fadeInElements = document.querySelectorAll('.fade-in');

const handleScroll = () => {
    fadeInElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll();
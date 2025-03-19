document.addEventListener("DOMContentLoaded", () => {
    const page = document.getElementById('page');
    const loading = document.getElementById('loading');
    const car = document.querySelector('model-viewer');
  
    // Fade out loading screen once model is loaded
    car.addEventListener('load', () => {
      gsap.to(loading, {
        duration: 1,
        ease: Power4.easeOut,
        autoAlpha: 0,
      });
    });
  });
  
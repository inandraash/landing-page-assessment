document.addEventListener('DOMContentLoaded', () => {

    const animatedElements = document.querySelectorAll('.fade-in-up');
    
    if (animatedElements.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15 
        });
        
        animatedElements.forEach(element => {
            observer.observe(element);
        });
    }
});
// JavaScript
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1 // Procent widoczności elementu, przy którym zostanie dodana klasa
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

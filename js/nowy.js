document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.animate-on-scroll');
  
    elements.forEach(el => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            el.classList.add('show');
            // Przywrócenie interakcji po animacji
            setTimeout(() => {
              el.style.pointerEvents = 'auto';
            }, 300); // Czas animacji
          }
        });
      });
      observer.observe(el);
    });
  });
  


  
  // Pobieramy przycisk
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  // Pokazujemy lub ukrywamy przycisk w zależności od scrolla
  window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  };

  // Po kliknięciu płynnie przewija stronę na górę
  scrollToTopBtn.addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

function scrollToContent() {
    // Pobierz odległość od góry sekcji
    const targetOffsetTop = document.querySelector('section').offsetTop;

    // Dodaj dodatkowe przesunięcie w dół, np. 50px
    const additionalOffset = 850;

    window.scrollTo({
        top: targetOffsetTop + additionalOffset,
        behavior: 'smooth'
    });
}

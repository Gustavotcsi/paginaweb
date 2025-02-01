let currentIndex = 0; // Índice da imagem atual
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0; // Volta para a primeira imagem
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Vai para a última imagem
    }
    
    // Atualiza a posição dos slides
    const offset = -currentIndex * 100; // Cada slide ocupa 100% da largura
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

// Botões de navegação
prevButton.addEventListener('click', () => {
    currentIndex--;
    showSlide(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex++;
    showSlide(currentIndex);
});

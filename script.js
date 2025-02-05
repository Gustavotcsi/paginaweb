let currentIndex = 0; // Índice da imagem atual
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const slideContainer = document.querySelector('.slides');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

function showSlide(index) {
    if (index >= totalSlides) {
        currentIndex = 0; // Volta para a primeira imagem
    } else if (index < 0) {
        currentIndex = totalSlides - 1; // Vai para a última imagem
    } else {
        currentIndex = index;
    }
    
    // Atualiza a posição dos slides
    const offset = -currentIndex * 100; // Cada slide ocupa 100% da largura
    slideContainer.style.transform = `translateX(${offset}%)`;
}

// Botões de navegação
prevButton.addEventListener('click', () => {
    showSlide(currentIndex - 1);
});

nextButton.addEventListener('click', () => {
    showSlide(currentIndex + 1);
});

// Auto play do carrossel
setInterval(() => {
    showSlide(currentIndex + 1);
}, 5000); // Troca de slide a cada 5 segundos

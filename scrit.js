var currentPage = 'page-about';

function showPage(pageId) {
  var pages = document.getElementsByClassName('page');

  for (var i = 0; i < pages.length; i++) {
    pages[i].classList.remove('show-page');
  }

  document.getElementById(pageId).classList.add('show-page');
  currentPage = pageId;
}

document.addEventListener("DOMContentLoaded", function() {
  showPage(currentPage);
});
// script.js

// Função para mostrar a página selecionada
function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
      page.classList.remove('show-page');
    });
  
    const selectedPage = document.getElementById(pageId);
    selectedPage.classList.add('show-page');
  }
  
  // Função para exibir o polegar para cima ao clicar em "Gostei"
  function showThumbUp() {
    const thumbUp = document.createElement('span');
    thumbUp.innerHTML = '👍';
    thumbUp.classList.add('thumb-up');
  
    const likeButton = document.getElementById('like-button');
    likeButton.appendChild(thumbUp);
  
    setTimeout(() => {
      thumbUp.remove();
    }, 2000);
  }
  /// script.js

// Função para voltar para a página anterior
function goBack() {
    window.location.href = document.referrer;
  }
  // script.js

const sections = document.querySelectorAll('.page');

function fadeInSection() {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (sectionTop < windowHeight) {
      section.classList.add('show');
    }
  });
}

window.addEventListener('scroll', fadeInSection);
window.addEventListener('load', fadeInSection);
// script.js

const numParticles = 100; // Número de partículas
const particleContainer = document.querySelector('.background .particles');

function createParticle() {
  const particle = document.createElement('div');
  particle.classList.add('particle');
  particle.style.left = Math.random() * 100 + '%';
  particle.style.top = Math.random() * 100 + '%';
  particle.style.animationDuration = (Math.random() * 2 + 1) + 's';
  particle.style.animationDelay = (Math.random() * 2) + 's';

  particleContainer.appendChild(particle);

  // Remover partícula após a animação
  particle.addEventListener('animationend', () => {
    particle.remove();
  });
}

function generateParticles() {
  for (let i = 0; i < numParticles; i++) {
    createParticle();
  }
}

generateParticles();
function showNextPage() {
    const currentPage = document.querySelector('.show-page'); // Obtém a página atualmente visível
    const nextPage = currentPage.nextElementSibling; // Obtém a próxima página
  
    if (nextPage) {
      currentPage.classList.remove('show-page'); // Remove a classe "show-page" da página atual
      nextPage.classList.add('show-page'); // Adiciona a classe "show-page" à próxima página
    }
  }
  function goForward() {
    const pages = document.querySelectorAll('.page'); // Obtém todas as páginas
    const currentPage = document.querySelector('.show-page'); // Obtém a página atualmente visível
  
    let currentPageIndex = Array.from(pages).indexOf(currentPage); // Obtém o índice da página atual
  
    let nextPageIndex = currentPageIndex + 1; // Calcula o índice da próxima página
  
    if (nextPageIndex < pages.length) {
      currentPage.classList.remove('show-page'); // Remove a classe "show-page" da página atual
      pages[nextPageIndex].classList.add('show-page'); // Adiciona a classe "show-page" à próxima página
    }
}
// JavaScript para alternar as imagens de fundo com animações
let isBackground1 = true;

function toggleBackground() {
  const body = document.querySelector("body");
  body.classList.remove("animate-bg");
  void body.offsetWidth; // Forçar o reflow (repintura) para reiniciar a animação
  body.classList.add("animate-bg");
  isBackground1 = !isBackground1;

  const nextBackground = isBackground1 ? "background1.jpg" : "background2.jpg";
  setTimeout(() => {
    body.style.backgroundImage = `url("${nextBackground}")`;
  }, 1000); // Tempo correspondente à duração da transição no CSS (1 segundo)
}

// Chamar a função toggleBackground a cada 5 segundos
setInterval(toggleBackground, 5000); // Alterna a imagem a cada 5 segundos

  
  
  
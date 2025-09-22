document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling para links de âncora
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  // Funcionalidade do FAQ (Acordeão)
  const faqItems = document.querySelectorAll(".faq-item h3");

  faqItems.forEach((item) => {
    item.addEventListener("click", () => {
      const parent = item.parentElement;
      parent.classList.toggle("active");

      // Fechar outros itens se necessário (opcional)
      // faqItems.forEach(otherItem => {
      //     const otherParent = otherItem.parentElement;
      //     if (otherParent !== parent && otherParent.classList.contains('active')) {
      //         otherParent.classList.remove('active');
      //     }
      // });
    });
  });

  // Adicione mais funcionalidades JavaScript aqui, se necessário.
  // Ex: Animações ao rolar, validação de formulário (se houver), etc.
  //botoes somem na secao buy
  // selecionando botão "Comprar Agora"
  const botaoComprar = document.getElementById("btn-comprar-fixo");

  // Selecionando botão do WhatsApp
  const botaoWhats = document.getElementById("btn-whatsapp-fixo");

  // Detectar quando a última seção está visível
  const ultimaSecao = document.getElementById("buy");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Oculta os botões
          botaoComprar.style.opacity = 0;
          botaoWhats.style.opacity = 0;
        } else {
          // Mostra os botões
          botaoComprar.style.opacity = 1;
          botaoWhats.style.opacity = 1;
        }
      });
    },
    {
      threshold: 0.5, // ativa quando 50% da seção estiver visível
    }
  );

  observer.observe(ultimaSecao);

  //rolagem mais devagar na trasicao do botao comprar
  document
    .querySelector("#btn-comprar-fixo")
    .addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector("#buy");
      const targetPosition =
        target.getBoundingClientRect().top + window.scrollY;
      const startPosition = window.scrollY;
      const distance = targetPosition - startPosition;
      const duration = 4000; // duração em milissegundos (1000 = 1 segundo)
      let start = null;

      function animationScroll(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const ease = easeInOutQuad(progress, startPosition, distance, duration);
        window.scrollTo(0, ease);
        if (progress < duration) {
          requestAnimationFrame(animationScroll);
        }
      }

      // Função de easing (animação suave)
      function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animationScroll);
    });
});

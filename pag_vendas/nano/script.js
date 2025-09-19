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
});

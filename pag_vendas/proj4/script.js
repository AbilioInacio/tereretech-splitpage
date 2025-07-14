document.addEventListener("DOMContentLoaded", () => {
  // ======================================================
  // DADOS DOS PRODUTOS
  // Centralize todas as informações aqui.
  // Adicione ou remova garrafas facilmente.
  // ======================================================
  const productData = {
    "garrafa-stanley": {
      name: "Garrafa Térmica Clássica",
      image: "./img/stanley/stanley-delado-site.jpg",
      buyLink: "https://link.mercadopago.com.br/garrafa1",
      content: {
        intro: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Tereré+Tech+em+Ação",
          },
          {
            type: "video",
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/70b62c/FFFFFF?text=Gelado+Sempre",
          },
        ],
        tech: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Bomba+Inteligente",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Fluxo+Contínuo",
          },
        ],
        install: [
          {
            type: "video",
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Encaixe+Perfeito",
          },
        ],
        premium: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Aço+Inox",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Detalhes+Premium",
          },
        ],
        items: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Kit+Completo",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Acessórios+Extras",
          },
        ],
        final: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/70b62c/FFFFFF?text=Compre+Já!",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Sua+Melhor+Escolha",
          },
        ],
      },
    },
    "garrafa-inox": {
      name: "Garrafa Inox Moderna",
      image: "https://via.placeholder.com/250x250/70b62c/FFFFFF?text=Inox",
      buyLink: "https://link.mercadopago.com.br/garrafa2",
      content: {
        intro: [
          // Usando o mesmo intro para simplificar, mas você pode customizar
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Tereré+Tech+em+Ação",
          },
          {
            type: "video",
            src: "https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/70b62c/FFFFFF?text=Gelado+Sempre",
          },
        ],
        tech: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/70b62c/FFFFFF?text=Bomba+para+Inox",
          },
        ],
        install: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/70b62c/FFFFFF?text=Vedação+Segura",
          },
        ],
        premium: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/70b62c/FFFFFF?text=Design+Elegante",
          },
        ],
        items: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/70b62c/FFFFFF?text=Kit+Inox",
          },
        ],
        final: [
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/70b62c/FFFFFF?text=Não+Perca!",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/800x450/3b72b8/FFFFFF?text=Peça+o+Seu",
          },
        ],
      },
    },
    // Adicione mais 4 modelos de garrafa aqui, seguindo a mesma estrutura
    "garrafa-plastico": {
      name: "Garrafa Plástica",
      image: "https://via.placeholder.com/250x250/cccccc/333333?text=Plástico",
      buyLink: "#",
      content: productData["garrafa-termica"].content,
    },
    "garrafa-couro": {
      name: "Garrafa de Couro",
      image: "https://via.placeholder.com/250x250/8B4513/FFFFFF?text=Couro",
      buyLink: "#",
      content: productData["garrafa-termica"].content,
    },
    "garrafa-sport": {
      name: "Garrafa Sport",
      image: "https://via.placeholder.com/250x250/FF4500/FFFFFF?text=Sport",
      buyLink: "#",
      content: productData["garrafa-inox"].content,
    },
    "garrafa-kids": {
      name: "Garrafa Kids",
      image: "https://via.placeholder.com/250x250/FFC0CB/333333?text=Kids",
      buyLink: "#",
      content: productData["garrafa-inox"].content,
    },
  };
  const whatsappNumber = "5511999999999"; // Substitua pelo seu número com código do país
  const whatsappMessage =
    "Olá! Tenho interesse no Tereré Tech e gostaria de mais informações.";
  const whatsappLink = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(
    whatsappMessage
  )}`;

  // ======================================================
  // INICIALIZAÇÃO DA PÁGINA
  // ======================================================

  const garrafaCarouselTrack = document.querySelector(
    "#garrafa-carousel .carousel-track"
  );
  for (const id in productData) {
    const product = productData[id];
    const item = document.createElement("div");
    item.className = "carousel-item";
    item.dataset.id = id;
    item.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <p>${product.name}</p>
        `;
    garrafaCarouselTrack.appendChild(item);
  }

  // Seleciona a primeira garrafa por padrão
  const firstProductId = Object.keys(productData)[0];
  updatePageContent(firstProductId);
  document
    .querySelector(`.carousel-item[data-id="${firstProductId}"]`)
    .classList.add("active");

  // ======================================================
  // LÓGICA DE ATUALIZAÇÃO DE CONTEÚDO
  // ======================================================

  function updatePageContent(productId) {
    const data = productData[productId];
    if (!data) return;

    // Atualizar botões fixos e links
    document.getElementById("buy-now-fixed").href = data.buyLink;
    document.getElementById("whatsapp-fixed").href = whatsappLink;
    document.querySelector(".final-buy-link").href = data.buyLink;
    document
      .querySelectorAll(".final-whatsapp-link")
      .forEach((a) => (a.href = whatsappLink));

    // Mapeamento de seções para os dados
    const sections = {
      intro: "#intro-carousel",
      tech: "#tech-carousel",
      install: "#install-carousel",
      premium: "#premium-carousel",
      items: "#items-carousel",
      final: "#final-carousel",
    };

    for (const key in sections) {
      const carouselSelector = sections[key];
      const track = document.querySelector(
        `${carouselSelector} .carousel-track`
      );
      if (track) {
        populateCarousel(track, data.content[key] || []);
      }
    }

    // Reiniciar todos os carrosséis para o primeiro slide
    document.querySelectorAll(".carousel-container").forEach((container) => {
      const track = container.querySelector(".carousel-track");
      if (track) {
        track.style.transform = "translateX(0%)";
        track.dataset.index = 0;
      }
    });
  }

  function populateCarousel(trackElement, items) {
    trackElement.innerHTML = "";
    if (!items || items.length === 0) return;

    items.forEach((item) => {
      const slide = document.createElement("div");
      slide.className = "carousel-item";
      if (item.type === "image") {
        slide.innerHTML = `<img src="${item.src}" alt="Imagem do produto">`;
      } else if (item.type === "video") {
        slide.innerHTML = `<video src="${item.src}" autoplay muted loop playsinline></video>`;
      }
      trackElement.appendChild(slide);
    });
  }

  // ======================================================
  // EVENT LISTENERS
  // ======================================================

  // Clique para selecionar a garrafa
  document.querySelector("#garrafa-carousel").addEventListener("click", (e) => {
    const selectedItem = e.target.closest(".carousel-item");
    if (selectedItem) {
      const productId = selectedItem.dataset.id;

      // Atualiza a classe 'active'
      document
        .querySelectorAll("#garrafa-carousel .carousel-item")
        .forEach((item) => item.classList.remove("active"));
      selectedItem.classList.add("active");

      updatePageContent(productId);
    }
  });

  // Botões dos carrosséis
  document.querySelectorAll(".carousel-button").forEach((button) => {
    button.addEventListener("click", () => {
      const carouselId = button.dataset.carousel;
      const track = document.querySelector(`#${carouselId} .carousel-track`);
      const items = track.querySelectorAll(".carousel-item");
      let index = parseInt(track.dataset.index || 0);

      if (button.classList.contains("next")) {
        index++;
        if (index >= items.length) {
          index = 0; // Volta para o início
        }
      } else {
        index--;
        if (index < 0) {
          index = items.length - 1; // Vai para o final
        }
      }

      track.dataset.index = index;
      track.style.transform = `translateX(-${index * 100}%)`;
    });
  });

  // Botão "Ler Mais"
  document
    .querySelector(".read-more-btn")
    .addEventListener("click", function () {
      const textContainer = this.previousElementSibling;
      textContainer.classList.toggle("expanded");
      if (textContainer.classList.contains("expanded")) {
        this.textContent = "Ler menos";
      } else {
        this.textContent = "Ler mais";
      }
    });

  // ======================================================
  // CARROSSEL AUTOMÁTICO DA ÚLTIMA SEÇÃO
  // ======================================================
  const finalTrack = document.querySelector("#final-carousel .carousel-track");
  let finalCarouselInterval;

  function startFinalCarousel() {
    if (finalCarouselInterval) clearInterval(finalCarouselInterval);
    finalCarouselInterval = setInterval(() => {
      const items = finalTrack.querySelectorAll(".carousel-item");
      if (items.length <= 1) return;

      let index = parseInt(finalTrack.dataset.index || 0);
      index = (index + 1) % items.length;

      finalTrack.dataset.index = index;
      finalTrack.style.transform = `translateX(-${index * 100}%)`;
    }, 2000); // Muda a cada 2 segundos
  }

  // ======================================================
  // OBSERVER PARA ESCONDER BOTÕES FIXOS NA ÚLTIMA SEÇÃO
  // ======================================================
  const lastSection = document.getElementById("finalize-venda");
  const fixedButtonsContainer = document.querySelector(
    ".fixed-buttons-container"
  );
  const whatsappFixedBtn = document.getElementById("whatsapp-fixed");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fixedButtonsContainer.classList.add("hidden");
          whatsappFixedBtn.classList.add("hidden");
          startFinalCarousel(); // Inicia o carrossel automático quando a seção está visível
        } else {
          fixedButtonsContainer.classList.remove("hidden");
          whatsappFixedBtn.classList.remove("hidden");
          if (finalCarouselInterval) clearInterval(finalCarouselInterval); // Para o carrossel
        }
      });
    },
    { threshold: 0.5 }
  ); // Ativa quando 50% da seção estiver visível

  observer.observe(lastSection);
});

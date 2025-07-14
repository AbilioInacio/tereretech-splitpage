document.addEventListener("DOMContentLoaded", function () {
  // ======================= DADOS DOS PRODUTOS =======================
  // MODIFICADO: Agora, todas as mídias (imagens e vídeos) são objetos com 'type' e 'src'.
  const dadosGarrafas = {
    stanley: {
      nome: "Bomba para Stanley",
      linkCompra: "https://seusite.com/comprar/stanley",
      imagemPrincipal:
        "./img/stanley/stanley-delado-site.jpg",
      // MODIFICADO: A estrutura aqui agora é a mesma de 'midiaFinal'
      imagens: {
        instalacao: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/3b72b8/FFFFFF?text=Instalação+Stanley+1",
          },
          // NOVO: Exemplo de como adicionar um vídeo. Use um link para um arquivo .mp4
          {
            type: "video",
            src: "../cliente-uso.webm",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/3b72b8/FFFFFF?text=Instalação+Stanley+2",
          },
        ],
        acabamento: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/70b62c/FFFFFF?text=Acabamento+Stanley+1",
          },
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/70b62c/FFFFFF?text=Acabamento+Stanley+2",
          },
        ],
        carregamento: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/3b72b8/FFFFFF?text=Tipo-C+Stanley",
          },
        ],
        itens: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/70b62c/FFFFFF?text=Itens+Stanley",
          },
        ],
        acessorios: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/3b72b8/FFFFFF?text=Acessórios+Stanley",
          },
        ],
      },
      midiaFinal: [
        {
          type: "image",
          src: "./img/stanley/stanley-motocross.webp",
        },
        {
          type: "video",
          src: "./img/stanley/videos/terere-no-trator.MP4",
        },
        {
          type: "image",
          src: "./img/stanley/stanley-lugarluzes.webp",
        },
        {
          type: "video",
          src: "../cliente-uso.webm",
        },
        {
          type: "video",
          src: "./img/stanley/videos/stanley-video-geral-compress.mp4",
        },
        // Exemplo de vídeo: { type: 'video', src: 'path/to/video_stanley.mp4' }
      ],
    },
    inox: {
      nome: "Bomba para Inox",
      linkCompra: "https://seusite.com/comprar/termolar",
      imagemPrincipal:
        "./img/inox/inox.jpg",
      imagens: {
        instalacao: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/b83b3b/FFFFFF?text=Instalação+Termolar+1",
          },
        ],
        acabamento: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/c27a24/FFFFFF?text=Acabamento+Termolar+1",
          },
        ],
        carregamento: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/b83b3b/FFFFFF?text=Tipo-C+Termolar",
          },
        ],
        itens: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/c27a24/FFFFFF?text=Itens+Termolar",
          },
        ],
        acessorios: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/b83b3b/FFFFFF?text=Acessórios+Termolar",
          },
        ],
      },
      midiaFinal: [
        {
          type: "image",
          src: "https://via.placeholder.com/600x400/FFFFFF/b83b3b?text=Termolar+Final+1",
        },
      ],
    },
    soprano: {
      nome: "Bomba para Soprano",
      linkCompra: "https://seusite.com/comprar/termolar",
      imagemPrincipal:
        "./img/universal/soprano-inox-bujao.jpg",
      imagens: {
        instalacao: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/b83b3b/FFFFFF?text=Instalação+Termolar+1",
          },
        ],
        acabamento: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/c27a24/FFFFFF?text=Acabamento+Termolar+1",
          },
        ],
        carregamento: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/b83b3b/FFFFFF?text=Tipo-C+Termolar",
          },
        ],
        itens: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/c27a24/FFFFFF?text=Itens+Termolar",
          },
        ],
        acessorios: [
          {
            type: "image",
            src: "https://via.placeholder.com/600x400/b83b3b/FFFFFF?text=Acessórios+Termolar",
          },
        ],
      },
      midiaFinal: [
        {
          type: "image",
          src: "https://via.placeholder.com/600x400/FFFFFF/b83b3b?text=Termolar+Final+1",
        },
      ],
    },
    // Adicione os outros produtos seguindo a mesma estrutura de objetos
    // ...
  };

  let garrafaSelecionada = "stanley";

  // ======================= INICIALIZAÇÃO DOS CARROSSÉIS (sem alterações aqui) =======================
  const swiperInicioWrapper = document.querySelector(
    ".swiper-inicio .swiper-wrapper"
  );
  for (const key in dadosGarrafas) {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
    slide.dataset.garrafa = key;
    slide.innerHTML = `<img src="${dadosGarrafas[key].imagemPrincipal}" alt="${dadosGarrafas[key].nome}"><h2>${dadosGarrafas[key].nome}</h2>`;
    swiperInicioWrapper.appendChild(slide);
  }
  const swiperInicio = new Swiper(".swiper-inicio", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      slideChange: function () {
        garrafaSelecionada = this.slides[this.activeIndex].dataset.garrafa;
        atualizarPagina();
      },
    },
  });

  const swipersConteudo = {
    apresentacao: new Swiper(".swiper-apresentacao", {
      autoplay: { delay: 2500, disableOnInteraction: false },
      effect: "fade",
      fadeEffect: { crossFade: true },
    }),
    instalacao: new Swiper(".swiper-instalacao", {
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    acabamento: new Swiper(".swiper-acabamento", {
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    carregamento: new Swiper(".swiper-carregamento", {
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    itens: new Swiper(".swiper-itens", {
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    acessorios: new Swiper(".swiper-acessorios", {
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    }),
    final: new Swiper(".swiper-final", {
      autoplay: { delay: 2500, disableOnInteraction: false },
      effect: "fade",
      fadeEffect: { crossFade: true },
    }),
  };

  // ======================= FUNÇÕES AUXILIARES E DE ATUALIZAÇÃO =======================

  // Nenhuma alteração aqui, esta função já é perfeita para o que queremos
  function popularMidiaCarrossel(swiper, midias) {
    if (!swiper || !midias) return;
    swiper.removeAllSlides();
    midias.forEach((midia) => {
      let slideContent = "";
      if (midia.type === "image") {
        slideContent = `<img src="${midia.src}" alt="Mídia do produto">`;
      } else if (midia.type === "video") {
        // Adicionamos os atributos essenciais para vídeos em carrosséis
        slideContent = `<video src="${midia.src}" autoplay muted loop playsinline></video>`;
      }
      swiper.appendSlide(`<div class="swiper-slide">${slideContent}</div>`);
    });
    swiper.update();
    if (swiper.autoplay && swiper.autoplay.running) {
      swiper.autoplay.stop();
      swiper.autoplay.start();
    }
  }

  // MODIFICADO: A lógica aqui foi simplificada para tratar todos os carrosséis da mesma forma
  function atualizarPagina() {
    const dados = dadosGarrafas[garrafaSelecionada];
    if (!dados) return;

    // 1. Atualizar links dos botões
    document.getElementById("btn-comprar-fixo").href = dados.linkCompra;
    document.querySelector(".btn-comprar-final").href = dados.linkCompra;

    // 2. Atualizar TODOS os carrosséis de conteúdo
    for (const secao in swipersConteudo) {
      if (swipersConteudo.hasOwnProperty(secao)) {
        const swiper = swipersConteudo[secao];
        let midiasParaCarregar = [];

        if (secao === "apresentacao" || secao === "final") {
          // Carrosséis de apresentação e final usam a chave 'midiaFinal'
          midiasParaCarregar = dados.midiaFinal || [];
        } else if (dados.imagens && dados.imagens[secao]) {
          // Todos os outros carrosséis usam a chave 'imagens'
          midiasParaCarregar = dados.imagens[secao];
        }

        // Usamos a mesma função poderosa para todos
        popularMidiaCarrossel(swiper, midiasParaCarregar);
      }
    }
  }

  // ======================= LÓGICA DO "LER MAIS" (sem alterações) =======================
  document.querySelectorAll(".secao").forEach((secao) => {
    const container = secao.querySelector(".texto-explicativo-container");
    const btn = secao.querySelector(".ler-mais-btn");
    if (container && btn) {
      if (container.scrollHeight > container.clientHeight) {
        btn.style.display = "block";
      }
      btn.addEventListener("click", () => {
        container.classList.toggle("expandido");
        btn.textContent = container.classList.contains("expandido")
          ? "Ler Menos"
          : "Ler Mais";
      });
    }
  });

  // ======================= LÓGICA DOS BOTÕES FIXOS (sem alterações) =======================
  const observer = new IntersectionObserver(
    (entries) => {
      const secaoFinal = entries[0];
      const estaVisivel = secaoFinal.isIntersecting;
      document
        .getElementById("botoes-fixos")
        .classList.toggle("hidden", estaVisivel);
      document
        .getElementById("btn-whatsapp-fixo")
        .classList.toggle("hidden", estaVisivel);
    },
    { threshold: 0.5 }
  );
  observer.observe(document.getElementById("finalizar"));

  // ======================= CHAMADA INICIAL =======================
  atualizarPagina();
});

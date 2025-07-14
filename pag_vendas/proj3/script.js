document.addEventListener("DOMContentLoaded", () => {
  // --- BANCO DE DADOS VIRTUAL DOS PRODUTOS ---
  // Substitua os placeholders por links reais de suas imagens e vídeos
  const dadosDosProdutos = {
    stanley: {
      nome: "Tereré Tech para Stanley",
      linkCompra: "https://link.com/comprar-stanley",
      conteudo: {
        conheca: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/3b72b8/ffffff?text=Stanley+Vista+1",
          },
          { tipo: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/3b72b8/ffffff?text=Stanley+Vista+2",
          },
        ],
        instalacao: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/70b62c/ffffff?text=Stanley+Instal+1",
          },
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/70b62c/ffffff?text=Stanley+Instal+2",
          },
        ],
        acabamento: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/3b72b8/ffffff?text=Stanley+Detalhe",
          },
        ],
        carregamento: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/70b62c/ffffff?text=Stanley+USB-C",
          },
        ],
        finalize: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/600x400/3b72b8/ffffff?text=Stanley+Produto+Final",
          },
          { tipo: "video", url: "https://www.w3schools.com/html/mov_bbb.mp4" },
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/600x400/70b62c/ffffff?text=Stanley+em+uso",
          },
        ],
      },
    },
    termolar: {
      nome: "Tereré Tech para Termolar",
      linkCompra: "https://link.com/comprar-termolar",
      conteudo: {
        conheca: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/3b72b8/ffffff?text=Termolar+Vista+1",
          },
        ],
        instalacao: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/70b62c/ffffff?text=Termolar+Instal+1",
          },
        ],
        acabamento: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/3b72b8/ffffff?text=Termolar+Detalhe",
          },
        ],
        carregamento: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/400x300/70b62c/ffffff?text=Termolar+USB-C",
          },
        ],
        finalize: [
          {
            tipo: "imagem",
            url: "https://via.placeholder.com/600x400/3b72b8/ffffff?text=Termolar+Produto+Final",
          },
        ],
      },
    },
    // Adicione os outros produtos (coleman, soprano, mor, outra) com a mesma estrutura
    // ...
  };
  // Preenchendo dados faltantes para demonstração
  ["coleman", "soprano", "mor", "outra"].forEach((id) => {
    if (!dadosDosProdutos[id]) {
      dadosDosProdutos[id] = JSON.parse(
        JSON.stringify(dadosDosProdutos.termolar)
      ); // Copia dados da termolar como fallback
      dadosDosProdutos[id].nome = `Tereré Tech para ${
        id.charAt(0).toUpperCase() + id.slice(1)
      }`;
      dadosDosProdutos[id].linkCompra = `https://link.com/comprar-${id}`;
      // Simplesmente para ter algum conteúdo visualmente diferente
      dadosDosProdutos[
        id
      ].conteudo.conheca[0].url = `https://via.placeholder.com/400x300/3b72b8/ffffff?text=${id}+Vista+1`;
    }
  });

  const seletorGarrafas = document.querySelectorAll(
    "#escolha-garrafa .carousel-item"
  );
  const secoesDinamicas = document.querySelectorAll(".secao-dinamica");
  const botaoComprarFixo = document.getElementById("comprar-agora-fixo");
  const botaoComprarFinal = document.getElementById("comprar-agora-final");

  let produtoSelecionadoId = "stanley"; // Produto padrão

  function criarMediaElement(item) {
    if (item.tipo === "video") {
      const video = document.createElement("video");
      video.src = item.url;
      video.autoplay = true;
      video.muted = true;
      video.loop = true;
      video.playsInline = true;
      return video;
    } else {
      // 'imagem'
      const img = document.createElement("img");
      img.src = item.url;
      img.alt = "Imagem do produto";
      return img;
    }
  }

  function atualizarConteudo(idProduto) {
    const dadosProduto = dadosDosProdutos[idProduto];
    if (!dadosProduto) {
      console.error("Produto não encontrado:", idProduto);
      return;
    }

    // 1. Atualizar links de compra
    botaoComprarFixo.href = dadosProduto.linkCompra;
    botaoComprarFinal.href = dadosProduto.linkCompra;

    // 2. Atualizar conteúdo das seções dinâmicas
    secoesDinamicas.forEach((secao) => {
      const idSecao = secao.id;
      const container = secao.querySelector(".carousel-container-dinamico");
      if (container && dadosProduto.conteudo[idSecao]) {
        container.innerHTML = ""; // Limpa conteúdo anterior
        dadosProduto.conteudo[idSecao].forEach((item) => {
          container.appendChild(criarMediaElement(item));
        });
      }
    });

    // 3. Atualizar e iniciar carrossel final
    iniciarCarrosselFinal(idProduto);
  }

  // --- LÓGICA DO CARROSSEL FINAL ---
  let carrosselFinalIntervalo;
  const containerCarrosselFinal = document.getElementById("carousel-final");

  function iniciarCarrosselFinal(idProduto) {
    clearInterval(carrosselFinalIntervalo);
    containerCarrosselFinal.innerHTML = "";
    const dadosProduto = dadosDosProdutos[idProduto];
    if (!dadosProduto || !dadosProduto.conteudo.finalize) return;

    const slidesData = dadosProduto.conteudo.finalize;
    slidesData.forEach((item, index) => {
      const slide = document.createElement("div");
      slide.className = "slide";
      if (index === 0) slide.classList.add("active");

      const media = criarMediaElement(item);
      slide.appendChild(media);
      containerCarrosselFinal.appendChild(slide);
    });

    const slides = containerCarrosselFinal.querySelectorAll(".slide");
    if (slides.length <= 1) return;

    let slideAtual = 0;
    carrosselFinalIntervalo = setInterval(() => {
      slides[slideAtual].classList.remove("active");
      slideAtual = (slideAtual + 1) % slides.length;
      slides[slideAtual].classList.add("active");
    }, 3000); // Mudei para 3s para dar tempo de ver o vídeo
  }

  // --- EVENT LISTENERS ---

  // Seleção de Garrafa
  seletorGarrafas.forEach((item) => {
    item.addEventListener("click", () => {
      // Atualiza a classe 'selected'
      seletorGarrafas.forEach((i) => i.classList.remove("selected"));
      item.classList.add("selected");

      // Pega o ID do produto e atualiza a página
      produtoSelecionadoId = item.dataset.produtoId;
      atualizarConteudo(produtoSelecionadoId);
    });
  });

  // Botões "Ler Mais"
  document.querySelectorAll(".ler-mais").forEach((button) => {
    const textoContainer = button.parentElement;
    // Verifica se o texto realmente transborda
    if (textoContainer.scrollHeight > textoContainer.clientHeight) {
      button.style.display = "block";
    } else {
      button.style.display = "none";
    }

    button.addEventListener("click", () => {
      textoContainer.classList.toggle("expanded");
      if (textoContainer.classList.contains("expanded")) {
        button.textContent = "Ler Menos";
      } else {
        button.textContent = "Ler Mais";
      }
    });
  });

  // Visibilidade dos botões fixos
  const botoesFixos = document.getElementById("botoes-fixos");
  const secaoFinal = document.getElementById("finalize");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          botoesFixos.classList.add("hidden");
        } else {
          botoesFixos.classList.remove("hidden");
        }
      });
    },
    { threshold: 0.5 }
  ); // Ativa quando 50% da seção final está visível

  observer.observe(secaoFinal);

  // --- INICIALIZAÇÃO ---
  // Seleciona o primeiro item por padrão e carrega o conteúdo inicial
  seletorGarrafas[0].classList.add("selected");
  atualizarConteudo(produtoSelecionadoId);
});

document.addEventListener('DOMContentLoaded', function () {

    // --- DADOS DOS PRODUTOS ---
    // Estrutura central para gerenciar o conteúdo de cada garrafa.
    // Para adicionar uma nova garrafa, basta adicionar um novo objeto a este array.
    // Usei placeholders para imagens. Substitua pelos seus caminhos de imagem/vídeo.
    const productData = [
        {
            id: 'garrafa-stanley',
            name: 'Kit para Garrafa Stanley',
            buyLink: 'https://loja.infinitepay.io/tereretech/uoe6946-garrafa-stanley-com-terere-tech',
            mainImage: './img/stanley/stanley-tech2.webp',
            content: {
                instalacao: ['https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Instalação+1', 'https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Instalação+2'],
                acabamento: ['https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Acabamento+1', 'https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Acabamento+2'],
                carregamento: ['https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Carregador+1', 'https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Carregador+2'],
                itens: ['https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Itens+1', 'https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Itens+2'],
                acessorios: ['https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Acessório+1', 'https://via.placeholder.com/800x400/3b72b8/FFFFFF?text=Acessório+2'],
                final: {
                    images: ['./img/stanley/stanley-motocross.webp', './img/stanley/stanley-lugarluzes.webp'],
                    videos: ['../cliente-uso.webm'] // Adicione links de vídeo .mp4 aqui se tiver
                }
            }
        },
        {
            id: 'garrafa-inox',
            name: 'Kit para Garrafa Inox',
            buyLink: 'https://loja.infinitepay.io/tereretech/rhu2012-bomba-automatica-para-garrafas-inox',
            mainImage: './img/inox/inox-grama.webp',
            content: {
                instalacao: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Instalação+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Instalação+2'],
                acabamento: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Acabamento+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Acabamento+2'],
                carregamento: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Carregador+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Carregador+2'],
                itens: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Itens+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Itens+2'],
                acessorios: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Acessório+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Acessório+2'],
                final: {
                    images: ['https://via.placeholder.com/700x700/70b62c/FFFFFF?text=Final+Verde+1', 'https://via.placeholder.com/700x700/70b62c/FFFFFF?text=Final+Verde+2'],
                    videos: []
                }
            }
        },
        {
            id: 'garrafa-universal',
            name: 'Kit com adaptador Univesal',
            buyLink: 'https://loja.infinitepay.io/tereretech/aus5730-bomba-automatica-para-garrafas-invicta',
            mainImage: './img/universal/termolar couro.webp',
            content: {
                instalacao: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Instalação+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Instalação+2'],
                acabamento: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Acabamento+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Acabamento+2'],
                carregamento: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Carregador+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Carregador+2'],
                itens: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Itens+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Itens+2'],
                acessorios: ['https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Acessório+1', 'https://via.placeholder.com/800x400/70b62c/FFFFFF?text=Acessório+2'],
                final: {
                    images: ['https://via.placeholder.com/700x700/70b62c/FFFFFF?text=Final+Verde+1', 'https://via.placeholder.com/700x700/70b62c/FFFFFF?text=Final+Verde+2'],
                    videos: []
                }
            }
        },
        // Adicione mais 4 objetos de garrafas aqui seguindo o mesmo padrão
        //{ id: 'garrafa-preta', name: 'Garrafa Hidro Term-X Preta', buyLink: '/comprar/preta', mainImage: 'https://via.placeholder.com/400x500/333333/FFFFFF?text=Garrafa+Preta', content: { /* ... preencha o conteúdo ... */ final: {images:[], videos:[]} } },
        //{ id: 'garrafa-branca', name: 'Garrafa Hidro Term-X Branca', buyLink: '/comprar/branca', mainImage: 'https://via.placeholder.com/400x500/f0f0f0/333333?text=Garrafa+Branca', content: { /* ... preencha o conteúdo ... */ final: {images:[], videos:[]} } },
        //{ id: 'garrafa-vermelha', name: 'Garrafa Hidro Term-X Vermelha', buyLink: '/comprar/vermelha', mainImage: 'https://via.placeholder.com/400x500/c0392b/FFFFFF?text=Garrafa+Vermelha', content: { /* ... preencha o conteúdo ... */ final: {images:[], videos:[]} } },
        //{ id: 'garrafa-inox', name: 'Garrafa Hidro Term-X Inox', buyLink: '/comprar/inox', mainImage: 'https://via.placeholder.com/400x500/bdc3c7/FFFFFF?text=Garrafa+Inox', content: { /* ... preencha o conteúdo ... */ final: {images:[], videos:[]} } }
    ];

    let currentProductIndex = 0;
    let swiperInstances = {};

    // --- INICIALIZAÇÃO DOS CARROSSÉIS ---

    // 1. Carrossel de Seleção (Seção 1)
    const selecaoWrapper = document.querySelector('#selecao-carrossel .swiper-wrapper');
    productData.forEach(product => {
        selecaoWrapper.innerHTML += `
            <div class="swiper-slide">
                <img src="${product.mainImage}" alt="${product.name}">
                <h2>${product.name}</h2>
            </div>
        `;
    });

    swiperInstances.selecao = new Swiper('#selecao-carrossel', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
        },
        loop: true,
        navigation: {
            nextEl: '#selecao-carrossel .swiper-button-next',
            prevEl: '#selecao-carrossel .swiper-button-prev',
        },
        on: {
            slideChange: function () {
                currentProductIndex = this.realIndex;
                updatePageContent();
            }
        }
    });

    // 2. Carrosséis de Conteúdo (Seções 2-6)
    document.querySelectorAll('.content-carrossel').forEach(el => {
        const sectionId = el.closest('.content-section').id;
        swiperInstances[sectionId] = new Swiper(el, {
            loop: true,
            pagination: {
                el: el.querySelector('.swiper-pagination'),
                clickable: true,
            },
        });
    });
    
    // 3. Carrossel Final (Seção 7)
    swiperInstances.final = new Swiper('#final-carrossel', {
        loop: true,
        autoplay: {
            delay: 2000, // Muda a cada 2 segundos
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });


    // --- FUNÇÃO PARA ATUALIZAR O CONTEÚDO DA PÁGINA ---
    function updatePageContent() {
        const product = productData[currentProductIndex];
        if (!product) return;

        // Atualiza link do botão de comprar fixo e final
        document.getElementById('fixed-buy-btn').href = product.buyLink;
        document.getElementById('final-buy-btn').href = product.buyLink;
        
        // Atualiza todos os links do WhatsApp (se precisar de links dinâmicos por produto)
        // document.querySelectorAll('.whatsapp-link').forEach(link => link.href = `https://wa.me/${product.whatsappNumber}`);

        // Atualiza os carrosséis de conteúdo
        for (const sectionId in product.content) {
            const swiper = swiperInstances[sectionId];
            if (swiper && product.content[sectionId]) {
                const imageList = product.content[sectionId];
                if(Array.isArray(imageList)) { // Para seções 2-6
                    const newSlides = imageList.map(imgUrl => `
                        <div class="swiper-slide"><img src="${imgUrl}" alt=""></div>
                    `).join('');
                    swiper.wrapperEl.innerHTML = newSlides;
                    swiper.update();
                }
            }
        }
        
        // Atualiza carrossel final (com imagens e vídeos)
        const finalContent = product.content.final;
        if (finalContent && swiperInstances.final) {
             let finalSlides = '';
             if (finalContent.images) {
                 finalSlides += finalContent.images.map(imgUrl => `
                    <div class="swiper-slide"><img src="${imgUrl}" alt=""></div>
                `).join('');
             }
             if (finalContent.videos) {
                  finalSlides += finalContent.videos.map(videoUrl => `
                    <div class="swiper-slide">
                        <video src="${videoUrl}" autoplay muted loop playsinline></video>
                    </div>
                `).join('');
             }
             swiperInstances.final.wrapperEl.innerHTML = finalSlides;
             swiperInstances.final.update();
             swiperInstances.final.autoplay.start();
        }
    }


    // --- LÓGICA DO BOTÃO "LER MAIS" ---
    document.querySelectorAll('.text-container').forEach(container => {
        const p = container.querySelector('p');
        const btn = container.querySelector('.ler-mais-btn');

        // Verifica se o texto realmente excede o contêiner
        // Adicionamos um pequeno timeout para garantir que o layout esteja estável
        setTimeout(() => {
            if (p.scrollHeight > p.clientHeight + 20) { // +20 de margem
                btn.style.display = 'block';
            }
        }, 500);

        btn.addEventListener('click', () => {
            container.classList.toggle('expanded');
            if (container.classList.contains('expanded')) {
                btn.textContent = 'Ler menos';
            } else {
                btn.textContent = 'Ler mais';
            }
        });
    });

    // --- LÓGICA PARA ESCONDER OS BOTÕES FIXOS NA ÚLTIMA SEÇÃO ---
    const fixedBar = document.getElementById('fixed-bottom-bar');
    const finalSection = document.getElementById('finalizacao');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                fixedBar.classList.add('hidden');
            } else {
                fixedBar.classList.remove('hidden');
            }
        });
    }, { threshold: 0.5 }); // Ação ocorre quando 50% da seção final está visível

    observer.observe(finalSection);

    // --- CHAMADA INICIAL PARA POPULAR A PÁGINA ---
    updatePageContent();
});

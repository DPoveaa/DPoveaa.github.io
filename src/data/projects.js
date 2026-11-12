export const projects = [
  {
    id: 1,
    pageImage: "/assets/project-screens/brasilflix.jpg",
    pageImageAlt: "Tela pública do BrasilFlix",
    title: "BrasilFlix - Streaming & Automação no Telegram",
    badge: "Plataforma & Bot Ativos",
    statusType: "live",
    description: "Plataforma web de streaming e bot inteligente para Telegram com esteira paralela e contínua de processamento de mídia, downloads em alta velocidade e transcodificação automática com FFmpeg (1080p).\n\nPermite compartilhamento automatizado de filmes, séries e animes através do protocolo MTProto Premium (suportando uploads de arquivos de até 4GB). Conta com catálogo interativo em tempo real via web, persistência em PostgreSQL, integração de metadados via TMDB, monetização e assinaturas automatizadas com Mercado Pago (PIX com baixa instantânea) e integração com Stremio.",
    thumbnail: "/assets/images/brasilflix-logo-horizontal.jpg",
    images: [
      "/assets/images/brasilflix-logo-horizontal.jpg",
      "/assets/images/brasilflix-bot-avatar.jpg",
      "/assets/images/brasilflix-original-logo.jpg"
    ],
    technologies: ["Node.js", "JavaScript", "Telegram API", "MTProto", "FFmpeg", "PostgreSQL", "Mercado Pago API", "TMDB API", "Stremio"],
    categories: ["Bots & Automação", "Fullstack & Web", "JavaScript"],
    features: [
      "Site oficial com catálogo, fila e status em tempo real (brasilflix.kapsu.com.br)",
      "Bot interativo ativo com suporte inline no Telegram (@BrasilFlix_bot)",
      "Pipeline desacoplada com downloads, transcodes e uploads simultâneos",
      "Uploads de até 4GB no Telegram via sessões MTProto Premium",
      "Transcodificação inteligente de vídeo com FFmpeg sob demanda",
      "Integração à API do TMDB para sinopses, posters e notas em pt-BR",
      "Cobrança automática e liberação de planos via Mercado Pago (PIX)",
      "Armazenamento e catálogo estruturado em banco PostgreSQL"
    ],
    link: "https://brasilflix.kapsu.com.br",
    repository: "https://github.com/DPoveaa/BrasilFlix"
  },
  {
    id: 2,
    pageImage: "/assets/project-screens/kapsu.jpg",
    pageImageAlt: "Loja online da Kapsu",
    title: "Kapsu - E-commerce de Suplementos & Cuidados",
    badge: "Em Produção",
    statusType: "live",
    description: "Plataforma de e-commerce com catálogo, checkout, gestão de pedidos e portal de fornecedores. Fui o principal responsável pelo desenvolvimento da interface e da API.\n\nA Kaia usa o Gemini para consultar pedidos e executar ações no carrinho. O projeto inclui testes de contrato e de fluxos de conversa.",
    thumbnail: "/assets/images/kapsu-logo.png",
    images: [
      "/assets/images/kapsu-logo.png"
    ],
    technologies: ["TypeScript", "React", "Node.js", "Express", "PostgreSQL", "Gemini API", "Knex", "Vite", "Tailwind CSS", "GitHub Actions"],
    categories: ["E-commerce", "Fullstack & Web", "TypeScript"],
    features: [
      "Catálogo, filtros e carrinho de compras",
      "Checkout e integração de pagamentos",
      "Painel de administração e portal de fornecedores",
      "Assistente de IA integrado às operações da loja",
      "Testes de contrato e de fluxos de conversa"
    ],
    link: "https://kapsu.com.br/",
    repository: "https://github.com/DPoveaa/Kapsu"
  },
  {
    id: 3,
    pageImage: "/assets/project-screens/global-pharma.jpg",
    pageImageAlt: "Marketplace da Global Pharma Human",
    title: "Global Pharma Human - Marketplace Corporativo",
    badge: "Em Produção",
    statusType: "live",
    description: "Marketplace corporativo full-stack da Global Pharma Human, integrando frontend reativo em Next.js com backend robusto em Node.js, Express e Prisma ORM conectado ao banco relacional PostgreSQL.\n\nO sistema conta com painel administrativo completo, autenticação segura com JWT/NextAuth, vitrine B2B e B2C de produtos farmacêuticos e hospitalares, integração com APIs sociais da Meta/Instagram e configuração para deploy em Ubuntu Server gerenciado com PM2.",
    thumbnail: "/assets/images/gph-logo.png",
    images: [
      "/assets/images/gph-logo.png"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "Express", "Prisma ORM", "PostgreSQL", "Tailwind CSS", "PM2"],
    categories: ["Fullstack & Web", "TypeScript", "E-commerce"],
    features: [
      "Marketplace corporativo completo em ambiente produtivo",
      "Frontend SSR / SSG de alta performance com Next.js",
      "Backend RESTful estruturado com Node.js, Express e Prisma",
      "Banco de dados relacional PostgreSQL modelado para grande volume",
      "Painel administrativo para controle de pedidos, clientes e estoque",
      "Autenticação segura e controle de permissões",
      "Deploy contínuo e monitoramento com PM2 no Ubuntu Server"
    ],
    link: "https://globalpharmahuman.com.br",
    repository: "https://github.com/DPoveaa/site-globalpharmahuman"
  },
  {
    id: 4,
    pageImage: "/assets/project-screens/ultrafarma.jpg",
    pageImageAlt: "Site da Ultrafarma Capelinha",
    title: "Ultrafarma Capelinha - Portal Oficial & Tele-Entrega",
    badge: "Em Produção",
    statusType: "live",
    description: "Landing page institucional e comercial da unidade Ultrafarma Getúlio Vargas (Capelinha - Osasco/SP).\n\nDesenvolvida com foco em máxima velocidade de carregamento, responsividade impecável em dispositivos móveis e otimização para motores de busca (SEO local estruturado com sitemap.xml e OpenGraph). Conecta clientes diretamente aos canais de tele-entrega e atendimento rápido via WhatsApp.",
    thumbnail: "/assets/images/ultrafarma-fachada.jpeg",
    images: [
      "/assets/images/ultrafarma-fachada.jpeg",
      "/assets/images/ultrafarma-logo.png"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "SEO Otimizado", "Google Maps"],
    categories: ["Fullstack & Web", "HTML & CSS"],
    features: [
      "Site comercial e institucional em produção (ultrafarmacapelinha.com.br)",
      "Otimização avançada para SEO local e busca orgânica no Google",
      "Integração instantânea para pedidos e tele-entrega via WhatsApp",
      "Design responsivo com identidade visual fiel à marca Ultrafarma",
      "Estrutura leve sem dependências pesadas, garantindo nota máxima em performance"
    ],
    link: "https://ultrafarmacapelinha.com.br/",
    repository: "https://github.com/DPoveaa/UltrafarmaCapelinha"
  },
  {
    id: 5,
    pageImage: "/assets/project-screens/botforge.jpg",
    pageImageAlt: "Tela do bot em vídeo de demonstração",
    pageImageCaption: "Frame da demonstração",
    title: "BotForge - Automação de Vendas & Acesso VIP no Telegram",
    badge: "Bot Ativo",
    statusType: "live",
    description: "Bot completo para Telegram desenvolvido em JavaScript/Node.js voltado para criadores de conteúdo e vendedores online automatizarem pagamentos e gestão de comunidades fechadas.\n\nOferece checkout automático com Mercado Pago (PIX) e Stripe (cartão), criação de planos de acesso (diário, mensal, anual ou vitalício), convite automático e remoção pontual após expiração da assinatura, painel administrativo e sistema de gamificação por volume de vendas.",
    thumbnail: "/assets/images/Botforge-logo.png",
    images: [
      "/assets/images/Botforge-logo.png",
      "/assets/images/Vídeo do projeto BotForge - Telegram - 2.mp4"
    ],
    technologies: ["Node.js", "JavaScript", "Telegram Bot API", "Mercado Pago API", "Stripe API"],
    categories: ["Bots & Automação", "JavaScript"],
    features: [
      "Bot interativo em funcionamento no Telegram (@BotForgeOfficial_Bot)",
      "Cobranças automáticas via PIX com baixa imediata e Stripe",
      "Gestão de membros em grupos/canais com adição e remoção automática",
      "Controle de vigência por planos diários, semanais, mensais ou vitalícios",
      "Painel de métricas financeiras e ranking de desempenho com gamificação",
      "Mensagens personalizáveis de boas-vindas, lembretes e renovações"
    ],
    link: "https://t.me/BotForgeOfficial_Bot",
    repository: "https://github.com/MatheusBoaventura/freelancer-telegram"
  },
  {
    id: 6,
    pageImage: "/assets/project-screens/central.jpg",
    pageImageAlt: "Página pública da Central de Descontos no Telegram",
    pageImageCaption: "Prévia pública do canal",
    title: "Central de Descontos - Bot de Ofertas & Afiliados",
    badge: "Automação",
    statusType: "live",
    description: "Automação que coleta e normaliza ofertas de e-commerce e publica os resultados no Telegram e no WhatsApp. Usa Python e Selenium na coleta e Node.js na distribuição.",
    thumbnail: "/assets/images/Cdd.png",
    images: [
      "/assets/images/Cdd.png"
    ],
    technologies: ["Python", "Selenium", "Node.js", "JavaScript", "Telegram", "WhatsApp"],
    categories: ["Bots & Automação", "Python"],
    features: [
      "Coleta de preços e descontos",
      "Normalização dos dados para publicação",
      "Geração de links de afiliado",
      "Distribuição automatizada de ofertas"
    ],
    link: "https://t.me/centraldedescontos",
    repository: "https://github.com/DPoveaa/MercadoLivre-Afiliados"
  },
  {
    id: 7,
    pageImage: "/assets/project-screens/aurora.jpg",
    pageImageAlt: "Página de Aurora no itch.io",
    pageImageCaption: "Página do jogo no itch.io",
    title: "Aurora: The Fallen King",
    badge: "Jogo Disponível",
    statusType: "live",
    description: "Desenvolvido em 7 dias durante a Ctrl Alt Jam #2.\n\nNeste jogo acompanhamos Aurora, uma garota cega que embarca em uma jornada para restaurar a visão de todos que foram afetados por um misterioso evento — supostamente causado pela queda de um anjo na Terra.\n\nAurora faz um acordo com uma caveira enigmática que lhe concede poderes sobrenaturais, enfrentando os perigos de um castelo sombrio com a missão de derrotar o Rei e obter o artefato 'Olho do Paraíso'. O jogo aborda temas de adaptação e dualidade moral com combate fluído.",
    thumbnail: "https://img.itch.zone/aW1nLzEyMTY1NDU2LnBuZw==/original/NTQd4G.png",
    images: [
      "https://img.itch.zone/aW1nLzEyMTY1NDU2LnBuZw==/original/NTQd4G.png",
      "https://youtu.be/zzn3N53BveQ",
      "https://img.itch.zone/aW1hZ2UvMjA2ODY2NC8xMjE2NTM3Ni5wbmc=/original/Vb5XLn.png",
      "https://img.itch.zone/aW1hZ2UvMjA2ODY2NC8xMjE2NTM3NS5wbmc=/original/V2wj6z.png"
    ],
    technologies: ["Unity", "C#", "Blender", "Photoshop", "Shaders HLSL"],
    categories: ["Jogos (Game Dev)", "C#"],
    features: [
      "Jogo de plataforma e ação 2.5D publicado no Itch.io",
      "Narrativa imersiva com escolhas morais e dualidade de poderes",
      "Sistema de combate dinâmico com variações de ataques e magias",
      "Cenas de diálogo e cutscenes integradas à gameplay",
      "Design de níveis em castelo gótico com iluminação atmosférica",
      "Trilha sonora original e efeitos sonoros imersivos",
      "Build final otimizada para Windows"
    ],
    link: "https://laisemendes.itch.io/aurora-the-fallen-king",
    repository: "https://github.com/DPoveaa/Hachurados"
  },
  {
    id: 8,
    pageImage: "/assets/project-screens/excel.jpg",
    pageImageAlt: "Tela do Organizador de Planilhas Excel",
    title: "Organizador de Planilhas Excel - GPH",
    badge: "Ferramenta Client-Side",
    statusType: "repo",
    description: "Ferramenta utilitária 100% client-side (sem dependência de servidor) concebida para organizar, higienizar e padronizar planilhas desordenadas de pedidos e rotas de delivery em formato .xls e .xlsx.\n\nO processamento acontece inteiramente na memória do navegador do usuário através da biblioteca SheetJS, garantindo sigilo absoluto dos dados operacionais e conversão em tempo recorde sem risco de vazamento de informações sensíveis.",
    thumbnail: "/assets/images/excel-organizer-banner.jpg",
    images: [
      "/assets/images/excel-organizer-banner.jpg"
    ],
    technologies: ["JavaScript", "SheetJS / XLSX", "HTML5", "CSS3", "Node.js"],
    categories: ["Fullstack & Web", "JavaScript"],
    features: [
      "Execução 100% client-side no navegador sem necessidade de backend",
      "Privacidade total: nenhuma informação de clientes é transmitida pela rede",
      "Suporte a arquivos legados .xls e planilhas modernas .xlsx",
      "Reorganização automática de colunas, cabeçalhos e formatação de dados",
      "Exportação direta de planilha limpa pronta para a operação de delivery"
    ],
    link: "https://github.com/DPoveaa/site-arrumar_excel_gph#readme",
    repository: "https://github.com/DPoveaa/site-arrumar_excel_gph"
  },
  {
    id: 9,
    pageImage: "/assets/project-screens/zaptaria.jpg",
    pageImageAlt: "Proposta do ZapTaria no GitHub",
    pageImageCaption: "Pull request do protótipo",
    title: "ZapTaria - Gerenciador de Tarefas com IA no WhatsApp",
    badge: "Protótipo em pull request",
    statusType: "repo",
    description: "Protótipo de um assistente para organizar tarefas por mensagens no WhatsApp. A proposta de implementação está documentada em um pull request no GitHub.",
    thumbnail: "/assets/images/zaptaria-banner.jpg",
    images: [
      "/assets/images/zaptaria-banner.jpg"
    ],
    technologies: ["TypeScript", "React", "Node.js", "Express", "Prisma", "PostgreSQL", "Gemini API", "Socket.IO"],
    categories: ["Bots & Automação", "Fullstack & Web"],
    features: [
      "Proposta de captura e organização de tarefas por conversa",
      "Interface web para acompanhamento de tarefas",
      "Integração proposta com WhatsApp e Gemini"
    ],
    link: "https://github.com/DPoveaa/ZapTaria#readme",
    repository: "https://github.com/DPoveaa/ZapTaria"
  },
  {
    id: 10,
    pageImage: "/assets/project-screens/my-story.jpg",
    pageImageAlt: "Repositório público de My Story",
    pageImageCaption: "Repositório no GitHub",
    title: "My Story - Jogo 3D Sandbox & Construção",
    badge: "Godot 3D Game",
    statusType: "repo",
    description: "Jogo 3D de construção em blocos, sobrevivência e gerenciamento desenvolvido na engine Godot, inspirado principalmente nas mecânicas táticas de Castle Story e no sandbox criativo de Minecraft.\n\nO projeto foca em possibilitar estruturas fisicamente consistentes construídas por pequenas unidades de trabalhadores (operários) orientados por comandos do jogador, com geração de ilhas flutuantes e sistemas dinâmicos em GDScript.",
    thumbnail: "/assets/images/mystory-banner.jpg",
    images: [
      "/assets/images/mystory-banner.jpg",
      "/assets/images/godot-mystory.svg"
    ],
    technologies: ["Godot Engine", "GDScript", "3D Game Design", "Voxel Architecture"],
    categories: ["Jogos (Game Dev)"],
    features: [
      "Desenvolvido na moderna engine Godot 4 com arquitetura GDScript",
      "Mecânica de construção 3D inspirada em Castle Story e Minecraft",
      "Design de mundo com ilhas flutuantes e física de sustentação",
      "Documentação abrangente de Game Design e Arquitetura Técnica",
      "Sistemas modulares com carregamento automático e testes unitários"
    ],
    link: "https://github.com/DPoveaa/my-story#readme",
    repository: "https://github.com/DPoveaa/my-story"
  },
  {
    id: 11,
    pageImage: "/assets/project-screens/portfolio-v1.jpg",
    pageImageAlt: "Livro interativo do Portfólio V1",
    title: "Portfólio Pessoal v1 - Versão Conceitual",
    badge: "Deploy Ativo",
    statusType: "live",
    description: "Primeira versão do meu portfólio pessoal criada como experimento visual de animações e navegação lúdica.\n\nO projeto implementa uma logo interativa com efeito de rotação 3D que revela a biografia pessoal, além de um livro 3D interativo com física de virar páginas para navegar entre os projetos, explorando recursos criativos avançados de CSS3 e manipulação de DOM em JavaScript.",
    thumbnail: "/assets/images/portfolio-v1-0.png",
    images: [
      "/assets/images/portfolio-v1-0.png",
      "/assets/images/portfolio-v1-3.png",
      "/assets/images/portfolio-v1-1.png",
      "/assets/images/portfolio-v1-4.png",
      "/assets/images/portfolio-v1-2.png"
    ],
    technologies: ["HTML5", "CSS3 Animações", "JavaScript", "Photoshop", "GitHub Pages"],
    categories: ["Fullstack & Web", "HTML & CSS"],
    features: [
      "Deploy funcional no GitHub Pages",
      "Livro interativo para navegação entre projetos com efeito de virar páginas",
      "Logo animada em 3D que gira e revela a biografia",
      "Navbar fixa com navegação suave entre seções",
      "Exploração criativa de transições CSS e design temático"
    ],
    link: "https://dpoveaa.github.io/Portfolio-v1/",
    repository: "https://github.com/DPoveaa/Portfolio-v1"
  },
  {
    id: 12,
    pageImage: "/assets/project-screens/dpoveaa.jpg",
    pageImageAlt: "Perfil público de DPoveaa no GitHub",
    title: "DPoveaa - Perfil Central & Documentação GitHub",
    badge: "Perfil Oficial",
    statusType: "live",
    description: "Repositório central do perfil do GitHub de Daniel Povea (@DPoveaa), estruturado com automações via GitHub Actions para atualização contínua de métricas de contribuição, resumo dinâmico de linguagens mais utilizadas, badges de tecnologias e links diretos para contato.",
    thumbnail: "/assets/images/github-mark.png",
    images: [
      "/assets/images/github-mark.png"
    ],
    technologies: ["Markdown", "GitHub Actions", "SVG Badges", "CI/CD"],
    categories: ["Fullstack & Web"],
    features: [
      "Perfil público oficial no GitHub com estatísticas em tempo real",
      "Gráfico dinâmico com animação Snake de contribuições",
      "Contador e métricas de streaks e commits automatizados",
      "Mapeamento abrangente de tecnologias, redes e contato"
    ],
    link: "https://github.com/DPoveaa",
    repository: "https://github.com/DPoveaa/DPoveaa"
  },
  {
    id: 13,
    title: "Bot-Jobando - Automação e painel web",
    badge: "Projeto privado",
    statusType: "repo",
    description: "Automação em Python com tarefas agendadas e um painel Flask para configurar e acompanhar as rotinas.",
    images: [],
    technologies: ["Python", "Flask", "Selenium", "Docker", "OpenPyXL"],
    categories: ["Bots & Automação", "Python"],
    features: [
      "Painel de configuração e acompanhamento das tarefas",
      "Gerenciamento de usuários",
      "Execução agendada e ambiente empacotado com Docker"
    ]
  }
];

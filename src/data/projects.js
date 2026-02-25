export const projects = [
  {
    id: 1,
    title: "Portfólio primeira tentativa",
    description: "Primeira versão do meu portfólio pessoal, criada como experimento visual e de navegação criativa. \n\nO projeto foi uma tentativa de explorar transições interativas, elementos animados e apresentação diferenciada dos conteúdos. \nNo entanto, apesar das ideias originais, o resultado final foi abandonado por falta de harmonia entre os componentes visuais e funcionais do site.",
    thumbnail: "/assets/images/portfolio-v1-0.png",
    images: [
      "/assets/images/portfolio-v1-3.png",
      "/assets/images/portfolio-v1-0.png",
      "/assets/images/portfolio-v1-1.png",
      "/assets/images/portfolio-v1-4.png",
      "/assets/images/portfolio-v1-2.png"
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Photoshop"],
    categories: ["HTML", "JavaScript"],
    features: [
      "Navbar fixa com navegação simples",
      "Logo animada que gira e revela uma biografia pessoal",
      "Livro interativo para navegação entre projetos com efeito de virar página",
      "Design responsivo com elementos visuais personalizados",
      "Seção final com faixa de 'em manutenção', indicando expansão futura",
      "Exploração de animações CSS e efeitos visuais não convencionais",
      "Experimento de apresentação artística de conteúdo pessoal"
    ],
    link: "https://dpoveaa.github.io/Portfolio-v1/",
    repository: "https://github.com/DPoveaa/Portfolio-v1"
  },
  {
    id: 2,
    title: 'Aurora: The Fallen King',
    description: 'Desenvolvido em 7 dias durante a Ctrl Alt Jam #2.\n\nNeste jogo, acompanhamos Aurora, uma garota cega que embarca em uma jornada para restaurar a visão de todos que foram afetados por um misterioso evento — supostamente causado pela queda de um anjo na Terra.\n\nPara alcançar esse objetivo, Aurora faz um acordo com uma caveira enigmática, que passa a guiá-la como mentora e fornecedora de poderes sobrenaturais. A partir daí, ela se aventura por um castelo sombrio com a missão de derrotar o Rei e obter o artefato "Olho do Paraíso".\n\nO tema central do jogo é a adaptação e a dualidade. Aurora precisa aprender a controlar os poderes que lhe foram concedidos, ao mesmo tempo em que lida com a influência da caveira, que constantemente a desafia a escolher entre manter sua essência ou se deixar consumir pelo poder — mesmo que isso custe sua vida.',
    thumbnail: 'https://img.itch.zone/aW1nLzEyMTY1NDU2LnBuZw==/original/NTQd4G.png',
    images: [
      'https://img.itch.zone/aW1nLzEyMTY1NDU2LnBuZw==/original/NTQd4G.png',
      'https://youtu.be/zzn3N53BveQ',
      'https://img.itch.zone/aW1hZ2UvMjA2ODY2NC8xMjE2NTM3Ni5wbmc=/original/Vb5XLn.png',
      'https://img.itch.zone/aW1hZ2UvMjA2ODY2NC8xMjE2NTM3NS5wbmc=/original/V2wj6z.png',
    ],
    technologies: ['Unity', 'C#', 'Visual Studio', 'Blender', 'Photoshop', 'Windows'],
    categories: ['C#'],
    features: [
      'Jogo de plataforma 2.5D',
      'Narrativa interativa com escolhas morais',
      'Sistema de combate com ataques especiais',
      'Mudança dinâmica de habilidades conforme a dualidade da personagem',
      'Cenas de diálogo com avanço manual (Enter)',
      'Design de níveis ambientado em castelo com progressão linear',
      'Sistema de diário com contexto de história (acessível com ESC)',
      'Trilha sonora original e efeitos sonoros imersivos',
      'Visual artístico estilizado com shader personalizado',
      'Cutscenes integradas à gameplay',
      'Inspiração narrativa baseada em dilemas internos e sacrifício',
      'Animações customizadas e iluminação atmosférica',
      'Sistema de velocidade/ataque com variações (Mouse Direito e Esquerdo)',
      'Compatível com Windows (build final via Unity)',
    ],
    link: 'https://laisemendes.itch.io/aurora-the-fallen-king',
    repository: 'https://github.com/DPoveaa/Hachurados'
  },
  {
    id: 3,
    title: 'Central de Descontos - Telegram',
    description: 'Central de Descontos é um projeto desenvolvido para divulgar promoções reais e atualizadas via Telegram, utilizando APIs de grandes plataformas como Mercado Livre, Amazon, Shopee e Kabum. O sistema automatiza a coleta de produtos com desconto e publica no canal com links de afiliado, permitindo ao desenvolvedor gerar receita enquanto fornece economia ao público.\n\nO bot foi desenvolvido utilizando JavaScript e Python, com integração à API do Telegram para envio automatizado das ofertas. Também há suporte para análise de avaliações, preço antigo e novo, além de informações de parcelamento, tudo mastigado para facilitar a vida do consumidor.',
    thumbnail: './assets/images/Cdd.png',
    images: [
      './assets/images/Cdd.png',
      'https://media.licdn.com/dms/image/v2/D4D22AQFYZiAYeRxIcw/feedshare-shrink_2048_1536/B4DZa625GVHAAs-/0/1746891674849?e=1751500800&v=beta&t=uVut1820estFBE07zCTeKZATcHTwpMHBMT7_iYZuGas',
    ],
    technologies: ['Python', 'JavaScript', 'Visual Studio', 'TelegramApi', 'WhatSapp','MercadoLivreApi', 'ShopeeApi', 'WebScrapping', 'Photoshop'],
    categories: ['Python', 'JavaScript'],
    features: [
      'Integração com APIs de e-commerce (Mercado Livre, Amazon, Shopee, Kabum)',
      'Publicação automatizada no Telegram com links de afiliado',
      'Sistema de formatação de mensagens com avaliações, preço antigo, desconto e parcelas',
      'Geração de receita via programas de afiliados',
      'Suporte a múltiplas plataformas de vendas',
      'Atualizações constantes com novos parceiros de e-commerce'
    ],
    link: 'https://t.me/centraldedescontos',
    repository: 'https://github.com/DPoveaa/MercadoLivre-Afiliados'
  },
  {
    id: 4,
    title: 'BotForge - Telegram',
    description: 'BotForge é um bot inteligente e personalizável para Telegram, desenvolvido em JavaScript, que permite automatizar vendas, assinaturas, pagamentos e gerenciamento de acesso a grupos e canais. \nIdeal para criadores de conteúdo, infoprodutores ou vendedores, o BotForge oferece integração com Mercado Pago e Stripe, além de permitir controle total sobre permissões, prazos e mensagens automáticas do bot.\n\nCom suporte a planos diários, mensais, anuais ou vitalícios, o BotForge também desbloqueia recursos baseados no desempenho de vendas, criando um sistema de gamificação para incentivar ainda mais seus usuários.',
    thumbnail: './assets/images/Botforge-logo.png',
    images: [
      './assets/images/Botforge-logo.png',
      './assets/images/Botforge-video.mp4',
    ],
    technologies: [
      'JavaScript',
      'Node.js',
      'TelegramApi',
      'MercadoPagoApi',
      'StripeApi',
      'Photoshop',
    ],
    categories: ['JavaScript', 'Telegram'],
    features: [
      'Personalização de mensagens como /start e /help',
      'Integração com Mercado Pago e Stripe para pagamentos',
      'Criação de produtos e assinaturas automáticas (diárias, mensais, anuais, vitalícias)',
      'Oferecimento de descontos especiais para pagamentos via PIX',
      'Controle completo de acesso a grupos/canais com prazos configuráveis',
      'Sistema de ranking de vendas com desbloqueio de benefícios por performance',
      'Painel de administração e monitoramento simplificado',
      'Fácil adaptação para diferentes nichos e públicos'
    ],
    link: 'https://t.me/BotForgeOfficial_Bot',
    repository: 'https://github.com/MatheusBoaventura/freelancer-telegram'
  }  
];

export const projects = [
  {
    id: 2,
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
    categories: ["HTML", "CSS", "JavaScript"],
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
    repository: "https://github.com/DPoveaa/Portfolio-v1",
    codeSnippets: [
      {
        title: 'Arquivo index.html',
        language: 'Html',
        code: `<!DOCTYPE html>
<html lang="pt-br" class="fade-in" style="background-color: grey;">

<!-- #region Head -->

<head>
  <link rel="stylesheet" href="./Prism/prism.css">
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet">

  <link rel="stylesheet" type="text/css" href="./assets/css/style.css" media="screen">
</head>

<!-- #endregion Head-->

<!--#region Body -->

<body>

  <!-- #region Navigation bar -->

  <nav class="navbar navbar-expand-lg navbar-light sticky-top"
    style="background-color: #0F4C75; padding: 0.5% 25% 0.5% 25%; max-width: 100%;">
    <div class="container-fluid">
      <img src="./assets/images/Logo.png" style="width: 10vw; height: 10vw; max-width: 60px; max-height: 60px;"
        type="button" href="#" alt="Logo" onclick="rollImage(), scrollToTop()">
      <span style="display: inline-block; margin-left: 2vw;"></span>
      <button class="navbar-toggler textNav" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link textNav" href="#" onclick="rollImage()">Sobre</a>
          </li>
          <li class="nav-item">
            <a class="nav-link textNav" href="#" onclick="scrollToGraduations()">Graduações</a>
          </li>
          <li class="nav-item">
            <a class="nav-link textNav" href="#">Portfólio</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle textNav" style="margin-right: 2vw;" href="#" role="button"
              data-bs-toggle="dropdown" aria-expanded="false">
              Contato
            </a>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" style="color: #1B262C" target="_blank" href="https://github.com/DPoveaa">
                  <img src="./assets/images/GitHubLogo.png" width="25vw" height="25vw" style="display: inline-block;"
                    alt="Logo do GitHub">
                  <span style="display: inline-block; margin-left: 0.1vw;">GitHub</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" style="color: #1B262C" target="_blank"
                  href="mailto:danieldpcaires@gmail.com, danielpcaires@hotmail.com?subject=Curriculo%2FPortf%C3%B3lio&body=*Aten%C3%A7%C3%A3o%2C%20mensagem%20pr%C3%A9-definida%3A*%0D%0AOl%C3%A1%20a%20quem%20se%20interessou%20pelo%20meu%20trabalho%20e%20experi%C3%AAncias%20e%20seja%20bem-vindo.%0D%0APe%C3%A7o%20que%20se%20apresente%20e%20deixe%20claro%20a%20inten%C3%A7%C3%A3o%20de%20contato%20e%20em%20que%20posso%20auxiliar.%0D%0AAgrade%C3%A7o%20a%20aten%C3%A7%C3%A3o.%0D%0A-Ass%3A%20Povea.">
                  <img src="./assets/images/Gmail.png" width="25vw" height="25vw" style="display: inline-block;"
                    alt="Logo do Gmail">
                  <span style="display: inline-block; margin-left: 0.1vw;">Gmail</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" style="color: #1B262C" target="_blank"
                  href="https://www.linkedin.com/in/daniel-povea-507893222/">
                  <img src="./assets/images/Linkedin.png" width="25vw" height="25vw" style="display: inline-block;"
                    alt="Logo do Linkedin">
                  <span style="display: inline-block; margin-left: 0.1vw;">Linkedin</span>
                </a>
              </li>
              <li>
                <a class="dropdown-item" style="color: #1B262C" target="_blank"
                  href="https://api.whatsapp.com/send?phone=5511998105896&text=*Aten%C3%A7%C3%A3o%2C%20mensagem%20pr%C3%A9-definida%3A*%0AOl%C3%A1%20a%20quem%20se%20interessou%20pelo%20meu%20trabalho%20e%20experi%C3%AAncias%20e%20seja%20bem-vindo.%0APe%C3%A7o%20que%20se%20apresente%20e%20deixe%20claro%20a%20inten%C3%A7%C3%A3o%20de%20contato%20e%20em%20que%20posso%20auxiliar.%0AAgrade%C3%A7o%20a%20aten%C3%A7%C3%A3o.%0A-Ass%3A%20Povea.">
                  <img src="./assets/images/WhatsApp.png" width="25vw" height="25vw" style="display: inline-block;"
                    alt="Logo do WhatsApp">
                  <span style="display: inline-block; margin-left: 0.1vw;">WhatsApp</span>
                </a>
              </li>
              <li>
                <hr class="dropdown-divider">
              </li>
              <li>
                <a class="dropdown-item" style="color: #1B262C" target="_blank" href="#"> Dados para contato </a>
              </li>
            </ul>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-3"
            style="background-color: white; border-color: whitesmoke; height: 2.5vw; width: 10vw; font-size: 1vmax; padding: 0px; padding-left: 1.5vw; min-height: 20px; min-width: 76px;"
            type="search" placeholder="O que procura?" aria-label="search">
          <button class="btn btn-outline-success button"
            style="height: 2.5vw; width: 6vw; min-height: 20px; min-width: 46px; font-size: 1vmax; padding: 0px;"
            type="submit">Pesquisar</button>
        </form>
      </div>
    </div>
  </nav>

  <!-- #endregion Navigation bar-->

  <!-- #region Texto por tras da logo -->

  <section class="heightFull sectionOne">
    <img src="/assets/images/Logo.png" alt="Minha logo que ao pressionada revela uma breve biografia" id="imageToRoll"
      onclick="rollImage()">
    <div class="hiddenText" id="text">
      <p>Olá! Sou Daniel, e é um prazer recebê-lo em meu site. Tenho 20 anos e desde 2020 tenho me dedicado ao estudo e
        prática na área de programação. Foi nesse ano, marcado pelo isolamento causado pela pandemia, que busquei novas
        formas de me entreter e mergulhei ainda mais na minha paixão pela computação e tecnologia em geral. Desde os
        meus 6 anos, quando comecei a usar computadores e jogar meus primeiros jogos, esse mundo tem sido meu maior
        hobby.<br><br>
        Ao longo dessa jornada, iniciei diversos projetos, incluindo a criação de jogos, sites, aplicativos e muito
        mais. Atualmente, estou cursando Ciência da Computação, o que me proporciona um amplo conhecimento e me prepara
        para atuar em diversas áreas.<br><br>
        Em 2023, participei de uma GameJam, minha primeira experiência em competições relacionadas à programação.
        Durante essa competição, pude sentir a pressão dos prazos e a necessidade de explorar novas áreas, como
        modelagem 3D, adição de efeitos sonoros, sincronização de animações com scripts e exportação de jogos. Essa
        experiência ampliou meus horizontes e me permitiu adquirir conhecimentos valiosos.<br><br>
        Além da minha vida acadêmica, sou morador da cidade de São Paulo, capital. Tenho fluência em inglês e português
        (Brasil). Possuo amplo conhecimento em diversas áreas, como Photoshop, Premiere Pro, C#, JavaScript, Blender,
        Unity, GameMaker, entre outros.<br><br>
        Minha ambição é adquirir conhecimentos em diversas áreas da tecnologia, com foco especial na programação. No
        entanto, também tenho interesse em explorar a área da robótica.<br><br>
        Meu principal interesse profissional está no desenvolvimento de projetos e automações. Tenho paixão por essas
        áreas e estou sempre em busca de desafios empolgantes.<br><br>
        Espero que aproveite este site tanto quanto eu me diverti criando-o. Se houver interesse em colaborar ou se
        tiver qualquer dúvida, não hesite em entrar em contato! Estou disponível para ajudar e discutir qualquer assunto
        em que eu possa contribuir.</p>
  </section>

  <!-- #endregion Texto por tras da logo -->

  <!--#region Livro portifólio  -->
  <section>
    <div class="book-container">
      <!--#region Checkboxes  -->
      <input type="checkbox" id="checkbox-cover">
      <input type="checkbox" id="checkbox-page0">
      <input type="checkbox" id="checkbox-page1">
      <input type="checkbox" id="checkbox-page2">
      <input type="checkbox" id="checkbox-page3">
      <input type="checkbox" id="checkbox-page4">
      <input type="checkbox" id="checkbox-page5">
      <input type="checkbox" id="checkbox-page6">
      <input type="checkbox" id="checkbox-page7">
      <!--#endregion Checkboxes  -->
      <div class="book">

        <!--#region Cover  -->
        <div class="cover" id="frontCover" style="backface-visibility:hidden; z-index: 11;">
          <label for="checkbox-cover" style="z-index: 11;"></label>
          <h2 style=" position: absolute; top: 1.5vw; font-size: 2.5vw;">-Portfólio de projetos-</h2>
          <img style="position: absolute; top: 10vw; height: 23vw;" src="./assets/images/ImagemCapa.png">
          <img style="position: absolute; top: 10vw; height: 23vw;" src="./assets/images/ImagemCapa.png">
        </div>
        <div class="book">
          <div class="cover">
            <label for="checkbox-cover"></label>
          </div>
          <!--#endregion Cover  -->

          <!--#region Page0 Introdução -->
          <div class="page" id="page0">
            <div class="front-page">
              <h2 class="page-title">-Portfólio de projetos-</h2>
              <p class="page-text">Bem-vindo(a) ao meu livro em constante crescimento de projetos! Aqui, reúno todos
                os
                meus trabalhos, acompanhados por breves resumos.<br><br>
                É como um registro vivo do meu percurso criativo e profissional, uma espécie de linha do tempo onde
                cada
                projeto conta uma história única do meu desenvolvimento pessoal.<br><br>
                Acredito sinceramente que essa é uma maneira bacana e até meio divertida de compartilhar o que tenho
                feito.<br><br>
              </p>
              <label class="next" for="checkbox-page0"><i class="fas fa-chevron-right"></i></label>
            </div>
            <div class="back-page">
              <label class="prev" for="checkbox-page0"><i class="fas fa-chevron-left"></i></label>
            </div>
          </div>
          <!--#endregion Page0  -->

          <!--#region Page1 Indice -->
          <div class="page" id="page1">
            <div class="front-page">
              <h2 class="page-title">-Indice-</h2>
              <p class="page-text">1. C#<br>
                ㅤ1.1 Gamejam - Projeto Aurora<br>
                ㅤ1.2 Jogo no console<br>
                ㅤ1.3 Buddy<br>
                <br>
                2. Javascript<br>
                ㅤ2.1 Minigames da Twitch<br>
                ㅤ2.2 Chatbot no Discord usando Chat GPT3<br>
                ㅤ2.3 AI Car<br>
                <br>
                3. Unity<br>
                ㅤ3.1 Gamejam - Projeto Aurora<br>
                <br>
                4. GameMaker<br>
                ㅤ4.1 Snow Hunting<br>
                <br>
                5. Photoshop<br>
                ㅤ5.1 Gamejam - Projeto Aurora<br>
                <br>
                6. HTML<br>
                ㅤ6.1 Minigames da Twitch<br>
                ㅤ6.2 Buddy<br>
                ㅤ6.3 AI Car<br>
                <br>
                7. CSS<br>
                ㅤ7.1 AI Car <br>
                <br>
                8. Python<br>
                ㅤ(Não foram fornecidos projetos específicos)<br>
                <br>
                9. Blender<br>
                ㅤ9.1 Gamejam - Projeto Aurora<br>
                <br>
                10. Visual Studio<br>
                ㅤ10.1 Snow Hunting<br>
                ㅤ10.2 Buddy<br>
                ㅤ10.3 Jogo no console<br>
                <br>
                11. Visual Studio Code<br>
                ㅤ11.1 Gamejam - Projeto Aurora<br>
                ㅤ11.2 Minigames da Twitch<br>
                ㅤ11.3 Chatbot no Discord usando Chat GPT3<br>
                ㅤ11.4 AI Car<br>
              </p>
              <label class="next" for="checkbox-page1"><i class="fas fa-chevron-right"></i></label>
            </div>
            <div class="back-page">
              <img src="./assets/images/GameJam-Aurora.png">
              <label class="prev" for="checkbox-page1"><i class="fas fa-chevron-left"></i></label>
            </div>
          </div>
          <!--#endregion Page1  -->

          <!--#region Page2 GameJam -->
          <div class="page" id="page2">
            <div class="front-page">
              <h2 class="page-title">-GameJam: Projeto Aurora-</h2>
              <p class="page-text">Primeira GameJam em que participei, independente de termos ganho, a quantidade de
                aprendizados e novas funções que tive que aprender foram imensas!</p>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/Csharp.png" style="width: 100%;">
                <h1 class="useds-text">C Sharp</h1>
              </div>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/Unity.png" style="width: 100%;">
                <h1 class="useds-text" style="right: 0vw;">Unity</h1>
              </div>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/Blender.png" style="width: 100%;">
                <h1 class="useds-text" style="right: 0.5vw;">Blender</h1>
              </div>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/Photoshop.png" style="width: 100%;">
                <h1 class="useds-text" style="right: 1.25vw;">Photoshop</h1>
              </div>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/VisualStudioCode.png" style="width: 100%;">
                <h1 class="useds-text" style="  width: 5vw; right: 1vw;">VS Code</h1>
              </div>
              <label class="next" for="checkbox-page2"><i class="fas fa-chevron-right"></i></label>
              <h1 class="page-number">1</h1z>
            </div>
            <div class="back-page">
              <img src="./assets/images/Projeto_Enigma.png">
              <label class="prev" for="checkbox-page2"><i class="fas fa-chevron-left"></i></label>
            </div>
          </div>
          <!--#endregion Page2  -->

          <!--#region Page3 Minigames Twitch -->
          <div class="page" id="page3">
            <div class="front-page">
              <h2 class="page-title">-Minigames na Twitch-</h2>
              <p class="page-text">Utilizando uma base de dados pré-definida, o bot seleciona um enigma aleatório e o
                apresenta aos espectadores, desafiando-os a encontrar a solução correta. <br>
                <br>
                Os espectadores podem responder aos enigmas diretamente no chat, e o bot verifica se a resposta está
                correta, concedendo recompensas aos
                jogadores que acertarem. Essas recompensas podem variar desde pontos no canal até prêmios
                personalizados, como destaque no chat ou brindes especiais.
              </p>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/JS.png" style="width: 100%;">
                <h1 class="useds-text">JavaScript</h1>
              </div>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/VisualStudioCode.png" style="width: 100%;">
                <h1 class="useds-text" style="  width: 5vw; right: 1vw;">VS Code</h1>
              </div>
              <label class="next" for="checkbox-page3"><i class="fas fa-chevron-right"></i></label>
              <h1 class="page-number">2</h1z>
            </div>
            <div class="back-page">
              <img src="./assets/images/GPT_Bot_2.png">
              <label class="prev" for="checkbox-page3"><i class="fas fa-chevron-left"></i></label>
            </div>
          </div>
          <!--#endregion Page3  -->

          <!--#region Page4 Chatbot Discord com GPT3 -->
          <div class="page" id="page4">
            <div class="front-page">
              <h2 class="page-title">-Chatbot no Discord usando Chat GPT3-</h2>
              <p class="page-text">Algo que se tornou incrivelmente útil para mim e meu ciclo de amizades, porém a API
                tem seus limites de uso, o que acabou por interromper o andamento do projeto.</p>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/JS.png" style="width: 100%;">
                <h1 class="useds-text">JavaScript</h1>
              </div>
              <div style="position: relative; display: inline-block; max-width: 2vw;">
                <img class="page-useds" src="./assets/images/VisualStudioCode.png" style="width: 100%;">
                <h1 class="useds-text" style="  width: 5vw; right: 1vw;">VS Code</h1>
              </div>
              <h1 class="page-number">3</h1z>

            </div>
          </div>
          <!--#endregion Page4  -->

          <!--#region Back Cover  -->
          <div class="back-cover"></div>
          <!--#endregion Cover  -->
        </div>
  </section>

  <!--#endregion Livro portifólio-->

  <!-- #region Faixa de manutenção -->

  <div class="maintenance" content="width=device-width, initial-scale=1.0">
    <h1 class="maintenance-text"> Em Progresso!</h1>
  </div>

  <!--#endregion Faixa de manutenção-->

  <!-- #region Projetos detalhados -->

  <div class="container">
    <div class="row">
      <div class="col-md-8">
        <h2>Meu Projeto</h2>
        <p>Aqui está o código do meu projeto:</p>
        <pre><code class="language-javascript">{
            
              window.addEventListener('load', function() {
                var fadeIns = document.getElementsByClassName("fade-in");
              
                for (var i = 0; i < fadeIns.length; i++) {
                  fadeIns[i].style.filter = "brightness(100%)";
                }
              });}
            </code></pre>
      </div>
    </div>
  </div>
  </div>

  <!-- #endregion Projetos detalhados-->

  <!-- #region Scripts -->



  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe"
    crossorigin="anonymous"></script>
  <script src="./Prism/prism.js"></script>
  <script>

    window.addEventListener('load', function () {
      var fadeIns = document.getElementsByClassName("fade-in");

      for (var i = 0; i < fadeIns.length; i++) {
        fadeIns[i].style.filter = "brightness(100%)";
      }
    });

    var image = document.getElementById("imageToRoll");
    var text = document.getElementById("text");
    var imageRolled = false;

    function rollImage() {
      if (!imageRolled) {
        image.style.transform = "translate(160%, -50%) rotate(360deg)";
        text.style.transform = "translate(10%, -50%)";
        text.style.transitionProperty = "transform, opacity";
        text.style.transitionDuration = "1.1s,1.5s";
        imageRolled = true;
        text.style.opacity = "1"; // Valor de opacidade desejado
      } else {
        image.style.transform = "translate(-50%, -50%)";
        text.style.transform = "translate(-100%, -50%)";
        imageRolled = false;
        text.style.opacity = "0"; // Valor de opacidade desejado
      }
    }

    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }

    function scrollToGraduations() {
      window.scrollTo({
        top: 1000,
        behavior: 'smooth'
      });
    }


    document.getElementById('checkbox-cover').addEventListener('change', function () {
      if (!this.checked && (document.getElementById('checkbox-page0').checked)) {
        // Aumentar o delay de transição dos elementos
        document.querySelectorAll('.book .cover').forEach(element => {
          element.style.transitionDuration = '1.2s'; // Ajuste o valor conforme necessário
          element.style.zIndex = '0';
        });

        document.querySelectorAll('.book #page0').forEach(element => {
          element.style.transitionDuration = '1s'; // Ajuste o valor conforme necessário
        });

        document.querySelectorAll('.book #page1').forEach(element => {
          element.style.transitionDuration = '0.8s'; // Ajuste o valor conforme necessário
        });

        document.querySelectorAll('.book #page2').forEach(element => {
          element.style.transitionDuration = '0.6s'; // Ajuste o valor conforme necessário
        });

        document.querySelectorAll('.book #page3').forEach(element => {
          element.style.transitionDuration = '0.4s'; // Ajuste o valor conforme necessário
        });


        // Fechar os elementos após o delay
        setTimeout(() => {
          document.querySelectorAll('.book .cover, .book .page').forEach(element => {
            element.style.zIndex = ''; // Restaura o valor do zIndex
            element.style.transitionDuration = '';
          });

          document.getElementById('frontCover').style.zIndex = '11';

        }, 300); // Ajuste o valor do atraso conforme necessário para corresponder ao valor do transition-delay

        // Desmarcar o checkbox de capa e a página 1
        document.querySelectorAll('[id^="checkbox"]').forEach(checkbox => {
          checkbox.checked = false;
        });

      }

    });

    let isDown = false;
    let startX;
    let lastCheckedId = null;
    let scrollLeft;

    const slider = document.querySelector('.book');

    slider.addEventListener('mousedown', (e) => {
      document.querySelectorAll('[id^="checkbox"]').forEach(checkbox => {
        if (checkbox.checked) {
          lastCheckedId = checkbox.id;
        }
      });
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
      isDown = false;
      slider.classList.remove('active');
    });

    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      if (!document.getElementById('checkbox-cover').checked) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = x - startX;
      const lastCheckbox = document.getElementById(lastCheckedId);
      if (lastCheckbox) {
        if (walk <= -20) {
          let i = parseInt(lastCheckedId.replace('checkbox-page', '')) + 1;
          if (lastCheckedId === 'checkbox-cover') {
            i = 0; // Trata o checkbox-page0 corretamente
          }
          while (i <= 3) {
            const nextCheckbox = document.getElementById('checkbox-page' + i);
            if (nextCheckbox) {
              nextCheckbox.checked = true;
              break;
            }
            i++;
          }
        } else if (walk >= 20) {
          lastCheckbox.checked = false;
        }
      }
    });



  </script>

  <!-- #endregion Scripts-->

</body>

<!-- #endregion Body -->

</html>`
      }
    ]
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
    repository: 'https://github.com/DPoveaa/Hachurados',
    codeSnippets: [
      {
        title: 'Script Player.cs',
        language: 'C#',
        code: `using System;
using System.Collections;
using System.Collections.Generic;
using System.Diagnostics;
using Unity.Burst.CompilerServices;
using UnityEngine;
using UnityEngine.UIElements;
using static UnityEngine.EventSystems.EventTrigger;

public class Player : MonoBehaviour
{
    #region vars

    #region Sounds

    public AudioSource hurtedSFX;

    #endregion

    #region

    public Animator animations;

    #endregion

    #region Another Scripts

    public GameManager gameManager;

    #endregion

    #region Components
    [Header("Components")]
    private CharacterController ct;
    private Rigidbody rb;
    #endregion

    #region Skull
    [Header("Skull Mechanics")]
    public Transform skull;
    public Animator skullFollow;
    #endregion

    #region Speed boost
    [Header("Speed Hability")]
    private float oldSpeed;
    private float effectSpeed = 10f;
    #endregion

    #region Movement
    [Header("Movement Mechanic")]
    private float rotationSpeed = 5f;
    private float horizontalInput;
    private float speed = 5f;

    #region Jump
    [Header("Jump Mechanic")]
    public float jumpForce;
    private float rayLength = 1.3f;
    private bool canJump;
    RaycastHit hit;
    #endregion

    #endregion

    #region Power
    [Header("Power Mechanics")]
    private bool powerState = false;
    public float staminaPenality;
    public float healthPenality;
    public float lightPenality;
    public Light worldLight;
    #endregion

    #region Heal && Stamina Bars
    [Header("Healt And Stamina Mechanics")]
    private bool resting;
    public float restingDelay;
    private float restCountdown;

    #endregion

    #region Receiving Damage
    [Header("Receiving Damage")]
    public float blinkDuration = 0.5f;
    private bool canReceive = true;
    public Material material;
    public Material material2;

    #endregion

    #region Attacking
    [SerializeField, Header("Attacking Values")]
    public float attackDelay;
    public Transform attackPoint;
    public float attackCountdown = 0;
    private Collider attackCheck;
    public LayerMask enemyLayers;
    private Melee melee;
    private Ranged ranged;
    private BoxDestroy box;
    public bool attacked;

    #endregion

    #endregion

    #region Void Start
    void Start()
    {
        #region GetComponent at start

        #region Movement
        ct = GetComponent<CharacterController>();
        rb = GetComponent<Rigidbody>();
        #endregion

        #region Attack

        attackCheck = GetComponent<BoxCollider>();

        #endregion

        #endregion

        #region GetValues at start

        #region Speed
        oldSpeed = speed;
        #endregion

        #region Player Color
        material.color = Color.white;
        material2.color = Color.white;
        #endregion

        #region

        worldLight.intensity = 1;

        #endregion

        #endregion

        #region InvokeRepeating

        #region Power Verification
        InvokeRepeating("PowerPenality", 0f, 0.2f);
        #endregion

        #region Rest Mode
        InvokeRepeating("RestMode", 0.2f, 0.2f);
        #endregion

        #endregion

    }
    #endregion

    #region Void FixedUpdate
    void FixedUpdate()
    {
        if (!GameManager.isPaused)
        {
            #region Movement Mechanic

            horizontalInput = Input.GetAxis("Horizontal");
            rb.velocity = new Vector2(horizontalInput * speed, rb.velocity.y);

            #region Rotation
            Vector3 movementInput = new Vector3(0, 0, horizontalInput);
            Vector3 movementDirection = movementInput.normalized;

            if (movementDirection != Vector3.zero)
            {
                Quaternion playerRotation = Quaternion.LookRotation(movementDirection, Vector3.up);
                animations.SetBool("Walking", true);
                transform.rotation = Quaternion.Slerp(transform.rotation, playerRotation, rotationSpeed * Time.deltaTime);
            } else
            {
                animations.SetBool("Walking", false);
            }

            #endregion

            #region Skull Following
            skullFollow.SetBool("Follow", horizontalInput != 0);
            #endregion

            #region Jump Mechanic
            if (Physics.Raycast(transform.position, Vector3.down, out hit, rayLength))
            {
                if (!hit.collider.CompareTag("Trap"))
                {
                    canJump = true;
                    animations.SetBool("Jump", false);
                }
            }
            else
            {
                canJump = false;
                animations.SetBool("Jump", false);
            }

            if (Input.GetButton("Jump") && canJump == true)
            {
                animations.SetBool("Jump",true);
                rb.AddForce(Vector3.up * jumpForce * 10);
            }
            #endregion

            #endregion
        }
    }
    #endregion

    #region Void Update
    private void Update()
    {
        if (!GameManager.isPaused)
        {
            #region Power Mechanic

            if (Input.GetMouseButtonDown(1))
            {
                if (!powerState)
                {
                    speed = effectSpeed;
                    powerState = true;
                    //attackSpeed = attackSpeed * 2;
                }
                else if (powerState)
                {
                    speed = oldSpeed;
                    powerState = false;
                }
            }
            #endregion

            #region Rest Check
            if (!powerState)
            {
                if (restCountdown < 5)
                {
                    restCountdown += Time.deltaTime;
                    resting = false;
                }
                if (restCountdown >= restingDelay && !resting)
                {
                    resting = true;
                    RestMode();
                }
            }
            else
            {
                restCountdown = 0f;
                resting = false;
            }
            #endregion

            #region Attack Mechanic
            if (attackCountdown > 0)
            {
                attackCountdown -= Time.deltaTime;
            }
            else if (Input.GetMouseButtonDown(0) && attackCountdown <= 0)
            {
                UnityEngine.Debug.Log("Attacked");
                attackCountdown = attackDelay;
                StartCoroutine(Attacking());
            }

            if (attackCountdown <= 0)
            {
                attacked = false;
            }
            #endregion

        }
    }
    #endregion

    #region On Collision
    public void OnCollisionEnter(Collision collision)
    {
        #region Collision With Arrow
        if (collision.gameObject.CompareTag("Arrow"))
        {
            DamageTaken(10, collision, null, 80, 10);
            Destroy(collision.gameObject);
        }

        if (collision.gameObject.CompareTag("Trap"))
        {
            DamageTaken(50, collision, null, 20, 0);
        }

        if (collision.gameObject.CompareTag("Limit"))
        {
            DamageTaken(110, collision, null, 0, 0);
        }
        #endregion
    }

    #endregion

    #region On Trigger

    public void OnTriggerEnter(Collider other)
    {

    }

    #endregion

    #region Functions

    #region Power Code Functions
    public void PowerPenality()
    {
        if (powerState)
        {
            if (gameManager.staminaAmount <= 50)
            {
                gameManager.TakeStamina(staminaPenality);
                if (worldLight.intensity >= 0.01f)
                {
                    worldLight.intensity = worldLight.intensity - lightPenality;
                }
            }
            if (gameManager.staminaAmount > 50)
            {
                gameManager.TakeStamina(staminaPenality);
            }
            if (gameManager.staminaAmount <= 0)
            {
                gameManager.TakeDamage(healthPenality);
            }
        }


    }
    #endregion

    #region Resting Functions

    public void RestMode()
    {
        if (resting && !powerState)
        {
            if (gameManager.staminaAmount >= 80 && worldLight.intensity < 1 && !GameManager.bossDead)
            {
                worldLight.intensity = worldLight.intensity + lightPenality;
                gameManager.Rest(5);
            }
            else if (gameManager.healthAmount < 100)
            {
                gameManager.Heal(1);
            }
            else if (gameManager.healthAmount >= 100)
            {
                gameManager.Rest(5);
            }

        }
    }

    #endregion

    #region Damage Functions

    #region Damage Taken
    public void DamageTaken(int damageAmount, Collision collision, Collider trigger, float knockbackForce, float upKnockBackForce)
    {
        if (canReceive)
        {
            canReceive = false;
            animations.SetBool("Hitted", true);
            gameManager.TakeDamage(damageAmount);
            hurtedSFX.Play();
            restCountdown = 0f;
            if (collision != null)
            {
                Vector3 damageDirection = (transform.position - collision.transform.position).normalized;
                Vector3 knockbackDirection = new Vector3(damageDirection.x, 0f, damageDirection.z) * 2;
                rb.AddForce(transform.up * upKnockBackForce, ForceMode.Impulse);
                rb.AddForce(knockbackDirection * knockbackForce, ForceMode.Impulse);
            }
            else if (trigger != null)
            {
                Vector3 damageDirection = (transform.position - trigger.transform.position).normalized;
                Vector3 knockbackDirection = new Vector3(damageDirection.x, 0f, damageDirection.z) * 2;
                rb.AddForce(transform.up * upKnockBackForce, ForceMode.Impulse);
                rb.AddForce(knockbackDirection * knockbackForce, ForceMode.Impulse);
            }

            StartCoroutine(Blink());
        }
    }
    #endregion

    #region Attack Delay

    private IEnumerator Attacking()
    {
        UnityEngine.Debug.Log("Coroutine");
        animations.SetBool("Attack", true);;
        yield return new WaitForSeconds(0.5f);
        Attack();
        yield return new WaitForSeconds(0.2f);
        animations.SetBool("Attack", false);
    }

    #endregion

    #region Blink
    private IEnumerator Blink()
    {
        float timer = 0f;

        while (timer < blinkDuration)
        {
            material.color = Color.red;
            material2.color = Color.red;
            yield return new WaitForSeconds(0.1f);
            material.color = Color.white;
            material2.color = Color.white;
            yield return new WaitForSeconds(0.1f);
            timer += 0.2f;
        }
        animations.SetBool("Hitted", false);
        canReceive = true;
    }

    #endregion

    #endregion

    #region Attack Functions

    public void Attack()
    {
        if (!attacked)
        {
            attacked = true;
            UnityEngine.Debug.Log("Coroutine");
            Collider[] hitCollider = Physics.OverlapBox(attackPoint.position, new Vector3(3f, 2f, 2f), new Quaternion(0, 0, 0, 0), enemyLayers);

            foreach (Collider objects in hitCollider)
            {
                if (objects.GetComponent<Melee>() != null)
                {
                    Melee melee = objects.GetComponent<Melee>();
                    melee.TakeDamage(1);
                }

                if (objects.GetComponent<Ranged>() != null)
                {
                    Ranged ranged = objects.GetComponent<Ranged>();
                    ranged.TakeDamage(1);
                }

                if (objects.GetComponent<General>() != null)
                {
                    General general = objects.GetComponent<General>();
                    general.TakeDamage(1);
                }

                if (objects.GetComponent<BoxDestroy>() != null)
                {
                    BoxDestroy box = objects.GetComponent<BoxDestroy>();
                    box.Brake();
                }
            }
        }
    }

    #endregion

    #endregion

    private void OnDrawGizmosSelected()
    {
        Gizmos.color = Color.red;
        Gizmos.DrawWireCube(attackPoint.position, new Vector3(3f, 2f, 2f));
    }
}`
      }
    ]
  }
];
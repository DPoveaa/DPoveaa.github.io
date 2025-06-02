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
    repository: 'https://github.com/DPoveaa/MercadoLivre-Afiliados',    
    codeSnippets: [
      {
        title: 'Scraper ML',
        language: 'Python',
        code: `from datetime import datetime, timedelta
import os
import re
import shlex
from tempfile import mkdtemp
from dotenv import load_dotenv
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from difflib import SequenceMatcher
from collections import deque
from Telegram.tl_enviar import send_telegram_message
import json
import unicodedata
from collections import deque
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from urllib.parse import urlparse, urlunparse
from selenium.common.exceptions import NoSuchElementException
import platform
from selenium.common.exceptions import WebDriverException
import undetected_chromedriver as uc
from webdriver_manager.chrome import ChromeDriverManager
import subprocess
import random
import time
import requests
import schedule
import sys

sys.stdout.reconfigure(line_buffering=True)

load_dotenv()

# Verifica se está em modo de teste
TEST_MODE = os.getenv("TEST_MODE", "false").lower() == "true"

print("Test Mode:", TEST_MODE)

# Telegram
TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN")
TELEGRAM_GROUP_ID = os.getenv("TELEGRAM_GROUP_ID_TESTE") if TEST_MODE else os.getenv("TELEGRAM_GROUP_ID")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID_TESTE") if TEST_MODE else os.getenv("TELEGRAM_CHAT_ID")

# WhatsApp
WHATSAPP_GROUP_NAME = os.getenv("WHATSAPP_GROUP_NAME_TESTE") if TEST_MODE else os.getenv("WHATSAPP_GROUP_NAME")

# Cookies do Mercado Livre
COOKIES = json.loads(os.getenv("ML_COOKIES"))

# Configurações gerais
if TEST_MODE:
    print("Modo de teste ativado, salvando em promocoes_teste.json")
    HISTORY_FILE = 'promocoes_teste.json'
else:
    HISTORY_FILE = 'promocoes_ml.json'
    print("Salvando em promocoes_ml.json")

TOP_N_OFFERS = int(os.getenv("TOP_N_OFFERS_TESTE") if TEST_MODE else os.getenv("TOP_N_OFFERS"))

MAX_HISTORY_SIZE = 200  # Mantém as últimas promoções
SIMILARITY_THRESHOLD = 0.95 # Limiar de similaridade mais restritivo

# Lista de URLs fornecida
OFFER_URLS = [
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779543-1&domain_id=MLB-PERFUMES#filter_applied=domain_id&filter_position=18&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779540-1&domain_id=MLB-WELDING_MACHINES$MLB-TOOLS$MLB-WELDING_BLOWTORCHES$MLB-WELDING_RODS$MLB-DRILLS_SCREWDRIVERS$MLB-ELECTRIC_DRILLS$MLB-DRILL_BITS$MLB-POWER_GRINDERS$MLB-COMBINED_TOOL_SETS$MLB-ELECTRIC_CIRCULAR_SAWS$MLB-TOOL_ACCESSORIES_AND_SPARES$MLB-WRENCHES$MLB-WRENCH_SETS#filter_applied=domain_id&filter_position=15&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779539-1&domain_id=MLB-TELEVISIONS#filter_applied=domain_id&filter_position=14&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB773331-2#filter_applied=container_id&filter_position=13&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779538-1&domain_id=MLB-HEADPHONES#filter_applied=domain_id&filter_position=12&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779536-1&domain_id=MLB-NOTEBOOKS#filter_applied=domain_id&filter_position=11&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779535-1&domain_id=MLB-CELLPHONES#filter_applied=domain_id&filter_position=10&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779544-1&domain_id=MLB-SWEATSHIRTS_AND_HOODIES$MLB-PANTS$MLB-JACKETS_AND_COATS$MLB-T_SHIRTS$MLB-SOCKS$MLB-MALE_UNDERWEAR$MLB-SPORTSWEAR$MLB-LEGGINGS$MLB-DRESSES$MLB-LOAFERS_AND_OXFORDS$MLB-BLOUSES$MLB-SHIRTS$MLB-WRISTWATCHES$MLB-SUNGLASSES#filter_applied=domain_id&filter_position=8&is_recommended_domain=true&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779537-1&domain_id=MLB-SNEAKERS#filter_applied=domain_id&filter_position=7&is_recommended_domain=true&origin=scut",
    "https://www.mercadolivre.com.br/mais-vendidos/MLB5726#origin=home", # Eletrodomésticos
    "https://www.mercadolivre.com.br/mais-vendidos/MLB1430#origin=home", # Calçados, Roupas e Bolsas
    "https://www.mercadolivre.com.br/mais-vendidos/MLB1000#origin=home", # Eletrônicos, Áudio e Vídeo
    "https://www.mercadolivre.com.br/mais-vendidos/MLB1246#origin=home", # Beleza e Cuidado Pessoal
    "https://www.mercadolivre.com.br/mais-vendidos/MLB1648#origin=home", # Informática
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779542-1&domain_id=MLB-SPEAKERS#filter_applied=domain_id&filter_position=15&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB779362-1&price=0.0-100.0#filter_applied=price&filter_position=6&is_recommended_domain=false&origin=scut",
    "https://www.mercadolivre.com.br/ofertas?container_id=MLB783320-1&domain_id=MLB-SUPPLEMENTS#filter_applied=domain_id&filter_position=3&is_recommended_domain=true&origin=scut"
]

# Arquivo para armazenar os links já utilizados
USED_URLS_FILE = 'used_urls_ml.json'

FORCE_RUN_ON_START = os.getenv("FORCE_RUN_ON_START", "false").lower() == "true"

def load_used_urls():
    """Carrega a lista de URLs já utilizadas do arquivo"""
    try:
        with open(USED_URLS_FILE, 'r') as f:
            return set(json.load(f))
    except (FileNotFoundError, json.JSONDecodeError):
        return set()

def save_used_urls(used_urls):
    """Salva a lista de URLs já utilizadas no arquivo"""
    with open(USED_URLS_FILE, 'w') as f:
        json.dump(list(used_urls), f)

def get_rotated_urls():
    """Retorna 3 URLs aleatórias da lista de ofertas, evitando repetição"""
    used_urls = load_used_urls()
    
    # Se todos os links já foram usados, limpa o histórico
    if len(used_urls) >= len(OFFER_URLS):
        log("Todos os links foram utilizados. Reiniciando histórico...")
        used_urls.clear()
        save_used_urls(used_urls)
    
    # Filtra apenas os links não utilizados
    available_urls = [url for url in OFFER_URLS if url not in used_urls]
    
    # Se não houver links suficientes, usa todos os links disponíveis
    num_urls = min(3, len(available_urls))
    
    # Escolhe aleatoriamente os links
    selected_urls = random.sample(available_urls, num_urls)
    
    # Adiciona os links selecionados ao histórico
    used_urls.update(selected_urls)
    save_used_urls(used_urls)
    
    log(f"Links selecionados: {len(selected_urls)} de {len(available_urls)} disponíveis")
    return selected_urls

def is_similar(a: str, b: str, thresh: float = SIMILARITY_THRESHOLD) -> bool:
    score = SequenceMatcher(None, a, b).ratio()
    return score >= thresh
    
# Função para carregar o histórico de promoções
def load_promo_history() -> deque:
    try:
        with open(HISTORY_FILE, 'r') as f:
            nomes = json.load(f)
        return deque(nomes, maxlen=MAX_HISTORY_SIZE)
    except (FileNotFoundError, json.JSONDecodeError):
        return deque(maxlen=MAX_HISTORY_SIZE)

# Função para salvar o histórico
def save_promo_history(history: deque):
    with open(HISTORY_FILE, 'w') as f:
        json.dump(list(history), f)

# Variável global para armazenar promoções já enviadas
sent_promotions = load_promo_history()

def log(message):
    """Função para logging com timestamp"""
    timestamp = time.strftime("%Y-%m-%d %H:%M:%S")
    print(f"[{timestamp}] {message}")

def init_driver():
    log("Inicializando navegador com undetected-chromedriver...")

    options = uc.ChromeOptions()
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--disable-gpu')
    options.add_argument('--disable-extensions')
    options.add_argument('--window-size=1920,1080')
    options.add_argument("--start-minimized")
    options.add_argument('--disable-blink-features=AutomationControlled')
    
    # Configurações específicas por sistema operacional
    if platform.system() == 'Linux':
        # Caminhos padrão para Linux
        browser_executable_path = '/usr/bin/google-chrome'  # ou '/usr/bin/chromium-browser'
        if not os.path.exists(browser_executable_path):
            # Tenta encontrar o Chrome em outros locais comuns no Linux
            browser_executable_path = '/usr/bin/chromium-browser' if os.path.exists('/usr/bin/chromium-browser') else None
    else:
        # Windows - geralmente o Chrome está no PATH
        browser_executable_path = None
    
    try:
        driver = uc.Chrome(
            options=options,
            headless=False,
            driver_executable_path=ChromeDriverManager().install(),
            browser_executable_path=browser_executable_path
        )
        log("Navegador stealth iniciado")
        return driver
    except Exception as e:
        log(f"Erro ao iniciar o navegador: {str(e)}")
        # Tentativa alternativa sem especificar o caminho do navegador
        try:
            driver = uc.Chrome(
                options=options,
                headless=False,
                driver_executable_path=ChromeDriverManager().install()
            )
            log("Navegador stealth iniciado (sem browser_executable_path)")
            return driver
        except Exception as e2:
            log(f"Erro na tentativa alternativa: {str(e2)}")
            raise

def run_whatsapp_auth():
    """Executa o processo de autenticação do WhatsApp"""
    log("Iniciando autenticação do WhatsApp...")
    auth_args = [
        "node",
        os.path.join("Whatsapp", "wpp_auth.js")
    ]
    
    try:
        # Executa o auth e aguarda conclusão
        subprocess.run(auth_args, check=True, timeout=300)  # 10 minutos para autenticar
        log("Autenticação do WhatsApp concluída com sucesso!")
        
    except subprocess.CalledProcessError as e:
        log(f"Falha na autenticação: {str(e)}")
        raise Exception("Erro crítico na autenticação do WhatsApp")
        
    except subprocess.TimeoutExpired:
        log("Tempo excedido para autenticação do WhatsApp")
        raise Exception("Timeout na autenticação")

def add_cookies(driver):
    """Adiciona cookies com verificação"""
    try:
        driver.get('https://www.mercadolivre.com.br')
        time.sleep(random.uniform(2, 4))
        
        # Limpa cookies antigos
        driver.delete_all_cookies()
        
        for cookie in COOKIES:
            try:
                # Verifica se o domínio está correto
                if 'mercadolivre.com.br' in cookie['domain']:
                    driver.add_cookie(cookie)
                    log(f"Cookie {cookie['name']} adicionado")
                    time.sleep(0.5)
            except Exception as e:
                log(f"Erro ao adicionar cookie {cookie['name']}: {str(e)}")
        
        # Verifica login
        driver.refresh()
        time.sleep(random.uniform(2, 4))
        if "Login" in driver.title:
            raise Exception("Falha no login - cookies inválidos")
            
    except Exception as e:
        log(f"ERRO crítico nos cookies: {str(e)}")
        raise
    
def get_top_offers(driver):
    """Coleta top 5 ofertas de cada URL na lista"""
    all_offers = []
    
    # Usa apenas 3 URLs rotacionadas
    urls_to_process = get_rotated_urls()
    
    for url in urls_to_process:
        try:
            log(f"\nAcessando categoria: {url}")
            driver.get(url)
            
            # Espera inicial combinada com delay
            WebDriverWait(driver, 20).until(
                EC.presence_of_element_located((By.CSS_SELECTOR, '.andes-card.poly-card'))
            )
            time.sleep(random.uniform(2, 4))
            
            # Scroll dinâmico para carregar mais itens
            last_height = driver.execute_script("return document.body.scrollHeight")
            for _ in range(3):
                driver.execute_script("window.scrollTo(0, document.body.scrollHeight);")
                time.sleep(random.uniform(1.5, 2.5))
                new_height = driver.execute_script("return document.body.scrollHeight")
                if new_height == last_height:
                    break
                last_height = new_height
            
            # Coleta de cards
            cards = driver.find_elements(By.CSS_SELECTOR, '.andes-card.poly-card')
            log(f"Encontrados {len(cards)} produtos na categoria")
            
            # Processamento dos cards
            category_offers = []
            for card in cards:
                try:
                    discount = card.find_element(By.CSS_SELECTOR, '.andes-money-amount__discount').text.replace('% OFF', '')
                    discount_value = float(discount)
                    
                    # Só adiciona se o desconto for maior que 10%
                    if discount_value > 5:
                        link = card.find_element(By.CSS_SELECTOR, 'a.poly-component__title').get_attribute('href')
                        title = card.find_element(By.CSS_SELECTOR, 'a.poly-component__title').text.strip()
                        
                        # Verifica se já existe um produto similar na lista atual
                        if not any(is_similar(title, offer['title']) for offer in category_offers):
                            category_offers.append({
                                'discount': discount_value,
                                'url': link,
                                'title': title,
                                'category': url.split('domain_id=')[1].split('&')[0] if 'domain_id=' in url else 'unknown'
                            })
                except Exception as e:
                    continue
            
            # Seleciona top 5 da categoria
            top_category = sorted(category_offers, key=lambda x: x['discount'], reverse=True)[:TOP_N_OFFERS]
            all_offers.extend(top_category)
            
            log(f"Top {TOP_N_OFFERS} coletados: {[item['discount'] for item in top_category]}")
            
            # Intervalo aleatório entre categorias
            time.sleep(random.uniform(5, 10))
            
        except Exception as e:
            log(f"Falha na categoria {url}: {str(e)}")
            continue
    
    # Ordena todos os resultados e pega os Top N globais (se necessário)
    final_top = sorted(all_offers, key=lambda x: x['discount'], reverse=True)
    
    # Filtra produtos similares da lista final
    filtered_offers = []
    for offer in final_top:
        if not any(is_similar(offer['title'], existing['title']) for existing in filtered_offers):
            filtered_offers.append(offer)
    
    return [item['url'] for item in filtered_offers]
    
def get_product_details(driver, url, max_retries=3):
    """Extrai detalhes do produto com tentativas em caso de erro"""
    for attempt in range(1, max_retries + 1):
        try:
            log(f"Tentativa {attempt} para extrair produto: {url}")
            driver.get(url)
            time.sleep(random.uniform(3, 5))

            # Extrai link de afiliado
            affiliate_link = ""
            try:
                generate_button = driver.find_element(By.CSS_SELECTOR, 'button[data-testid="generate_link_button"]')
                generate_button.click()
                time.sleep(random.uniform(1.5, 2.5))
                for _ in range(50):
                    textarea = driver.find_element(By.CSS_SELECTOR, 'textarea[data-testid="text-field__label_link"]')
                    if textarea.get_attribute("value"):
                        affiliate_link = textarea.get_attribute("value").strip()
                        break
                    time.sleep(random.uniform(0.5, 1.5))
                
                if not affiliate_link:
                    raise Exception("Link de afiliado não gerado")
                    
            except Exception as e:
                log(f"Erro ao gerar link de afiliado: {e}")
                if attempt < max_retries:
                    log(f"Tentando novamente... (Tentativa {attempt + 1}/{max_retries})")
                    continue
                else:
                    log("Número máximo de tentativas atingido. Pulando produto.")
                    return None, None, None

            # Título do produto
            product_title = driver.find_element(By.CSS_SELECTOR, "h1.ui-pdp-title").text

            # Tipo de promoção
            promotion_type = ""
            for tag in driver.find_elements(By.CLASS_NAME, "ui-pdp-promotions-pill-label"):
                txt = tag.text.upper()
                if "OFERTA DO DIA" in txt:
                    promotion_type = "🔥 *OFERTA DO DIA*"
                    break
                if "OFERTA RELÂMPAGO" in txt:
                    promotion_type = "⚡ *OFERTA RELÂMPAGO*"
                    break

            # Avaliações
            rating, rating_count = "Sem avaliações", ""
            try:
                rev = driver.find_element(By.CLASS_NAME, "ui-pdp-review__label")
                rating = rev.find_element(By.CLASS_NAME, "ui-pdp-review__rating").text.strip()
                rating_count = rev.find_element(By.CLASS_NAME, "ui-pdp-review__amount").text.strip().strip('()')
            except:
                pass

            # Preços
            def parse_price(selector):
                try:
                    block = driver.find_element(By.CSS_SELECTOR, selector)
                    frac = block.find_element(By.CLASS_NAME, "andes-money-amount__fraction").text
                    cents = block.find_elements(By.CLASS_NAME, "andes-money-amount__cents")
                    cents_text = cents[0].text if cents else "00"
                    return f"{frac},{cents_text}"
                except NoSuchElementException:
                    return None

            original_price = parse_price(".ui-pdp-price__original-value")
            current_price = parse_price(".ui-pdp-price__second-line") or "Preço não encontrado"

            # Desconto
            try:
                discount_text = driver.find_element(By.CSS_SELECTOR, ".andes-money-amount__discount").text
            except:
                discount_text = ""

            # Cupom
            coupon_message = ""
            try:
                cup = driver.find_element(By.CSS_SELECTOR, ".ui-pdp-promotions-label__text").text
                m = re.search(r"(\d+%|R\$\d+)\s+OFF", cup)
                if m:
                    coupon_message = f"🎟️ Cupom de {m.group(0)} disponível nesta compra!"
            except:
                pass

            # Imagem — força retry se vazio
            image_url = driver.find_element(
                By.CSS_SELECTOR, ".ui-pdp-image.ui-pdp-gallery__figure__image"
            ).get_attribute("src")
            if not image_url:
                raise Exception("Imagem não encontrada")
            
            # Parcelamento — tenta sempre coletar Mercado Pago e o 1º bloco de "Outros cartões"
            installment_lines = []
            try:
                pay_link_elem = driver.find_element(
                    By.XPATH, "//a[contains(text(), 'Ver os meios de pagamento')]"
                )
                pay_link = pay_link_elem.get_attribute("href")
                driver.get(pay_link)
                WebDriverWait(driver, 10).until(
                    EC.presence_of_element_located((By.CSS_SELECTOR, ".ui-pdp-container__row--credit-card"))
                )
                container = driver.find_element(By.CSS_SELECTOR, ".ui-pdp-container__row--credit-card")
                titles = container.find_elements(By.CSS_SELECTOR, "p.ui-vip-payment_methods__title")

                found_others = False
                captured_others = False

                for title in titles:
                    full_text = title.text.strip()
                    lower = full_text.lower()

                    if "mercado pago" in lower:
                        label = "*Com Mercado Pago*"
                    elif not captured_others:
                        label = "*Outros cartões*"
                        # Se for "sem juros", marcar prioridade
                        if "sem juros" in lower:
                            found_others = True
                            captured_others = True
                        elif not found_others:
                            # salva com juros, mas só se ainda não temos "sem juros"    
                            captured_others = True
                        else:
                            continue
                    else:
                        continue

                    info = (
                        full_text
                        .replace("Até ", "")
                        .replace("com cartão Mercado Pago", "")
                        .replace("com estes cartões", "")
                        .replace("Ou até ", "")
                        .replace("com acréscimo", "com juros")
                        .strip()
                    )

                    installment_lines.append(f"- {label}: {info}")

                driver.back()
                time.sleep(1)
            except Exception as e:
                log(f"Erro ao coletar parcelamento diretamente: {e}")
                raise

            installment_text = (
                "💳 *Parcelamentos:*\n" + "\n".join(installment_lines)
                if installment_lines else ""
            )

            # Monta mensagem final
            parts = [f"🟡 *Mercado Livre*", f"🏷️ *{product_title[:150]}*"]
            if promotion_type:
                parts.append(
                    f"{promotion_type} - *{discount_text.upper()}!* 📉"
                    if discount_text else promotion_type
                )
            elif discount_text:
                parts.append(f"📉 *Desconto de {discount_text}*")
            if rating:
                parts.append(
                    f"⭐ *{rating}* ({rating_count} avaliações)"
                    if rating_count else f"⭐ *{rating}*"
                )
            if original_price:
                parts.append(f"💸 *De:* R$ {original_price}")
            if current_price and "não encontrado" not in current_price.lower():
                parts.append(f"💥 *Por apenas:* R$ {current_price}")
            if installment_text:
                parts.append(installment_text)
            if coupon_message:
                parts.append(coupon_message)

            parts.append(f"🛒 *Garanta agora:*\n🔗 {affiliate_link}")

            return product_title, "\n\n".join(parts), image_url

        except Exception as e:
            log(f"Erro ao extrair detalhes (tentativa {attempt}/{max_retries}): {e}")
            time.sleep(random.uniform(2, 4))

    log(f"Falha definitiva ao extrair dados do produto após {max_retries} tentativas: {url}")
    return None, None, None

def check_promotions():
    log("Iniciando verificação de promoções...")
    driver = None
    try:
        driver = init_driver()
        add_cookies(driver)

        product_urls = get_top_offers(driver)
        if not product_urls:
            log("Nenhuma oferta encontrada")
            return

        # Coleta nomes já enviados
        sent_names = set(sent_promotions)  # já estão normalizados no arquivo

        run_whatsapp_auth()
        for url in product_urls:
            log(f"Processando promoção: {url}")
            try:
                product_title, message, image_url = get_product_details(driver, url)
                if not message:
                    continue

                if any(is_similar(product_title, sent) for sent in sent_names):
                    log(f"Produto muito parecido com um já enviado: {product_title}")
                    continue

                # Envia para Telegram
                telegram_success = True
                if image_url:
                    try:
                        telegram_success = send_telegram_message(
                            message=message,
                            image_url=image_url,
                            bot_token=TELEGRAM_BOT_TOKEN,
                            chat_id=TELEGRAM_GROUP_ID
                        )
                    except Exception as e:
                        log(f"Erro ao enviar com foto para Telegram: {str(e)}")

                # Envia para WhatsApp se o Telegram foi bem sucedido
                if telegram_success:
                    try:
                        grupo_nome = WHATSAPP_GROUP_NAME
                        log(f"Iniciando envio para WhatsApp - Grupo: {grupo_nome}")
                        
                        # Verifica se o grupo está definido
                        if not grupo_nome:
                            raise Exception("Nome do grupo do WhatsApp não definido no .env")
                            
                        args = [
                            "node",
                            os.path.join("Whatsapp", "wpp_enviar.js"),
                            message,
                            grupo_nome,
                            image_url or ""
                        ]
                        
                        log(f"Executando comando: {' '.join(args)}")
                        
                        # Executa o comando com timeout e captura a saída
                        result = subprocess.run(
                            args,
                            capture_output=True,
                            text=True,
                            timeout=300  # 5 minutos de timeout
                        )
                        
                        if result.returncode != 0:
                            log(f"❌ Erro no script Node.js: {result.stderr}")
                            raise subprocess.CalledProcessError(result.returncode, args, result.stdout, result.stderr)
                            
                        log("✅ Enviado ao WhatsApp com sucesso.")
                        if not TEST_MODE:
                            sent_promotions.append(product_title)
                            save_promo_history(sent_promotions)
                            log("Produto salvo no histórico.")
                        else:
                            log("⚠️ Modo teste ativado - Produto não será salvo no histórico")

                    except subprocess.TimeoutExpired:
                        log("❌ Timeout ao executar o script Node.js (5 minutos)")
                    except subprocess.CalledProcessError as e:
                        log(f"❌ Erro ao executar o script Node.js: {e.stderr if e.stderr else str(e)}")
                    except Exception as e:
                        log(f"❌ Erro inesperado ao enviar para WhatsApp: {str(e)}")
                else:
                    log("Falha ao enviar para Telegram - Pulando WhatsApp")

            except Exception as e:
                log(f"Erro no processamento da promoção: {str(e)}")

    except Exception as e:
        log(f"ERRO durante a verificação: {str(e)}")
    finally:
        if driver:
            log("Fechando o navegador...")
            driver.quit()

def schedule_scraper():
    """Configura e inicia o agendamento do scraper."""
    print("Iniciando agendamento do scraper...")
    
    if TEST_MODE:
        print("Modo de teste ativado - Executando imediatamente e a cada hora")
        check_promotions()
        schedule.every(1).hours.do(check_promotions)
    else:
        print("Modo normal - Agendando para horarios com final 30")
        # Executa imediatamente se forçado
        if FORCE_RUN_ON_START:
            print("Execução imediata forçada pelo .env")
            check_promotions()
        # Agenda para executar a cada hora, começando às 12:30
        schedule.every().day.at("12:30").do(check_promotions)
        schedule.every().day.at("13:30").do(check_promotions)
        schedule.every().day.at("14:30").do(check_promotions)
        schedule.every().day.at("15:30").do(check_promotions)
        schedule.every().day.at("16:30").do(check_promotions)
        schedule.every().day.at("17:30").do(check_promotions)
        schedule.every().day.at("18:30").do(check_promotions)
        schedule.every().day.at("19:30").do(check_promotions)
        schedule.every().day.at("20:30").do(check_promotions)
        schedule.every().day.at("21:30").do(check_promotions)
        schedule.every().day.at("22:30").do(check_promotions)
        schedule.every().day.at("23:30").do(check_promotions)
        schedule.every().day.at("00:30").do(check_promotions)
        schedule.every().day.at("01:30").do(check_promotions)
        schedule.every().day.at("02:30").do(check_promotions)
        schedule.every().day.at("03:30").do(check_promotions)
        schedule.every().day.at("04:30").do(check_promotions)
        schedule.every().day.at("05:30").do(check_promotions)
        schedule.every().day.at("06:30").do(check_promotions)
        schedule.every().day.at("07:30").do(check_promotions)
        schedule.every().day.at("08:30").do(check_promotions)
        schedule.every().day.at("09:30").do(check_promotions)
        schedule.every().day.at("10:30").do(check_promotions)
        schedule.every().day.at("11:30").do(check_promotions)
    
    # Mantém o script rodando
    while True:
        try:
            schedule.run_pending()
            time.sleep(60)  # Verifica a cada minuto se há tarefas pendentes
        except KeyboardInterrupt:
            print("\nEncerrando o scraper...")
            break
        except Exception as e:
            print(f"Erro no agendamento: {e}")
            time.sleep(60)  # Espera 1 minuto antes de tentar novamente

if __name__ == "__main__":
    schedule_scraper()`
      }
    ]
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
    repository: 'https://github.com/MatheusBoaventura/freelancer-telegram',
    codeSnippets: [
      {
        title: 'Script Main.js',
        language: 'JavaScript',
        code: `import { ensureDatabaseExists } from "./data/manager.js";
import { bot } from "./services/Telegram.js";
import { initializeChildBots } from "./Templates/childBot.js";

bot.on("polling_error", (error) => {
  console.error("Erro completo de polling:", error);  // Log completo do erro
  console.error("Polling error (código):", error.code || 'Código indefinido');
  console.error("Polling error (mensagem):", error.message || 'Mensagem indefinida');
  console.error("Polling error (corpo):", error.response?.body || 'Nenhuma resposta do corpo');
});

process.on("uncaughtException", (err) => {
  console.error("Erro não tratado:", err);
});

ensureDatabaseExists();

// Inicializa os bots filhos assim que o script for executado
initializeChildBots();

console.log("Bot funcioando e pronto para uso");
`
      }
    ]
  }  
];
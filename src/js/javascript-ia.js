// Criando um array de objetos com as informações de cada personagem
const personagens = [
    {
      id: "ciclope",
      nome: "Ciclope",
      descricao:
        "Ele tem o poder de disparar rajadas opticas por um acidente que aconteceu com ele quando criança, mas não consegue controlá-los",
      imagem: "./src/imagens/card-ciclope.png",
    },
    {
      id: "jean-grey",
      nome: "Jean Grey",
      descricao:
        "Ela é uma poderosa telepata e telecinética, capaz de ler mentes, mover objetos com a força do pensamento e manipular a energia psíquica",
      imagem: "./src/imagens/card-jean-grey.png",
    },
    {
      id: "lince-negra",
      nome: "Lince Negra",
      descricao:
        "Ela tem a habilidade de atravessar objetos sólidos, alterando a sua densidade molecular, e também pode caminhar sobre o ar",
      imagem: "./src/imagens/card-lince-negra.png",
    },
    {
      id: "tempestade",
      nome: "Tempestade",
      descricao:
        "Ela pode controlar o clima, gerando fenômenos como chuva, vento, neve, raios e trovões, além de voar usando as correntes de ar",
      imagem: "./src/imagens/card-tempestade.png",
    },
    {
      id: "vampira",
      nome: "Vampira",
      descricao:
        "Ela pode absorver temporariamente os poderes, memórias e personalidade de qualquer ser vivo com um simples toque, mas também pode deixá-lo inconsciente ou até mesmo matá-lo se o contato for prolongado",
      imagem: "./src/imagens/card-vampira.png",
    },
    {
      id: "wolverine",
      nome: "Wolverine",
      descricao:
        "Ele possui garras retráteis de adamantium, um metal indestrutível, em cada mão, além de um fator de cura acelerado que lhe permite regenerar qualquer ferimento e resistir a doenças e venenos",
      imagem: "./src/imagens/card-wolverine.png",
    },
    {
      id: "noturno",
      nome: "Noturno",
      descricao:
        "Ele tem a aparência de um demônio azul, com cauda, chifres e três dedos em cada mão e pé. Ele pode se teleportar para qualquer lugar que consiga ver ou que já tenha visitado antes, além de se camuflar nas sombras",
      imagem: "./src/imagens/card-noturno.png",
    },
    {
      id: "magneto",
      nome: "Magneto",
      descricao:
        "Ele é capaz de gerar e controlar campos magnéticos, podendo manipular qualquer tipo de metal, desde moedas até pontes e satélites. Ele também pode voar e criar escudos de força magnética",
      imagem: "./src/imagens/card-magneto.png",
    },
  ];
  
  // Selecionando os elementos do DOM que serão manipulados
  const listaDePersonagens = document.querySelector(".lista-de-personagens");
  const personagemSelecionado = document.querySelector(".personagem-selecionado");
  const personagemGrande = document.querySelector(".personagem-grande");
  const nomePersonagem = document.querySelector("#nome-personagem");
  const descricaoPersonagem = document.querySelector("#descricao-personagem");
  
  // Criando uma função que recebe um personagem e atualiza o conteúdo da seção personagem-selecionado com as suas informações
  function mostrarPersonagem(personagem) {
    personagemGrande.src = personagem.imagem;
    nomePersonagem.innerHTML = personagem.nome;
    descricaoPersonagem.innerHTML = personagem.descricao;
  }
  
  // Criando uma função que recebe um evento e verifica se o elemento sobre o qual o mouse passou é um personagem da lista. Se for, ele remove a classe selecionado de todos os personagens e adiciona somente ao elemento sobre o qual o mouse passou. Em seguida, ele procura no array de personagens o objeto que corresponde ao elemento sobre o qual o mouse passou e chama a função mostrarPersonagem com esse objeto como argumento.
  function refletirPersonagem(evento) {
    const elementoSobreposto = evento.target;
    if (elementoSobreposto.classList.contains("personagem")) {
      const todosOsPersonagens = document.querySelectorAll(".personagem");
      for (let personagem of todosOsPersonagens) {
        personagem.classList.remove("selecionado");
      }
      elementoSobreposto.classList.add("selecionado");
      const idDoPersonagem = elementoSobreposto.id;
      const personagemEncontrado = personagens.find(
        (personagem) => personagem.id === idDoPersonagem
      );
      mostrarPersonagem(personagemEncontrado);
    }
  }
  
  // Adicionando um evento de mouseover à lista de personagens e chamando a função refletirPersonagem quando o evento ocorrer. Usando a opção passive: true para indicar que o evento não vai cancelar o comportamento padrão do navegador e melhorar a performance do código.
  listaDePersonagens.addEventListener("mouseover", refletirPersonagem, {passive: true});
  
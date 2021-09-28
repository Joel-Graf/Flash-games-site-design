var app = new Vue({
  el: "#app",
  data: {
    games: [
      {
        id: 0,
        name: "Jogo da Forca",
        description:
          "Tente adivinhar palavras relacionadas à língua portuguesa! Clique sobre as letras para tentar formar a palavra sorteada. Você pode cometer no máximo 10 erros.",
        image: "hangman.jpg",
        enabled: true,
      },
      {
        id: 1,
        name: "Campo Minado",
        description:
          "Descubra a onde estão localizadas todas as minas presentes neste jogo de campo minado. Nele é necessário ter raciocínio e contar com a sorte para não perder logo de início.",
        image: "minesweep.png",
        enabled: false,
      },
      {
        id: 2,
        name: "Mini Golfe",
        description:
          "Jogue a melhor simulação de Minigolfe online!! 18 buracos para se divertir com seus amigos, seja o melhor no placar mundial.",
        image: "minigolf.jpg",
        enabled: false,
      },
      {
        id: 3,
        name: "Pong",
        description:
          "O clássico dos arcades! Jogo online ou contra o computador.",
        image: "pong.jpg",
        enabled: false,
      },
    ],
  },
});

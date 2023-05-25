//imagens do jogo
let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;
let imagemDoCarro2;
let imagemDoCarro3;
let imagemDoCarro4;
let imagemDoCarro5;
let imagemDoCarro6;
let imagemCarros = [];

//sons do jogo
let somDaTrilha;;
let somDaColisao;
let somDoPonto;

function preload(){
  imagemDaEstrada = loadImage("material/estrada.png");
  imagemDoAtor = loadImage("material/ator-1.png");
  imagemDoCarro = loadImage("material/carro-1.png");
  imagemDoCarro2 = loadImage("material/carro-2.png");
  imagemDoCarro3 = loadImage("material/carro-3.png");
  imagemDoCarro4 = loadImage("material/carro-1 - Inverso.png");
  imagemDoCarro5 = loadImage("material/carro-2 - Inverso.png");
  imagemDoCarro6 = loadImage("material/carro-3 - Inverso.png");
  imagemCarros = [imagemDoCarro, imagemDoCarro2, imagemDoCarro3,imagemDoCarro4, imagemDoCarro5, imagemDoCarro6];
  somDaTrilha = loadSound("sons/trilha.mp3");
  somDaColisao = loadSound("sons/colidiu.mp3");
  somDoPonto = loadSound("sons/pontos.wav");
}
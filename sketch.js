let imagemDaEstrada;
let imagemDoAtor;
let imagemDoCarro;

//Posições
let xCarro = 600;
let yAtor = 365;

function preload(){
  imagemDaEstrada = loadImage("material/estrada.png")
  imagemDoAtor = loadImage("material/ator-1.png")
  imagemDoCarro = loadImage("material/carro-1.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  mostraMouse();
  movimentaCarro();
  movimentaAtor();
}

function mostraMouse(){
  ellipse(mouseX,mouseY,15);
}

function mostraAtor(){
  image(imagemDoAtor, 100, yAtor, 30, 30);
}

function mostraCarro(){
  image(imagemDoCarro, xCarro, 46, 50, 30);
}

function movimentaCarro(){
  xCarro -= 3;
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    yAtor += 3;
  }
}
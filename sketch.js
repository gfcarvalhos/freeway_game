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
  voltaPosicaoInicialDoCarro()
  verificaColisao();
  incluiPontos();
  marcaPonto();
}

function mostraMouse(){
  ellipse(mouseX,mouseY,15);
}

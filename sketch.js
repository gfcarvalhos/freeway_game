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
}

function mostraMouse(){
  ellipse(mouseX,mouseY,15);
}

//Posições
let xAtor = 200;
let yAtor = 365;
let colisao = false;
let meusPontos = 0;
let painelDePontos = "Pontuação: ";

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW)){
    if(podeSeMover()){
      yAtor += 3;
    }
  }
}

function verificaColisao(){
  //collideRectCircle(x1, y1, width1, height1, cx, cy, diameter)
  for (let i=0; i< imagemCarros.length; i++){
    colisao = collideRectCircle(xCarros[i],yCarros[i], comprimentoCarro, larguraCarro, xAtor, yAtor, 15);
    if (colisao){
    voltaAtorParaPosicaoInicial();
    somDaColisao.play();
    perdePonto();
    }
  }
}

function voltaAtorParaPosicaoInicial(){
  yAtor = 365;
}

function incluiPontos(){
  textAlign(CENTER);
  textSize(25);
  fill(color(255, 240, 80))
  text(painelDePontos + meusPontos, width - 100, 27);
}

function marcaPonto(){
  if (yAtor<=15){
    meusPontos += 1;
    somDoPonto.play();
    voltaAtorParaPosicaoInicial();
  }
}

function perdePonto(){
  if(meusPontos>0){
    meusPontos -= 1;
  }
}

function podeSeMover(){
  return yAtor<365;
}

//Posição
let xCarros = [600, 600, 600];
let yCarros = [46, 96, 150];
let velocidadeCarros = [3, 4, 2.5];
let comprimentoCarro = 50;
let larguraCarro = 30;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, larguraCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(xCarros[i]< -50){
      xCarros[i] = 600;
    }
  }
}

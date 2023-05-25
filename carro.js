//Posição
let xCarros = [600, 600, 600, 0, 0, 0];
let yCarros = [46, 96, 150, 210, 270, 318];
let velocidadeCarros = [3, 4, 2.5, 5, 3.3, 2.3];
let comprimentoCarro = 50;
let larguraCarro = 30;

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    image(imagemCarros[i], xCarros[i], yCarros[i], comprimentoCarro, larguraCarro);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(i<3){
      xCarros[i] -= velocidadeCarros[i];
    }
    else{
      xCarros[i] += velocidadeCarros[i];
    }
  }
}

function voltaPosicaoInicialDoCarro(){
  for (let i = 0; i < imagemCarros.length; i++){
    if(i<3){
      if(xCarros[i]< -50){
        xCarros[i] = 600;
      }
    }
    else{
      if(xCarros[i] > 650){
        xCarros[i] = 0;
      }
    }
  }
}

//Posições do carro 1
let xCarro = 600;
let yCarro = 46;
let velocidadeCarro1 = 3;

//Posições do carro 2
let xCarro2 = 600;
let yCarro2 = 96;
let velocidadeCarro2 = 4;

//Posições do carro 2
let xCarro3 = 600;
let yCarro3 = 150;
let velocidadeCarro3 = 2.5;

function mostraCarro(){
  image(imagemDoCarro, xCarro, yCarro, 50, 30);
  image(imagemDoCarro2, xCarro2, yCarro2, 50, 30);
  image(imagemDoCarro3, xCarro3, yCarro3, 50, 30);
}

function movimentaCarro(){
  xCarro -= velocidadeCarro1;
  xCarro2 -= velocidadeCarro2;
  xCarro3 -= velocidadeCarro3;
  
}

function voltaPosicaoInicialDoCarro(){
  if(xCarro<-50){
    xCarro = 600;
  }
  if(xCarro2<-50){
    xCarro2 = 600;
  }
  if(xCarro3<-50){
    xCarro3 = 600;
  }
}
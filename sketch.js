//Variavel
var tela = 1;
var largura = 200;
var altura = 50;
var xMenu = 100;
var yMenu1 = 100;
var yMenu2 = 145;
var yMenu3 = 190;
var imagemEstudante;
var imagemLua;
var imagemSol;
var xSol= 100
var yLua= 100
var imagem1;
var imagem2;
var imagem3;
var imagem4;
var imagem5;
var imagem6;
var pontos= 0;
var nivel = 1;
var barreiraPontos = 50;
var flag = 0; //
var rate= 1;
var time = 0
let music;

var fase1, fase1_1=[]

// Usei para carregar as imagens 

function preload() {
  imagemEstudante = loadImage("Fabricio Estudante_1.png");
  imagemLua= loadImage("desenho-de-lua-2.jpg");
  imagemSol= loadImage("sol.1.jpg");
  imagem1=loadImage("Mundo-Bita-Sol-PNG.png");
  imagem2=loadImage("Sol-PNG.png");
  imagem3=loadImage("Sol.10-1.png");
  imagem4=loadImage("calendar-1847346_1280.png");
  imagem5=loadImage("calendar fev.png");
  imagem6=loadImage("moon-1751987_1280.png");
  soundFormats("mp3");
   music = loadSound("happy.mp3");
}


function setup() {
  createCanvas(420, 400);
  frameRate(30);
  music.play()
  fase1_1=[imagemSol, imagemLua]
  fase1 = parseInt(random(2));
}




// construi o design , coloquei background, botões, etc...  também adicionei a função mouse.

function draw() {
  console.log(fase1)
  textStyle(NORMAL);
  // Tela de Menu
  if (tela == 1) {
    background(imagem3);
    //Menu com três Opções
    // Iniciar o Jogo
    textAlign(CENTER);
    textSize(30);
    if(mouseX> xMenu && mouseX < xMenu+ largura && mouseY> yMenu1 && mouseY  < yMenu1  + altura)
    {
      if (mouseIsPressed) {
        tela = 2;
        flag = 0;
      }
      stroke(200);
      fill(20);
      rect(xMenu, yMenu1, largura, altura, 15);
    }
    fill(200,50,30);
    noStroke(20);
    text("Iniciar", 200, 140);
    //Informações do Jogo
    if(mouseX> xMenu && mouseX < xMenu+ largura && mouseY> yMenu2 && mouseY  < yMenu2  + altura){
      stroke(200);
      fill(20);
      rect(xMenu, yMenu2, largura, altura, 15);
      if (mouseIsPressed) {
         tela = 3; 
      }
    }
    fill(301,300,514);
    noStroke();
    text("Informações", 200,180);
    if(mouseX> xMenu && mouseX < xMenu+ largura && mouseY> yMenu3 && mouseY  < yMenu3  + altura){
      stroke(200);
      fill(20)
      rect(xMenu, yMenu3, largura, altura, 15);
      if (mouseIsPressed) {
        tela = 4;
      }
    }
    fill(240,300,40);
    noStroke();
    text("Créditos", 200, 230);
    textSize(40)
    textStyle(BOLDITALIC);
    text("Dia a Dia", 150, 10,300,200);
    fill(100)
    
    
    fase1 = parseInt(random(2));
    pontos= 0;
    nivel = 1;
  }
  
    // Jogo em Ação
  else if( tela == 2) { 
    background(imagem3);
    stroke(20);
    textSize(26);
    text("Qual das imagens representa o período da noite ?", 20,50,390,390);
    stroke(200);
    fill(50,30, 100);
     //text("Sol",50,180,120,120);

    /*if(mouseX > 50 && mouseX < 50+120 && mouseY >180 && mouseY <180+120){
      if(mouseIsPressed && flag == 0){
        flag = 1
        tela = 5;
      }
      
    }*/
    
   
    textSize(25);
    //text("Lua",240,180,120,120);
    fill(300,20,200);
    text("Nível: " +nivel,50,30);
    text("Pontos: " +pontos,300,30);
    if(fase1 == 0){
      text("Sol",50,180,120,120);
      text("Lua",240,180,120,120);
      image(fase1_1[0], 50,210,120,120);
      image(fase1_1[1], 240,210,120,120);
    }
    else{
      text("Lua",50,180,120,120);
      text("Sol",240,180,120,120);
      image(fase1_1[1], 50,210,120,120);
      image(fase1_1[0], 240,210,120,120);
    }
      
     /*if(mouseX > 240 && mouseX < 240+120 && mouseY >210 && mouseY <210+120){
      if(mouseIsPressed && flag == 0 ){
        flag = 1
        nivel++;
        pontos++;
        tela= 6
      }
             }*/
}
 
   // Fase 2
   else if(tela  == 6) {
    background(imagem3);
    fill(240);
    textSize(30);
    textAlign(CENTER);
      fill(100,10,900)
    text("Qual mês tem 28 dias?", 160, 80);
text("Nível: " +nivel,60,30);
    text("Pontos: " +pontos,300,30);
     image(imagem4,30,100,180,240);
     text("Dezembro",120,330);
      /*if(mouseX > 30 && mouseX < 30+180 && mouseY >100 && mouseY <100+240){
      if(mouseIsPressed){ 
        tela= 5;
      }
      }*/
    
      image(imagem5,225,100,180,240);
     text("Fevereiro",320,330);
     
      /*if(mouseX > 225 && mouseX < 225+180 && mouseY >100 && mouseY <100+240){
      if(mouseIsPressed){ 
        tela= 7;
         }
      }*/
     // Voltar 
     noStroke();
    textSize(20);
    rect(345,370,60,20);
    fill(20);
    text("voltar",340,370,80,30)
            if(mouseX > 350 && mouseX < 350+80 && mouseY >370 && mouseY <370+80){
      if(mouseIsPressed){ 
        tela= 1;
      }
            }
   }
  
   else if(tela  == 7) {
    background(imagem3);
    fill(240);
    textSize(26);
    noStroke();
     rect(10,30,380,80)
    textAlign(LEFT);
    fill(20);
    text("Qual é a figura que representa o período do dia ?",10,50,400,400);
   text("Nível: " +nivel,20,30);
    text("Pontos: " +pontos,300,30);
     
     image(imagem6,120,250,140,140);
      /* if(mouseX > 120 && mouseX < 120+140 && mouseY >250 && mouseY <250+140){
      if(mouseIsPressed){ 
        tela= 5;
      }
      }*/
     image(imagemLua,240,120,130,130);
     /* if(mouseX > 240 && mouseX < 240+130 && mouseY >120 && mouseY <120+130){
      if(mouseIsPressed){ 
        tela= 5;
      }
      }*/
     rect(45,120,130,130);
     image(imagem1,40,120,130,130);
     if(mouseX > 40 && mouseX < 40+130 && mouseY >100 && mouseY <120+130){
      if(mouseIsPressed){ 
        tela= 8;
      }
      }
  
     // Voltar 
     noStroke();
    textSize(20);
    rect(335,370,60,20);
    fill(200);
    text("voltar",340,370,80,30)
            if(mouseX > 350 && mouseX < 350+80 && mouseY >370 && mouseY <370+80){
      if(mouseIsPressed){ 
        tela= 1;
      }
            }
   }
  // Parabéns
     else if(tela  == 8) {
    background('turquoise');
    background(imagem1);
    fill(240);
    textSize(30);
    noStroke();
    textAlign(LEFT);
    rect(10,20,350,50);
    fill(20);
    text("Parabéns,você ganhou!",20,30,400,300);
         // Voltar 
     noStroke();
    textSize(20);
    rect(335,370,60,20);
    fill(200);
    text("voltar",340,370,80,30)
            if(mouseX > 350 && mouseX < 350+80 && mouseY >370 && mouseY <370+80){
      if(mouseIsPressed){ 
        tela= 1;
      }
            }
      }
 // GAME OVER
    else if(tela  == 5) {
    background( 10);
    fill(240);
    textSize(40);
    noStroke();
    textAlign(CENTER);
    text("Você errou!", 120, 100);
  text("Tente novamente!", 180, 150);
       noStroke();
    textSize(20);
    rect(345,370,60,20);
    fill(20);
    text("voltar",340,370,80,30)
            if(mouseX > 350 && mouseX < 350+80 && mouseY >370 && mouseY <370+80){
      if(mouseIsPressed){ 
        tela= 1;
        
      }
            }
    }
  
  
  
   // infomações sobre o jogo
  else if(tela  == 3) {
    background(imagem3);
    fill(240);
    textSize(30);
    noStroke();
    textAlign(LEFT);
    rect(10,20,200,50);
    fill(20);
    text("Instruções",20,30,30,30);
      
    textSize(20);
    rect(10,70,200,220);
    fill(200);
    text("Identifique diferentes escalas de tempo: os períodos diários (manhã, tarde, noite) e a sucessão de dias, semanas, meses e anos",20,80,200,220);
    fill(200);
    noStroke();
    textSize(20);
    rect(210,70,180,220);
    fill(20);
    text("Use o mouse para clicar na resposta certa e passe de fase.",220,150,200,200);
    text("Como Jogar?",230,80,200,200)
      
    noStroke();
    fill(200)
    textSize(20);
    rect(20,330,200,50);
    fill(20);
    text("Ano:Ciências 1º Ano",30,350,200,220);
    
    fill(200);
    noStroke();
    textSize(20);
    rect(345,370,60,20);
    fill(20);
    text("voltar",350,370,80,30)
            if(mouseX > 350 && mouseX < 350+80 && mouseY >370 && mouseY <370+80){
      if(mouseIsPressed){ 
        tela= 1;
      }
            }
  }
     
  //Créditos
  else if(tela  == 4) {
    background(100,20,50);
    fill(240);
    textSize(36);
    noStroke();
    textAlign(LEFT);
    text("Créditos", 120, 100);
    textSize(20);
    text("Jose Fabricio Rodrigues", 140,150);
    textSize(18);
    text("Função:Estudante e programador", 120, 180);
    textSize(16);
    fill(200);
    text("Graduando em Ciencias e Tecnológia na Universidade Federal do Rio Grande do Norte", 180, 220, 200);
    image(imagemEstudante, 50,210,120,120 );
     fill(200);
    noStroke();
    textSize(20);
    rect(345,370,60,20);
    fill(20);
    text("voltar",350,370,80,30)
            if(mouseX > 350 && mouseX < 350+80 && mouseY >370 && mouseY <370+80){
      if(mouseIsPressed){ 
        tela= 1;
      }
            }
    }
  
}

function mousePressed(){
  if(tela === 2){
    if(mouseX > 50 && mouseX < 50+120 && mouseY >180 && mouseY <180+120 && flag === 0){
      if(fase1 == 0){
        flag = 1
        tela = 5
      }
      else{
        flag = 1
        nivel++;
        pontos++;
        setTimeout(function(){tela = 6}, 50);
      }
    } //do sol
    
    if(mouseX > 240 && mouseX < 240+120 && mouseY >210 && mouseY <210+120 && flag === 0){
      if(fase1 == 1){
        flag = 1
        tela = 5
      }
      else{
        flag = 1
        nivel++;
        pontos++;
        setTimeout(function(){tela = 6}, 50);
      }
       }
  }
  
  if(tela === 6){
    if(mouseX > 30 && mouseX < 30+180 && mouseY >100 && mouseY <100+240){
      tela = 5;
    }
    
    if(mouseX > 225 && mouseX < 225+180 && mouseY >100 && mouseY <100+240){
       tela = 7;
       flag = 1
        nivel++;
        pontos++;
        setTimeout(function(){tela = 7}, 50);
    }
  }
  if(tela === 7){
  if(mouseX > 120 && mouseX < 120+140 && mouseY >250 && mouseY <250+140){
      if(mouseIsPressed){ 
        tela= 5;
      }
    
  }

}
}
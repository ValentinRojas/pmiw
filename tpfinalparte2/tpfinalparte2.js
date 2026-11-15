//https://youtu.be/nXq1ruFtJBw
let juego;

// IMAGENES
let imagenFondo;
let imagenesPiragua = [];
let imagenesObstaculos = [];

let imagenReloj;
let imagenVida;

let imagenBoton01;
let imagenBoton02;

// SONIDO
let musica;
let musicaIniciada = false;


// CARGAR RECURSOS
function preload() {

  imagenFondo = loadImage("data/fondo.png");

  imagenesPiragua[0] = loadImage("data/piragua_01.png");
  imagenesPiragua[1] = loadImage("data/piragua_02.png");
  imagenesPiragua[2] = loadImage("data/piragua_03.png");

  imagenesObstaculos[0] = loadImage("data/obstaculo_01.png");
  imagenesObstaculos[1] = loadImage("data/obstaculo_02.png");
  imagenesObstaculos[2] = loadImage("data/obstaculo_03.png");

  imagenReloj = loadImage("data/reloj.png");
  imagenVida = loadImage("data/vida.png");

  imagenBoton01 = loadImage("data/boton_01.png");
  imagenBoton02 = loadImage("data/boton_02.png");

  musica = loadSound("data/musica.mp3");
}


// INICIAR PROGRAMA
function setup() {
  createCanvas(800, 400);

  juego = new Juego();
}


// DIBUJAR
function draw() {
  juego.actualizar();
  juego.mostrar();
}


// DETECTAR CLICS
function mousePressed() {

  if (!musicaIniciada && musica.isLoaded()) {
    userStartAudio();
    musica.setVolume(0.25);
    musica.loop();
    musicaIniciada = true;
  }

  juego.mousePressed();

  return false;
}

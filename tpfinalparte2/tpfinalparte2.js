
let jugador;
let juego;
let obstaculos = [];
let botones = [];

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

  // Musica
  musica = loadSound("data/musica.mp3")}

// PREPARAR JUEGO
function setup() {
  createCanvas(800, 400);
  iniciarJuego();
}


// INICIAR O REINICIAR
function iniciarJuego() {

  jugador = new Jugador();
  juego = new Juego();

  obstaculos = [];

  obstaculos[0] = new Obstaculo(200, -50);
  obstaculos[1] = new Obstaculo(400, -150);
  obstaculos[2] = new Obstaculo(580, -250);

  botones[0] = new Boton(735, 300, imagenBoton01);
  botones[1] = new Boton(735, 355, imagenBoton02);
}


// INICIAR MUSICA
function iniciarMusica() {

  if (musica != null && !musicaIniciada) {

    userStartAudio();

    if (musica.isLoaded()) {
      musica.setVolume(0.25);
      musica.loop();
      musicaIniciada = true;
    }
  }
}


// DIBUJAR
function draw() {

  // Fondo
  imageMode(CORNER);
  image(imagenFondo, 0, 0, 800, 400);

  // Actualizar solamente durante la partida
  if (juego.estado == "jugando") {

    jugador.mover();

    for (let i = 0; i < obstaculos.length; i++) {

      obstaculos[i].mover();

      // Colisiones
      if (jugador.colisiona(obstaculos[i])) {

        if (millis() - jugador.ultimoGolpe > 1000) {
          jugador.vidas--;
          jugador.ultimoGolpe = millis();
        }

        obstaculos[i].reiniciar();
      }
    }

    juego.actualizar();
  }

  // Dibujar obstáculos
  for (let i = 0; i < obstaculos.length; i++) {
    obstaculos[i].mostrar();
  }

  // Dibujar piragua
  jugador.mostrar();

  // PARTIDA
  if (juego.estado == "jugando") {

    juego.mostrar();

    botones[0].mostrar();
    botones[1].mostrar();
  }

  // INSTRUCCIONES
  if (juego.estado == "instrucciones") {

    juego.mostrarInstrucciones();

    botones[0].mostrar();
    botones[1].mostrar();
  }

  // RESULTADOS
  if (juego.estado == "ganaste" ||
      juego.estado == "perdiste") {

    juego.mostrarResultado();
  }

  // CREDITOS
  if (juego.estado == "creditos") {
    juego.mostrarCreditos();
  }
}


// DETECTAR CLICS
function mousePressed() {

  // Intentar iniciar la música
  iniciarMusica();

  // BOTONES DURANTE LA PARTIDA
  if (juego.estado == "jugando") {

    if (botones[0].fuePresionado()) {
      iniciarJuego();
    }

    else if (botones[1].fuePresionado()) {
      juego.estado = "instrucciones";
    }
  }

  // BOTONES EN INSTRUCCIONES
  else if (juego.estado == "instrucciones") {

    if (botones[0].fuePresionado()) {
      iniciarJuego();
    }

    else if (botones[1].fuePresionado()) {
      juego.estado = "jugando";
    }
  }

  // DESPUES DE GANAR O PERDER
  else if (juego.estado == "ganaste" ||
           juego.estado == "perdiste") {

    juego.estado = "creditos";
  }

  // DESPUES DE LOS CREDITOS
  else if (juego.estado == "creditos") {

    iniciarJuego();
  }

  return false;
}


// CLASE JUGADOR
class Jugador {

  constructor() {

    this.x = 400;
    this.y = 300;

    this.velocidad = 5;

    this.ancho = 58;
    this.alto = 105;

    this.vidas = 3;

    this.frameActual = 0;
    this.ultimoGolpe = -2000;
  }


  mostrar() {

    this.frameActual = floor(frameCount / 10) % 3;

    imageMode(CENTER);

    image(
      imagenesPiragua[this.frameActual],
      this.x,
      this.y,
      this.ancho,
      this.alto
    );
  }


  mover() {

    if (keyIsDown(LEFT_ARROW)) {
      this.x -= this.velocidad;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      this.x += this.velocidad;
    }

    if (keyIsDown(UP_ARROW)) {
      this.y -= this.velocidad;
    }

    if (keyIsDown(DOWN_ARROW)) {
      this.y += this.velocidad;
    }

    this.x = constrain(this.x, 155, 650);
    this.y = constrain(this.y, 75, 335);
  }


  colisiona(obstaculo) {

    let distancia = dist(
      this.x,
      this.y,
      obstaculo.x,
      obstaculo.y
    );

    return distancia < 48;
  }
}


// CLASE OBSTACULO
class Obstaculo {

  constructor(x, y) {

    this.x = x;
    this.y = y;

    this.velocidad = 3;
    this.tamano = 48;

    this.elegirImagen();
  }


  elegirImagen() {
    this.numeroImagen = floor(random(0, 3));
  }


  mostrar() {

    imageMode(CENTER);

    image(
      imagenesObstaculos[this.numeroImagen],
      this.x,
      this.y,
      this.tamano,
      this.tamano
    );
  }


  mover() {

    this.y += this.velocidad;

    if (this.y > height + this.tamano) {
      this.reiniciar();
    }
  }


  reiniciar() {

    this.x = random(165, 640);
    this.y = -this.tamano;

    this.elegirImagen();
  }
}


// CLASE JUEGO
class Juego {

  constructor() {

    this.tiempoInicial = millis();
    this.tiempo = 30;

    this.estado = "jugando";
  }


  actualizar() {

    this.tiempo = 30 - floor(
      (millis() - this.tiempoInicial) / 1000
    );

    if (jugador.vidas <= 0) {
      this.estado = "perdiste";
    }

    else if (this.tiempo <= 0) {
      this.tiempo = 0;
      this.estado = "ganaste";
    }
  }


  mostrar() {

    imageMode(CORNER);

    // Reloj
    image(imagenReloj, 675, 12, 25, 25);

    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text(this.tiempo, 705, 25);

    // Vidas
    image(imagenVida, 20, 12, 25, 25);

    text(jugador.vidas, 50, 25);
  }


  mostrarInstrucciones() {

    fill(0, 0, 0, 210);
    noStroke();
    rectMode(CORNER);
    rect(130, 90, 540, 220, 12);

    fill(255);
    textAlign(CENTER, CENTER);

    textSize(25);
    text("INSTRUCCIONES", 400, 130);

    textSize(17);
    text("Usa las flechas para mover la piragua.", 400, 185);
    text("Esquiva las piedras y cuida tus vidas.", 400, 220);
    text("Sobrevive 30 segundos para ganar.", 400, 255);
  }


  mostrarResultado() {

    fill(0, 0, 0, 190);
    noStroke();
    rectMode(CORNER);
    rect(150, 110, 500, 190, 12);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(30);

    if (this.estado == "ganaste") {
      text("¡CRUZASTE EL RIO!", 400, 160);
    } else {
      text("¡PERDISTE!", 400, 160);
    }

    textSize(17);
    text("Haz clic para ver los creditos", 400, 220);
  }


  mostrarCreditos() {

    fill(0, 0, 0, 210);
    noStroke();
    rectMode(CORNER);
    rect(100, 35, 600, 330, 12);

    fill(255);
    textAlign(CENTER, CENTER);

    textSize(30);
    text("CREDITOS", 400, 85);

    textSize(17);

    text("Trabajo practico final: Videojuego web (Etapa 2)", 400, 135);
    text("Obra: Perdido en el Amazonas", 400, 175);
    text("Autor: R. A. Montgomery", 400, 205);
    text("Ilustraciones: L. Morrill", 400, 235);
    text("Realizado por:", 400, 275);
    text("Valentin Rojas y Luz Antonella Salazar Mesias", 400, 300);

    textSize(15);
    text("HAZ CLIC PARA VOLVER A JUGAR", 400, 340);
  }
}


// CLASE BOTON
class Boton {

  constructor(x, y, imagen) {

    this.x = x;
    this.y = y;

    this.imagen = imagen;

    this.ancho = 125;
    this.alto = 45;
  }


  mostrar() {

    imageMode(CENTER);

    image(
      this.imagen,
      this.x,
      this.y,
      this.ancho,
      this.alto
    );
  }


  fuePresionado() {

    return (
      mouseX > this.x - this.ancho / 2 &&
      mouseX < this.x + this.ancho / 2 &&
      mouseY > this.y - this.alto / 2 &&
      mouseY < this.y + this.alto / 2
    );
  }
}

let acciones = [];
const NOMBRES = ['idle', 'caminar', 'correr'];
const FRAMES_POR_ACCION = [6, 6, 6];
const ESCALA = 1.6;
const VELOCIDAD = 1;
const X_CORRER = 100;
const DURACION_CORRER = 80;
const DURACION_IDLE = 70;

let fondo;
let xFondo = 0;

let accionActual = 1;
let x = -60;
let contadorCorrer = 0;
let contadorIdle = 0;
let yaCorro = false;

function dibujarFondoParallax(imagen, velocidad) {
  xFondo -= velocidad;
  
  if(xFondo <= -width+200){
    xFondo = 0;
  }

  image(imagen, xFondo+width/2, 219, fondo.width*2, fondo.height*2);
  image(imagen, xFondo+width*2-300, 219, fondo.width*2, fondo.height*2);
}

function cargarAccion(nombre, cantidad) {
  let frames = [];

  for (let i = 0; i < cantidad; i++) {
    frames.push(loadImage('data/' + nombre + '_' + i + '.png'));
  }

  return frames;
}

function elegirFrame(frames, velocidadAnimacion) {
  let indice = floor(frameCount / velocidadAnimacion) % frames.length;
  return frames[indice];
}

function preload() {
  fondo = loadImage('data/background_11.png');
  
  for (let a = 0; a < NOMBRES.length; a++) {
    acciones.push(cargarAccion(NOMBRES[a], FRAMES_POR_ACCION[a]));
  }

  print(acciones);
}

function setup() {
  createCanvas(800, 600);
  imageMode(CENTER);
}

function draw() {
  background(20);
  dibujarFondoParallax(fondo, 0.9);

  if (accionActual === 1) {

    // CAMINAR
    x += VELOCIDAD;

    if (x >= X_CORRER && !yaCorro) {
      accionActual = 0;
      contadorIdle = 0;
    }

  } else if (accionActual === 0) {

    // IDLE
    contadorIdle++;

    if (contadorIdle >= DURACION_IDLE) {
      yaCorro = true;
      contadorCorrer = 0;
      contadorIdle = 0;
      accionActual = 2;
    }

  } else if (accionActual === 2) {

    // CORRER
    x += VELOCIDAD * 7;
    contadorCorrer++;

    if (contadorCorrer >= DURACION_CORRER) {
      accionActual = 1;
    }
  }

  // Reiniciar recorrido
  if (x > width + 60) {
    x = -60;
    accionActual = 1;
    yaCorro = false;
    contadorCorrer = 0;
    contadorIdle = 0;
  }

  let frames = acciones[accionActual];
  let frame = elegirFrame(frames, 6);

  image(
    frame,
    x,
    height / 2,
    frame.width * ESCALA,
    frame.height * ESCALA
  );

  fill(255);
  noStroke();
  text('Acción: ' + NOMBRES[accionActual], 10, height - 10);
}

// ========================================
// TP FINAL - PERDIDO EN EL AMAZONAS
// ETAPA 1
// ========================================


// ----------------------------------------
// VARIABLES
// ----------------------------------------

let pantallaActual = 0;


// ----------------------------------------
// NOMBRES DE LAS PANTALLAS
// ----------------------------------------

const NOMBRES_PANTALLAS = [
  "INICIO",
  "¿CÓMO LOS BUSCÁS?",
  "PIRAGUA",
  "AVIÓN",
  "PATRULLA FLUVIAL",
  "LA PISTA",
  "LA FLAUTA",
  "LAS AMAZONAS",
  "LOS CUWATIERI",
  "FINAL BUENO",
  "FINAL NEUTRO",
  "FINAL MALO",
  "CRÉDITOS"
];


// ----------------------------------------
// PRELOAD
// ----------------------------------------

function preload() {

  // Más adelante:
  // imágenes
  // sonidos
  // música
  // etc.

}


// ----------------------------------------
// SETUP
// ----------------------------------------

function setup() {

  createCanvas(800, 450);

  textAlign(CENTER, CENTER);
  rectMode(CENTER);

}


// ----------------------------------------
// DRAW
// ----------------------------------------

function draw() {

  dibujarFondoGenerico();

  mostrarPantalla(pantallaActual);

}


// ========================================
// MOSTRAR PANTALLA
// ========================================

function mostrarPantalla(numero) {

  if (numero === 0) {
    mostrarInicio();

  } else if (numero === 1) {
    mostrarDecisionInicial();

  } else if (numero === 2) {
    mostrarPiragua();

  } else if (numero === 3) {
    mostrarAvion();

  } else if (numero === 4) {
    mostrarPatrulla();

  } else if (numero === 5) {
    mostrarPista();

  } else if (numero === 6) {
    mostrarFlauta();

  } else if (numero === 7) {
    mostrarAmazonas();

  } else if (numero === 8) {
    mostrarCuwatieri();

  } else if (numero === 9) {
    mostrarFinal(
      "FINAL BUENO",
      "Tus compañeros son rescatados.",
      "La búsqueda finalmente tiene éxito."
    );

  } else if (numero === 10) {
    mostrarFinal(
      "FINAL NEUTRO",
      "Decidís regresar.",
      "El peligro es demasiado grande y volvés sin encontrar a tus compañeros."
    );

  } else if (numero === 11) {
    mostrarFinal(
      "FINAL MALO",
      "La aventura termina de la peor manera.",
      "Una mala decisión te deja atrapado en la selva o bajo el poder de la flauta."
    );

  } else if (numero === 12) {
    mostrarCreditos();
  }

}


// ========================================
// PANTALLA DE INICIO
// ========================================

function mostrarInicio() {

  mostrarTitulo("PERDIDO EN EL AMAZONAS");

  textSize(20);

  text(
    "Una aventura gráfica interactiva",
    width / 2,
    120
  );

  textSize(17);

  text(
    "Llegás a Manaus para reunirte con una expedición médica,\n" +
    "pero descubrís que tus compañeros han desaparecido.",
    width / 2,
    180
  );

  crearBoton(
    "COMENZAR",
    width / 2,
    310,
    1
  );

  crearBoton(
    "CRÉDITOS",
    width / 2,
    380,
    12
  );

}


// ========================================
// DECISIÓN INICIAL
// ========================================

function mostrarDecisionInicial() {

  mostrarTitulo("¿CÓMO LOS BUSCÁS?");

  mostrarTexto(
    "Tus compañeros desaparecieron después de internarse en la selva.\n" +
    "Ahora tenés que decidir cómo comenzar la búsqueda."
  );

  crearBoton(
    "IR EN PIRAGUA",
    180,
    330,
    2
  );

  crearBoton(
    "IR EN AVIÓN",
    400,
    330,
    3
  );

  crearBoton(
    "PATRULLA FLUVIAL",
    620,
    330,
    4
  );

}


// ========================================
// PIRAGUA
// ========================================

function mostrarPiragua() {

  mostrarTitulo("VIAJE EN PIRAGUA");

  mostrarTexto(
    "Decidís viajar por el río junto a Owaduga.\n" +
    "La selva se vuelve cada vez más cerrada mientras avanzás.\n" +
    "Buscás cualquier señal que pueda llevarte hasta tus compañeros."
  );

  crearBoton(
    "CONTINUAR",
    width / 2,
    350,
    5
  );

}


// ========================================
// AVIÓN
// ========================================

function mostrarAvion() {

  mostrarTitulo("BÚSQUEDA DESDE EL AIRE");

  mostrarTexto(
    "Decidís intentar localizar a tus compañeros desde el aire.\n" +
    "Sobrevolás la inmensa selva buscando alguna señal\n" +
    "de la expedición desaparecida."
  );

  crearBoton(
    "CONTINUAR",
    width / 2,
    350,
    5
  );

}


// ========================================
// PATRULLA FLUVIAL
// ========================================

function mostrarPatrulla() {

  mostrarTitulo("PATRULLA FLUVIAL");

  mostrarTexto(
    "Decidís esperar y finalmente te incorporás a una Patrulla Fluvial.\n" +
    "Ahora contás con ayuda para internarte en el Amazonas\n" +
    "y buscar a los miembros desaparecidos de la expedición."
  );

  crearBoton(
    "CONTINUAR",
    width / 2,
    350,
    5
  );

}


// ========================================
// LA PISTA
// ========================================

function mostrarPista() {

  mostrarTitulo("UNA PISTA");

  mostrarTexto(
    "Después de avanzar por la selva encontrás una pista.\n" +
    "Podría estar relacionada con el recorrido de tus compañeros.\n" +
    "Seguirla puede acercarte a ellos, pero también puede llevarte\n" +
    "hacia un lugar desconocido."
  );

  crearBoton(
    "SEGUIR LA PISTA",
    250,
    350,
    6
  );

  crearBoton(
    "REGRESAR",
    550,
    350,
    10
  );

}


// ========================================
// LA FLAUTA
// ========================================

function mostrarFlauta() {

  mostrarTitulo("LA FLAUTA");

  mostrarTexto(
    "De repente escuchás una misteriosa melodía proveniente\n" +
    "de las profundidades de la selva.\n" +
    "Recordás que tus compañeros también habían escuchado\n" +
    "una flauta antes de desaparecer."
  );

  crearBoton(
    "SEGUIR LA FLAUTA",
    250,
    350,
    7
  );

  crearBoton(
    "NO SEGUIRLA",
    550,
    350,
    10
  );

}


// ========================================
// LAS AMAZONAS
// ========================================

function mostrarAmazonas() {

  mostrarTitulo("LAS AMAZONAS");

  mostrarTexto(
    "Siguiendo el sonido de la flauta llegás hasta un territorio\n" +
    "desconocido y te encontrás con las Amazonas.\n" +
    "Ellas parecen conocer información sobre la desaparición\n" +
    "de tus compañeros."
  );

  crearBoton(
    "CONTINUAR",
    width / 2,
    350,
    8
  );

}


// ========================================
// LOS CUWATIERI
// ========================================

function mostrarCuwatieri() {

  mostrarTitulo("LOS CUWATIERI");

  mostrarTexto(
    "Las pistas te conducen hasta los Cuwatieri.\n" +
    "La misteriosa flauta parece estar relacionada con ellos.\n" +
    "Ahora tenés que decidir si continuar avanzando o abandonar\n" +
    "la búsqueda antes de quedar atrapado."
  );

  crearBoton(
    "CONTINUAR",
    width / 2,
    350,
    9
  );

}


// ========================================
// FINALES
// ========================================

function mostrarFinal(titulo, linea1, linea2) {

  mostrarTitulo(titulo);

  textSize(22);

  text(
    linea1,
    width / 2,
    160
  );

  textSize(17);

  text(
    linea2,
    width / 2,
    220
  );

  crearBoton(
    "VOLVER A JUGAR",
    width / 2,
    350,
    0
  );

}


// ========================================
// CRÉDITOS
// ========================================

function mostrarCreditos() {

  mostrarTitulo("CRÉDITOS");

  textSize(18);

  text(
    "PERDIDO EN EL AMAZONAS",
    width / 2,
    130
  );

  textSize(16);

  text(
    "R. A. Montgomery\n" +
    "Ilustraciones: L. Morrill\n\n" +
    "Adaptación interactiva\n\n" +
    "Valentín Rojas\n" +
    "Luz Antonella Salazar Mesias",
    width / 2,
    220
  );

  crearBoton(
    "VOLVER AL INICIO",
    width / 2,
    380,
    0
  );

}


// ========================================
// TÍTULO
// ========================================

function mostrarTitulo(titulo) {

  fill(255);
  noStroke();

  textSize(28);

  text(
    titulo,
    width / 2,
    45
  );

}


// ========================================
// TEXTO NARRATIVO
// ========================================

function mostrarTexto(texto) {

  fill(240);
  noStroke();

  textSize(18);

  text(
    texto,
    width / 2,
    170
  );

}


// ========================================
// CREAR BOTÓN
// ========================================

function crearBoton(texto, x, y, destino) {

  fill(70);
  stroke(255);
  strokeWeight(2);

  rect(
    x,
    y,
    180,
    55,
    10
  );

  fill(255);
  noStroke();

  textSize(16);

  text(
    texto,
    x,
    y
  );

}


// ========================================
// MOUSE PRESSED
// ========================================

function mousePressed() {

  if (pantallaActual === 0) {

    if (botonPresionado(width / 2, 310)) {
      cambiarPantalla(1);
    }

    else if (botonPresionado(width / 2, 380)) {
      cambiarPantalla(12);
    }

  }


  else if (pantallaActual === 1) {

    if (botonPresionado(180, 330)) {
      cambiarPantalla(2);
    }

    else if (botonPresionado(400, 330)) {
      cambiarPantalla(3);
    }

    else if (botonPresionado(620, 330)) {
      cambiarPantalla(4);
    }

  }


  else if (
    pantallaActual === 2 ||
    pantallaActual === 3 ||
    pantallaActual === 4
  ) {

    if (botonPresionado(width / 2, 350)) {
      cambiarPantalla(5);
    }

  }


  else if (pantallaActual === 5) {

    if (botonPresionado(250, 350)) {
      cambiarPantalla(6);
    }

    else if (botonPresionado(550, 350)) {
      cambiarPantalla(10);
    }

  }


  else if (pantallaActual === 6) {

    if (botonPresionado(250, 350)) {
      cambiarPantalla(7);
    }

    else if (botonPresionado(550, 350)) {
      cambiarPantalla(10);
    }

  }


  else if (pantallaActual === 7) {

    if (botonPresionado(width / 2, 350)) {
      cambiarPantalla(8);
    }

  }


  else if (pantallaActual === 8) {

    if (botonPresionado(width / 2, 350)) {
      cambiarPantalla(9);
    }

  }


  else if (
    pantallaActual === 9 ||
    pantallaActual === 10 ||
    pantallaActual === 11 ||
    pantallaActual === 12
  ) {

    if (botonPresionado(width / 2, 350)) {
      cambiarPantalla(0);
    }

  }

}


// ========================================
// CAMBIAR DE PANTALLA
// ========================================

function cambiarPantalla(destino) {

  pantallaActual = destino;

}


// ========================================
// DETECTAR BOTÓN
// ========================================

function botonPresionado(x, y) {

  return (
    mouseX > x - 90 &&
    mouseX < x + 90 &&
    mouseY > y - 27.5 &&
    mouseY < y + 27.5
  );

}


// ========================================
// FONDO TEMPORAL
// ========================================

function dibujarFondoGenerico() {

  background(25);

}

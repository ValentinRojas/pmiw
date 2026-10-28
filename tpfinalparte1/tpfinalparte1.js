/*
 TP FINAL: PERDIDO EN EL AMAZONAS
 Aventura gráfica interactiva - p5.js + p5.sound
 Canvas: 800 x 450
*/

let musica;
let estaSonando = false;
let pantallaActual = 0;

let imagenes = [];
let personaje = [];
let fondoCreditos;
let imagenCreditos;
let posX = -100;
let velocidadPersonaje = 1.5;

let nombresImagenes = [
  "", "manaus", "desaparicion", "busqueda", "piragua", "avion",
  "patrulla", "pista", "flauta", "la_sigues", "amazonas",
  "cuwatieri", "que_haces", "final_bueno", "final_neutro", "final_malo"
];

let titulos = [
  "PERDIDO EN EL AMAZONAS", "Llegás a Manaus", "La desaparición",
  "¿Cómo vas a buscar?", "La ruta de la piragua", "La ruta del avión",
  "La Patrulla Fluvial", "Una nueva pista", "La misteriosa flauta",
  "¿La seguís?", "El Amazonas", "Los Cuwatieri", "¿Qué hacés?",
  "Final: una nueva oportunidad", "Final: el regreso", "Final: el peligro",
  "Créditos"
];

let textos = [
  "",
  "Llegás a Manaus, en Brasil. Sos un médico especializado en enfermedades tropicales y tenés una misión: encontrar a tus compañeros de expedición, que desaparecieron en la selva.",
  "Pasaron los días y tus compañeros siguen sin aparecer. Necesitás encontrar una pista para descubrir qué les ocurrió. La selva es enorme y cada decisión puede cambiar tu destino.",
  "Tenés varias opciones para continuar la búsqueda. Podés seguir el río en una piragua, alquilar un avión o esperar la ayuda de la Patrulla Fluvial.",
  "Decidís avanzar por el río en una piragua. La corriente te lleva hacia zonas cada vez más aisladas. Tendrás que prestar atención a cualquier señal que pueda ayudarte.",
  "Alquilás un avión para observar la región desde el aire. Desde arriba, la selva parece interminable. Buscás señales que indiquen por dónde pudieron haber pasado tus compañeros.",
  "Decidís esperar a la Patrulla Fluvial. Cuando finalmente conseguís ayuda, comenzás a recorrer el río y sus alrededores en busca de noticias.",
  "Durante la búsqueda aparece una pista extraña. Podría estar relacionada con tus compañeros y con las personas que habitan en las profundidades de la selva.",
  "Encontrás una flauta misteriosa. Su presencia parece tener un significado especial. Te preguntás quién la dejó allí y si puede conducirte hasta tus compañeros.",
  "Un sonido de flauta llega desde la selva. No sabés quién lo produce ni qué te espera si lo seguís. ¿Vas a investigar o preferís regresar?",
  "Seguís adelante y te internás en el Amazonas. El entorno se vuelve cada vez más extraño y peligroso. Ya no sabés qué te espera más adelante.",
  "Finalmente, llegás a una región habitada por los Cuwatieri. Estás más cerca de resolver el misterio, pero ahora tenés que decidir cómo actuar.",
  "La situación se vuelve decisiva. Tenés que elegir entre confiar, retirarte o arriesgarte. Lo que hagas determinará el desenlace de tu aventura.",
  "Decidís confiar y actuar con prudencia. Gracias a esa decisión, conseguís avanzar y encontrar una salida favorable. La búsqueda llega a un desenlace positivo.",
  "Decidís retirarte antes de que el peligro sea mayor. No conseguís resolver todo el misterio, pero lográs regresar. La aventura termina con muchas preguntas sin respuesta.",
  "Decidís arriesgarte y avanzar sin medir las consecuencias. La selva demuestra ser más peligrosa de lo que imaginabas. Tu búsqueda termina de la peor manera.",
  "Trabajo práctico final: aventura gráfica interactiva.\n\nLibro: Perdido en el Amazonas.\nAutor: R. A. Montgomery.\nIlustraciones: L. Morrill.\n\nRealizado por Valentín Rojas y Luz Antonella Salazar Mesias."
];

let botones = [
  ["COMENZAR", "CRÉDITOS", ""],
  ["CONTINUAR", "", ""],
  ["BUSCAR PISTAS", "", ""],
  ["PIRAGUA", "AVIÓN", "PATRULLA"],
  ["CONTINUAR", "", ""],
  ["CONTINUAR", "", ""],
  ["CONTINUAR", "", ""],
  ["SEGUIR LA PISTA", "ABANDONAR", ""],
  ["CONTINUAR", "", ""],
  ["SÍ, SEGUIR", "NO, RETIRARME", ""],
  ["CONTINUAR", "", ""],
  ["CONTINUAR", "", ""],
  ["CONFIAR", "RETIRARME", "ARRIESGARME"],
  ["VOLVER AL INICIO", "", ""],
  ["VOLVER AL INICIO", "", ""],
  ["VOLVER AL INICIO", "", ""],
  ["VOLVER AL INICIO", "", ""]
];

let destinos = [
  [1, 16, -1],
  [2, -1, -1],
  [3, -1, -1],
  [4, 5, 6],
  [7, -1, -1],
  [7, -1, -1],
  [7, -1, -1],
  [8, 14, -1],
  [9, -1, -1],
  [10, 14, -1],
  [11, -1, -1],
  [12, -1, -1],
  [13, 14, 15],
  [0, -1, -1],
  [0, -1, -1],
  [0, -1, -1],
  [0, -1, -1]
];

// CARGA DE IMÁGENES Y SONIDO

function preload() {
  musica = loadSound("data/musica/musica.mp3");

  fondoCreditos = loadImage("data/fondocreditos.png");
  imagenCreditos = loadImage("data/creditos.png");

  for (let i = 0; i < 12; i++) {
    personaje[i] = loadImage("data/camina" + nf(i, 2) + ".png");
  }

  for (let i = 1; i < nombresImagenes.length; i++) {
    imagenes[i] = loadImage("data/" + nombresImagenes[i] + ".png");
  }
}

// CONFIGURACIÓN

function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  textFont("sans-serif");
}

// BUCLE PRINCIPAL

function draw() {
  if (pantallaActual === 0) {
    dibujarInicio();
  } else if (pantallaActual === 16) {
    dibujarCreditos();
  } else {
    dibujarPantallaNarrativa(pantallaActual);
  }
}

// PANTALLA DE INICIO CON ANIMACIÓN

function dibujarInicio() {
  dibujarFondoBase();

  dibujarPanel(400, 88, 710, 90, 14, 0, 0, 0, 170);

  fill(255);
  textStyle(BOLD);
  textSize(31);
  text("PERDIDO EN EL AMAZONAS", 400, 72);

  textStyle(NORMAL);
  textSize(16);
  text("Una aventura gráfica interactiva", 400, 105);

  let frameAnimacion = floor(frameCount / 8) % personaje.length;

  if (personaje[frameAnimacion]) {
    image(personaje[frameAnimacion], posX, 300, 100, 140);
  }

  posX += velocidadPersonaje;

  if (posX > width + 70) {
    posX = -70;
  }

  dibujarPanel(400, 400, 460, 62, 12, 0, 0, 0, 170);

  crearBoton("COMENZAR", 300, 400);
  crearBoton("CRÉDITOS", 500, 400);

  iniciarMusicaSiEsPosible();
}

// PANTALLAS NARRATIVAS

function dibujarPantallaNarrativa(numero) {
  dibujarImagenCompleta(imagenes[numero]);

  noStroke();
  fill(0, 0, 0, 55);
  rect(400, 225, 800, 450);

  dibujarPanel(400, 38, 760, 54, 10, 0, 0, 0, 205);

  fill(255);
  textStyle(BOLD);
  textSize(24);
  text(titulos[numero], 400, 38);
  textStyle(NORMAL);

  let altoTexto = calcularAltoTexto(textos[numero], 17, 650);
  let altoPanel = altoTexto + 26;
  let yPanel = 105 + altoPanel / 2;

  dibujarPanel(400, yPanel, 700, altoPanel, 12, 0, 0, 0, 215);

  fill(255);
  textSize(17);
  textLeading(22);
  text(textos[numero], 400, yPanel, 650, altoTexto);

  dibujarPanel(400, 410, 780, 64, 12, 0, 0, 0, 190);

  for (let i = 0; i < botones[numero].length; i++) {
    if (botones[numero][i] !== "") {
      crearBoton(botones[numero][i], calcularXBoton(numero, i), 410);
    }
  }
}

// CRÉDITOS

function dibujarCreditos() {
  if (fondoCreditos) {
    dibujarImagenCompleta(fondoCreditos);
  } else {
    dibujarFondoBase();
  }

  noStroke();
  fill(0, 0, 0, 110);
  rect(400, 225, 800, 450);

  dibujarPanel(400, 225, 690, 300, 14, 0, 0, 0, 185);

  fill(255);
  textStyle(BOLD);
  textSize(28);
  text("CRÉDITOS", 400, 105);
  textStyle(NORMAL);

  if (imagenCreditos) {
    dibujarImagenAjustada(imagenCreditos, 400, 230, 560, 190);
  } else {
    textSize(16);
    text(textos[16], 400, 240, 590, 220);
  }

  let frameAnimacion = floor(frameCount / 8) % personaje.length;

  if (personaje[frameAnimacion]) {
    image(personaje[frameAnimacion], posX, 350, 60, 85);
  }

  posX += velocidadPersonaje;

  if (posX > width + 50) {
    posX = -50;
  }

  dibujarPanel(400, 410, 780, 62, 12, 0, 0, 0, 190);
  crearBoton("VOLVER AL INICIO", 400, 410);
}

// IMÁGENES A PANTALLA COMPLETA

function dibujarImagenCompleta(img) {
  if (img && img.width > 0 && img.height > 0) {
    let escala = max(width / img.width, height / img.height);

    image(
      img,
      width / 2,
      height / 2,
      img.width * escala,
      img.height * escala
    );
  } else {
    dibujarFondoBase();
  }
}

// AJUSTA UNA IMAGEN SIN DEFORMARLA

function dibujarImagenAjustada(img, x, y, anchoMaximo, altoMaximo) {
  if (img && img.width > 0 && img.height > 0) {
    let escala = min(
      anchoMaximo / img.width,
      altoMaximo / img.height
    );

    image(
      img,
      x,
      y,
      img.width * escala,
      img.height * escala
    );
  }
}

// FONDO PROVISORIO

function dibujarFondoBase() {
  background(20, 45, 42);

  noStroke();
  fill(30, 65, 55);
  ellipse(100, 80, 240, 180);
  ellipse(700, 350, 300, 220);
  ellipse(650, 60, 180, 130);

  fill(18, 42, 35);
  rect(400, 430, 800, 40);
}

// PANELES DE CONTRASTE

function dibujarPanel(x, y, ancho, alto, radio, r, g, b, alfa) {
  push();

  rectMode(CENTER);
  noStroke();
  fill(r, g, b, alfa);
  rect(x, y, ancho, alto, radio);

  pop();
}

// CALCULA LA ALTURA DEL TEXTO

function calcularAltoTexto(contenido, tamano, ancho) {
  push();

  textSize(tamano);
  textLeading(22);

  let lineas = 1;
  let palabras = contenido.split(" ");
  let lineaActual = "";

  for (let i = 0; i < palabras.length; i++) {
    let prueba = lineaActual === ""
      ? palabras[i]
      : lineaActual + " " + palabras[i];

    if (textWidth(prueba) > ancho && lineaActual !== "") {
      lineas++;
      lineaActual = palabras[i];
    } else {
      lineaActual = prueba;
    }
  }

  pop();

  return max(44, lineas * 22);
}

// BOTONES

function crearBoton(etiqueta, x, y) {
  push();

  rectMode(CENTER);
  stroke(235);
  strokeWeight(1.5);
  fill(32, 85, 66, 245);
  rect(x, y, 190, 42, 9);

  noStroke();
  fill(255);
  textStyle(BOLD);
  textSize(14);
  text(etiqueta, x, y);
  textStyle(NORMAL);

  pop();
}

function contarBotones(numero) {
  let cantidad = 0;

  for (let i = 0; i < botones[numero].length; i++) {
    if (botones[numero][i] !== "") {
      cantidad++;
    }
  }

  return cantidad;
}

function posicionBoton(numero, indice) {
  let posicion = 0;

  for (let i = 0; i < indice; i++) {
    if (botones[numero][i] !== "") {
      posicion++;
    }
  }

  return posicion;
}

function calcularXBoton(numero, indice) {
  let cantidad = contarBotones(numero);

  if (cantidad <= 1) {
    return width / 2;
  }

  let margen = 125;
  let espacio = (width - margen * 2) / (cantidad - 1);

  return margen + posicionBoton(numero, indice) * espacio;
}

// MÚSICA

function iniciarMusicaSiEsPosible() {
  if (musica && !estaSonando) {
    try {
      musica.setLoop(true);
      musica.setVolume(0.35);
      musica.loop();
      estaSonando = true;
    } catch (error) {
      // Se vuelve a intentar al hacer el primer clic.
    }
  }
}

// CLICS Y CAMBIO DE PANTALLA

function mousePressed() {
  if (musica && !estaSonando) {
    userStartAudio();
    musica.setLoop(true);
    musica.setVolume(0.35);
    musica.loop();
    estaSonando = true;
  }

  let numero = pantallaActual;

  for (let i = 0; i < botones[numero].length; i++) {
    if (botones[numero][i] !== "") {
      let x;
      let y;

      if (numero === 0) {
        x = i === 0 ? 300 : 500;
        y = 400;
      } else {
        x = calcularXBoton(numero, i);
        y = 410;
      }

      if (botonPresionado(x, y)) {
        let destino = destinos[numero][i];

        if (destino !== -1) {
          cambiarPantalla(destino);
        }

        return false;
      }
    }
  }
}

function botonPresionado(x, y) {
  return (
    mouseX >= x - 95 &&
    mouseX <= x + 95 &&
    mouseY >= y - 21 &&
    mouseY <= y + 21
  );
}

function cambiarPantalla(destino) {
  pantallaActual = destino;

  if (destino === 0 || destino === 16) {
    posX = -100;
  }
}

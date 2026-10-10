
/*
  TP FINAL: PERDIDO EN EL AMAZONAS
  Aventura gráfica interactiva
  Canvas: 800 x 450
*/

// PANTALLA ACTUAL
let pantallaActual = 0;

// ARREGLO DE IMÁGENES
let imagenes = [];

// NOMBRES DE LOS ARCHIVOS DE IMAGEN
// Los archivos van dentro de la carpeta data.
let nombresImagenes = [
  "",                  // 0 - INICIO
  "manaus",            // 1
  "desaparicion",      // 2
  "busqueda",          // 3
  "piragua",           // 4
  "avion",             // 5
  "patrulla",          // 6
  "pista",             // 7
  "flauta",            // 8
  "la_sigues",         // 9
  "amazonas",          // 10
  "final_bueno",       // 11
  "cuwatieri",         // 12
  "que_haces",         // 13
  "final_neutro",      // 14
  "final_malo",        // 15
  ""                   // 16 - CREDITOS
];

// TÍTULOS DE LAS PANTALLAS
let titulos = [
  "PERDIDO EN EL AMAZONAS",
  "Llegás a Manaus",
  "La desaparición",
  "¿Cómo vas a buscar?",
  "La ruta de la piragua",
  "La ruta del avión",
  "La Patrulla Fluvial",
  "Una nueva pista",
  "La misteriosa flauta",
  "¿La seguís?",
  "El Amazonas",
  "Los Cuwatieri",
  "¿Qué hacés?",
  "Final: una nueva oportunidad",
  "Final: el regreso",
  "Final: el peligro",
  "Créditos"
];

// TEXTOS NARRATIVOS
// La pantalla de inicio no tiene texto narrativo.
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
  "Alguien parece conocer el camino que tenés que seguir. ¿Vas a confiar en esa señal y avanzar hacia lo desconocido?",
  "Seguís adelante y te internás en el Amazonas. El entorno se vuelve cada vez más extraño y peligroso. Ya no sabés qué te espera más adelante.",
  "Finalmente, llegás a una región habitada por los Cuwatieri. Estás más cerca de resolver el misterio, pero ahora tenés que decidir cómo actuar.",
  "La situación se vuelve decisiva. Tenés que elegir entre confiar, retirarte o arriesgarte. Lo que hagas determinará el desenlace de tu aventura.",
  "Decidís confiar y actuar con prudencia. Gracias a esa decisión, conseguís avanzar y encontrar una salida favorable. La búsqueda llega a un desenlace positivo.",
  "Decidís retirarte antes de que el peligro sea mayor. No conseguís resolver todo el misterio, pero lográs regresar. La aventura termina con muchas preguntas sin respuesta.",
  "Decidís arriesgarte y avanzar sin medir las consecuencias. La selva demuestra ser más peligrosa de lo que imaginabas. Tu búsqueda termina de la peor manera.",
  "Trabajo práctico final: aventura gráfica interactiva.\n\nLibro: Perdido en el Amazonas.\nAutor: R. A. Montgomery.\nIlustraciones: L. Morrill.\n\nRealizado por Valentín Rojas y Luz Antonella Salazar Mesias."
];

// TEXTOS DE LOS BOTONES
// Cada fila corresponde a una pantalla.
// Se pueden usar hasta tres botones por pantalla.
let botones = [
  ["COMENZAR", "CRÉDITOS", ""],       // 0
  ["CONTINUAR", "", ""],              // 1
  ["BUSCAR PISTAS", "", ""],           // 2
  ["PIRAGUA", "AVIÓN", "PATRULLA"],    // 3
  ["CONTINUAR", "", ""],              // 4
  ["CONTINUAR", "", ""],              // 5
  ["CONTINUAR", "", ""],              // 6
  ["SEGUIR LA PISTA", "ABANDONAR", ""],// 7
  ["CONTINUAR", "", ""],              // 8
  ["SÍ, SEGUIR", "NO, RETIRARME", ""], // 9
  ["CONTINUAR", "", ""],              // 10
  ["CONTINUAR", "", ""],              // 11
  ["CONFIAR", "RETIRARME", "ARRIESGARME"], // 12
  ["VOLVER AL INICIO", "", ""],       // 13
  ["VOLVER AL INICIO", "", ""],       // 14
  ["VOLVER AL INICIO", "", ""],       // 15
  ["VOLVER AL INICIO", "", ""]        // 16
];

// DESTINOS DE LOS BOTONES
// Los números indican qué pantalla se abre al hacer clic.
let destinos = [
  [1, 16, -1],       // Inicio
  [2, -1, -1],       // Manaus
  [3, -1, -1],       // Desaparición
  [4, 5, 6],         // Elegir transporte
  [7, -1, -1],       // Piragua
  [7, -1, -1],       // Avión
  [7, -1, -1],       // Patrulla
  [8, 14, -1],       // Pista
  [9, -1, -1],       // Flauta
  [10, 14, -1],      // ¿La seguís?
  [11, -1, -1],      // Amazonas
  [12, -1, -1],      // Cuwatieri
  [13, 14, 15],      // Decisión final
  [0, -1, -1],       // Final bueno
  [0, -1, -1],       // Final neutro
  [0, -1, -1],       // Final malo
  [0, -1, -1]        // Créditos
];


// CARGA DE IMÁGENES
function preload() {
  for (let i = 0; i < nombresImagenes.length-5; i++) {
    if (nombresImagenes[i] != "") {
      let numeroImagen = i;
      
      loadImage(
        "data/" + nombresImagenes[i] + ".png",
        function(imagenCargada) {
          imagenes[numeroImagen] = imagenCargada;
        },
        function() {
          imagenes[numeroImagen] = null;
        }
      );
    }
  }
}


// CONFIGURACIÓN INICIAL
function setup() {
  createCanvas(800, 450);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  textFont("sans-serif");
}


// DIBUJO PRINCIPAL
function draw() {
  dibujarFondo();
  mostrarPantalla(pantallaActual);
}


// FONDO
function dibujarFondo() {
  background(20, 45, 42);

  // Decoración sencilla para el fondo.
  noStroke();
  fill(30, 65, 55);
  ellipse(100, 80, 240, 180);
  ellipse(700, 350, 300, 220);
  ellipse(650, 60, 180, 130);

  stroke(90, 120, 85);
  strokeWeight(2);
  line(0, 430, 800, 430);
  noStroke();
}


// MUESTRA UNA PANTALLA
function mostrarPantalla(numero) {
  mostrarTitulo(titulos[numero]);

  // La portada solo muestra el título y los botones.
  if (numero != 0) {
    mostrarTexto(textos[numero]);
    mostrarImagen(numero, width / 2, 255, 360, 200);
  }

  // Los créditos no necesitan imagen.
  if (numero == 16) {
    mostrarTexto(textos[numero]);
  }

  for (let i = 0; i < botones[numero].length; i++) {
    if (botones[numero][i] != "") {
      crearBoton(
        botones[numero][i],
        width / (contarBotones(numero) + 1) *
        (posicionBoton(numero, i) + 1),
        400
      );
    }
  }
}


// TÍTULO
function mostrarTitulo(titulo) {
  fill(255);
  noStroke();
  textSize(28);
  text(titulo, width / 2, 40);
}


// TEXTO NARRATIVO
function mostrarTexto(contenido) {
  fill(245);
  noStroke();
  textSize(16);
  text(contenido, width / 2, 105, 720, 95);
}


// IMAGEN DE CADA PANTALLA
function mostrarImagen(numero, x, y, anchoMaximo, altoMaximo) {
  if (imagenes[numero] != null && imagenes[numero] != undefined) {
    let imagen = imagenes[numero];

    let escala = min(
      anchoMaximo / imagen.width,
      altoMaximo / imagen.height
    );

    image(
      imagen,
      x,
      y,
      imagen.width * escala,
      imagen.height * escala
    );
  } else {
    dibujarMarcadorImagen(
      nombresImagenes[numero],
      x,
      y,
      anchoMaximo,
      altoMaximo
    );
  }
}


// MARCADOR PROVISORIO MIENTRAS FALTAN LAS IMÁGENES
function dibujarMarcadorImagen(nombre, x, y, ancho, alto) {
  rectMode(CENTER);
  stroke(180);
  strokeWeight(2);
  fill(35, 75, 65);
  rect(x, y, ancho, alto, 10);

  noStroke();
  fill(230);
  textSize(16);
  text("Imagen: " + nombre, x, y);
}


// CREA UN BOTÓN
function crearBoton(etiqueta, x, y) {
  rectMode(CENTER);
  stroke(220);
  strokeWeight(1);
  fill(45, 95, 75);
  rect(x, y, 170, 38, 8);

  noStroke();
  fill(255);
  textSize(14);
  text(etiqueta, x, y);
}


// CUENTA CUÁNTOS BOTONES TIENE UNA PANTALLA
function contarBotones(numero) {
  let cantidad = 0;

  for (let i = 0; i < botones[numero].length; i++) {
    if (botones[numero][i] != "") {
      cantidad++;
    }
  }

  return cantidad;
}


// CALCULA LA POSICIÓN DE UN BOTÓN
function posicionBoton(numero, indice) {
  let posicion = 0;

  for (let i = 0; i < indice; i++) {
    if (botones[numero][i] != "") {
      posicion++;
    }
  }

  return posicion;
}


// DETECTA CUANDO SE HACE CLIC
function mousePressed() {
  let cantidad = contarBotones(pantallaActual);

  for (let i = 0; i < botones[pantallaActual].length; i++) {
    if (botones[pantallaActual][i] != "") {
      let x = width / (cantidad + 1) *
      (posicionBoton(pantallaActual, i) + 1);

      if (botonPresionado(x, 400)) {
        if (destinos[pantallaActual][i] != -1) {
          cambiarPantalla(destinos[pantallaActual][i]);
        }
      }
    }
  }
}


// COMPRUEBA SI EL CLIC FUE DENTRO DEL BOTÓN
function botonPresionado(x, y) {
  return (
    mouseX > x - 85 &&
    mouseX < x + 85 &&
    mouseY > y - 19 &&
    mouseY < y + 19
  );
}


// CAMBIA DE PANTALLA
function cambiarPantalla(destino) {
  pantallaActual = destino;
}

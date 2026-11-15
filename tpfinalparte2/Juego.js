
class Juego {

  constructor() {

    this.jugador = new Jugador();

    this.obstaculos = [];

    this.obstaculos[0] = new Obstaculo(200, -50);
    this.obstaculos[1] = new Obstaculo(400, -150);
    this.obstaculos[2] = new Obstaculo(580, -250);

    this.botones = [];

    this.botones[0] = new Boton(735, 300, imagenBoton01);
    this.botones[1] = new Boton(735, 355, imagenBoton02);

    this.estado = "jugando";

    this.tiempoInicial = millis();
    this.tiempo = 30;
  }


  // ACTUALIZAR EL JUEGO
  actualizar() {

    if (this.estado == "jugando") {

      this.tiempo = 30 - floor(
        (millis() - this.tiempoInicial) / 1000
      );

      this.jugador.mover();

      for (let i = 0; i < this.obstaculos.length; i++) {

        this.obstaculos[i].mover();

        // COLISION
        if (this.jugador.colisiona(this.obstaculos[i])) {

          if (millis() - this.jugador.ultimoGolpe > 1000) {

            this.jugador.vidas--;
            this.jugador.ultimoGolpe = millis();
          }

          this.obstaculos[i].reiniciar();
        }
      }

      // RESULTADOS
      if (this.jugador.vidas <= 0) {
        this.estado = "perdiste";
      }

      else if (this.tiempo <= 0) {
        this.tiempo = 0;
        this.estado = "ganaste";
      }
    }
  }


  // MOSTRAR EL JUEGO
  mostrar() {

    imageMode(CORNER);
    image(imagenFondo, 0, 0, 800, 400);

    if (this.estado == "jugando" ||
        this.estado == "instrucciones") {

      for (let i = 0; i < this.obstaculos.length; i++) {
        this.obstaculos[i].mostrar();
      }

      this.jugador.mostrar();

      if (this.estado == "jugando") {
        this.mostrarInterfaz();
      }

      if (this.estado == "instrucciones") {
        this.mostrarInstrucciones();
      }

      this.botones[0].mostrar();
      this.botones[1].mostrar();
    }

    else if (this.estado == "ganaste" ||
             this.estado == "perdiste") {

      this.mostrarResultado();
    }

    else if (this.estado == "creditos") {
      this.mostrarCreditos();
    }
  }


  // INTERFAZ
  mostrarInterfaz() {

    imageMode(CORNER);

    image(imagenReloj, 675, 12, 25, 25);

    fill(255);
    textSize(22);
    textAlign(LEFT, CENTER);
    text(this.tiempo, 705, 25);

    image(imagenVida, 20, 12, 25, 25);

    text(this.jugador.vidas, 50, 25);
  }


  // INSTRUCCIONES
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


  // RESULTADO
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


  // CREDITOS
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


  // CONTROLAR CLICS
  mousePressed() {

    if (this.estado == "jugando") {

      if (this.botones[0].fuePresionado()) {
        this.reiniciar();
      }

      else if (this.botones[1].fuePresionado()) {
        this.estado = "instrucciones";
      }
    }

    else if (this.estado == "instrucciones") {

      if (this.botones[0].fuePresionado()) {
        this.reiniciar();
      }

      else if (this.botones[1].fuePresionado()) {
        this.estado = "jugando";
      }
    }

    else if (this.estado == "ganaste" ||
             this.estado == "perdiste") {

      this.estado = "creditos";
    }

    else if (this.estado == "creditos") {
      this.reiniciar();
    }
  }


  // REINICIAR
  reiniciar() {

    this.jugador = new Jugador();

    this.obstaculos = [];

    this.obstaculos[0] = new Obstaculo(200, -50);
    this.obstaculos[1] = new Obstaculo(400, -150);
    this.obstaculos[2] = new Obstaculo(580, -250);

    this.tiempoInicial = millis();
    this.tiempo = 30;

    this.estado = "jugando";
  }
}

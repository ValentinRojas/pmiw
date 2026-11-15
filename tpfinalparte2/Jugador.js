
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

/*class Jugador {
  constructor() {
    this.x = 400;
    this.y = 330;
    this.velocidad = 5;
    this.ancho = 60;
    this.alto = 40;
    this.vidas = 3;
  }

  mostrar() {
    fill(120, 75, 35);
    noStroke();
    ellipse(this.x, this.y, this.ancho, this.alto);
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

    // Evitamos que la piragua salga de la pantalla.
    this.x = constrain(this.x, 35, width - 35);
    this.y = constrain(this.y, 35, height - 35);
  }
}

/*class Obstaculo {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.velocidad = 3;
    this.tamano = 35;
  }

  mostrar() {
    fill(100, 65, 35);
    noStroke();
    rect(this.x, this.y, this.tamano, this.tamano, 8);
  }

  mover() {
    this.y += this.velocidad;

    // Si sale de la pantalla, vuelve arriba.
    if (this.y > height + this.tamano) {
      this.y = -this.tamano;
      this.x = random(50, width - 50);
    }
  }
}

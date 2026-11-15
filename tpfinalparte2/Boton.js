/*class Boton {
  constructor(texto, x, y) {
    this.texto = texto;
    this.x = x;
    this.y = y;
    this.ancho = 180;
    this.alto = 45
  }

  mostrar() {
    rectMode(CENTER);
    fill(30, 90, 60);
    rect(this.x, this.y, this.ancho, this.alto, 8);

    fill(255);
    textAlign(CENTER, CENTER);
    textSize(16);
    text(this.texto, this.x, this.y);
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

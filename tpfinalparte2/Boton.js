
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

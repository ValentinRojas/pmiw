
class Obstaculo {

  constructor(x, y) {

    this.x = x;
    this.y = y;

    this.velocidad = 3;
    this.tamano = 48;

    this.elegirImagen();
  }


  elegirImagen() {

    this.numeroImagen = floor(random(0, 3));
  }


  mostrar() {

    imageMode(CENTER);

    image(
      imagenesObstaculos[this.numeroImagen],
      this.x,
      this.y,
      this.tamano,
      this.tamano
    );
  }


  mover() {

    this.y += this.velocidad;

    if (this.y > height + this.tamano) {
      this.reiniciar();
    }
  }


  reiniciar() {

    this.x = random(165, 640);
    this.y = -this.tamano;

    this.elegirImagen();
  }
}


export class Jugador {
  hp: number;

  constructor() {
    this.hp = 100;
  }

  recibeDaño(daño: number) {

    if (daño >= this.hp) {
      this.hp = 0;
    } else {
      this.hp = this.hp - daño;
    }

    return this.hp;
  }

}

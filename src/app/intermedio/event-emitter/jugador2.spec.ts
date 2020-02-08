import { Jugador2 } from './jugador2'


describe('Jugador 2 Emit', () => {

  let jugador: Jugador2;

  beforeEach(() => jugador = new Jugador2());

  it('Debe emitir un evento cuando se recibe daño', () => {

    let nuevoHp = 0;

    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp;
    });
    jugador.recibeDaño(1000);

    expect(nuevoHp).toBe(0);

  });

  it('Debe emitir un evento cuando se recibe daño y sobrevivir si es menos que 100', () => {

    let nuevoHp = 0;

    jugador.hpCambia.subscribe(hp => {
      nuevoHp = hp;
    });
    jugador.recibeDaño(50);

    expect(nuevoHp).toBe(50);

  });

})

import { Jugador } from './clase';

describe('Pruebas con clases', () => {

  let jugador = new Jugador();

  beforeEach(() => {
    jugador = new Jugador();
  });

  it('Debe retornar 80 de HP si recibe 20 de daño', () => {
    // const jugador = new Jugador();
    const output = jugador.recibeDaño(20);
    expect(output).toBe(80);
  });

  it('Debe retornar 50 de HP si recibe 50 de daño', () => {
    const output = jugador.recibeDaño(50);
    expect(output).toBe(50);
  });

  it('Debe retornar 0 de HP si recibe 100 de daño', () => {
    const output = jugador.recibeDaño(100);
    expect(output).toBe(0);
  });

});

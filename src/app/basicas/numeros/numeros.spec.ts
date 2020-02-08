import { incrementar } from './numeros';

describe('Pruebas con números', () => {

  it('Debe retornar 100, si el número es mayor a 1000', () => {
    const output = incrementar(300);
    expect(output).toBe(100);
  });

  it('Debe retornar número + 1, si es menor a 100', () => {
    const output = incrementar(50);
    expect(output).toBe(51);
  });
});

import { usuarioIngresado } from './boolean';

describe('Pruebas de booleans', () => {

  it('Debe regresar un true', () => {
    const output = usuarioIngresado();
    expect(output).toBeTruthy();
  });

});

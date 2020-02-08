import { mensaje } from './string';

describe('Prueba de strings', () => {

  it('Debe regresar un tipo string', () => {
    const output = mensaje('Ruslan');
    expect(typeof output).toBe('string');
  });

  it('Debe contener Ruslan', () => {
    const output = mensaje('Ruslan');
    expect(output).toContain('Ruslan');
  });

});

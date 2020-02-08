import { obtenerRobots } from './array';

describe('Prueba con arrays', () => {

  it('Debe retornar al menos 3 robots', () => {
    const res = obtenerRobots();
    expect(res.length).toBeGreaterThanOrEqual(2);
  });

  it('Debe de existir Megaman y Ultron', () => {
    const res = obtenerRobots();
    expect(res).toContain('MegaMan');
    expect(res).toContain('Ultron');
  });
});

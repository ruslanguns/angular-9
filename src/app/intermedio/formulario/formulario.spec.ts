import { RegisterForm } from './formulario';
import { FormBuilder } from '@angular/forms';

describe('Formularios', () => {

  let componente: RegisterForm;

  beforeEach(() => {
    componente = new RegisterForm(new FormBuilder());
  });

  it('Debe crear un formulario con dos campos', () => {
    expect(componente.form.contains('email')).toBeTruthy();
    expect(componente.form.contains('password')).toBeTruthy();
  });

  it('El email debe ser obligatorio', () => {

    const control = componente.form.get('email');
    control.setValue('');

    expect(control.valid).toBeFalsy();
  });

  it('El email debe ser válido', () => {

    const control = componente.form.get('email');
    control.setValue('ruslan@gmail.com');

    expect(control.valid).toBeTruthy();
  });

});

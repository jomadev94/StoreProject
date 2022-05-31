import { Roles } from '../enumerables/roles';

export class Globals {
  public static roles = Roles;
  public static errors: { [key: string]: string } = {
    required: "El campo '#' debe completarse!",
    maxlength: "El campo '#' no debe superar los X caracteres!",
    pattern: "El campo '#' no cumple con el formato solicitado!",
    email: "El campo '#' debe corresponder a un formato de correo valido.",
    checkbox: "Debe aceptar nuestras condiciones para crear su cuenta.",
    number:"El campo solo acepta valores numericos.",
    younger:"El uso de esta aplicacion solo esta permitido para adultos responsables.",
    noMatch: "La contraseña ingresada no coincide con la original.",
    emailExist: "El correo ingresado ya se encuentra en uso.",
    min:"El campo '#' no puede ser inferior a X!",
    max:"El campo '#' no puede excederse del valor X!",
  };
}

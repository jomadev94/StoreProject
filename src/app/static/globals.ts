import { SectionButton } from '@models/view/sectionButton';
import { Roles } from '../enumerables/roles';

export class Globals {
  public static roles = Roles;
  public static errors: { [key: string]: string } = {
    required: "El campo '#' debe completarse!",
    maxlength: "El campo '#' no debe superar los X caracteres!",
    pattern: "El campo '#' no cumple con el formato solicitado!",
    email: "El campo '#' debe corresponder a un formato de correo valido.",
    terms: "Debe aceptar nuestras condiciones para crear su cuenta.",
    younger:"El uso de esta aplicacion solo esta permitido para adultos responsables.",
    noMatch: "La contraseña ingresada no coincide con la original.",
    emailExist: "El correo ingresado ya se encuentra en uso.",
    min:"El campo '#' no puede ser inferior a X!",
    max:"El campo '#' no puede excederse del valor X!",
    invalidFormat:"Algunos de los archivos seleccionados no corresponden con el formato solicitado.",
    limitExceeded: "Se supera la cantidad de archivos a subir. Por favor, vuelva a realizar la selección.",
    maxSize:"Uno de los archivos seleccionados supera el maximo de 10 MB."
  };

  public static buttons: { [key: string]: SectionButton }={
    home:{
      text: 'Volver a home',
      action: '/home',
      roles: [Roles.NoAuth, Roles.Admin, Roles.Client],
      icon: 'arrow-left',
    },
  }
}

import { SectionButton } from '@models/view/sectionButton';
import { Category } from '@models/view/category';
import { Roles } from '../enumerables/roles';
import { Categories } from '@enumerables/categories';
import {
  FlexibleConnectedPositionStrategy,
  GlobalPositionStrategy,
  Overlay,
  OverlayConfig,
  PositionStrategy,
  ScrollStrategy,
  ScrollStrategyOptions,
} from '@angular/cdk/overlay';

export class Globals {
  public static roles = Roles;
  public static errors: { [key: string]: string } = {
    required: "El campo '#' debe completarse!",
    maxlength: "El campo '#' no debe superar los X caracteres!",
    pattern: "El campo '#' no cumple con el formato solicitado!",
    email: "El campo '#' debe corresponder a un formato de correo valido.",
    terms: 'Debe aceptar nuestras condiciones para crear su cuenta.',
    younger:
      'El uso de esta aplicacion solo esta permitido para adultos responsables.',
    noMatch: 'La contraseña ingresada no coincide con la original.',
    emailExist: 'El correo ingresado ya se encuentra en uso.',
    min: "El campo '#' no puede ser inferior a X!",
    max: "El campo '#' no puede excederse del valor X!",
    invalidFormat:
      'Algunos de los archivos seleccionados no corresponden con el formato solicitado.',
    limitExceeded:
      'Se supera la cantidad de archivos a subir. Por favor, vuelva a realizar la selección.',
    maxSize: 'Uno de los archivos seleccionados supera el maximo de 10 MB.',
  };

  public static buttons: { [key: string]: SectionButton } = {
    home: {
      text: 'Volver a home',
      action: '/home',
      roles: [Roles.NoAuth, Roles.Admin, Roles.Client],
      icon: 'arrow-left',
    },
  };

  public static categories: Category[] = [
    {
      name: Categories.Todas,
      icon: 'ellipsis',
    },
    {
      name: Categories.Figuras,
      icon: 'robot',
    },
    {
      name: Categories.Comics,
      icon: 'book-journal-whills',
    },
    {
      name: Categories.Videojuegos,
      icon: 'gamepad',
    },
    {
      name: Categories.Ropa,
      icon: 'shirt',
    },
    {
      name: Categories.Accesorios,
      icon: 'dice',
    },
  ];

  public static ovConfig(
    backdropClass: string = 'overlay-dark',
    scrollS: ScrollStrategy,
    positionS: GlobalPositionStrategy | FlexibleConnectedPositionStrategy
  ): OverlayConfig {
    return new OverlayConfig({
      hasBackdrop: true,
      backdropClass: backdropClass,
      scrollStrategy: scrollS,
      positionStrategy: positionS,
    });
  }
}

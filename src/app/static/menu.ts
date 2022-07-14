import { Button } from '@models/view/button';
import { Roles } from '../enumerables/roles';
import { NavSection } from '../models/view/navSection';

export class Menu {
  public static navSections: NavSection[] = [
    {
      title: 'Acceso',
      links: [
        { text: 'Iniciar sesión', id: 'login', roles: [Roles.NoAuth]},
        { text: 'Registrarse', href: 'user/register', roles: [Roles.NoAuth] },
      ],
      roles: [Roles.NoAuth],
    },
    {
      title: 'Panel Admin',
      links: [
        { text: 'Agregar producto', href: 'product/create', roles: [Roles.Admin] },
        { text: 'Gestión de ofertas', href: 'user/alert/soon', roles: [Roles.Admin] },
        { text: 'Ver estadísticas', href: 'user/alert/soon', roles: [Roles.Admin] },
      ],
      roles: [Roles.Admin],
    },
    {
      title: 'Saldo actual',
      links: [{ text: '+ Agregar saldo', id: 'wallet', roles: [Roles.Client]}],
      roles: [Roles.Client],
    },
    {
      title: 'Cuenta',
      links: [
        { text: 'Editar perfil', href: 'user/alert/soon', roles: [Roles.Client, Roles.Admin]},
        { text: 'Seguridad', href: 'user/alert/soon', roles: [Roles.Client, Roles.Admin] },
        { text: 'Mis compras', href: 'user/alert/soon', roles: [Roles.Client] },
      ],
      roles: [Roles.Client, Roles.Admin],
    },
    {
      title: 'Descubrir',
      links: [
        { text: 'Ofertas',href: '',roles: [Roles.Client, Roles.Admin, Roles.NoAuth]},
        { text: 'Populares', href: '', roles: [Roles.Client, Roles.Admin, Roles.NoAuth]},
      ],
      roles: [Roles.Client, Roles.Admin, Roles.NoAuth],
    },
  ];
  
  public static options:Button[]=[
    {text:"Ofertas",href:"/product/search", params:{ofert:true}},
    {text:"Novedades",href:"/product/search"},
  ]
}

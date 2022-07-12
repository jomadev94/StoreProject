import { Button } from '@models/view/button';
import { Roles } from '../enumerables/roles';
import { NavLink } from '../models/view/navLink';
import { NavSection } from '../models/view/navSection';

export class Menu {
  public static navSections: NavSection[] = [
    {
      title: 'Acceso',
      links: [
        { title: 'Iniciar sesión', id: 'login', roles: [Roles.NoAuth],isButton:true },
        { title: 'Registrarse', href: 'user/register', roles: [Roles.NoAuth] },
      ],
      roles: [Roles.NoAuth],
    },
    {
      title: 'Panel Admin',
      links: [
        { title: 'Agregar producto', href: 'product/create', roles: [Roles.Admin] },
        { title: 'Gestión de ofertas', href: 'user/alert/soon', roles: [Roles.Admin] },
        { title: 'Ver estadísticas', href: 'user/alert/soon', roles: [Roles.Admin] },
      ],
      roles: [Roles.Admin],
    },
    {
      title: 'Saldo actual',
      links: [{ title: '+ Agregar saldo', id: 'wallet', roles: [Roles.Client],isButton:true}],
      roles: [Roles.Client],
    },
    {
      title: 'Cuenta',
      links: [
        { title: 'Editar perfil', href: 'user/alert/soon', roles: [Roles.Client, Roles.Admin]},
        { title: 'Seguridad', href: 'user/alert/soon', roles: [Roles.Client, Roles.Admin] },
        { title: 'Mis compras', href: 'user/alert/soon', roles: [Roles.Client] },
      ],
      roles: [Roles.Client, Roles.Admin],
    },
    {
      title: 'Descubrir',
      links: [
        { title: 'Ofertas',href: '',roles: [Roles.Client, Roles.Admin, Roles.NoAuth]},
        { title: 'Populares', href: '', roles: [Roles.Client, Roles.Admin, Roles.NoAuth]},
      ],
      roles: [Roles.Client, Roles.Admin, Roles.NoAuth],
    },
  ];
  
  public static options:Button[]=[
    {text:"Ofertas",href:"/product/search", params:{ofert:true}},
    {text:"Novedades",href:"/product/search"},
  ]
}

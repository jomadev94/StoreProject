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
        { title: 'Agregar producto', href: '', roles: [Roles.Admin] },
        { title: 'Gestión de ofertas', href: '', roles: [Roles.Admin] },
        { title: 'Configurar promoción', href: '', roles: [Roles.Admin] },
        { title: 'Ver estadísticas', href: '', roles: [Roles.Admin] },
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
        {
          title: 'Editar perfil',
          href: '',
          roles: [Roles.Client, Roles.Admin],
        },
        { title: 'Seguridad', href: '', roles: [Roles.Client, Roles.Admin] },
        { title: 'Mis compras', href: '', roles: [Roles.Client] },
      ],
      roles: [Roles.Client, Roles.Admin],
    },
    {
      title: 'Descubrir',
      links: [
        {
          title: 'Ofertas',
          href: '',
          roles: [Roles.Client, Roles.Admin, Roles.NoAuth],
        },
        {
          title: 'Populares',
          href: '',
          roles: [Roles.Client, Roles.Admin, Roles.NoAuth],
        },
        { title: 'Recomendado', href: '', roles: [Roles.Client] },
      ],
      roles: [Roles.Client, Roles.Admin, Roles.NoAuth],
    },
  ];
  
  public static options:NavLink[]=[
    {title:"Ofertas",roles:[Roles.Admin,Roles.Client,Roles.NoAuth],href:""},
    {title:"Populares",roles:[Roles.Admin,Roles.Client,Roles.NoAuth],href:""},
    {title:"Categorias",roles:[Roles.Admin,Roles.Client,Roles.NoAuth],href:""},
    {title:"Recomendado",roles:[Roles.Client],href:""}
  ]
}

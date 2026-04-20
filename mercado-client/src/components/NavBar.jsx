import { NavLink } from 'react-router-dom';
import Button from './Button';
import logo from '../assets/img/glow-ritual-logo.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border-2 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition duration-200 ease-in-out',
    isActive
      ? 'border-pink-300 bg-pink-300 text-white shadow-sm'
      : 'border-transparent text-pink-600 hover:border-pink-300 hover:bg-pink-100 hover:text-pink-600 hover:shadow-sm',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b-2 border-pink-300/20 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Glow Ritual"
            className="h-10 w-10 rounded-full border-2 border-pink-300 bg-white object-contain"
          />
          <div className="space-y-0.5">
            <p className="text-xl font-bold text-pink-600">Glow Ritual</p>
            <p className="text-xs uppercase tracking-[0.28em] text-pink-600">
              Premium Skincare
            </p>
          </div>
        </NavLink>

        <div className="hidden items-center gap-3 md:flex">
          <nav className="flex items-center gap-2">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={navLinkClassName}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <Button to="/auth/signin" variant="primary">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

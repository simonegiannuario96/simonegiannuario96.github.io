import { NavLink } from 'react-router-dom';
import { MdHome, MdWork, MdBuild, MdMail, MdScience } from 'react-icons/md';
import Logo from './Logo';

// Using filled icons for a stronger look
const navLinks = [
  { path: '/', text: 'Home', end: true, icon: <MdHome /> },
  { path: '/projects', text: 'Projects', end: false, icon: <MdWork /> },
  { path: '/skills', text: 'Skills', end: false, icon: <MdBuild /> },
  { path: '/contact', text: 'Contact', end: false, icon: <MdMail /> },
  { path: '/home', text: 'Home prova', end: false, icon: <MdScience /> },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) => (isActive ? 'active' : '');

const Header = () => (
  <header className="header">
    <div className="header-content">
      <div className="header-logo">
        <Logo />
      </div>
      <nav className="nav" aria-label="Primary">
        {navLinks.map(({ path, text, end, icon }) => (
          <NavLink key={path} to={path} end={end} className={navLinkClass} title={text}>
            {icon}
            <span className="nav-text">{text}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  </header>
);

export default Header;
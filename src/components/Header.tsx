import { Phone, Key } from 'lucide-react';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Key className="logo-icon" size={32} />
          <span>Right Away Locksmith</span>
        </div>
        
        <nav className="nav-links">
          <a href="#services" className="nav-link">Services</a>
          <a href="#about" className="nav-link">Why Us</a>
          <a href="#contact" className="nav-link">Contact</a>
          <a href="tel:3034793344" className="btn btn-primary">
            <Phone size={18} />
            (303) 479-3344
          </a>
        </nav>
      </div>
    </header>
  );
}

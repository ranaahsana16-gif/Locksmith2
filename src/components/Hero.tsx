import { Phone, ShieldCheck, Clock, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1558002038-1055907df827?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container">
        <h1>#1 Locksmith in Aurora, CO & Denver Metro</h1>
        <p>Locked out? Need new keys or locks changed? We provide fast, reliable, and affordable residential, commercial, and automotive locksmith services 24/7.</p>
        
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          <a href="tel:3034793344" className="btn btn-primary" style={{ fontSize: '1.25rem', padding: '1rem 2rem' }}>
            <Phone size={24} />
            Call Now: (303) 479-3344
          </a>
          <a href="#services" className="btn btn-outline" style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', borderColor: 'white' }}>
            View Services
          </a>
        </div>
        
        <div className="hero-badges">
          <div className="hero-badge">
            <Clock size={16} style={{ color: 'var(--secondary)' }} />
            24/7 Emergency Service
          </div>
          <div className="hero-badge">
            <ShieldCheck size={16} style={{ color: 'var(--secondary)' }} />
            Licensed & Insured
          </div>
          <div className="hero-badge">
            <MapPin size={16} style={{ color: 'var(--secondary)' }} />
            Aurora & Denver Area
          </div>
        </div>
      </div>
    </section>
  );
}

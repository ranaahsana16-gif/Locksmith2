import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h4 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span style={{ color: 'var(--primary)' }}>Right Away</span> Locksmith
            </h4>
            <p style={{ marginBottom: '1.5rem', color: '#94a3b8' }}>
              Aurora and Denver Metro's #1 trusted locksmith service. We provide residential, commercial, and automotive solutions 24/7.
            </p>
          </div>
          
          <div>
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Phone size={18} />
                <div>
                  <a href="tel:3034793344" style={{ color: 'var(--white)', fontWeight: 'bold' }}>(303) 479-3344</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={18} />
                <div>
                  <a href="mailto:info@locksmithrightaway.com" style={{ color: '#cbd5e1' }}>info@locksmithrightaway.com</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <MapPin size={18} />
                <span style={{ color: '#cbd5e1' }}>Serving Aurora, CO &<br />Denver Metro Area</span>
              </div>
            </div>
          </div>
          
          <div>
            <h4>Business Hours</h4>
            <div className="footer-contact">
              <div className="footer-contact-item">
                <Clock size={18} />
                <div style={{ color: '#cbd5e1' }}>
                  <p style={{ color: 'var(--secondary)', fontWeight: 'bold', marginBottom: '0.25rem' }}>24/7 Emergency Service</p>
                  <p>Monday - Sunday</p>
                  <p>Open 24 Hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Right Away Locksmith. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

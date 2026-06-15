import { Home, Building2, Car, CheckCircle2 } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: "Residential Locksmith",
      description: "Keep your home secure with our top-tier residential services. We handle everything from lockouts to complete security upgrades.",
      icon: <Home size={32} />,
      features: [
        "House Lockouts",
        "Lock Rekeying & Replacement",
        "Smart Lock Installation",
        "Key Duplication"
      ]
    },
    {
      title: "Commercial Locksmith",
      description: "Protect your business assets with high-security commercial locks and master key systems tailored for your needs.",
      icon: <Building2 size={32} />,
      features: [
        "Master Key Systems",
        "High-Security Locks",
        "Access Control Systems",
        "Panic Bars & Exit Devices"
      ]
    },
    {
      title: "Automotive Locksmith",
      description: "Stranded? We provide rapid response automotive locksmith services to get you back on the road safely.",
      icon: <Car size={32} />,
      features: [
        "Car Lockouts",
        "Ignition Repair & Replace",
        "Key Fob Programming",
        "Transponder Keys"
      ]
    }
  ];

  return (
    <section id="services" className="section" style={{ backgroundColor: 'var(--white)' }}>
      <div className="container">
        <h2 className="section-title">Our Locksmith Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex}>
                    <CheckCircle2 size={16} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="tel:3034793344" className="btn btn-outline" style={{ marginTop: 'auto', width: '100%' }}>
                Request Service
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

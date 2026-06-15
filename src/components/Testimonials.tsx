import { Star, Shield, ThumbsUp, Zap } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: "Sarah M.",
      text: "Locked myself out of my car at 11 PM. Right Away Locksmith was there in 20 minutes and got me back in quickly. Very professional and reasonably priced!",
      rating: 5,
      initial: "S"
    },
    {
      name: "David T.",
      text: "We needed all the locks rekeyed for our new business location. They handled the job perfectly and even helped us set up a master key system.",
      rating: 5,
      initial: "D"
    },
    {
      name: "Emily R.",
      text: "Excellent service! The technician was polite, wore a mask, and fixed our smart lock issue that two other companies couldn't figure out.",
      rating: 5,
      initial: "E"
    }
  ];

  return (
    <section id="about" className="section testimonials-section">
      <div className="container">
        <div className="text-center" style={{ marginBottom: '4rem' }}>
          <h2 className="section-title" style={{ marginBottom: '1rem' }}>Why Choose Right Away Locksmith?</h2>
          <p style={{ maxWidth: '700px', margin: '0 auto', color: '#cbd5e1', fontSize: '1.125rem' }}>
            We pride ourselves on providing the fastest, most reliable locksmith services in the Aurora and Denver Metro area.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(30, 64, 175, 0.2)', width: '5rem', height: '5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--secondary)' }}>
              <Zap size={32} />
            </div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--white)' }}>Fast Response</h3>
            <p style={{ color: '#94a3b8' }}>We arrive quickly to handle your emergencies, getting you back to your life.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(30, 64, 175, 0.2)', width: '5rem', height: '5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--secondary)' }}>
              <Shield size={32} />
            </div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--white)' }}>Licensed & Insured</h3>
            <p style={{ color: '#94a3b8' }}>Fully certified professionals giving you complete peace of mind.</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ background: 'rgba(30, 64, 175, 0.2)', width: '5rem', height: '5rem', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', color: 'var(--secondary)' }}>
              <ThumbsUp size={32} />
            </div>
            <h3 style={{ marginBottom: '0.5rem', color: 'var(--white)' }}>5-Star Rated</h3>
            <p style={{ color: '#94a3b8' }}>Over 198 Google reviews with a perfect 5.0 star rating.</p>
          </div>
        </div>

        <h3 className="text-center" style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--white)' }}>What Our Customers Say</h3>
        
        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div key={index} className="testimonial-card">
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <div className="author-avatar">{review.initial}</div>
                <span>{review.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

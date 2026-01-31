const Header = () => {
    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            width: '100%',
            zIndex: 1000,
            background: 'rgba(5, 5, 5, 0.9)',
            backdropFilter: 'blur(20px)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
            padding: '1.2rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{
                    fontSize: '2rem',
                    fontFamily: 'var(--font-display)',
                    color: 'var(--white)',
                    letterSpacing: '-0.5px',
                    fontWeight: 900
                }}>
                    ELECTRIC<span style={{ color: 'var(--orange)' }}>SURGE</span>
                </div>
                <div style={{ display: 'flex', gap: '2.5rem' }}>
                    {['HOME', 'GALLERY', 'STAFF', 'CONTACT'].map(link => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            style={{
                                color: 'rgba(255,255,255,0.7)',
                                textDecoration: 'none',
                                fontWeight: 800,
                                fontSize: '0.85rem',
                                letterSpacing: '0.15em',
                                transition: 'var(--transition-base)'
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = 'var(--white)';
                                e.currentTarget.style.transform = 'translateY(-1px)';
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                                e.currentTarget.style.transform = 'translateY(0)';
                            }}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Header;

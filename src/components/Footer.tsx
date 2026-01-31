import { motion } from 'framer-motion';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--black)',
            padding: '10rem 0 4rem',
            borderTop: '1px solid rgba(255, 255, 255, 0.03)'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', marginBottom: '8rem' }}>
                    <div>
                        <div style={{
                            fontSize: '2rem',
                            fontFamily: 'var(--font-display)',
                            color: 'var(--white)',
                            marginBottom: '1.5rem',
                            fontWeight: 900,
                            letterSpacing: '-0.5px'
                        }}>
                            ELECTRIC<span style={{ color: 'var(--orange)' }}>SURGE</span>
                        </div>
                        <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem', maxWidth: '300px' }}>
                            The region's most dynamic field hockey club, committed to building technical excellence and speed.
                        </p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.8rem', marginBottom: '2rem', color: 'var(--white)', fontWeight: 800, letterSpacing: '0.2rem' }}>NAVIGATION</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {['Home', 'Gallery', 'Staff', 'Contact'].map(link => (
                                <a key={link} href={`#${link.toLowerCase()}`} style={{
                                    color: 'var(--text-mid)',
                                    textDecoration: 'none',
                                    fontSize: '0.85rem',
                                    fontWeight: 700,
                                    transition: 'var(--transition-base)'
                                }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-mid)')}
                                >{link.toUpperCase()}</a>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '0.8rem', marginBottom: '2rem', color: 'var(--white)', fontWeight: 800, letterSpacing: '0.2rem' }}>SOCIALS</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                            {[
                                { name: 'INSTAGRAM', url: 'https://www.instagram.com/surge_fhc/?hl=en' },
                                { name: 'FACEBOOK', url: 'https://www.facebook.com/p/Electric-Surge-Field-Hockey-Club-100063490928649/' },
                                { name: 'X / TWITTER', url: 'https://x.com/ElectricsurgeHC' }
                            ].map(social => (
                                <motion.a
                                    key={social.name}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ x: 5 }}
                                    style={{
                                        color: 'var(--text-mid)',
                                        textDecoration: 'none',
                                        fontSize: '0.85rem',
                                        fontWeight: 700,
                                        transition: 'color 0.2s ease'
                                    }}
                                    onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                                    onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-mid)')}
                                >
                                    {social.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.03)',
                    paddingTop: '3rem',
                    textAlign: 'center',
                    color: 'var(--text-dim)',
                    fontSize: '0.7rem',
                    letterSpacing: '0.2rem',
                    fontWeight: 700
                }}>
                    &copy; {new Date().getFullYear()} ELECTRIC SURGE FH CLUB &bull; BUILT FOR PERFORMANCE
                    <div style={{ marginTop: '1rem', opacity: 0.6, fontSize: '0.6rem', fontWeight: 500, letterSpacing: '0.05em' }}>
                        BUILT BY: KOEHL COMISKEY
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

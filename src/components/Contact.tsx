import { motion } from 'framer-motion';

const Contact = () => {
    return (
        <section id="contact" style={{
            padding: '10rem 0',
            background: 'var(--black)',
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* BACKGROUND DECORATIONS */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.1 }}>
                <svg style={{ position: 'absolute', top: '15%', left: '10%', width: '120px', height: '120px', color: 'rgba(255,255,255,0.02)', transform: 'rotate(-25deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 21L19 7M19 7C20.5 5.5 21 4 20 3C19 2 17.5 2.5 16 4L14 6" strokeLinecap="round" />
                </svg>
                <svg style={{ position: 'absolute', bottom: '20%', right: '5%', width: '140px', height: '140px', color: 'rgba(255,85,0,0.01)', transform: 'rotate(140deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 21L19 7M19 7C20.5 5.5 21 4 20 3C19 2 17.5 2.5 16 4L14 6" strokeLinecap="round" />
                </svg>
            </div>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="section-title">GET IN <span className="orange-text">TOUCH</span></h2>
                    <div style={{
                        maxWidth: '1100px',
                        margin: '6rem auto 0',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '2rem'
                    }}>
                        {/* EMAIL */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '4rem 2rem',
                                background: 'rgba(255, 255, 255, 0.01)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'var(--transition-base)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                flex: '1 1 450px',
                                minHeight: '220px',
                                maxWidth: '500px'
                            }}
                        >
                            <h3 style={{ color: 'var(--text-mid)', fontSize: '0.8rem', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '0.2em' }}>OFFICIAL EMAIL</h3>
                            <a
                                href="mailto:electric.surgecc@gmail.com"
                                style={{
                                    color: 'var(--white)',
                                    fontSize: 'clamp(0.9rem, 1.8vw, 1.25rem)',
                                    textDecoration: 'none',
                                    fontWeight: 900,
                                    wordBreak: 'break-all',
                                    transition: 'var(--transition-base)'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white)')}
                            >
                                ELECTRIC.SURGECC@GMAIL.COM
                            </a>
                        </motion.div>

                        {/* PHONE */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '4rem 2rem',
                                background: 'rgba(255, 255, 255, 0.01)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'var(--transition-base)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                flex: '1 1 450px',
                                minHeight: '220px',
                                maxWidth: '500px'
                            }}
                        >
                            <h3 style={{ color: 'var(--text-mid)', fontSize: '0.8rem', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '0.2em' }}>OFFICIAL PHONE</h3>
                            <a
                                href="tel:5704066914"
                                style={{
                                    color: 'var(--white)',
                                    fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                                    textDecoration: 'none',
                                    fontWeight: 900,
                                    transition: 'var(--transition-base)'
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--orange)')}
                                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--white)')}
                            >
                                570.406.6914
                            </a>
                        </motion.div>

                        {/* VENMO */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            style={{
                                padding: '4rem 2rem',
                                background: 'rgba(255, 255, 255, 0.01)',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                transition: 'var(--transition-base)',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'center',
                                flex: '1 1 450px',
                                minHeight: '220px',
                                maxWidth: '500px'
                            }}
                        >
                            <h3 style={{ color: 'var(--text-mid)', fontSize: '0.8rem', marginBottom: '1.5rem', fontWeight: 800, letterSpacing: '0.2em' }}>REGISTRATION FEES</h3>
                            <div style={{ color: 'var(--white)', fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.02em' }}>
                                @SURGE-1
                            </div>
                            <p style={{ color: 'var(--text-dim)', marginTop: '0.5rem', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                                VENMO
                            </p>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* BACKGROUND GLOW */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(255,102,0,0.03) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />
        </section>
    );
};

export default Contact;

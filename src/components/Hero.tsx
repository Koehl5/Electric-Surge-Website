import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="home" style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            backgroundImage: `
                linear-gradient(to bottom, 
                    rgba(5, 5, 5, 0.4) 0%, 
                    rgba(5, 5, 5, 0.2) 40%, 
                    rgba(5, 5, 5, 0.7) 80%, 
                    rgba(5, 5, 5, 1) 100%
                ),
                url("/images/Webpic6.jpeg")
            `,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            textAlign: 'center',
            backgroundColor: 'var(--black)',
            overflow: 'hidden'
        }}>
            <div className="container" style={{ position: 'relative', zIndex: 10 }}>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                    style={{ maxWidth: '1100px', margin: '-12rem auto 0 auto' }}
                >
                    <motion.h1
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2, duration: 1 }}
                        style={{
                            fontSize: 'clamp(2.5rem, 8vw, 5.5rem)',
                            lineHeight: 1,
                            marginBottom: '4rem',
                            textTransform: 'uppercase',
                            fontWeight: 900,
                            letterSpacing: '-0.02em'
                        }}
                    >
                        ELECTRIC <span className="orange-text">SURGE</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6, duration: 1 }}
                        style={{
                            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
                            color: 'var(--white)',
                            marginBottom: '4rem',
                            fontWeight: 600,
                            lineHeight: 1.6,
                            maxWidth: '700px',
                            margin: '0 auto 4rem auto',
                            letterSpacing: '0.02em',
                            textShadow: '0 2px 10px rgba(0,0,0,0.5)'
                        }}
                    >
                        TRAIN WITH INTENTION. COMPETE WITH CONFIDENCE
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        style={{
                            display: 'flex',
                            gap: '1.5rem',
                            justifyContent: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <a
                            href="https://forms.gle/iLgFTY8FVFMLCmdi8"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ fontSize: '1.1rem', padding: '1.4rem 3rem' }}
                        >
                            JOIN ELECTRIC SURGE
                        </a>
                        <a
                            href="https://forms.gle/pR9e7xRJdriNvesE9"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                            style={{ fontSize: '1.1rem', padding: '1.4rem 3rem' }}
                        >
                            FOR RE-OCCURRING PLAYERS
                        </a>
                    </motion.div>
                </motion.div>
            </div>

            {/* DARK VIGNETTE OVERLAY */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)',
                pointerEvents: 'none'
            }} />
        </section>
    );
};

export default Hero;

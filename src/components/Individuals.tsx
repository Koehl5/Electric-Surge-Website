import { motion } from 'framer-motion';

const Individuals = () => {
    return (
        <section id="individuals" style={{
            padding: '10rem 0',
            background: 'var(--black)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.2
                            }
                        }
                    }}
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexWrap: 'wrap',
                        gap: '4rem'
                    }}>
                    {/* TEXT CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{ flex: '1 1 500px' }}
                    >
                        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>
                            1-ON-1 <span className="orange-text">TRAINING</span>
                        </h2>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--white)',
                            marginBottom: '2rem',
                            fontWeight: 700,
                            lineHeight: 1.6
                        }}>
                            Elevate your game with elite, personalized instruction tailored specifically to your goals.
                        </p>
                        <div className="glass-card" style={{ marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--orange)', fontSize: '1.5rem', fontWeight: 900 }}>$50</div>
                                    <div style={{ color: 'var(--text-mid)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em' }}>PER SESSION</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--white)', fontSize: '1.5rem', fontWeight: 900 }}>1 HOUR</div>
                                    <div style={{ color: 'var(--text-mid)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em' }}>DURATION</div>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                                    <div style={{ color: 'var(--white)', fontSize: '1.5rem', fontWeight: 900 }}>ANY COACH</div>
                                    <div style={{ color: 'var(--text-mid)', fontWeight: 600, fontSize: '0.9rem', letterSpacing: '0.1em' }}>YOUR CHOICE</div>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h4 style={{ color: 'var(--white)', fontSize: '1.1rem', fontWeight: 800 }}>READY TO BOOK?</h4>
                            <p style={{ color: 'var(--text-dim)', fontSize: '0.95rem', maxWidth: '400px' }}>
                                For all individual booking questions and scheduling, please reach out to us via email.
                            </p>
                            <a
                                href="mailto:electric.surgecc@gmail.com?subject=Individual Training Inquiry"
                                className="btn btn-primary"
                                style={{ alignSelf: 'flex-start', marginTop: '1rem' }}
                            >
                                EMAIL US TO BOOK
                            </a>
                        </div>
                    </motion.div>

                    {/* DECORATIVE IMAGE/ELEMENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        style={{
                            flex: '1 1 400px',
                            height: '500px',
                            position: 'relative',
                            background: 'var(--mid-gray)',
                            border: '1px solid rgba(255,255,255,0.05)',
                            overflow: 'hidden'
                        }}
                    >
                        <img
                            src="/images/Webpic5.jpeg"
                            alt="Individual Training"
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                filter: 'grayscale(1) brightness(0.7)'
                            }}
                        />
                        <div style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'linear-gradient(45deg, rgba(255,85,0,0.2) 0%, transparent 100%)',
                            pointerEvents: 'none'
                        }} />
                    </motion.div>
                </motion.div>
            </div>

            {/* BACKGROUND DECORATIONS */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.1 }}>
                <svg style={{ position: 'absolute', top: '20%', right: '10%', width: '180px', height: '180px', color: 'rgba(255,85,0,0.02)', transform: 'rotate(45deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 21L19 7M19 7C20.5 5.5 21 4 20 3C19 2 17.5 2.5 16 4L14 6" strokeLinecap="round" />
                </svg>
            </div>
        </section>
    );
};

export default Individuals;

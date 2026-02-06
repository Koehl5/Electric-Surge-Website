import { motion } from 'framer-motion';

const Philosophy = () => {
    return (
        <section id="philosophy" style={{ padding: '15rem 0', background: 'var(--black)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                className="container"
            >
                <h2 className="section-title">THE <span className="orange-text">DRIVE</span></h2>
                <motion.p
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 1 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 4vw, 2.5rem)',
                        maxWidth: '1200px',
                        margin: '3rem auto 0 auto',
                        color: 'var(--white)',
                        fontFamily: 'var(--font-main)',
                        fontWeight: 800,
                        lineHeight: 1.2,
                        textTransform: 'uppercase',
                        fontStyle: 'italic',
                        letterSpacing: '-0.01em'
                    }}
                >
                    "Elite field hockey training focused on technical mastery, game IQ, and long-term athlete development—not shortcuts."
                </motion.p>
            </motion.div>

            {/* BACKGROUND DECORATIONS */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.2 }}>
                <svg style={{ position: 'absolute', top: '10%', left: '5%', width: '150px', height: '150px', color: 'rgba(255,255,255,0.05)', transform: 'rotate(-15deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 21L19 7M19 7C20.5 5.5 21 4 20 3C19 2 17.5 2.5 16 4L14 6" strokeLinecap="round" />
                </svg>
                <svg style={{ position: 'absolute', bottom: '15%', right: '8%', width: '180px', height: '180px', color: 'rgba(255,85,0,0.03)', transform: 'rotate(160deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 21L19 7M19 7C20.5 5.5 21 4 20 3C19 2 17.5 2.5 16 4L14 6" strokeLinecap="round" />
                </svg>
            </div>

            {/* BACKGROUND GLOW */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(255,85,0,0.03) 0%, rgba(0,0,0,0) 70%)',
                pointerEvents: 'none',
                zIndex: 0
            }} />
        </section>
    );
};

export default Philosophy;

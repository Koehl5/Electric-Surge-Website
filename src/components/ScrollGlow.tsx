import { motion, useScroll, useTransform, useSpring } from 'framer-motion';


const ScrollGlow = () => {
    const { scrollYProgress } = useScroll();

    // Smooth out the scroll progress
    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    // Transform scroll progress to vertical position (0% to 90% of screen height)
    const y = useTransform(smoothProgress, [0, 1], ['0%', '90%']);

    // Pulse effect for the glow intensity
    const opacity = useTransform(smoothProgress, [0, 0.5, 1], [0.4, 0.6, 0.4]);

    // Horizontal sway
    const x = useTransform(smoothProgress, [0, 0.25, 0.5, 0.75, 1], ['-20%', '20%', '-20%', '20%', '-20%']);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            pointerEvents: 'none',
            zIndex: 0,
            overflow: 'hidden'
        }}>
            <motion.div
                style={{
                    position: 'absolute',
                    top: y,
                    left: '50%',
                    x: x,
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 85, 0, 0.15) 0%, rgba(255, 85, 0, 0) 70%)',
                    filter: 'blur(60px)',
                    transform: 'translate(-50%, -50%)',
                    opacity
                }}
            />

            {/* Secondary subtle glow that moves in reverse */}
            <motion.div
                style={{
                    position: 'absolute',
                    bottom: y,
                    right: '20%',
                    width: '600px',
                    height: '600px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255, 106, 0, 0.08) 0%, rgba(255, 106, 0, 0) 70%)',
                    filter: 'blur(80px)',
                    transform: 'translate(50%, 50%)',
                    opacity: 0.3
                }}
            />
        </div>
    );
};

export default ScrollGlow;

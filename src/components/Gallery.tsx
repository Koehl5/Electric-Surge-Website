import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const images = [
        '/images/Webpic1.jpeg', '/images/Webpic2.jpeg', '/images/Webpic3.jpeg',
        '/images/Webpic4.jpeg', '/images/Webpic5.jpeg', '/images/Webpic6.jpeg',
        '/images/webpic7.jpeg', '/images/Webpic8.jpeg', '/images/Webpic9.jpeg',
        '/images/webpic10.jpeg', '/images/webpic11.jpeg', '/images/webpic12.jpeg'
    ];

    return (
        <section id="gallery" style={{ padding: '10rem 0', overflow: 'hidden', background: 'var(--black)' }}>
            <div className="container" style={{ marginBottom: '4rem' }}>
                <motion.h2
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    THE <span className="orange-text">ACTION</span>
                </motion.h2>
            </div>

            {/* MULTI-ROW GRID */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                    gap: '1rem',
                    padding: '0 1rem',
                }}
            >
                {images.map((img, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 40, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{
                            delay: (i % 4) * 0.1,
                            type: "spring",
                            stiffness: 120,
                            damping: 20
                        }}
                        onClick={() => setSelectedImage(img)}
                        style={{
                            aspectRatio: '16/10',
                            overflow: 'hidden',
                            position: 'relative',
                            background: 'var(--mid-gray)',
                            cursor: 'pointer'
                        }}
                    >
                        <motion.img
                            src={img}
                            alt={`Electric Surge Action ${i}`}
                            style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                                objectPosition: img.toLowerCase().includes('webpic3.jpeg') ? 'center 60%' : 'top',
                                filter: 'brightness(0.8) contrast(1.1)',
                                transition: 'var(--transition-slow)'
                            }}
                            whileHover={{
                                scale: 1.05,
                                filter: 'brightness(1) contrast(1)'
                            }}
                        />
                    </motion.div>
                ))}
            </div>


            {/* LIGHTBOX */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            background: 'rgba(5, 5, 5, 0.95)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 2000,
                            padding: '2rem',
                            cursor: 'zoom-out'
                        }}
                    >
                        <motion.img
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            src={selectedImage}
                            alt="Expanded View"
                            style={{
                                maxWidth: '100%',
                                maxHeight: '100%',
                                objectFit: 'contain',
                                boxShadow: '0 20px 80px rgba(0,0,0,1)'
                            }}
                        />
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'transparent',
                                border: 'none',
                                color: 'var(--white)',
                                fontSize: '2rem',
                                cursor: 'pointer',
                                padding: '1rem',
                                lineHeight: 1
                            }}
                        >
                            &times;
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Gallery;

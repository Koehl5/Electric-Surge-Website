import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Staff = () => {
    const [expandedCoaches, setExpandedCoaches] = useState<string[]>([]);

    const toggleBio = (name: string) => {
        setExpandedCoaches(prev =>
            prev.includes(name)
                ? prev.filter(n => n !== name)
                : [...prev, name]
        );
    };

    const coaches = [
        {
            name: 'CHRIS',
            role: 'CO-DIRECTOR',
            img: '/images/ChrisFH.jpeg',
            position: 'center 20%',
            bio: "Chris Comiskey – Field Hockey Coach\n\nCurrent Roles:\n• Assistant (Volunteer) Field Hockey Coach at Millersville University. Comiskey joined the field hockey program prior to the 2019 season and has been part of the coaching staff since then.\n• Co-Owner & Director of Electric Surge Field Hockey Club – a competitive club program with over 300 players. Under his leadership, Surge has produced talent at NCAA Division I, II, and III levels.\n\nCoaching & Development Highlights:\n• Electric Surge Achievements: Coached club teams that have helped develop future collegiate players and strong competitors nationally.\n• USA Field Hockey Involvement: Contributed to coaching at the national level with the USA Men’s Indoor and Junior Men’s Indoor teams in 2019.\n• Youth & High School Coaching: Began his coaching career in 2012 with Wyoming Area Junior High (18–2 record). Later as varsity head coach at Wyoming Area, he guided the program to its best season in school history.\n• Named District 2 Coach of the Year in 2015."
        },
        {
            name: 'LUNDA',
            role: 'CO-DIRECTOR',
            img: '/images/LundaFH.jpeg',
            position: 'center center',
            bio: "Lunda Dickson-Comiskey is the Owner and Director of Electric Surge Field Hockey Club, founded in 2014. A former USA Field Hockey Indoor coach and former collegiate player at Misericordia University—where she remains on the all-time scoring lists—Lunda brings extensive experience in both playing and coaching. She has also coached at both Wilkes University and King’s College, including serving as interim head coach at Wilkes, where the team posted a 12–1 record during her tenure. Through Electric Surge, she has played a key role in the development of over 250 college-committed athletes. On staff, she will focus on athlete development and building a strong foundation for the lower school, supporting long-term growth."
        },
        {
            name: 'GLENN',
            role: 'COACH',
            img: '/images/GlennFh.jpeg',
            position: 'center center',
            bio: "Glenn Carr – High School Field Hockey Coach\n\nCurrent Position:\n• Head Field Hockey Coach at Abington Heights High School in Clarks Summit, Pennsylvania. Glenn Carr leads the girls varsity field hockey program, overseeing training, strategy, and competition.\n\nCoaching Highlights & Team Success:\n• Under Coach Carr’s leadership, Abington Heights field hockey teams have competed in the Wyoming Valley Conference, including a notably strong 14-0 conference season and 15-4 overall record in 2022.\n• His guidance has helped the Comets build competitive seasons within their division, contributing to player development and team achievements in regional play.\n\nCoaching Focus:\n• Carr’s role involves developing players’ technical skills, tactical understanding of the game, and fostering a strong team culture at the high school level.\n\nCommunity & Program Impact:\n• Coaches like Carr play an important role in the high school athletics landscape by promoting student-athlete growth both on and off the field.\n\nPlayed for team USA 15 years old-21 years old"
        },
        {
            name: 'KATIE',
            role: 'COACH',
            img: '/images/KatieFH.jpeg',
            position: 'center center',
            bio: "Katie Laudenslager – Coach\n\nCareer Highlights:\n• Katie Laudenslager was a standout field hockey player from Lake‑Lehman High School before joining the collegiate ranks.\n• At Lake‑Lehman, she was highly productive offensively, recording 42 goals and 13 assists as a senior and earning four selections to the Wyoming Valley Conference all‑star team.\n• Laudenslager played club hockey for Electric Surge FHC under the guidance of Surge coaching staff — contributing to her development and college recruitment.\n• She went on to play for Syracuse University, making her collegiate debut as a freshman and competing at the NCAA Division I level, before transferring to Lock Haven for the remainder of her college years.\n\nCoaching:\n• Katie has been head coach for our youth athletes (U8-U12). We attribute much success to her for developing them at a young age.\n• She is known for her passion for the game, competitive drive, and strong work ethic — traits that were evident throughout her club, collegiate, and coaching career."
        },
        {
            name: 'KELCIE',
            role: 'COACH',
            img: '/images/KelcieFH.jpeg',
            position: 'center center',
            bio: "Kelsie Sincavage will lead Wyoming Seminary’s Field Hockey program as Head Coach beginning in the Fall of 2026. A former NCAA Division I student-athlete at Lock Haven University, Kelsie brings a strong foundation as both a player and coach. She began her field hockey career in the Wyoming Valley Conference at Dallas High School and has since developed an extensive coaching résumé across the collegiate, club, and high school levels, including Randolph-Macon College, Washington & Jefferson College, Electric Surge Field Hockey Club, and Dallas High School. Her leadership is centered on integrity, purpose, and sustained excellence."
        },
        {
            name: 'KOEHL',
            role: 'COACH',
            img: '/images/KoehlFH.jpeg',
            position: 'center 15%',
            bio: "• Koehl Comiskey has been selected for USA Field Hockey squads, including the U.S. U-21 Men’s National Team training squad.\n\nNational Team Involvement\n• He’s been involved with USA Field Hockey’s indoor and outdoor national setups, notably:\n• Junior U.S. Men’s National Indoor Team, where he has represented the U.S. in competitions.\n• Senior U.S. Men’s National Indoor Team, appearing on rosters in major indoor tournaments.\n• Most recently, he was listed on the U.S. Men’s Indoor Team roster for the 2025 Rohrmax Cup in Vienna, Austria.\n\nSkills & Background\n• Comiskey brings indoor and outdoor field hockey experience and competitive exposure and is considered a developing athlete within the U.S. national field hockey system."
        },
        {
            name: 'STACY',
            role: 'COACH',
            img: '/images/StacyFH.jpeg',
            position: 'center center',
            bio: "Stacy Malia – Coach\n\nStacy Malia serves as a coach and key supporter within the Electric Surge Field Hockey Club community. She is recognized by the club for her dedication, loyalty, and passion for field hockey and the Surge program, contributing to team development and the promotion of a positive, energetic environment for athletes.\n\nStacy regularly participates in club events, practices, and team activities, supporting both players and fellow coaches as they work to improve skills and compete at high levels.\n\nExperience:\n• Played four years at Wilkes University\n• Currently assistant field hockey coach at Hanover High School"
        },
        {
            name: 'PAIGE',
            role: 'GOALIE COACH',
            img: '/images/PaigeFH.jpeg',
            position: 'center center',
            bio: "Paige Tedik Skrepenak is a former collegiate field hockey player and experienced coach with a strong emphasis on defensive play and goalkeeper development. A standout goalkeeper at King’s College, she was a four-year starter from 2013–2016 and a key contributor to the Monarchs’ defensive success. Paige helped lead King’s to the MAC Freedom Conference Championship in 2016, earning Tournament MVP honors, and received multiple conference weekly awards during her collegiate career. She has coached with Electric Surge Field Hockey for the past ten years as Head Goalkeeper Coach and has led teams to multiple national indoor tournament titles. On staff, Paige will focus on defensive structure, positional discipline, and developing confident, game-aware defenders and goalkeepers."
        }
    ];

    return (
        <section id="staff" style={{ padding: '10rem 0', background: 'var(--black)', position: 'relative', overflow: 'hidden' }}>
            {/* BACKGROUND DECORATIONS */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 0, opacity: 0.15 }}>
                <svg style={{ position: 'absolute', top: '5%', left: '85%', width: '200px', height: '200px', color: 'rgba(255,255,255,0.03)', transform: 'rotate(20deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 21L19 7M19 7C20.5 5.5 21 4 20 3C19 2 17.5 2.5 16 4L14 6" strokeLinecap="round" />
                </svg>
                <svg style={{ position: 'absolute', top: '45%', left: '-5%', width: '180px', height: '180px', color: 'rgba(255,85,0,0.02)', transform: 'rotate(-45deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 21L19 7M19 7C20.5 5.5 21 4 20 3C19 2 17.5 2.5 16 4L14 6" strokeLinecap="round" />
                </svg>
                <svg style={{ position: 'absolute', bottom: '5%', right: '20%', width: '150px', height: '150px', color: 'rgba(255,255,255,0.03)', transform: 'rotate(110deg)' }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5">
                    <path d="M5 21L19 7M19 7C20.5 5.5 21 4 20 3C19 2 17.5 2.5 16 4L14 6" strokeLinecap="round" />
                </svg>
            </div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    THE <span className="orange-text">COACHES</span>
                </motion.h2>
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.15
                            }
                        }
                    }}
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '3rem'
                    }}
                >
                    {coaches.map(coach => (
                        <motion.div
                            key={coach.name}
                            variants={{
                                hidden: { opacity: 0, y: 50, scale: 0.95 },
                                visible: {
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        damping: 20,
                                        stiffness: 100
                                    }
                                }
                            }}
                            style={{ textAlign: 'center', position: 'relative' }}
                        >
                            <div style={{
                                height: '380px',
                                marginBottom: '2rem',
                                overflow: 'hidden',
                                position: 'relative',
                                background: 'var(--mid-gray)',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}>
                                <motion.img
                                    src={coach.img}
                                    alt={coach.name}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        objectPosition: coach.position,
                                        filter: 'grayscale(1) contrast(1.1) brightness(0.8)',
                                        transition: 'var(--transition-slow)'
                                    }}
                                    whileHover={{
                                        filter: 'grayscale(0) contrast(1) brightness(1)',
                                        scale: 1.05
                                    }}
                                />
                                <div style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '50%',
                                    background: 'linear-gradient(to top, rgba(5,5,5,0.8), transparent)',
                                    pointerEvents: 'none'
                                }} />
                            </div>
                            <h3 style={{ fontSize: '2.5rem', marginBottom: '0.2rem', fontWeight: 900, letterSpacing: '-0.01em' }}>{coach.name}</h3>
                            <p style={{ color: 'var(--orange)', fontWeight: 800, letterSpacing: '0.15em', marginBottom: '1.5rem', fontSize: '0.75rem' }}>{coach.role}</p>

                            {coach.bio && (
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <button
                                        onClick={() => toggleBio(coach.name)}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'var(--text-mid)',
                                            fontSize: '0.8rem',
                                            fontWeight: 700,
                                            letterSpacing: '0.1em',
                                            cursor: 'pointer',
                                            padding: '0.5rem 1rem',
                                            borderBottom: expandedCoaches.includes(coach.name) ? '2px solid var(--orange)' : '2px solid transparent',
                                            transition: 'var(--transition-base)'
                                        }}
                                        onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--white)')}
                                        onMouseLeave={(e) => (e.currentTarget.style.color = expandedCoaches.includes(coach.name) ? 'var(--white)' : 'var(--text-mid)')}
                                    >
                                        {expandedCoaches.includes(coach.name) ? 'CLOSE BIO' : 'READ BIO'}
                                    </button>
                                </div>
                            )}

                            <AnimatePresence>
                                {expandedCoaches.includes(coach.name) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        style={{ overflow: 'hidden' }}
                                    >
                                        <p style={{
                                            marginTop: '1.5rem',
                                            color: 'var(--text-dim)',
                                            lineHeight: 1.7,
                                            fontSize: '0.9rem',
                                            textAlign: 'left',
                                            padding: '2rem',
                                            background: 'rgba(255,255,255,0.02)',
                                            borderLeft: '1px solid var(--orange)',
                                            whiteSpace: 'pre-wrap',
                                            fontWeight: 400
                                        }}>
                                            {coach.bio}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </motion.div>
            </div >
        </section >
    );
};

export default Staff;

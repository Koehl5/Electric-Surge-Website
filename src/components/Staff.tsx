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
            bio: "Chris Comiskey is the Co-Director of Electric Surge Field Hockey Club and has been a central part of the program’s leadership and growth. He began his coaching career in 2012 at Wyoming Area Junior High, where he led the team to an 18–2 record, before serving as varsity head coach at Wyoming Area High School. During his tenure, he guided the program to the most successful season in school history and was named District 2 Coach of the Year in 2015.\n\nChris brings experience across youth, high school, club, and national levels. In 2019, he contributed to USA Field Hockey as a coach with the USA Men’s Indoor and Junior Men’s Indoor National Teams. Through his leadership at Electric Surge, he has helped develop athletes who have gone on to compete at the NCAA Division I, II, and III levels, supporting a competitive club program serving more than 300 players.\n\nWithin Electric Surge, Chris plays a key role in program structure, training alignment, and competitive development across age groups. His focus is on building confident, technically sound athletes while maintaining clear standards and a consistent developmental pathway that supports long-term growth."
        },
        {
            name: 'LUNDA',
            role: 'CO-DIRECTOR',
            img: '/images/LundaFH.jpeg',
            position: 'center center',
            bio: "Lunda Dickson-Comiskey is the Co-Director of Electric Surge Field Hockey Club, which she co-founded in 2014. A former collegiate player at Misericordia University, Lunda remains on the program’s all-time scoring lists and brings a strong playing foundation into her coaching and leadership approach.\n\nAs Co-Director of Electric Surge, Lunda oversees athlete development, program structure, and coaching alignment across age groups. She plays a central role in establishing training standards, building technical foundations, and creating a clear developmental pathway from the lower school through college preparation. Through her leadership, Electric Surge has helped develop more than 250 athletes who have gone on to compete at the collegiate level.\n\nLunda’s coaching experience spans collegiate, club, and national levels. She has coached at both Wilkes University and King’s College, including serving as interim head coach at Wilkes, where the team posted a 12–1 record during her tenure. At the national level, she has also contributed as a coach within USA Field Hockey’s Indoor program.\n\nIn addition to her work with Electric Surge, Lunda serves as a volunteer assistant coach at Wyoming Seminary, where she supports athlete development with a focus on the lower school and foundational skill development. Her work emphasizes early technical training, confidence building, and long-term growth within a structured, intentional environment."
        },
        {
            name: 'GLENN',
            role: 'COACH',
            img: '/images/GlennFh.jpeg',
            position: 'center center',
            bio: "Glenn Carr brings extensive high school coaching experience and a strong competitive background to the Electric Surge Field Hockey Club, where he serves as a training coach supporting athlete development and competitive preparation within the program. In this role, Glenn works closely with athletes to reinforce technical fundamentals, tactical understanding, and consistent training habits across sessions.\n\nHe has previously served as Head Field Hockey Coach at Abington Heights High School in Clarks Summit, Pennsylvania, where he led the girls varsity program and oversaw training, strategy, and competition. During his tenure, Glenn guided teams competing in the Wyoming Valley Conference, including a standout 14–0 conference season and a 15–4 overall record in 2022. His leadership contributed to the program’s competitive success while emphasizing player development and team growth within the high school environment.\n\nAt Electric Surge, Glenn’s coaching focus includes skill refinement, game understanding, and helping athletes translate training into competitive performance. He values preparation, accountability, and building confidence through consistency and effort.\n\nIn addition to his coaching experience, Glenn brings a high-level playing background as a former USA Field Hockey athlete, having represented Team USA from ages 15 through 21. His national team experience informs his coaching approach and supports athlete development within a high-performance, growth-focused environment."
        },
        {
            name: 'KATIE',
            role: 'COACH',
            img: '/images/KatieFH.jpeg',
            position: 'center center',
            bio: "Katie Laudenslager brings a strong playing background and a passion for youth development to her role as a youth coach with Electric Surge Field Hockey Club, where she currently leads and supports training for the U8–U12 age groups. A standout player at Lake-Lehman High School, Katie was a highly productive offensive contributor, recording 42 goals and 13 assists during her senior season and earning four Wyoming Valley Conference all-star selections.\n\nKatie developed through the Electric Surge club system, training under the Surge coaching staff and progressing through the college recruitment process. She went on to compete at the NCAA Division I level at Syracuse University, making her collegiate debut as a freshman, before transferring to Lock Haven University to complete her college career.\n\nIn her current role at Electric Surge, Katie is responsible for designing and leading age-appropriate training sessions that emphasize skill development, confidence, and enjoyment of the game. She plays a key role in building foundational habits for young athletes, helping establish technical fundamentals and a positive team environment that supports long-term growth.\n\nKatie is known for her passion for the sport, competitive drive, and strong work ethic—qualities that continue to shape her approach to coaching and mentoring young athletes within the Electric Surge program."
        },
        {
            name: 'KELCIE',
            role: 'COACH',
            img: '/images/KelcieFH.jpeg',
            position: 'center center',
            bio: "Kelsie Sincavage is the Head Field Hockey Coach at Wyoming Seminary, beginning in the Fall of 2026. A former NCAA Division I student-athlete at Lock Haven University, Kelsie brings a strong foundation as both a player and coach, grounded in competitive experience and a deep understanding of long-term athlete development. She began her field hockey career in the Wyoming Valley Conference at Dallas High School and has since built an extensive coaching résumé across the collegiate, club, and high school levels, including roles at Randolph-Macon College, Washington & Jefferson College, Dallas High School, and Electric Surge Field Hockey Club.\n\nAt Electric Surge, Kelsie plays a key leadership role in program development and coaching alignment. She works closely with the club’s directors to support athlete development across age groups, assist with college recruitment education, and help implement consistent training standards throughout the program. Her focus includes mentoring coaches, supporting player progression, and strengthening the connection between youth, high school, and college-preparatory pathways. As Head Coach at Wyoming Seminary, Kelsie’s leadership is centered on integrity, clarity, and sustained excellence. She is committed to building environments that challenge student-athletes to grow as players, students, and leaders—while honoring tradition and supporting long-term success."
        },
        {
            name: 'KOEHL',
            role: 'COACH',
            img: '/images/KoehlFH.jpeg',
            position: 'center 15%',
            bio: "Koehl Comiskey brings high-level competitive experience and national team exposure to Electric Surge Field Hockey Club, where he plays a key role in training support and athlete development within the program. He works closely with the coaching staff to reinforce training standards, competitive habits, and technical growth across sessions.\n\nKoehl has been selected for multiple USA Field Hockey squads, including the U.S. U-21 Men’s National Team training squad, reflecting his continued progression within the national pipeline. His involvement spans both indoor and outdoor national team programs, where he has represented the United States as a member of the Junior U.S. Men’s National Indoor Team and appeared on rosters for the Senior U.S. Men’s National Indoor Team in major indoor competitions. Most recently, Koehl was named to the U.S. Men’s National Indoor Team roster for the 2025 Rohrmax Cup in Vienna, Austria. His international experience has provided valuable exposure to high-performance environments and elite-level competition.\n\nAt Electric Surge, Koehl supports skill development, competitive readiness, and athlete accountability, bringing a strong understanding of both indoor and outdoor field hockey. His disciplined, growth-focused approach—shaped by national team expectations—adds a high-performance perspective rooted in preparation, consistency, and continuous improvement."
        },
        {
            name: 'STACY',
            role: 'COACH',
            img: '/images/StacyFH.jpeg',
            position: 'center center',
            bio: "Stacy Malia is one of the longest-tenured coaches within the Electric Surge Field Hockey Club and serves as a steady leader and key contributor within the program. She is widely recognized for her dedication, loyalty, and passion for field hockey and the Surge community, playing an important role in fostering a positive, high-energy environment for athletes.\n\nThroughout her time at Electric Surge, Stacy has been deeply involved in practices, club events, and team activities, consistently supporting athlete development and working closely with fellow coaches to reinforce training standards and team culture. Her long-standing presence within the program has helped provide continuity, mentorship, and a strong sense of identity for athletes across age groups.\n\nStacy brings valuable playing and coaching experience to Electric Surge. She competed for four years at Wilkes University and currently serves as an assistant field hockey coach at Hanover High School. Her experience allows her to connect with athletes at various stages of development while emphasizing strong fundamentals, accountability, and confidence."
        },
        {
            name: 'PAIGE',
            role: 'GOALIE COACH',
            img: '/images/PaigeFH.jpeg',
            position: 'center center',
            bio: "Paige Tedik Skrepenak is a former collegiate field hockey player and experienced coach with a strong emphasis on defensive play and goalkeeper development. She currently serves as an Assistant Field Hockey Coach at Wyoming Seminary, where she works closely with goalkeepers and defenders to build strong technical foundations, positional discipline, and game awareness.\n\nA standout goalkeeper at King’s College, Paige was a four-year starter from 2013–2016 and a key contributor to the Monarchs’ defensive success. She helped lead King’s to the MAC Freedom Conference Championship in 2016, earning Tournament MVP honors, and received multiple conference weekly awards throughout her collegiate career.\n\nPaige has coached with Electric Surge Field Hockey Club for more than ten years as the Head Goalkeeper Coach, leading teams to multiple national indoor tournament titles. At Electric Surge, she plays a key role in goalkeeper training, defensive organization, and long-term athlete development.\n\nAcross both programs, Paige’s coaching focuses on defensive structure, positional discipline, and developing confident, game-aware defenders and goalkeepers. Her experience and attention to detail help athletes build consistency, confidence, and a strong understanding of their role within the team defensive system."
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

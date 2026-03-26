import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ExternalLink, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { portfolioData } from '../data';
import sahilProfile from '../assets/sahil_white.png';

const Typewriter = () => {
    const words = ["Full Stack Developer", "Problem Solver", "AI Enthusiast"];
    const [index, setIndex] = useState(0);
    const [subIndex, setSubIndex] = useState(0);
    const [reverse, setReverse] = useState(false);
    const [blink, setBlink] = useState(true);

    // Typewriter effect
    useEffect(() => {
        if (subIndex === words[index].length + 1 && !reverse) {
            setReverse(true);
            return;
        }

        if (subIndex === 0 && reverse) {
            setReverse(false);
            setIndex((prev) => (prev + 1) % words.length);
            return;
        }

        const timeout = setTimeout(() => {
            setSubIndex((prev) => prev + (reverse ? -1 : 1));
        }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1500 : 150, parseInt(Math.random() * 50)));

        return () => clearTimeout(timeout);
    }, [subIndex, index, reverse]);

    // Blinking cursor
    useEffect(() => {
        const timeout2 = setTimeout(() => {
            setBlink((prev) => !prev);
        }, 500);
        return () => clearTimeout(timeout2);
    }, [blink]);

    return (
        <div className="flex items-center justify-center lg:justify-start gap-3 h-6">
            <span className="hidden md:block w-8 h-[1px] bg-primary/40"></span>
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary whitespace-nowrap">
                {`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}
            </span>
        </div>
    );
};

const Hero = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center pt-[10vh] pb-16 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 w-full flex flex-col items-center justify-center relative z-10">

                {/* Left Content */}
                <div className="order-2 text-center max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-8 flex flex-col items-center lg:items-start gap-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-500/30 bg-green-500/5 text-green-400 text-[9px] font-black uppercase tracking-[0.2em] w-fit"
                            >
                                <span className="relative flex h-1.5 w-1.5">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                                </span>
                                Available for Work
                            </motion.div>
                            <Typewriter />
                        </div>
                        <h1 className="text-5xl md:text-7xl font-extrabold mb-8 text-white tracking-tighter leading-none">
                            Designing <span className="text-gradient">modern, scalable</span> <br />
                            engineering solutions <br />
                            <span className="italic font-light opacity-90">for real-world challenges.</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="text-lg md:text-xl text-text-muted leading-relaxed max-w-3xl mb-12 font-medium mx-auto"
                    >
                        I am a <span className="text-white font-bold">Computer Science student</span> with a strong interest in full-stack development. I have hands-on experience in React.js, Node.js, and databases, and I enjoy building efficient and user-friendly web applications. I am also actively improving my problem-solving skills through Data Structures and Algorithms.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-5 bg-primary text-black font-black uppercase tracking-[0.3em] rounded-lg shadow-2xl shadow-primary/20 hover:brightness-110 transition-all text-xs text-center"
                        >
                            Get In Touch
                        </motion.a>
                        <motion.a
                            href="/Sahil_Kumar_CV.docx"
                            download="Sahil_Kumar_CV.docx"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="w-full sm:w-auto px-10 py-5 bg-white/5 text-white border border-white/10 font-bold uppercase tracking-[0.2em] rounded-lg hover:bg-white/10 transition-all text-xs text-center flex items-center justify-center gap-2"
                        >
                            Download CV <ExternalLink size={14} />
                        </motion.a>
                    </div>


                </div>

                {/* Right Content - Photo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
                    className="order-1 flex justify-center items-center relative mb-16"
                >
                    <motion.div 
                        style={{
                            rotateX,
                            rotateY,
                            transformStyle: "preserve-3d",
                        }}
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                        className="relative w-full max-w-[320px] aspect-square group"
                    >
                        {/* Decorative background elements */}
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="absolute inset-0 border border-white/10 rounded-full -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                        
                        {/* Main Photo Container */}
                        <div style={{ transform: "translateZ(50px)" }} className="relative h-full w-full rounded-full overflow-hidden border-2 border-white/5 bg-surface shadow-2xl backdrop-blur-sm">
                            <img
                                src={sahilProfile}
                                alt="Sahil Kumar"
                                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000 scale-[1.05] hover:scale-110"
                            />
                            
                            {/* Signature style tag */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-1">Lead Developer</p>
                                <p className="text-white font-bold text-sm">Sahil Kumar</p>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-text-muted group cursor-pointer"
                onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
            >
                <span className="text-[9px] font-black uppercase tracking-[0.4em] group-hover:text-primary transition-colors">Scroll</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                    <ChevronDown size={20} className="text-primary/50 group-hover:text-primary transition-colors" />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;

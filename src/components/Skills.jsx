import { useState, useEffect, useRef } from 'react';
import { motion, useInView, useSpring, useTransform, animate } from 'framer-motion';
import { portfolioData } from '../data';

const Counter = ({ value, suffix = "", duration = 2 }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            const controls = animate(0, value, {
                duration: duration,
                ease: "easeOut",
                onUpdate: (latest) => setDisplayValue(Math.floor(latest))
            });
            return () => controls.stop();
        }
    }, [inView, value, duration]);

    return <span ref={ref}>{displayValue}{suffix}</span>;
};

const StatsCounter = () => {
    const stats = [
        { label: "DSA Problems", value: 300, suffix: "+" },
        { label: "Projects", value: 3, suffix: "+" },
        { label: "NPTEL Score", value: 70, suffix: "%" }
    ];

    return (
        <div className="grid grid-cols-3 gap-8 mb-16 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                    <div className="text-3xl md:text-4xl font-black text-primary mb-2 group-hover:scale-110 transition-transform">
                        <Counter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] font-bold text-text-muted uppercase tracking-[0.2em]">
                        {stat.label}
                    </div>
                </div>
            ))}
        </div>
    );
};

const Skills = () => {
    const getIconSlug = (skill) => {
        const mapping = {
            "C++": "cpp",
            "JavaScript (ES6+)": "js",
            "C": "c",
            "PHP": "php",
            "Python": "py",
            "React.js": "react",
            "HTML5": "html",
            "CSS3": "css",
            "Bootstrap": "bootstrap",
            "Tailwind CSS": "tailwind",
            "Node.js": "nodejs",
            "Express.js": "express",
            "Django": "django",
            "REST APIs": "postman",
            "MySQL": "mysql",
            "MongoDB": "mongodb",
            "Git": "git",
            "GitHub": "github",
            "Postman": "postman",
            "VS Code": "vscode"
        };
        return mapping[skill] || "code"; // default icon
    };

    const allSkills = [
        ...portfolioData.skills.languages,
        ...portfolioData.skills.frontend,
        ...portfolioData.skills.backend,
        ...portfolioData.skills.databases,
        ...portfolioData.skills.tools,
        // Duplicate for seamless loop
        ...portfolioData.skills.languages,
        ...portfolioData.skills.frontend,
    ];

    return (
        <section id="styles" className="py-32 relative overflow-hidden bg-surface/50 border-y border-white/5">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-24">
                    <StatsCounter />
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 mb-4 block">Tech Stack</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter text-white">
                        Modern <span className="italic font-light opacity-80">Capabilities.</span>
                    </h2>
                    <div className="h-[1px] w-24 bg-primary/30 mx-auto"></div>
                </div>

                <div className="marquee-container py-10">
                    <div className="marquee-content scroll-left gap-10">
                        {allSkills.map((skill, index) => (
                            <div
                                key={index}
                                className="skill-card group px-8 py-5 rounded-xl border border-white/5 bg-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 cursor-default relative overflow-hidden flex items-center gap-4 min-w-max"
                            >
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                                    <img
                                        src={`https://skillicons.dev/icons?i=${getIconSlug(skill)}&theme=dark`}
                                        alt={skill}
                                        className="w-6 h-6 object-contain group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest group-hover:text-primary transition-colors relative z-10">
                                    {skill}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="marquee-container py-10">
                    <div className="marquee-content scroll-right gap-10">
                        {[...allSkills].reverse().map((skill, index) => (
                            <div
                                key={`r-${index}`}
                                className="skill-card group px-8 py-5 rounded-xl border border-white/5 bg-white/5 hover:border-primary/40 hover:bg-primary/5 transition-all duration-500 cursor-default relative overflow-hidden flex items-center gap-4 min-w-max"
                            >
                                <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
                                    <img
                                        src={`https://skillicons.dev/icons?i=${getIconSlug(skill)}&theme=dark`}
                                        alt={skill}
                                        className="w-6 h-6 object-contain group-hover:scale-110 transition-all duration-500"
                                    />
                                </div>
                                <span className="text-xs font-black uppercase tracking-widest group-hover:text-primary transition-colors relative z-10">
                                    {skill}
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

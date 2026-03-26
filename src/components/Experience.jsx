import { motion } from 'framer-motion';
import { portfolioData } from '../data';
import { Calendar, Building2, GraduationCap, Award, Briefcase } from 'lucide-react';

const TimelineItem = ({ data, type, index }) => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="relative pl-12 pb-12 last:pb-0 group"
    >
        {/* Timeline Line & Dot */}
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-white/10" />
        <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary" />

        <div className="relative z-10">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary/60">
                    {data.period}
                </span>
                {data.details && (
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded bg-white/5 border border-white/10 text-text-muted">
                        {data.details}
                    </span>
                )}
            </div>

            <h3 className="text-xl font-bold mb-1 tracking-tight text-white group-hover:text-primary transition-colors">
                {type === 'education' ? data.degree : (data.role || data.title)}
            </h3>

            <div className="flex items-center gap-2 text-text-muted mb-6 font-medium uppercase text-[10px] tracking-[0.15em]">
                {type === 'education' ? <GraduationCap size={12} /> : <Building2 size={12} />}
                {data.institution || data.company}
            </div>

            {data.description && (
                <div className="space-y-3">
                    {Array.isArray(data.description) ? (
                        <ul className="space-y-2">
                            {data.description.map((desc, i) => (
                                <li key={i} className="flex gap-3 text-sm text-text-muted leading-relaxed font-medium">
                                    <span className="text-primary mt-1.5 w-1 h-1 rounded-full shrink-0" />
                                    <span>{desc}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p className="text-sm text-text-muted leading-relaxed font-medium">
                            {data.description}
                        </p>
                    )}
                </div>
            )}
        </div>
    </motion.div>
);

const Experience = () => {
    return (
        <section id="experience" className="py-32 relative bg-surface/30">
            <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-32">

                {/* Work Experience */}
                <div>
                    <div className="mb-20">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 mb-4 block">Professional History</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter text-white">
                            Experience
                        </h2>
                        <div className="h-[1px] w-24 bg-primary/30"></div>
                    </div>
                    <div className="space-y-4">
                        {[...portfolioData.experience, ...portfolioData.training].map((item, index) => (
                            <TimelineItem key={index} data={item} type="work" index={index} />
                        ))}
                    </div>
                </div>

                {/* Education */}
                <div id="education">
                    <div className="mb-20">
                        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 mb-4 block">Academic Path</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter text-white">
                            Education
                        </h2>
                        <div className="h-[1px] w-24 bg-primary/30"></div>
                    </div>
                    <div className="space-y-4">
                        {portfolioData.education.map((edu, index) => (
                            <TimelineItem key={index} data={edu} type="education" index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;

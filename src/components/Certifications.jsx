import { motion } from 'framer-motion';
import { Award, Trophy, Scroll, Star, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';

const Certifications = () => {
    return (
        <section id="certifications" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Recognition</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter text-white">
                        Certifications <span className="italic font-light opacity-80">&</span> Achievements.
                    </h2>
                    <div className="h-[1px] w-24 bg-primary/30 mx-auto"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-10">
                    {/* Achievements Section */}
                    <div className="lg:col-span-1 space-y-6">
                        <div className="p-8 rounded-xl bg-primary/5 border border-primary/20 relative overflow-hidden group h-full flex flex-col justify-between">
                            <div className="absolute top-0 right-0 p-4 text-primary opacity-20 group-hover:opacity-40 transition-opacity">
                                <Trophy size={80} />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 text-primary mb-6">
                                    <Star size={20} className="fill-primary" />
                                    <span className="text-[10px] font-black uppercase tracking-widest">Top Achievement</span>
                                </div>
                                {portfolioData.achievements.map((achievement, index) => (
                                    <div key={index}>
                                        <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{achievement.title}</h3>
                                        <p className="text-sm text-text-muted leading-relaxed font-medium opacity-80 mb-8">
                                            {achievement.description}
                                        </p>
                                        {achievement.link && (
                                            <a 
                                                href={achievement.link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-primary hover:gap-3 transition-all"
                                            >
                                                View Profile <ExternalLink size={12} />
                                            </a>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Certifications Grid */}
                    <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
                        {portfolioData.certifications.items.map((cert, index) => (
                            <motion.a
                                key={index}
                                href={cert.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 rounded-xl bg-surface/50 border border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 text-primary/20 group-hover:text-primary transition-colors">
                                    <ExternalLink size={16} />
                                </div>
                                <div className="flex items-start justify-between mb-8">
                                    <div className="p-3 rounded-lg bg-white/5 border border-white/10 text-primary group-hover:scale-110 transition-transform">
                                        <Award size={24} />
                                    </div>
                                    <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{cert.period}</span>
                                </div>
                                <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-primary transition-colors pr-8 leading-tight">{cert.title}</h3>
                                <div className="flex items-center gap-2 text-text-muted text-xs font-semibold">
                                    <Scroll size={14} className="text-primary/60" />
                                    <span>{cert.issuer}</span>
                                </div>
                            </motion.a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Certifications;

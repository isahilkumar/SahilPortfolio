import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder } from 'lucide-react';
import { portfolioData } from '../data';

const Projects = () => {
    return (
        <section id="projects" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-4 block">Case Studies</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter text-white">
                        Featured <span className="italic font-light opacity-80">Work.</span>
                    </h2>
                    <div className="h-[1px] w-24 bg-primary/30 mx-auto"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioData.projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            className="group relative bg-surface/40 border border-white/5 overflow-hidden flex flex-col rounded-3xl hover:border-primary/20 transition-all duration-700 hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                        >
                            {/* Project Image Container */}
                            <div className="relative aspect-[16/9] overflow-hidden m-4 rounded-2xl">
                                <img 
                                    src={project.image} 
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60"></div>
                                
                                {/* Links Overlay */}
                                <div className="absolute top-6 right-6 flex gap-3 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    {project.github && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/50 backdrop-blur-md text-white hover:text-primary transition-colors rounded-xl border border-white/10">
                                            <Github size={18} />
                                        </a>
                                    )}
                                    {project.link && project.link !== "#" && (
                                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 bg-black/50 backdrop-blur-md text-white hover:text-primary transition-colors rounded-xl border border-white/10">
                                            <ExternalLink size={18} />
                                        </a>
                                    )}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-grow">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="w-8 h-[1px] bg-primary/40"></span>
                                    <h3 className="text-2xl font-black text-white tracking-tight group-hover:text-primary transition-colors">{project.title}</h3>
                                </div>
                                
                                <p className="text-sm text-text-muted leading-relaxed mb-8 flex-grow font-medium opacity-80 group-hover:opacity-100 transition-opacity">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-6 border-t border-white/5">
                                    {project.tech.map((tech) => (
                                        <span key={tech} className="text-[9px] font-black uppercase tracking-[0.2em] text-primary/70 bg-primary/5 border border-primary/10 px-3 py-1.5 rounded-full group-hover:border-primary/30 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

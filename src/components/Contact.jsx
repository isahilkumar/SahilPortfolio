import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, Send, MapPin, ExternalLink } from 'lucide-react';
import { portfolioData } from '../data';

const ContactInfo = ({ icon: Icon, title, value, href, index }) => (
    <motion.a
        href={href}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.1 }}
        className="flex items-center gap-6 p-6 rounded-xl glass border-white/5 hover:border-primary/20 transition-all group relative overflow-hidden"
    >
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
            <Icon size={20} />
        </div>
        <div>
            <p className="text-[10px] text-text-muted font-black uppercase tracking-[0.2em] mb-1">{title}</p>
            <p className="text-base font-bold tracking-tight">{value}</p>
        </div>
    </motion.a>
);

const Contact = () => {
    return (
        <section id="contact" className="py-32 relative bg-surface/20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-24">
                    <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/80 mb-4 block">Connectivity</span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-8 tracking-tighter text-white">
                        Let's Build <span className="italic font-light opacity-80">Something.</span>
                    </h2>
                    <p className="text-text-muted text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        I am currently open to new opportunities and collaborations. 
                        Whether you have a specific project or just want to connect, I'll get back to you!
                    </p>
                    <div className="h-[1px] w-24 bg-primary/30 mx-auto mt-12"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-20">
                    <div className="space-y-4">
                        <ContactInfo icon={Mail} title="Direct Line" value={portfolioData.contact.email} href={`mailto:${portfolioData.contact.email}`} index={0} />
                        <ContactInfo icon={Linkedin} title="Professional Profile" value="sahil-k45" href={portfolioData.contact.linkedin} index={1} />
                        <ContactInfo icon={Github} title="Development Archive" value="sahilkumaar" href={portfolioData.contact.github} index={2} />
                        
                        <div className="p-8 rounded-xl bg-white/5 border border-white/10 flex items-center gap-6 text-text-muted mt-8">
                            <MapPin size={20} className="text-primary" />
                            <span className="text-sm font-medium">Patna, India — Open to Global Remote Roles.</span>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-10 rounded-xl bg-[#0a0a0a]/80 border border-white/5 shadow-2xl relative overflow-hidden"
                    >
                        <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Identity</label>
                                    <input type="text" placeholder="Your Name" className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-primary/40 transition-all font-medium text-sm" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Email Address</label>
                                    <input type="email" placeholder="email@address.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-primary/40 transition-all font-medium text-sm" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">Objective</label>
                                <textarea rows="5" placeholder="How can I help you today?" className="w-full bg-white/5 border border-white/10 rounded-lg px-6 py-4 focus:outline-none focus:border-primary/40 transition-all font-medium text-sm resize-none"></textarea>
                            </div>
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full py-5 bg-primary text-black font-black uppercase tracking-[0.3em] rounded-lg shadow-xl shadow-primary/20 text-xs transition-all hover:brightness-110 flex items-center justify-center gap-3"
                            >
                                Send Message <Send size={16} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                {/* Global Footer */}
                <div className="mt-40 pt-20 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="text-3xl font-black italic tracking-tighter">
                        <span className="text-primary">Sahil</span> Kumar
                    </div>

                    <div className="flex flex-wrap justify-center gap-12 font-bold uppercase text-[10px] tracking-[0.3em] text-text-muted">
                        <a href="#hero" className="hover:text-primary transition-colors">Intro</a>
                        <a href="#projects" className="hover:text-primary transition-colors">Case Studies</a>
                        <a href="#styles" className="hover:text-primary transition-colors">Capabilities</a>
                        <a href="#contact" className="hover:text-primary transition-colors">Connectivity</a>
                    </div>

                    <div className="text-[10px] font-black uppercase tracking-widest text-text-muted text-center md:text-right flex flex-col gap-2">
                        <span>&copy; {new Date().getFullYear()} Sahil Kumar Portfolio</span>
                        <span className="flex items-center gap-2 justify-center md:justify-end">Crafted with React 19 <ExternalLink size={10} /></span>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default Contact;

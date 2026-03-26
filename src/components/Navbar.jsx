import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('Home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = ['hero', 'experience', 'projects', 'styles', 'certifications', 'contact'];
            const scrollPosition = window.scrollY + 200;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const height = element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                        const sectionNameMap = {
                            hero: 'Home',
                            experience: 'About Me',
                            projects: 'Projects',
                            styles: 'Skills',
                            certifications: 'Awards',
                            contact: 'Contact'
                        };
                        setActiveSection(sectionNameMap[section]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#hero' },
        { name: 'About Me', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Skills', href: '#styles' },
        { name: 'Awards', href: '#certifications' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 h-[10vh] ${scrolled ? 'bg-background/80 backdrop-blur-md navbar-glow' : 'bg-transparent'
            }`}>
            <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">
                <a href="#hero" className="flex items-center gap-2 text-3xl font-extrabold text-primary tracking-tight">
                    Sahil Kumar
                    <span className="relative flex h-2.5 w-2.5 translate-y-[-2px]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                    </span>
                </a>

                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={`px-5 py-2 text-sm font-bold transition-all rounded-[8px] ${activeSection === link.name
                                ? 'bg-primary text-black'
                                : 'text-white hover:text-primary'
                                }`}
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Mobile placeholder */}
                <div className="md:hidden text-primary">
                    <a href="#hero" className="btn-cyan py-2 px-4 text-xs">Menu</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

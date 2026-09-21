import React, { useState, useEffect, useRef } from 'react';
import { FaGithub } from 'react-icons/fa';
import {
    Mail,
    MapPin,
    Phone,
    ExternalLink,
    ChevronDown,
    Code2,
    Database,
    Wrench,
    User,
    Briefcase,
    GraduationCap
} from 'lucide-react';

// Images Import - ('assets' folder isi file ke sath 'src' folder mein hona chahiye)
import exp1 from './assets/exp-1.png';
import exp2 from './assets/exp-2.png';
import dev1 from './assets/dev-1.png';
import dev2 from './assets/dev-2.png';
import dev3 from './assets/dev-3.png';
import dev4 from './assets/dev-4.png';

const personalInfo = {
    name: "Mohammad Umar Raza",
    role: "Website Developer",
    location: "Hyderabad, Telangana",
    phone: "+91 8985097092",
    email: "20bumar@gmail.com",
    github: "github.com/Umarhub28",
    githubUrl: "https://github.com/Umarhub28",
    summary: "Motivated Website Developer with strong expertise in HTML, CSS, JavaScript, and modern frameworks including React.js and Spring Boot. Proven ability to design, develop, test, and maintain responsive, user-friendly, and SEO-optimized websites. Adept at troubleshooting, fixing bugs, and optimizing web performance and security across devices and browsers. Capable of quickly adapting to various CMS platforms including WordPress, ready to deliver end-to-end web projects and provide dedicated post-launch support."
};

const skills = [
    {
        category: "Frontend & Optimization",
        icon: <Code2 className="w-6 h-6 mb-4 text-blue-500" />,
        items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Tailwind CSS", "Responsive Design", "SEO"]
    },
    {
        category: "Backend & Platforms",
        icon: <Database className="w-6 h-6 mb-4 text-green-500" />,
        items: ["Java", "Spring Boot", "REST APIs", "MySQL", "Web Security Basics", "WordPress"]
    },
    {
        category: "Tools & Design",
        icon: <Wrench className="w-6 h-6 mb-4 text-purple-500" />,
        items: ["Git", "GitHub", "VS Code", "Docker", "Render", "Figma", "Troubleshooting & Debugging"]
    }
];

const projects = [
    {
        title: "Student Expense Tracker",
        type: "End-to-End Web App",
        tech: ["HTML", "CSS", "JavaScript", "React.js", "Spring Boot", "MySQL"],
        github: "https://github.com/Umarhub28/Expense-Tracker",
        images: [
            exp1,
            exp2
        ],
        description: [
            "Designed and developed a responsive, user-friendly personal finance website ensuring it works smoothly across all devices and modern browsers.",
            "Tested the website thoroughly to identify and fix layout bugs, and implemented performance optimizations for fast UI rendering.",
            "Ensured secure data handling by integrating REST APIs with built-in authentication using Spring Boot and MySQL."
        ]
    },
    {
        title: "DevMatch",
        type: "Mutual Skill-Swap Platform",
        tech: ["JavaScript", "Tailwind CSS", "REST APIs", "Docker", "Render", "Figma"],
        github: "https://github.com/Umarhub28/wexa-graph-app-assignment-",
        images: [
            dev1,
            dev2,
            dev3,
            dev4
        ],
        description: [
            "Developed an intuitive website UI using Tailwind CSS, JavaScript, and Figma for wireframing, focusing on a seamless user experience.",
            "Troubleshot and debugged complex REST API integrations to ensure reliable data flow and optimal website performance.",
            "Handled the end-to-end deployment process using Docker and Render, maintaining post-launch stability."
        ]
    }
];

const education = [
    {
        degree: "Bachelor of Science - Computer Science",
        institution: "Nalanda Degree and PG College, Hyderabad",
        year: "2023-2026",
        grade: "CGPA: 6.7"
    },
    {
        degree: "Intermediate (BIPC)",
        institution: "Vijeta Junior College",
        year: "2021-2023",
        grade: "CGPA: 8.54"
    },
    {
        degree: "Secondary School (SSC)",
        institution: "Pragati Patashala",
        year: "Graduated",
        grade: "CGPA: 10.0"
    }
];

// --- Helper Component for Scroll Animations ---
const RevealOnScroll = ({ children, className = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) observer.observe(ref.current);
        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, []);

    return (
        <div
            ref={ref}
            className={`transition-all duration-1000 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                } ${className}`}
        >
            {children}
        </div>
    );
};

// --- Main Application Component ---
export default function Portfolio() {
    const [activeSection, setActiveSection] = useState('home');
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll events for navbar styling
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Basic scroll spy
            const sections = ['home', 'about', 'skills', 'projects', 'education'];
            const current = sections.find(section => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 150 && rect.bottom >= 150;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) {
            window.scrollTo({
                top: el.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-blue-500/30 selection:text-blue-200">

            <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/80 backdrop-blur-lg border-b border-slate-800 py-4' : 'bg-transparent py-6'}`}>
                <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
                    <div className="font-bold text-xl tracking-tighter text-white">
                        M<span className="text-blue-500">.</span>UR
                    </div>
                    <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-300">
                        {['About', 'Skills', 'Projects', 'Education'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollTo(item.toLowerCase())}
                                className={`hover:text-blue-400 transition-colors ${activeSection === item.toLowerCase() ? 'text-blue-400' : ''}`}
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white rounded-full text-sm font-medium hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
                    >
                        <Mail className="w-4 h-4" /> Let's Talk
                    </a>
                </div>
            </nav>


            <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950/20 to-slate-950">
                <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                    <div className="absolute top-20 md:top-32 left-4 md:left-20 text-7xl md:text-9xl font-mono text-white/5 font-bold -rotate-12 select-none">{`</>`}</div>
                    <div className="absolute bottom-10 md:bottom-32 right-4 md:right-20 text-8xl md:text-[15rem] font-mono text-white/5 font-bold rotate-12 select-none">{`{}`}</div>
                    <Code2 className="absolute top-1/2 left-2/3 w-48 h-48 md:w-96 md:h-96 text-white/5 -translate-y-1/2 rotate-45" />
                </div>

                <RevealOnScroll>
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md text-blue-300 text-sm font-medium tracking-wide shadow-sm">
                        Available for new opportunities
                    </div>
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">{personalInfo.name}</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
                        A {personalInfo.role} crafting responsive, performant, and user-friendly digital experiences.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={() => scrollTo('projects')}
                            className="w-full sm:w-auto px-8 py-3.5 bg-blue-600 text-white rounded-full font-medium shadow-lg shadow-blue-900/50 hover:bg-blue-500 hover:shadow-blue-500/25 transition-all duration-300"
                        >
                            View My Work
                        </button>
                        <a
                            href={personalInfo.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full sm:w-auto px-8 py-3.5 bg-slate-900 text-slate-200 rounded-full font-medium border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
                        >
                            <FaGithub className="w-5 h-5" /> GitHub
                        </a>
                    </div>
                </RevealOnScroll>
                <button
                    onClick={() => scrollTo('about')}
                    className="absolute bottom-10 animate-bounce text-slate-600 hover:text-blue-400 transition-colors"
                    aria-label="Scroll down"
                >
                    <ChevronDown className="w-8 h-8" />
                </button>
            </section>


            <section id="about" className="py-24 px-6 relative bg-gradient-to-b from-slate-950 via-purple-950/10 to-slate-950 overflow-hidden">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-black text-white/5 pointer-events-none z-0 select-none">JS</div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <RevealOnScroll>
                        <div className="flex justify-center mb-16">
                            <div className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg shadow-black/20 text-white transform hover:scale-105 hover:border-slate-700 transition-all">
                                <User className="w-6 h-6 text-purple-400" />
                                <h2 className="text-2xl font-bold tracking-wide">About Me</h2>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <RevealOnScroll className="order-2 md:order-1">
                            <p className="text-lg text-slate-300 leading-relaxed">
                                {personalInfo.summary}
                            </p>
                            <div className="mt-8 pt-8 border-t border-slate-800 flex flex-wrap gap-6 text-sm text-slate-400">
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4 text-slate-500" /> {personalInfo.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Phone className="w-4 h-4 text-slate-500" /> {personalInfo.phone}
                                </div>
                            </div>
                        </RevealOnScroll>
                        <RevealOnScroll className="order-1 md:order-2">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-900/20 rounded-3xl transform translate-x-4 translate-y-4 border border-slate-800"></div>
                                <div className="relative bg-slate-900 p-8 rounded-3xl text-slate-300 font-mono text-sm leading-loose shadow-2xl border border-slate-800">
                                    <div className="flex gap-2 mb-4">
                                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                                    </div>
                                    <p><span className="text-blue-400">const</span> developer = {'{'}</p>
                                    <p className="ml-4">name: <span className="text-green-400">"{personalInfo.name}"</span>,</p>
                                    <p className="ml-4">role: <span className="text-green-400">"{personalInfo.role}"</span>,</p>
                                    <p className="ml-4">problemSolver: <span className="text-purple-400">true</span>,</p>
                                    <p className="ml-4">languages: [<span className="text-green-400">"English"</span>, <span className="text-green-400">"Hindi"</span>, <span className="text-green-400">"Telugu"</span>]</p>
                                    <p>{'}'};</p>
                                </div>
                            </div>
                        </RevealOnScroll>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-24 px-6 relative bg-gradient-to-b from-slate-950 via-pink-950/10 to-slate-950 overflow-hidden">
                <Database className="absolute right-0 bottom-0 w-80 h-80 md:w-[35rem] md:h-[35rem] text-white/5 translate-x-1/4 translate-y-1/4 pointer-events-none z-0" />

                <div className="max-w-6xl mx-auto relative z-10">
                    <RevealOnScroll>
                        <div className="flex justify-center mb-16">
                            <div className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg shadow-black/20 text-white transform hover:scale-105 hover:border-slate-700 transition-all">
                                <Wrench className="w-6 h-6 text-pink-400" />
                                <h2 className="text-2xl font-bold tracking-wide">Technical Arsenal</h2>
                            </div>
                        </div>
                    </RevealOnScroll>
                    <div className="grid md:grid-cols-3 gap-8">
                        {skills.map((skillGroup, idx) => (
                            <RevealOnScroll key={idx} className={`delay-[${idx * 100}ms]`}>
                                <div className="bg-slate-900/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-slate-800 hover:border-slate-600 hover:bg-slate-800/60 transition-all h-full">
                                    {skillGroup.icon}
                                    <h3 className="text-xl font-semibold text-white mb-6">{skillGroup.category}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skillGroup.items.map((skill, sIdx) => (
                                            <span
                                                key={sIdx}
                                                className="px-3 py-1.5 bg-slate-800 border border-slate-700/50 text-slate-300 text-sm font-medium rounded-lg"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-24 px-6 relative bg-gradient-to-b from-slate-950 via-indigo-950/10 to-slate-950 overflow-hidden">
                <div className="absolute top-10 right-0 md:right-20 text-[10rem] md:text-[20rem] font-mono text-white/5 pointer-events-none z-0 rotate-12 select-none">[]</div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <RevealOnScroll>
                        <div className="flex justify-center mb-16">
                            <div className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg shadow-black/20 text-white transform hover:scale-105 hover:border-slate-700 transition-all">
                                <Briefcase className="w-6 h-6 text-blue-400" />
                                <h2 className="text-2xl font-bold tracking-wide">Featured Projects</h2>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="space-y-16">
                        {projects.map((project, idx) => (
                            <RevealOnScroll key={idx}>
                                <div className="group border border-slate-800 bg-slate-900/40 backdrop-blur-md rounded-3xl p-8 hover:border-slate-600 hover:bg-slate-800/60 shadow-lg hover:shadow-2xl transition-all duration-500">
                                    <div className="flex flex-col lg:flex-row gap-8">
                                        <div className="lg:w-1/3">
                                            <p className="text-blue-400 text-sm font-bold tracking-wider uppercase mb-2">{project.type}</p>
                                            <h3 className="text-2xl font-bold text-white mb-6">{project.title}</h3>
                                            <div className="flex flex-wrap gap-2 mb-8">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-700/50 text-slate-300 bg-slate-800">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl text-sm font-medium hover:bg-blue-500 transition-colors shadow-md shadow-blue-900/20 group/btn"
                                            >
                                                View Source <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                            </a>
                                        </div>
                                        <div className="lg:w-2/3 flex flex-col gap-6">
                                            <div className="space-y-4">
                                                {project.description.map((desc, i) => (
                                                    <p key={i} className="text-slate-300 leading-relaxed flex items-start gap-3">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5 shrink-0"></span>
                                                        {desc}
                                                    </p>
                                                ))}
                                            </div>

                                            {/* Project Image Gallery - 2 Columns & Scrollable */}
                                            {project.images && (
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                                                    {project.images.map((img, i) => (
                                                        <div 
                                                            key={i} 
                                                            className="w-full h-64 sm:h-80 overflow-y-auto overflow-x-hidden rounded-xl border border-slate-800 shadow-sm bg-slate-900 hover:border-slate-600 transition-all duration-300"
                                                        >
                                                            <img
                                                                src={img}
                                                                alt={`${project.title} preview ${i + 1}`}
                                                                className="w-full h-auto block opacity-90 hover:opacity-100 transition-opacity"
                                                            />
                                                        </div>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Education Section */}
            <section id="education" className="py-24 px-6 relative bg-gradient-to-b from-slate-950 via-teal-950/10 to-slate-950 overflow-hidden">
                <GraduationCap className="absolute left-0 top-1/2 -translate-y-1/2 w-80 h-80 md:w-[40rem] md:h-[40rem] text-white/5 -translate-x-1/4 pointer-events-none z-0" />

                <div className="max-w-4xl mx-auto relative z-10">
                    <RevealOnScroll>
                        <div className="flex justify-center mb-16">
                            <div className="inline-flex items-center gap-3 px-8 py-3 bg-slate-900 border border-slate-800 rounded-2xl shadow-lg shadow-black/20 text-white transform hover:scale-105 hover:border-slate-700 transition-all">
                                <GraduationCap className="w-6 h-6 text-teal-400" />
                                <h2 className="text-2xl font-bold tracking-wide">Education</h2>
                            </div>
                        </div>
                    </RevealOnScroll>

                    <div className="relative border-l border-slate-800 ml-3 md:ml-0 md:pl-0">
                        {education.map((item, idx) => (
                            <RevealOnScroll key={idx}>
                                <div className="mb-10 ml-8 md:ml-12 relative">
                                    <div className="absolute -left-[41px] md:-left-[57px] mt-1.5 w-5 h-5 rounded-full border-4 border-slate-950 bg-blue-500 shadow-sm"></div>
                                    <div className="bg-slate-900/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-slate-800 hover:border-slate-600 hover:bg-slate-800/60 transition-all">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                                            <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                                            <span className="text-sm font-medium text-blue-300 bg-blue-900/30 px-3 py-1 rounded-full w-fit mt-2 md:mt-0 border border-blue-800/30">
                                                {item.year}
                                            </span>
                                        </div>
                                        <p className="text-slate-300 mb-2">{item.institution}</p>
                                        <p className="text-sm font-semibold text-slate-500">{item.grade}</p>
                                    </div>
                                </div>
                            </RevealOnScroll>
                        ))}
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-400 py-16 px-6 border-t border-slate-900">
                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
                    {/* Brand & Socials */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-white mb-2">{personalInfo.name}</h2>
                        <p className="text-sm text-slate-400 mb-6 max-w-sm mx-auto md:mx-0">
                            {personalInfo.role} crafting responsive, performant, and user-friendly digital experiences.
                        </p>
                        <div className="flex items-center justify-center md:justify-start gap-4">
                            <a href={personalInfo.githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors p-2.5 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-800 hover:border-slate-600" aria-label="GitHub">
                                <FaGithub className="w-5 h-5" />
                            </a>
                            <a href={`mailto:${personalInfo.email}`} className="hover:text-white transition-colors p-2.5 bg-slate-900 border border-slate-800 rounded-full hover:bg-slate-800 hover:border-slate-600" aria-label="Email">
                                <Mail className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="flex flex-col items-center md:items-end">
                        <div className="w-full md:w-auto">
                            <h3 className="text-white font-semibold mb-6 text-lg text-center md:text-left">Contact Info</h3>
                            <div className="space-y-4 text-sm font-medium">
                                <a href={`mailto:${personalInfo.email}`} className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition-colors group">
                                    <Mail className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" /> {personalInfo.email}
                                </a>
                                <a href={`tel:${personalInfo.phone.replace(/\s+/g, '')}`} className="flex items-center justify-center md:justify-start gap-3 hover:text-blue-400 transition-colors group">
                                    <Phone className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" /> {personalInfo.phone}
                                </a>
                                <div className="flex items-center justify-center md:justify-start gap-3">
                                    <MapPin className="w-5 h-5 text-slate-500" /> {personalInfo.location}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-6xl mx-auto pt-8 border-t border-slate-900 text-center text-sm">
                    <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
}
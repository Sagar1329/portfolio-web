import { motion } from "framer-motion";
import { about, contact } from "../data";
import { Download, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";

const Hero = () => {
    return (
        <section id="about" className="section-shell overflow-hidden relative">
            <div className="absolute -top-20 -right-20 h-52 w-52 rounded-full bg-sky-100 blur-3xl" />

            <div className="relative grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1 text-xs md:text-sm text-sky-700">
                        <Sparkles size={14} />
                        Open to full-time and freelance roles
                    </div>

                    <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
                        {about.name}
                    </h1>

                    <p className="mt-2 text-lg md:text-xl font-semibold text-sky-700">{about.role}</p>

                    <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">{about.description}</p>

                    <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-2">
                            <MapPin size={14} className="text-sky-600" /> {about.location}
                        </span>
                        <span className="rounded-full border border-slate-200 bg-white px-3 py-1">
                            Experience: {about.experience}
                        </span>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                        {about.highlights.map((item) => (
                            <span key={item} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700">
                                {item}
                            </span>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-wrap gap-3">
                        <a
                            href="#contact"
                            className="px-5 py-2.5 rounded-full bg-slate-900 text-white font-semibold hover:bg-slate-800 transition"
                        >
                            Contact me
                        </a>
                        <a
                            href={`${import.meta.env.BASE_URL}SagarResume.pdf`}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-300 text-slate-700 hover:bg-slate-50 transition"
                        >
                            <Download size={16} />
                            Resume
                        </a>
                    </div>

                    <div className="mt-6 flex items-center gap-4">
                        <a href={contact.github} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-700 transition-colors"><Github size={21} /></a>
                        <a href={contact.linkedin} target="_blank" rel="noreferrer" className="text-slate-500 hover:text-sky-700 transition-colors"><Linkedin size={21} /></a>
                        <a href={`mailto:${contact.email}`} className="text-slate-500 hover:text-sky-700 transition-colors"><Mail size={21} /></a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.08 }}
                    className="justify-self-center"
                >
                    <div className="w-56 h-56 md:w-64 md:h-64 rounded-[2rem] p-[2px] bg-gradient-to-br from-sky-200 via-blue-200 to-cyan-200">
                        <div className="w-full h-full rounded-[2rem] overflow-hidden bg-slate-100">
                            <img src="images/avatar.png" alt="Sagar K" className="w-full h-full object-cover object-[50%_10%]" />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

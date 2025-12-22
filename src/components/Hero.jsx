import { about, contact } from "../data";
import { Github, Linkedin, Mail,Download } from "lucide-react";

const Hero = () => {
    return (
        <section className="pt-24 pb-20">
            <div className="flex flex-col-reverse md:flex-row items-center gap-12">

                {/* Left Content */}
                <div className="flex-1 text-center md:text-left">
                    <p className="text-sky-400 font-medium mb-3">
                        Hi, I’m
                    </p>

                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                        {about.name}
                    </h1>

                    <h2 className="text-2xl md:text-3xl font-semibold text-slate-300 mb-6">
                        {about.role}
                    </h2>

                    <p className="text-slate-300 max-w-xl mb-8">
                        {about.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a
                            href="#contact"
                            className="px-6 py-3 bg-sky-500 text-white rounded-lg
               hover:bg-sky-400 transition"
                        >
                            Contact Me
                        </a>

                        <a
                            href={`${import.meta.env.BASE_URL}SagarResume.pdf`}
                            target="_blank"
                            rel="noreferrer"
                        
                            className="flex items-center gap-2 px-6 py-3
               border border-slate-500 text-slate-200 rounded-lg
               hover:bg-slate-700 transition"
                        >
                            <Download className="w-4 h-4" />
                            Download Resume
                        </a>
                    </div>

                    {/* Social Icons */}
                    <div className="flex justify-center md:justify-start gap-5 mt-8">
                        <a
                            href={contact.github}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-white transition"
                        >
                            <Github className="w-6 h-6" />
                        </a>

                        <a
                            href={contact.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="text-slate-400 hover:text-white transition"
                        >
                            <Linkedin className="w-6 h-6" />
                        </a>

                        <a
                            href={`mailto:${contact.email}`}
                            className="text-slate-400 hover:text-white transition"
                        >
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>

                {/* Right Avatar */}
                <div className="w-50 h-50 md:w-56 md:h-56 rounded-full
                bg-gradient-to-br from-sky-400 to-indigo-500 p-1">
                    <div className="w-full h-full rounded-full bg-[#0f172a] overflow-hidden">
                        <img
                            src="images/avatar.png"
                            alt="Sagar K"
                            className="w-full h-full object-cover object-[50%_10%] scale-97"
                        />
                    </div>
                </div>


            </div>
        </section>
    );
};

export default Hero;

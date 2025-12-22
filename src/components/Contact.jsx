import { contact } from "../data";
import {
    Mail,
    Phone,
    Github,
    Linkedin,
} from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-16">
            <div className="text-center">
                {/* Section Title */}
                <div className="flex items-center justify-center gap-3 mb-4">
                    <Mail className="w-7 h-7 text-sky-400" />
                    <h2 className="text-4xl font-bold text-white">
                        Get In Touch
                    </h2>
                </div>

                <p className="text-slate-300 mb-8 max-w-xl mx-auto">
                    Open to full-time roles, contract opportunities, and product-focused
                    engineering work. Feel free to reach out.
                </p>

                {/* Contact Info */}
                <div className="space-y-4 text-slate-300 max-w-md mx-auto">
                    <div className="flex items-center justify-center gap-3">
                        <Mail className="w-5 h-5 text-sky-400" />
                        <a
                            href={`mailto:${contact.email}`}
                            className="text-sky-400 hover:text-sky-300 transition"
                        >
                            {contact.email}
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-3">
                        <Phone className="w-5 h-5 text-sky-400" />
                        <a
                            href={`tel:${contact.phone}`}
                            className="text-sky-400 hover:text-sky-300 transition"
                        >
                            {contact.phone}
                        </a>
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-4 mt-10">
                    <a
                        href={contact.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2
                       border border-slate-500 rounded-lg
                       text-slate-200 hover:bg-slate-700 transition"
                    >
                        <Github className="w-4 h-4" />
                        GitHub
                    </a>

                    <a
                        href={contact.linkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 px-5 py-2
                       border border-slate-500 rounded-lg
                       text-slate-200 hover:bg-slate-700 transition"
                    >
                        <Linkedin className="w-4 h-4" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;

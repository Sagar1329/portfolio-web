import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { contact } from "../data";

const Contact = () => {
    return (
        <section id="contact" className="section-shell">
            <div className="flex items-center gap-2.5 mb-2">
                <Mail className="w-6 h-6 text-cyan-300" />
                <h2 className="section-title">Get In Touch</h2>
            </div>

            <p className="text-slate-300 max-w-2xl text-sm md:text-base">
                Available for full-time roles, contract opportunities, and product-focused engineering work.
                Reach out and I will respond quickly.
            </p>

            <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <a href={`mailto:${contact.email}`} className="rounded-xl border border-slate-700 bg-slate-900/55 p-3.5 hover:border-cyan-300/50 transition">
                    <p className="text-xs text-slate-400">Email</p>
                    <p className="text-slate-200 mt-1 inline-flex items-center gap-2"><Mail size={15} className="text-cyan-300" />{contact.email}</p>
                </a>

                <a href={`tel:${contact.phone}`} className="rounded-xl border border-slate-700 bg-slate-900/55 p-3.5 hover:border-cyan-300/50 transition">
                    <p className="text-xs text-slate-400">Phone</p>
                    <p className="text-slate-200 mt-1 inline-flex items-center gap-2"><Phone size={15} className="text-cyan-300" />{contact.phone}</p>
                </a>

                <a href={contact.github} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 bg-slate-900/55 p-3.5 hover:border-cyan-300/50 transition">
                    <p className="text-xs text-slate-400">GitHub</p>
                    <p className="text-slate-200 mt-1 inline-flex items-center gap-2"><Github size={15} className="text-cyan-300" />Sagar1329</p>
                </a>

                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-700 bg-slate-900/55 p-3.5 hover:border-cyan-300/50 transition">
                    <p className="text-xs text-slate-400">LinkedIn</p>
                    <p className="text-slate-200 mt-1 inline-flex items-center gap-2"><Linkedin size={15} className="text-cyan-300" />sagargowda1329</p>
                </a>
            </div>

            
        </section>
    );
};

export default Contact;

import { Mail, Phone, Github, Linkedin, Globe } from "lucide-react";
import { contact } from "../data";

const Contact = () => {
    return (
        <section id="contact" className="section-shell">
            <div className="flex items-center gap-3 mb-3">
                <Mail className="w-6 h-6 text-sky-600" />
                <h2 className="section-title">Get In Touch</h2>
            </div>

            <p className="text-slate-600 max-w-2xl text-sm md:text-base">
                Available for full-time roles, contract opportunities, and product-focused engineering work.
                Reach out and I will respond quickly.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
                <a href={`mailto:${contact.email}`} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-sky-300 transition">
                    <p className="text-xs text-slate-500">Email</p>
                    <p className="text-slate-700 mt-1 inline-flex items-center gap-2"><Mail size={15} className="text-sky-600" />{contact.email}</p>
                </a>

                <a href={`tel:${contact.phone}`} className="rounded-xl border border-slate-200 bg-white p-4 hover:border-sky-300 transition">
                    <p className="text-xs text-slate-500">Phone</p>
                    <p className="text-slate-700 mt-1 inline-flex items-center gap-2"><Phone size={15} className="text-sky-600" />{contact.phone}</p>
                </a>

                <a href={contact.github} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-sky-300 transition">
                    <p className="text-xs text-slate-500">GitHub</p>
                    <p className="text-slate-700 mt-1 inline-flex items-center gap-2"><Github size={15} className="text-sky-600" />Sagar1329</p>
                </a>

                <a href={contact.linkedin} target="_blank" rel="noreferrer" className="rounded-xl border border-slate-200 bg-white p-4 hover:border-sky-300 transition">
                    <p className="text-xs text-slate-500">LinkedIn</p>
                    <p className="text-slate-700 mt-1 inline-flex items-center gap-2"><Linkedin size={15} className="text-sky-600" />sagargowda1329</p>
                </a>
            </div>

            <a href={contact.portfolio} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-sky-700 hover:text-sky-900 text-sm transition">
                <Globe size={15} /> Public portfolio link
            </a>
        </section>
    );
};

export default Contact;

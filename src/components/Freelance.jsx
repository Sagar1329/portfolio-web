import { Briefcase, ExternalLink } from "lucide-react";
import { freelanceWork } from "../data";

const Freelance = () => {
    return (
        <section id="freelance" className="section-shell">
            <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-cyan-300" />
                <h2 className="section-title">Freelance Work</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
                {freelanceWork.map((item) => (
                    <article key={item.client} className="rounded-2xl border border-slate-700 bg-slate-900/55 p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-slate-100 text-lg font-heading">{item.client}</h3>
                                <p className="text-cyan-200 text-sm font-semibold mt-1">{item.role}</p>
                            </div>
                            <span className="text-xs rounded-full border border-slate-600 bg-slate-900/70 px-2.5 py-1 text-slate-300">
                                {item.period}
                            </span>
                        </div>

                        <ul className="mt-4 space-y-2 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                            {item.details.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                                <span key={tech} className="text-xs rounded-full border border-slate-600 bg-slate-900/70 px-2.5 py-1 text-slate-300">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="mt-5 text-sm text-cyan-200">
                            {item.liveUrl ? (
                                <a href={item.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan-100 transition">
                                    <ExternalLink size={14} /> {item.liveLabel}
                                </a>
                            ) : (
                                item.liveLabel
                            )}
                        </p>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Freelance;

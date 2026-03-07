import { Briefcase, ExternalLink } from "lucide-react";
import { freelanceWork } from "../data";

const Freelance = () => {
    return (
        <section id="freelance" className="section-shell">
            <div className="flex items-center gap-3 mb-6">
                <Briefcase className="w-6 h-6 text-sky-600" />
                <h2 className="section-title">Freelance Work</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
                {freelanceWork.map((item) => (
                    <article key={item.client} className="rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-slate-900 text-lg font-heading">{item.client}</h3>
                                <p className="text-sky-700 text-sm font-semibold mt-1">{item.role}</p>
                            </div>
                            <span className="text-xs rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600">
                                {item.period}
                            </span>
                        </div>

                        <ul className="mt-4 space-y-2 text-slate-600 text-sm leading-relaxed list-disc list-inside">
                            {item.details.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {item.tech.map((tech) => (
                                <span key={tech} className="text-xs rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600">
                                    {tech}
                                </span>
                            ))}
                        </div>

                        <p className="mt-5 text-sm text-sky-700">
                            {item.liveUrl ? (
                                <a href={item.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-sky-900 transition">
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

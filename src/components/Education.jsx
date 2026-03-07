import { GraduationCap } from "lucide-react";
import { education } from "../data";

const Education = () => {
    return (
        <section id="education" className="section-shell">
            <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-cyan-300" />
                <h2 className="section-title">Education</h2>
            </div>

            <div className="space-y-4">
                {education.map((item) => (
                    <article
                        key={`${item.degree}-${item.duration}`}
                        className="rounded-2xl border border-white/10 bg-slate-900/45 p-5"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                            <div>
                                <h3 className="text-lg text-white font-heading">{item.degree}</h3>
                                <p className="text-slate-200 text-sm mt-1">{item.institute}</p>
                            </div>
                            <div className="text-sm text-slate-300 md:text-right">
                                <p>{item.score}</p>
                                <p>{item.duration}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Education;

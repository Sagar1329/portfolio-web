import { motion } from "framer-motion";
import { BriefcaseBusiness } from "lucide-react";
import { experience } from "../data";

const Experience = () => {
    return (
        <section id="experience" className="section-shell">
            <div className="flex items-center gap-2.5 mb-4">
                <BriefcaseBusiness className="w-6 h-6 text-cyan-300" />
                <h2 className="section-title">Professional Experience</h2>
            </div>

            <div className="space-y-3">
                {experience.map((item, index) => (
                    <motion.article
                        key={`${item.company}-${item.duration}`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                        className="rounded-xl border border-slate-700 bg-slate-900/55 p-4"
                    >
                        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1">
                            <div>
                                <h3 className="text-slate-100 font-heading text-base md:text-lg">{item.role}</h3>
                                <p className="text-cyan-200 font-semibold text-sm">{item.company}</p>
                            </div>
                            <p className="text-xs md:text-sm text-slate-300 rounded-full border border-slate-600 bg-slate-900/70 px-3 py-1 w-fit">
                                {item.duration}
                            </p>
                        </div>

                        <ul className="mt-3 space-y-1.5 text-slate-300 text-sm leading-relaxed list-disc list-inside">
                            {item.details.map((point) => (
                                <li key={point}>{point}</li>
                            ))}
                        </ul>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Experience;

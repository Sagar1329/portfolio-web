import { skills } from "../data";
import { skillIcons } from "../constants/skillIcons";
import { Code2, Database, Server, Settings, Sparkles } from "lucide-react";

const groups = [
    { key: "frontend", title: "Frontend", icon: Code2 },
    { key: "backend", title: "Backend", icon: Server },
    { key: "databases", title: "Databases", icon: Database },
    { key: "devops_tools", title: "DevOps and Tools", icon: Settings },
    { key: "other", title: "Other", icon: Sparkles },
];

const SkillChip = ({ label }) => {
    const Icon = skillIcons[label];

    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700 hover:border-sky-300 hover:bg-sky-50 transition">
            {Icon ? <Icon size={14} className="text-sky-600" /> : null}
            {label}
        </span>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section-shell">
            <div className="flex items-center gap-3 mb-6">
                <Code2 className="w-6 h-6 text-sky-600" />
                <h2 className="section-title">Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
                {groups.map(({ key, title, icon: Icon }) => (
                    <div key={key} className="rounded-2xl border border-slate-200 bg-white p-5">
                        <div className="flex items-center gap-2 mb-4">
                            <Icon size={18} className="text-sky-600" />
                            <h3 className="font-heading text-lg text-slate-900">{title}</h3>
                        </div>

                        <div className="flex flex-wrap gap-2.5">
                            {(skills[key] || []).map((item) => (
                                <SkillChip key={item} label={item} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;

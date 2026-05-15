import { skills } from "../data";
import { skillIcons } from "../constants/skillIcons";
import { Code2, Database, Server, Settings, Sparkles, Smartphone } from "lucide-react";

const groups = [
    { key: "frontend", title: "Frontend", icon: Code2 },
    { key: "backend", title: "Backend", icon: Server },
    { key: "mobile", title: "Mobile", icon: Smartphone },
    { key: "databases", title: "Databases", icon: Database },
    { key: "devops_tools", title: "DevOps and Tools", icon: Settings },
    { key: "other", title: "Other", icon: Sparkles },
];

const SkillChip = ({ label }) => {
    const Icon = skillIcons[label];

    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-600 bg-slate-900/65 px-3 py-1.5 text-sm text-slate-200 hover:border-cyan-300/50 hover:bg-cyan-300/10 transition">
            {Icon ? <Icon size={14} className="text-cyan-300" /> : null}
            {label}
        </span>
    );
};

const Skills = () => {
    return (
        <section id="skills" className="section-shell">
            <div className="flex items-center gap-2.5 mb-4">
                <Code2 className="w-6 h-6 text-cyan-300" />
                <h2 className="section-title">Skills</h2>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-1 gap-3">
                {groups.map(({ key, title, icon: Icon }) => (
                    <div key={key} className="rounded-xl border border-slate-700 bg-slate-900/55 p-4">
                        <div className="flex items-center gap-2 mb-3">
                            <Icon size={18} className="text-cyan-300" />
                            <h3 className="font-heading text-base text-slate-100">{title}</h3>
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

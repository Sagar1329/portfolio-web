import { skills } from "../data";
import { skillIcons } from "../constants/skillIcons";
import {
    Code2,
    Server,
    Smartphone,
    Database,
    Settings,
} from "lucide-react";

const SectionTitle = ({ icon: Icon, title }) => (
    <div className="flex items-center gap-3 mb-10">
        <Icon className="w-7 h-7 text-sky-400" />
        <h2 className="text-4xl font-bold text-white">{title}</h2>
    </div>
);

const SkillCard = ({ title, icon: Icon, items }) => (
    <div className="border border-slate-600 rounded-xl p-5 bg-[#1f2937]">
        <div className="flex items-center gap-2 mb-4">
            <Icon className="w-5 h-5 text-sky-400" />
            <h3 className="text-lg font-semibold text-white">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
            {items.map((skill, index) => {
                const SkillIcon = skillIcons[skill];

                return (
                    <span
                        key={index}
                        className="flex items-center gap-2 px-3 py-1.5
                       border border-slate-500 rounded-full text-sm
                       text-slate-200 hover:border-sky-400
                       hover:text-sky-400 transition"
                    >
                        {SkillIcon && <SkillIcon className="w-4 h-4" />}
                        {skill}
                    </span>
                );
            })}
        </div>
    </div>
);

const Skills = () => {
    return (
        <section id="skills" className="py-16">
            <SectionTitle icon={Code2} title="Skills" />

            <div className="grid md:grid-cols-2 gap-6">
                <SkillCard title="Frontend" icon={Code2} items={skills.frontend} />
                <SkillCard title="Backend" icon={Server} items={skills.backend} />
                <SkillCard title="Mobile" icon={Smartphone} items={skills.mobile} />
                <SkillCard title="Databases" icon={Database} items={skills.databases} />
                <div className="md:col-span-2">
                    <SkillCard
                        title="DevOps & Tools"
                        icon={Settings}
                        items={skills.devops_tools}
                    />
                </div>
            </div>
        </section>
    );
};

export default Skills;

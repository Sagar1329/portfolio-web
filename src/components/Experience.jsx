import { useState } from "react";
import { experience } from "../data";
import { Briefcase } from "lucide-react";

const Experience = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="experience" className="py-16">
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <Briefcase className="w-7 h-7 text-sky-400" />
                    <h2 className="text-4xl font-bold text-white">
                        Professional Experience
                    </h2>
                </div>


                <div className="space-y-6">
                    {experience.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                className="border border-slate-600 rounded-xl bg-[#1f2937]"
                            >
                                {/* Header */}
                                <button
                                    onClick={() => toggle(index)}
                                    className="w-full flex justify-between items-center p-6 text-left"
                                >
                                    <div>
                                        <h3 className="text-lg font-semibold text-white">
                                            {item.company}
                                        </h3>
                                        <p className="text-sm text-slate-400">
                                            {item.role} · {item.duration}
                                        </p>
                                    </div>

                                    <span className="text-slate-300 text-xl">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {/* Content */}
                                {isOpen && (
                                    <div className="px-6 pb-6">
                                        <ul className="list-disc list-inside space-y-2 text-slate-300">
                                            {item.details.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Experience;

import { education } from "../data";

const Education = () => {
    return (
        <section id="education" className="py-16">
            <div>
                <h2 className="text-4xl font-bold mb-10 text-white">
                    Education
                </h2>

                <div className="space-y-6">
                    {education.map((item, index) => (
                        <div
                            key={index}
                            className="border border-slate-600 rounded-xl p-5 bg-[#1f2937]"
                        >
                            <h3 className="text-lg font-semibold text-white">
                                {item.degree}
                            </h3>

                            <p className="text-slate-300">
                                {item.institute}
                            </p>

                            {item.duration && (
                                <p className="text-sm text-slate-400 mt-1">
                                    {item.duration}
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;

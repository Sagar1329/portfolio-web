import { about } from "../data";
import { User } from "lucide-react";

const About = () => {
    return (
        <section id="about" className="py-16">
            <div>
                <div className="flex items-center gap-3 mb-6">
                    <User className="w-7 h-7 text-sky-400" />
                    <h2 className="text-4xl font-bold text-white">About Me</h2>
                </div>

                <h3 className="text-xl font-semibold text-slate-300 mb-4">
                    {about.role}
                </h3>

                <p className="text-lg leading-relaxed text-slate-300 max-w-3xl">
                    {about.description}
                </p>
            </div>
        </section>
    );
};

export default About;

import { projects } from "../data";
import { FolderGit2 } from "lucide-react";

const Projects = () => {
    return (
        <section id="projects" className="py-16">
            <div>
                <div className="flex items-center gap-3 mb-10">
                    <FolderGit2 className="w-7 h-7 text-sky-400" />
                    <h2 className="text-4xl font-bold text-white">Projects</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="border border-slate-600 rounded-xl p-6 bg-[#1f2937]
                         hover:border-sky-400 hover:-translate-y-1
                         transition-all duration-300"
                        >
                            <h3 className="text-lg font-semibold text-white mb-2">
                                {project.title}
                            </h3>

                            <p className="text-sm text-slate-400 mb-3">
                                {project.tech}
                            </p>

                            <p className="text-slate-300">
                                {project.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

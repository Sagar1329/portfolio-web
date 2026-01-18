import { useState } from "react";
import { projects } from "../data";
import { FolderGit2, ExternalLink, Github } from "lucide-react";

const DESCRIPTION_LIMIT = 220;

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
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

const ProjectCard = ({ project }) => {
    const [expanded, setExpanded] = useState(false);

    const isLong = project.description.length > DESCRIPTION_LIMIT;
    const visibleText = expanded
        ? project.description
        : project.description.slice(0, DESCRIPTION_LIMIT) + (isLong ? "..." : "");

    return (
        <div
            className="border border-slate-600 rounded-xl p-6 bg-[#1f2937]
            hover:border-sky-400 hover:-translate-y-1
            transition-all duration-300 flex flex-col justify-between"
        >
            <div>
                <h3 className="text-lg font-semibold text-white mb-2">
                    {project.title}
                </h3>

                <p className="text-sm text-slate-400 mb-3">
                    {project.tech}
                </p>

                <p className="text-slate-300 whitespace-pre-line">
                    {visibleText}
                </p>

                {isLong && (
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-2 text-sm text-sky-400 hover:underline"
                    >
                        {expanded ? "Show less" : "Show more"}
                    </button>
                )}
            </div>

            <div className="flex gap-4 mt-4">
                {project.liveUrl && (
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-sky-400 transition"
                        title="Live Demo"
                    >
                        <ExternalLink size={20} />
                    </a>
                )}

                {project.githubUrl && (
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-slate-400 hover:text-sky-400 transition"
                        title="Source Code"
                    >
                        <Github size={20} />
                    </a>
                )}
            </div>
        </div>
    );
};

export default Projects;

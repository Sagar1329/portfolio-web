import { motion } from "framer-motion";
import { ExternalLink, FolderKanban, Github, Play } from "lucide-react";
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="section-shell">
            <div className="flex items-center gap-2.5 mb-4">
                <FolderKanban className="w-6 h-6 text-cyan-300" />
                <h2 className="section-title">Projects</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-3">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                        className="rounded-xl border border-slate-700 bg-slate-900/55 p-4 flex flex-col"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-slate-100 text-base md:text-lg font-heading">{project.title}</h3>
                                <p className="text-xs text-slate-400 mt-1">{project.period}</p>
                            </div>
                            <span className="text-xs rounded-full border border-cyan-300/35 bg-cyan-300/10 px-2.5 py-1 text-cyan-200">
                                {project.status}
                            </span>
                        </div>

                        <p className="mt-2.5 text-sm text-slate-300 leading-relaxed">{project.description}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((item) => (
                                <span key={item} className="text-xs rounded-full border border-slate-600 bg-slate-900/70 px-2.5 py-1 text-slate-300">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-5 flex items-center gap-4 text-sm">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-cyan-200 hover:text-cyan-100 transition">
                                    <ExternalLink size={15} /> Live
                                </a>
                            )}

                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-cyan-200 hover:text-cyan-100 transition">
                                    <Github size={15} /> Source
                                </a>
                            )}

                            {project.playstoreUrl && (
                                <a href={project.playstoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-cyan-200 hover:text-cyan-100 transition">
                                    <Play size={15} /> Play Store
                                </a>
                            )}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default Projects;

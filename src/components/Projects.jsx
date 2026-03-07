import { motion } from "framer-motion";
import { ExternalLink, FolderKanban, Github, Play } from "lucide-react";
import { projects } from "../data";

const Projects = () => {
    return (
        <section id="projects" className="section-shell">
            <div className="flex items-center gap-3 mb-6">
                <FolderKanban className="w-6 h-6 text-sky-600" />
                <h2 className="section-title">Projects</h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-4">
                {projects.map((project, index) => (
                    <motion.article
                        key={project.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: index * 0.08 }}
                        className="rounded-2xl border border-slate-200 bg-white p-5 flex flex-col"
                    >
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-slate-900 text-lg font-heading">{project.title}</h3>
                                <p className="text-xs text-slate-500 mt-1">{project.period}</p>
                            </div>
                            <span className="text-xs rounded-full border border-sky-200 bg-sky-50 px-2.5 py-1 text-sky-700">
                                {project.status}
                            </span>
                        </div>

                        <p className="mt-3 text-sm text-slate-600 leading-relaxed">{project.description}</p>

                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((item) => (
                                <span key={item} className="text-xs rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-slate-600">
                                    {item}
                                </span>
                            ))}
                        </div>

                        <div className="mt-5 flex items-center gap-4 text-sm">
                            {project.liveUrl && (
                                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 transition">
                                    <ExternalLink size={15} /> Live
                                </a>
                            )}

                            {project.githubUrl && (
                                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 transition">
                                    <Github size={15} /> Source
                                </a>
                            )}

                            {project.playstoreUrl && (
                                <a href={project.playstoreUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sky-700 hover:text-sky-900 transition">
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

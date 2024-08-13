import { Github, MoveUpRight } from "lucide-react";
import DescriptionContainer from "../components/DescriptionContainer";
import GradientHeading from "../components/GradientHeading";
import { personalDetails } from "../data";

function Projects() {
    return (
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-y-5 pt-28 pb-6">
            <GradientHeading heading="Projects" />
            <DescriptionContainer description="🌟 Explore my projects, where I put the tech stack I've learned into practice. From initial coding 💻 to smooth functionality 🧩 and final deployment 🚀, each project demonstrates my hands-on expertise and creativity 🎨." />
            <div className="flex flex-col gap-y-4">
                {personalDetails.projects.map((project) => (
                    <div
                        key={project.projectName}
                        className="flex flex-col gap-y-3 bg-card/70 border rounded-xl shadow p-4 sm:p-6"
                    >
                        <div className="text-2xl tracking-wider">
                            {project.projectName}
                        </div>
                        <div className="flex flex-wrap items-center gap-2.5">
                            {project.technologiesUsed.map((tech, index) => (
                                <div
                                    key={index}
                                    className={`text-xs text-primary-foreground ${
                                        index % 2 === 0
                                            ? "bg-yellow-500"
                                            : "bg-green-500"
                                    }  hover:bg-primary/80 rounded-full select-none transition-colors duration-300 px-3 py-1`}
                                >
                                    {tech}
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center gap-x-2.5">
                            <a href={project.projectGithub} target="_blank">
                                <div className="flex items-center gap-x-1.5 text-primary-foreground bg-purple-400 hover:bg-primary/80 border rounded-full transition-colors duration-300 px-3 py-1">
                                    <div className="text-sm tracking-widest">
                                        GitHub
                                    </div>
                                    <Github width={14} />
                                </div>
                            </a>
                            <a href={project.projectLink} target="_blank">
                                <div className="flex items-center gap-x-1.5 text-primary-foreground bg-sky-500 hover:bg-primary/80 border rounded-full transition-colors duration-300 px-3 py-1">
                                    <div className="text-sm tracking-widest">
                                        Preview
                                    </div>
                                    <MoveUpRight width={14} />
                                </div>
                            </a>
                        </div>
                        <div className="flex flex-col gap-y-1.5">
                            {project.projectDescription.map((desc, index) => (
                                <div
                                    key={index}
                                    className="text-sm text-justify"
                                >
                                    {desc}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Projects;

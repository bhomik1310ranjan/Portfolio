import { Download, MoveUpRight } from "lucide-react";

import { personalDetails } from "../data";
import GradientHeading from "../components/GradientHeading";
import DescriptionContainer from "../components/DescriptionContainer";
import avatar from "../assets/avatar.png";
import cLogo from "../assets/c-logo.png";
import cppLogo from "../assets/cpp-logo.png";
import javascriptLogo from "../assets/javascript-logo.png";
import typescriptLogo from "../assets/typescript-logo.png";
import htmlLogo from "../assets/html-logo.png";
import cssLogo from "../assets/css-logo.png";
import tailwindcssLogo from "../assets/tailwindcss-logo.png";
import shadcnLogo from "../assets/shadcn-logo.png";
import reactjsLogo from "../assets/reactjs-logo.png";
import rtkLogo from "../assets/rtk-logo.png";
import nodejsLogo from "../assets/nodejs-logo.png";
import expressjsLogo from "../assets/expressjs-logo.png";
import mongodbLogo from "../assets/mongodb-logo.png";
import mongooseLogo from "../assets/mongoose-logo.png";
import gitLogo from "../assets/git-logo.png";
import githubLogo from "../assets/github-logo.png";
import vercelLogo from "../assets/vercel-logo.png";
import renderLogo from "../assets/render-logo.png";
import postmanLogo from "../assets/postman-logo.png";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "../components/ui/tooltip";

function Home() {
    const techStack = [
        {
            category: "Programming Languages",
            technologies: [
                {
                    label: "C",
                    logo: cLogo,
                },
                {
                    label: "C++",
                    logo: cppLogo,
                },
                {
                    label: "JavaScript",
                    logo: javascriptLogo,
                },
                {
                    label: "TypeScript",
                    logo: typescriptLogo,
                },
            ],
        },
        {
            category: "Frontend Development",
            technologies: [
                {
                    category: "Frontend Development",
                    label: "HTML",
                    logo: htmlLogo,
                },
                {
                    category: "Frontend Development",
                    label: "CSS",
                    logo: cssLogo,
                },
                {
                    category: "Frontend Development",
                    label: "Tailwind CSS",
                    logo: tailwindcssLogo,
                },
                {
                    category: "Frontend Development",
                    label: "Shadcn UI",
                    logo: shadcnLogo,
                },
                {
                    category: "Frontend Development",
                    label: "React.js",
                    logo: reactjsLogo,
                },
                {
                    category: "Frontend Development",
                    label: "Redux Toolkit",
                    logo: rtkLogo,
                },
            ],
        },
        {
            category: "Backend Development",
            technologies: [
                {
                    category: "Backend Development",
                    label: "Node.js",
                    logo: nodejsLogo,
                },
                {
                    category: "Backend Development",
                    label: "Express.js",
                    logo: expressjsLogo,
                },
                {
                    category: "Backend Development",
                    label: "MongoDB",
                    logo: mongodbLogo,
                },
                {
                    category: "Backend Development",
                    label: "Mongoose ODM",
                    logo: mongooseLogo,
                },
            ],
        },
        {
            category: "Development Tools & Services",
            technologies: [
                {
                    category: "Development Tools & Services",
                    label: "Git",
                    logo: gitLogo,
                },
                {
                    category: "Development Tools & Services",
                    label: "GitHub",
                    logo: githubLogo,
                },
                {
                    category: "Development Tools & Services",
                    label: "Vercel",
                    logo: vercelLogo,
                },
                {
                    category: "Development Tools & Services",
                    label: "Render",
                    logo: renderLogo,
                },
                {
                    category: "Development Tools & Services",
                    label: "Postman",
                    logo: postmanLogo,
                },
            ],
        },
    ];

    return (
        <div className="w-11/12 max-w-7xl mx-auto pt-24">
            <div className="flex flex-col items-center gap-y-3 pb-12">
                <div>
                    <img src={avatar} className="w-56" alt="Avatar" />
                </div>
                <div className="flex items-center gap-x-1">
                    <span className="text-xl xsm:text-2xl tracking-wider">
                        Hello, I'm {personalDetails.firstName}
                    </span>
                    <span className="text-2xl xsm:text-3xl">👋</span>
                </div>
                <GradientHeading heading={personalDetails.role} />
                <DescriptionContainer description={personalDetails.briefBio} />
                <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                    <a href={`mailto:${personalDetails.email}`} target="_blank">
                        <button className="w-full flex justify-center items-center gap-x-2 border-2 border-gray-700 rounded-3xl px-6 py-2.5">
                            <span className="tracking-widest">
                                Get in Touch
                            </span>
                            <MoveUpRight width={18} />
                        </button>
                    </a>
                    <a href={personalDetails.resumeLink} target="_blank">
                        <button className="w-full text-background flex justify-center items-center gap-x-2 bg-gradient-to-tl from-pink-500 to-yellow-500 dark:from-teal-500 dark:to-teal-200 border-2 border-gray-700 rounded-3xl px-6 py-2.5">
                            <span className="tracking-widest">Resume</span>
                            <Download width={18} />
                        </button>
                    </a>
                </div>
            </div>
            <div className="flex flex-col items-center gap-y-3 py-6">
                <GradientHeading heading="Tech Stack" />
                <DescriptionContainer description="💻 This diverse tech stack equips me to handle both frontend 🎨 and backend 🛠️ development, ensuring seamless 🚀 and efficient ⚙️ web applications from start to finish! 🌟" />
                <div className="w-full sm:w-3/4 md:w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-4">
                    {techStack.map((category) => (
                        <div
                            key={category.category}
                            className="flex flex-col gap-y-4 bg-card/70 border rounded-xl shadow p-4 sm:p-6"
                        >
                            <div className="text-base xsm:text-xl text-center tracking-wider">
                                {category.category}
                            </div>
                            <div className="flex flex-wrap justify-evenly items-center gap-4">
                                {category.technologies.map((tech) => (
                                    <TooltipProvider key={tech.label}>
                                        <Tooltip>
                                            <TooltipTrigger asChild>
                                                <img
                                                    src={tech.logo}
                                                    alt={`${tech.label} logo`}
                                                    className="w-10 xsm:w-12"
                                                />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p className="text-sm">
                                                    {tech.label}
                                                </p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;

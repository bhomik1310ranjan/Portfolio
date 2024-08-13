import GradientHeading from "../components/GradientHeading";
import { personalDetails } from "../data";

function About() {
    return (
        <div className="w-11/12 max-w-7xl mx-auto flex flex-col items-center gap-y-5 pt-28 pb-6">
            <GradientHeading heading="About me" />
            <div className="flex flex-col gap-y-4">
                {personalDetails.detailedBio.map(
                    ({ heading, content }, index) => (
                        <div
                            key={index}
                            className="flex flex-col gap-y-2 bg-card/70 border rounded-xl shadow p-4 sm:p-6"
                        >
                            <div className="text-2xl tracking-wider">
                                {heading}
                            </div>
                            {Array.isArray(content) ? (
                                <div className="flex flex-col gap-y-1">
                                    {content.map((item, index) => (
                                        <div
                                            key={index}
                                            className="text-sm text-justify"
                                        >
                                            <span className="w-2 aspect-square inline-block bg-purple-400 rounded-full mb-[1px] mr-2.5"></span>
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div className="text-sm text-justify">
                                    {content}
                                </div>
                            )}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}

export default About;

import phoneLogo from "../assets/phone-logo.png";
import emailLogo from "../assets/email-logo.png";
import linkedinLogo from "../assets/linkedin-logo.png";
import githubLogo from "../assets/github-logo.png";
import leetcodeLogo from "../assets/leetcode-logo.png";
import { personalDetails } from "../data";

function Footer() {
    const links = [
        { url: `tel:${personalDetails.phoneNumber}`, icon: phoneLogo },
        { url: `mailto:${personalDetails.email}`, icon: emailLogo },
        { url: personalDetails.linkedinProfile, icon: linkedinLogo },
        { url: personalDetails.githubProfile, icon: githubLogo },
        { url: personalDetails.leetcodeProfile, icon: leetcodeLogo },
    ];

    return (
        <div className="w-11/12 max-w-7xl mx-auto py-6 flex justify-center items-center">
            <div className="flex items-center gap-x-4">
                {links.map((link, index) => (
                    <a href={link.url} key={index} target="_blank">
                        <img
                            src={link.icon}
                            className="w-7 hover:scale-110 transition-transform duration-300"
                        />
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Footer;

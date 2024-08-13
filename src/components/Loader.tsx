import { personalDetails } from "../data";

function Loader() {
    return (
        <div className="w-full h-screen overflow-hidden flex justify-center items-center">
            <div className="flex flex-col items-center">
                <div className="font-medium text-2xl tracking-wider">
                    {personalDetails.firstName} {personalDetails.lastName}
                </div>
                <div className="text-sm opacity-60">{personalDetails.role}</div>
            </div>
        </div>
    );
}

export default Loader;

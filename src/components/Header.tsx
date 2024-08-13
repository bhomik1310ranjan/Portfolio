import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { personalDetails } from "../data";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../components/ui/sheet";
import { Menu } from "lucide-react";

function Header() {
    const navigationLinks = [
        { url: "/about", label: "About" },
        { url: "/projects", label: "Projects" },
        { url: "/contact", label: "Contact" },
    ];

    const [sheetOpen, setSheetOpen] = useState<boolean>(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setSheetOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 z-10 bg-white/30 dark:bg-black/30 backdrop-blur-lg">
            <div className="w-11/12 max-w-7xl flex justify-between items-center gap-x-4 py-6 mx-auto">
                <Link to="/">
                    <div>
                        <div className="tracking-wider">
                            {personalDetails.firstName}{" "}
                            {personalDetails.lastName}
                        </div>
                        <div className="text-xs tracking-wider opacity-60">
                            {personalDetails.role}
                        </div>
                    </div>
                </Link>
                <div className="flex items-center gap-x-2 sm:gap-x-4">
                    <div className="hidden sm:flex items-center gap-x-4">
                        {navigationLinks.map((link, index) => (
                            <Link to={link.url} key={index}>
                                <Button
                                    variant="outline"
                                    className="font-normal text-xs md:text-sm"
                                >
                                    {link.label}
                                </Button>
                            </Link>
                        ))}
                    </div>
                    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
                        <SheetTrigger asChild className="sm:hidden">
                            <Button variant="outline" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="font-rubik overflow-y-auto">
                            <SheetHeader>
                                <SheetTitle asChild>
                                    <div>
                                        <div className="tracking-wider">
                                            {personalDetails.firstName}{" "}
                                            {personalDetails.lastName}
                                        </div>
                                        <div className="text-xs tracking-wider opacity-60">
                                            {personalDetails.role}
                                        </div>
                                    </div>
                                </SheetTitle>
                                <SheetDescription>
                                    {personalDetails.briefBio}
                                </SheetDescription>
                            </SheetHeader>
                            <div className="flex flex-col gap-y-2 mt-4">
                                {navigationLinks.unshift({
                                    url: "/",
                                    label: "Home",
                                }) &&
                                    navigationLinks.map((link, index) => (
                                        <Link to={link.url} key={index}>
                                            <Button
                                                variant="secondary"
                                                className="w-full"
                                                onClick={() =>
                                                    setSheetOpen(false)
                                                }
                                            >
                                                {link.label}
                                            </Button>
                                        </Link>
                                    ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                    <ModeToggle />
                </div>
            </div>
        </div>
    );
}

export default Header;

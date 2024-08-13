function GradientHeading({ heading }: { heading: string }) {
    return (
        <div className="font-medium text-2xl xsm:text-3xl sm:text-4xl text-center tracking-wider bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 dark:bg-gradient-to-l dark:from-blue-300 dark:to-teal-200 text-transparent">
            {heading}
        </div>
    );
}

export default GradientHeading;

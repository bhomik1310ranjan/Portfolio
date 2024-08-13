function DescriptionContainer({ description }: { description: string }) {
    return (
        <div className="w-full sm:w-3/4 max-w-3xl text-lg text-muted-foreground text-center">
            {description}
        </div>
    );
}

export default DescriptionContainer;

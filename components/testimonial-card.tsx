
const TestimonialCard = ({ description, children }: { description: string; children: React.ReactNode }) => {
    return (
        <div className="h-full flex flex-col relative group">
            <div className="h-full w-full relative">
                <p className="hidden">{description}</p>
                {children}
            </div>
        </div>
    );
}

export default TestimonialCard;
"use client"

interface EmptyState {
    title?: string;

}

const EmptyState: React.FC<EmptyState> = ({
    title= "Page not found",

}) => {
    return (
        <section className="bg-primary h-screen flex flex-col pt-50 items-center text-white">
            <h1 className="text-2xl">{title}</h1>

        </section>
    )
}

export default EmptyState
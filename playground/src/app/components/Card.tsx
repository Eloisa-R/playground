export default function Card({title, description, source}: {title: string; description: string; source: string}) {
    return (
        <article className="p-5 bg-[hsl(281deg_29%_73%)] rounded-md shadow-md">
            <h2 className="text-lg font-medium pb-6">{title}</h2>
            <p className="pb-6">{description}</p>
            <p className="text-sm">{source}</p>
        </article>
    )
}
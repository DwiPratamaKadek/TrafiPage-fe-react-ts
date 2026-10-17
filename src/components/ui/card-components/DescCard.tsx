
type DescCardProps = {
    title?: string, 
    desc?: string
}

export default function DescCard({title, desc} : DescCardProps){
    return(
        <section className="border rounded-xl border-gray-500">
            <div className="px-2 py-3">
                <h1 className="font-bold text-3xl">Title{title}</h1>
                <p>description{desc}</p>
            </div>
        </section>
    )
}
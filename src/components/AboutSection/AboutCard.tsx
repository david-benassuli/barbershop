export function AboutCard(props: {title: string, subtitle: string}) {
    return (
        <div>
            <h2 className="text-[2rem] text-secondary font-bodoni">{props.title}</h2>
            <h3 className="text-[0.8rem] text-low font-dmsans">{props.subtitle}</h3>
        </div>
    )
}
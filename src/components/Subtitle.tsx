export function Subtitle(props: {value: string}) {
    return <h2 className="text-white text-[clamp(2rem,5vw,5rem)] font-[--font-bodoni] leading-none">{props.value}</h2>
}
export function Subtitle(props: {value: string}) {
    return <h3 className="text-main text-[clamp(2rem,5vw,5rem)] font-[--font-bodoni] leading-none">{props.value}</h3>
}
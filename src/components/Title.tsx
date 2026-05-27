export function Title(props: {value: string, feature?: boolean}) {
    return <h2 className={`text-secondary font-dmsans tracking-[0.2em] text-[clamp(0.2rem,4vw,12px)]
    ${props.feature ? "relative pl-20 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-16 before:h-0.5 before:bg-secondary" : ""}
    `}>{props.value}</h2>
}
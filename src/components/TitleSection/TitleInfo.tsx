type TitleInfoType = {
    info: string,
    description: string
}

export function TitleInfo(props: TitleInfoType) {
    return (
        <div className="text-white">
            <h2 className="text-secondary text-2xl">{props.info}</h2>
            <p className="text-low text-sm">{props.description}</p>
        </div>
    )
}
export function Description(props: {value: string, widthBox?: number}) {
    return (
        <div className={`w-[${props.widthBox}px]`}>
            <p className="text-low text-[14px] font-dmsans">{props.value}</p>
        </div>
    )
}
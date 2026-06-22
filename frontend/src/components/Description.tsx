export function Description(props: {value: string, widthBox?: number}) {
    return (
        <div className={props.widthBox ? `w-[320px]` : ""}>
            <p className="text-low text-[14px] font-dmsans">{props.value}</p>
        </div>
    )
}
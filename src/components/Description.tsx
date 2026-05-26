export function Description(props: {value: string}) {
    return (
        <div className="w-[320px]">
            <p className="text-low text-[14px] font-dmsans">{props.value}</p>
        </div>
    )
}
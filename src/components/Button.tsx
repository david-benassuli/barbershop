export function Button(props: {title: string}) {
    return (
        <button className="bg-secondary/80 duration-200 hover:cursor-pointer px-5 py-2.5 text-sm hover:bg-secondary" type="button">{props.title}</button>
    )
}
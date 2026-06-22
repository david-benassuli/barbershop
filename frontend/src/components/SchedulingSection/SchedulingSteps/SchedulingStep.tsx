export function SchedulingStep(props: {step: number, title: string, active: boolean}) {
    return (
        <div className={`flex flex-row items-center p-3 gap-3 ${props.active ? 'bg-lowbg border-l border-l-secondary' : ''}`}>
            <h3 className={`p-3 h-10 w-10 flex items-center justify-center font-dmsans border ${props.active ? 'border-secondary text-main' : 'text-low border-low'}`}>{props.step}</h3>
            <p className={`font-dmsans ${props.active ? 'text-main ' : 'text-low'}`}>{props.title}</p>
        </div>
    )
}
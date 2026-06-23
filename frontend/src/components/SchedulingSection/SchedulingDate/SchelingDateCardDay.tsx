import { useScheduling } from "@/hook/UseScheduling"

type SchedulingDateCardDayType = {
    dayWeek: number,
    day: string,
    month: string,
    active: boolean
}

export function SchedulingDateCardDay(props: SchedulingDateCardDayType) {

    const {setScheduling} = useScheduling()

    const daysWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb']

    return (
        <div className={`flex flex-col w-15 gap-1 p-2 items-center border border-low/50 hover:cursor-pointer transition-colors duration-200 ${props.active ? 'border-secondary': 'hover:border-low'}`}
            onClick={() => setScheduling(prev => ({...prev, day: props.day, dayWeek: props.dayWeek, month: props.month, hour: ''}))}
        >
            <p className="font-dmsans text-low">{daysWeek[props.dayWeek]}</p>
            <p className={`font-bodoni text-2xl text-main transition-colors duration-200 ${props.active ? 'text-secondary' : 'text-low'}`}>{props.day}</p>
            <p className="font-dmsans text-low">{props.month}</p>
        </div>
    )
}
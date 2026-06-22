import { useScheduling } from "@/hook/UseScheduling"

import { SchedulingDateCardDay } from "./SchelingDateCardDay"
import { SchedulingDateCardHour } from "./SchedulingDateCardHour"

import { SchedulingButtons } from "../SchedulingButtons/SchedulingButtons"

import type { SchedulingSectionType } from "../SchedulingSection"

export function SchedulingDate(props: SchedulingSectionType) {

    const {scheduling} = useScheduling()

    const today = new Date()
    const dates = []

    const hours = ["09:00","09:30","10:00","10:30","11:00","11:30","14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00"]

    for (let i = 0; i < 14; i++) {
        const date = new Date(today)
        date.setDate(today.getDate() + i)
        if (date.getDay() !== 0) {
            dates.push({
                id: date.toISOString(),
                dayWeek: date.getDay(),
                day: date.getDate(),
                month: date.getMonth(),
            })
        }
    }

    return (
        <div className="flex flex-col gap-10">
            <h3 className="text-main text-[clamp(1rem,5vw,3rem)] font-[--font-bodoni] leading-none">Data & Horário</h3>
            <div className="flex flex-col items-start gap-5">
                <h4 className="text-low">SELECIONE A DATA</h4>
                <div className="flex flex-row flex-wrap gap-2">
                    {dates.map(item => <SchedulingDateCardDay key={item.id} dayWeek={item.dayWeek} day={item.day} month={item.month} active={item.day === scheduling.day}/>)}
                </div>
            </div>
            
            <div className="flex flex-col gap-5">
                <h4 className="text-low">SELECIONE O HORÁRIO</h4>
                <div className="grid grid-cols-5 gap-2">
                    {hours.map(item => <SchedulingDateCardHour key={item} hour={item} active={item === scheduling.hour} />)}
                </div>
            </div>

            <SchedulingButtons buttonBack step={props.step} disableCondition={! (scheduling.hour && scheduling.day)}/>
        </div>
    )
} 
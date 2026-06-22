'use client'

import { useContext } from "react";
import { SchedulingContext } from "@/context/SchedulingContext";

export function useScheduling() {
    const context = useContext(SchedulingContext)

    if (!context) throw new Error('os valores devem estar no provider')

    return context
}
"use client"

import { useState } from "react"
import { StardustButton } from "@/components/stardust-button"
import { CalModal } from "@/components/cal-modal"
import { ArrowRight } from "lucide-react"

export function ConsultationWrapper({ children }: { children?: React.ReactNode }) {
    const [isCalModalOpen, setIsCalModalOpen] = useState(false)

    return (
        <>
            <StardustButton onClick={() => setIsCalModalOpen(true)}>
                {children || <>Schedule Consultation <ArrowRight className="w-4 h-4 ml-2" /></>}
            </StardustButton>
            <CalModal isOpen={isCalModalOpen} onClose={() => setIsCalModalOpen(false)} />
        </>
    )
}

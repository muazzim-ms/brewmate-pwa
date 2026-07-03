import { useNavigate } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'

export default function Onboarding2() {
  const navigate = useNavigate()

  return (
    <ScreenShell>
      <div className="flex w-full flex-1 flex-col items-start justify-between">
        <div className="flex w-full flex-col items-start">
          <div className="flex h-[450px] w-full items-center justify-center p-6">
            <div className="size-[320px] shrink-0 rounded-full bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
          </div>
          <div className="flex w-full flex-col items-center gap-4 px-10 text-center">
            <p
              className="w-full font-heading text-[24px] font-bold leading-[1.2] text-text-primary"
              style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
            >
              Track Your Order in Real Time
            </p>
            <p className="w-full font-body text-[14px] font-normal leading-[1.4] text-text-secondary">
              Follow your brew from the grinder to your door with live map updates and delivery notifications.
            </p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start gap-8 px-8">
          <div className="flex w-full items-center justify-between">
            <div className="flex items-start gap-2">
              <div className="size-[8px] rounded-[4px] bg-loyalty-gold" />
              <div className="h-[8px] w-[24px] rounded-[4px] bg-brand-accent" />
              <div className="size-[8px] rounded-[4px] bg-loyalty-gold" />
            </div>
            <div className="flex items-center gap-6">
              <button
                type="button"
                onClick={() => navigate('/login')}
                className="font-body text-[12px] font-semibold text-text-placeholder"
              >
                Skip
              </button>
              <button
                type="button"
                onClick={() => navigate('/onboarding/3')}
                className="flex h-[56px] w-[100px] items-center justify-center gap-2 rounded-2xl bg-interactive-primary px-6"
              >
                <p className="font-body text-[16px] font-semibold text-white">Next</p>
                <ChevronRight size={18} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </ScreenShell>
  )
}

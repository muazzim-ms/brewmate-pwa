import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Coffee } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'

export default function Splash() {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => navigate('/onboarding/1'), 1500)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <ScreenShell bg="var(--color-interactive-primary)">
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigate('/onboarding/1')}
        className="relative flex size-full flex-col items-center justify-between overflow-hidden rounded-[40px]"
      >
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute size-full bg-gradient-to-br from-loyalty-gold/30 to-white/10" />
          <div
            className="absolute inset-0"
            style={{ backgroundImage: 'linear-gradient(245.1990350130642deg, rgba(44, 24, 16, 0.6) 25%, rgb(255, 251, 245) 70%)' }}
          />
        </div>

        <div className="flex flex-col items-center gap-4 pt-50">
          <div className="flex size-[80px] items-center justify-center rounded-2xl bg-interactive-primary">
            <Coffee size={48} className="text-white" />
          </div>
          <p
            className="font-heading text-[32px] font-bold leading-[1.1] text-text-primary"
            style={{ fontVariationSettings: '"opsz" 14, "wdth" 100' }}
          >
            BrewMate
          </p>
        </div>

        <div className="flex w-full flex-col items-start gap-3 p-16">
          <div className="flex h-[4px] w-full items-start overflow-hidden rounded-[2px] bg-loyalty-gold">
            <div className="h-full w-[120px] bg-interactive-primary" />
          </div>
        </div>
      </div>
    </ScreenShell>
  )
}

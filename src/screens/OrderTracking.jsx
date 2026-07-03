import { useNavigate } from 'react-router-dom'
import { ArrowLeft, Star, Phone, MessageCircle, CircleCheck, Truck, Circle } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import TabBar from '../components/TabBar.jsx'

export default function OrderTracking() {
  const navigate = useNavigate()

  return (
    <ScreenShell bg="var(--color-interactive-primary)">
      <div className="relative h-[320px] w-full shrink-0 bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10">
        <button
          type="button"
          onClick={() => navigate(-1)}
          aria-label="Go back"
          className="absolute left-6 top-6 flex size-[44px] items-center justify-center rounded-full bg-white/90"
        >
          <ArrowLeft size={20} className="text-text-primary" />
        </button>
      </div>

      <div className="-mt-8 flex flex-1 flex-col rounded-t-[32px] bg-canvas">
        <div className="flex items-start justify-center py-3">
          <div className="h-[4px] w-[40px] rounded-[2px] bg-border-subtle" />
        </div>

        <div className="flex flex-col gap-6 px-6 pb-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-[2px]">
              <p className="font-body text-[14px] font-normal text-text-secondary">ESTIMATED DELIVERY</p>
              <p className="font-heading text-[28px] font-bold text-text-primary">10:15 AM</p>
            </div>
            <div className="rounded-lg bg-brand-accent px-4 py-2">
              <p className="font-body text-[12px] font-bold text-white whitespace-nowrap">12 min left</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-[20px] bg-white p-3 drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)]">
            <div className="size-[48px] shrink-0 rounded-full bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
            <div className="flex flex-1 flex-col gap-[2px]">
              <p className="font-body text-[12px] font-bold text-text-primary">David K.</p>
              <div className="flex items-center gap-1">
                <Star size={12} className="fill-brand-accent text-brand-accent" />
                <p className="font-body text-[12px] font-normal text-text-secondary">4.9 (Courier)</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                aria-label="Call courier"
                className="flex size-[40px] items-center justify-center rounded-full bg-canvas"
              >
                <Phone size={18} className="text-text-primary" />
              </button>
              <button
                type="button"
                aria-label="Message courier"
                className="flex size-[40px] items-center justify-center rounded-full bg-canvas"
              >
                <MessageCircle size={18} className="text-text-primary" />
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <CircleCheck size={24} className="text-text-primary" />
              <p className="font-body text-[12px] font-semibold text-text-primary whitespace-nowrap">
                Preparing your brew...
              </p>
            </div>
            <div className="flex items-center gap-3">
              <Truck size={24} className="text-brand-accent" />
              <div className="flex flex-col gap-[2px] text-[12px]">
                <p className="font-body font-bold text-text-primary">On the way</p>
                <p className="font-body font-normal text-text-secondary">David is near the pick-up point</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Circle size={24} className="text-text-placeholder" />
              <p className="font-body text-[12px] font-semibold text-text-placeholder">Delivered</p>
            </div>
          </div>
        </div>
      </div>

      <TabBar active="orders" />
    </ScreenShell>
  )
}

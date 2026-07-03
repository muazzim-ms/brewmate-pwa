import { useNavigate } from 'react-router-dom'
import { Check } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'

export default function OrderConfirmation() {
  const navigate = useNavigate()

  return (
    <ScreenShell>
      <div className="flex flex-1 flex-col items-center justify-center gap-8 p-10">
        <div className="flex flex-col items-center gap-6 w-full">
          <div className="flex size-[120px] items-center justify-center rounded-full bg-interactive-primary">
            <Check size={48} className="text-white" />
          </div>
          <div className="flex flex-col items-center gap-2 w-full">
            <p className="font-heading text-[32px] font-bold text-text-primary">Order Placed!</p>
            <p className="font-body text-[16px] font-normal text-text-secondary text-center">
              Your order #BM-20418 has been confirmed and is being prepared.
            </p>
          </div>
          <div className="rounded-lg bg-brand-accent px-5 py-[10px]">
            <p className="font-body text-[12px] font-bold text-white whitespace-nowrap">ETA: 25–35 min</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 rounded-2xl bg-white p-5 drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)]">
          <p className="font-heading text-[16px] font-bold text-text-primary">Delivery to Home</p>
          <p className="font-body text-[14px] font-normal text-text-secondary">2 items · Paid via Visa •••• 4242</p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <button
            type="button"
            onClick={() => navigate('/order-tracking')}
            className="flex h-[56px] w-full items-center justify-center rounded-full bg-interactive-primary px-6"
          >
            <p className="font-body text-[16px] font-semibold text-white">Track My Order</p>
          </button>
          <button
            type="button"
            onClick={() => navigate('/home')}
            className="flex h-[56px] w-full items-center justify-center rounded-full"
          >
            <p className="font-body text-[12px] font-semibold text-text-placeholder">Back to Home</p>
          </button>
        </div>
      </div>
    </ScreenShell>
  )
}

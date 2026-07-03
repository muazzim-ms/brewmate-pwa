import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MapPin } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import { useCart } from '../context/CartContext.jsx'

const DELIVERY_FEE = 2.0

export default function Checkout() {
  const navigate = useNavigate()
  const { subtotal, count } = useCart()
  const [deliveryOption, setDeliveryOption] = useState('asap')
  const [instructions, setInstructions] = useState('')
  const total = subtotal + DELIVERY_FEE

  return (
    <ScreenShell>
      <Header title="Checkout" />
      <div className="flex flex-col gap-7 px-6 pb-8">
        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <p className="font-heading text-[18px] font-bold text-text-primary">Deliver To</p>
            <button type="button" onClick={() => navigate('/addresses')} className="font-body text-[14px] font-semibold text-text-link">
              Edit
            </button>
          </div>
          <div className="flex w-full items-center gap-3 rounded-xl bg-white p-4 drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)]">
            <div className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-brand-accent">
              <MapPin size={20} className="text-white" />
            </div>
            <div className="flex min-w-px flex-1 flex-col gap-[2px]">
              <p className="font-body text-[14px] font-bold text-text-primary">Home</p>
              <p className="font-body text-[13px] font-normal text-text-secondary">123 Jalan Example, Alor Setar, Kedah</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <p className="font-heading text-[18px] font-bold text-text-primary">Delivery Time</p>
          <div className="flex w-full items-start gap-3">
            <button
              type="button"
              onClick={() => setDeliveryOption('asap')}
              className={`rounded-2xl px-6 py-3 font-body text-[14px] font-semibold ${
                deliveryOption === 'asap' ? 'bg-brand-accent text-white' : 'border border-border-subtle bg-white text-text-primary'
              }`}
            >
              ASAP (25 min)
            </button>
            <button
              type="button"
              onClick={() => setDeliveryOption('schedule')}
              className={`rounded-2xl px-6 py-3 font-body text-[14px] font-semibold ${
                deliveryOption === 'schedule' ? 'bg-brand-accent text-white' : 'border border-border-subtle bg-white text-text-primary'
              }`}
            >
              Schedule
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <div className="flex w-full items-center justify-between">
            <p className="font-heading text-[18px] font-bold text-text-primary">Order Summary</p>
            <button type="button" onClick={() => navigate('/cart')} className="font-body text-[14px] font-semibold text-text-link">
              View List
            </button>
          </div>
          <div className="flex w-full flex-col gap-2 rounded-xl bg-white p-4 text-[14px] drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)]">
            <div className="flex w-full items-start justify-between">
              <p className="font-body font-normal text-text-secondary">Subtotal ({count} items)</p>
              <p className="font-body font-semibold text-text-primary">RM {subtotal.toFixed(2)}</p>
            </div>
            <div className="flex w-full items-start justify-between">
              <p className="font-body font-normal text-text-secondary">Delivery Fee</p>
              <p className="font-body font-semibold text-text-primary">RM {DELIVERY_FEE.toFixed(2)}</p>
            </div>
            <div className="h-px w-full bg-border-subtle" />
            <div className="flex w-full items-start justify-between">
              <p className="font-body font-bold text-text-primary">Total</p>
              <p className="font-body font-bold text-brand-accent">RM {total.toFixed(2)}</p>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3">
          <p className="font-heading text-[18px] font-bold text-text-primary">Special Instructions</p>
          <textarea
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
            placeholder="Leave at the door, please..."
            className="h-[100px] w-full resize-none rounded-xl border border-border-subtle bg-white p-4 font-body text-[14px] font-normal text-text-primary placeholder:text-text-placeholder"
          />
        </div>

        <div className="flex w-full items-start pt-1">
          <button
            type="button"
            onClick={() => navigate('/payment')}
            className="flex h-[56px] flex-1 items-center justify-center rounded-full bg-brand-accent px-6"
          >
            <p className="font-body text-[16px] font-semibold text-white">Continue to Payment</p>
          </button>
        </div>
      </div>
    </ScreenShell>
  )
}

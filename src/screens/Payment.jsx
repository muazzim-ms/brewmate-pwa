import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircleX, CreditCard, Circle, CircleCheck, Plus, ShieldCheck } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import { useCart } from '../context/CartContext.jsx'

const DELIVERY_FEE = 2.0

const PAYMENT_METHODS = [
  { id: 'fpx', label: 'FPX (Online Banking)', sub: 'Pay via your bank account', icon: CircleX },
  { id: 'card', label: 'Credit / Debit Card', sub: 'Visa, Mastercard', icon: CreditCard },
  { id: 'tng', label: "Touch 'n Go eWallet", sub: "Malaysia's #1 eWallet", badge: 'TNG', badgeColor: '#14b8a6' },
  { id: 'grabpay', label: 'GrabPay', sub: 'Pay with GrabPay', badge: 'GP', badgeColor: '#ff5f2d' },
  { id: 'boost', label: 'Boost', sub: 'Boost eWallet', badge: 'B', badgeColor: '#ff9f0a' },
]

export default function Payment() {
  const navigate = useNavigate()
  const { subtotal, clearCart } = useCart()
  const [selected, setSelected] = useState('card')
  const total = subtotal + DELIVERY_FEE

  const handlePlaceOrder = () => {
    clearCart()
    navigate('/order-confirmation')
  }

  return (
    <ScreenShell>
      <div className="flex flex-1 flex-col">
        <Header title="Payment" />
        <div className="flex w-full flex-col gap-6 px-6">
          <div className="flex w-full items-center justify-between">
            <p className="font-heading text-[18px] font-bold text-text-primary">Select Payment Method</p>
          </div>

          <div className="flex w-full flex-col gap-3">
            {PAYMENT_METHODS.map((method) => {
              const isSelected = selected === method.id
              const Icon = method.icon
              return (
                <button
                  key={method.id}
                  type="button"
                  onClick={() => setSelected(method.id)}
                  className={`flex w-full items-center gap-3 rounded-xl border bg-white p-4 text-left ${
                    isSelected ? 'border-brand-accent drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)]' : 'border-border-subtle'
                  }`}
                >
                  {Icon ? (
                    <Icon size={24} className="text-text-primary" />
                  ) : (
                    <div
                      className="flex size-[24px] shrink-0 items-center justify-center rounded-lg"
                      style={{ background: method.badgeColor }}
                    >
                      <p className="font-body text-[12px] font-extrabold text-white">{method.badge}</p>
                    </div>
                  )}
                  <div className="flex min-w-px flex-1 flex-col gap-[2px] text-[12px]">
                    <p className="w-full font-body font-semibold text-text-primary">{method.label}</p>
                    <p className="w-full font-body font-normal text-text-placeholder">{method.sub}</p>
                  </div>
                  {isSelected ? (
                    <CircleCheck size={20} className="shrink-0 fill-brand-accent text-white" />
                  ) : (
                    <Circle size={20} className="shrink-0 text-border-subtle" />
                  )}
                </button>
              )
            })}
            <button
              type="button"
              className="flex w-full items-center gap-3 rounded-xl border border-dashed border-border-subtle p-4"
            >
              <Plus size={24} className="text-text-primary" />
              <p className="font-body text-[12px] font-semibold text-text-primary">Add New Card</p>
            </button>
          </div>

          <div className="h-px w-full bg-border-subtle" />

          <div className="flex w-full items-start justify-between font-heading text-[20px] font-bold">
            <p className="text-text-primary">Order Total</p>
            <p className="text-brand-accent">RM {total.toFixed(2)}</p>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-4 p-6">
        <button
          type="button"
          onClick={handlePlaceOrder}
          className="flex h-[56px] w-full items-center justify-center rounded-full bg-brand-accent px-6"
        >
          <p className="font-body text-[16px] font-semibold text-white">Place Order - RM {total.toFixed(2)}</p>
        </button>
        <div className="flex w-full items-center justify-center gap-[6px]">
          <ShieldCheck size={14} className="text-text-placeholder" />
          <p className="font-body text-[12px] font-normal text-text-placeholder">Secured by SSL Encryption</p>
        </div>
      </div>
    </ScreenShell>
  )
}

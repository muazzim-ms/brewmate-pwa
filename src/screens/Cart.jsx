import { useNavigate } from 'react-router-dom'
import { X, Minus, Plus, ShoppingBag } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import { useCart } from '../context/CartContext.jsx'

const DELIVERY_FEE = 2.5
const SERVICE_FEE = 1.2

export default function Cart() {
  const navigate = useNavigate()
  const { items, updateQty, removeItem, subtotal } = useCart()
  const total = subtotal + DELIVERY_FEE + SERVICE_FEE

  if (items.length === 0) {
    return (
      <ScreenShell>
        <Header title="Cart" />
        <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
          <div className="flex size-[80px] items-center justify-center rounded-full bg-surface-muted">
            <ShoppingBag size={32} className="text-text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-heading text-[18px] font-bold text-text-primary">Your cart is empty</p>
            <p className="font-body text-[13px] text-text-secondary">Looks like you haven't added anything yet.</p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/menu')}
            className="rounded-full bg-brand-accent px-6 py-[14px] font-body text-[14px] font-semibold text-white"
          >
            Browse Menu
          </button>
        </div>
      </ScreenShell>
    )
  }

  return (
    <ScreenShell>
      <Header title="Cart" />
      <div className="flex flex-1 flex-col gap-4 px-6 pb-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex w-full items-start gap-4 rounded-[20px] bg-white p-3 drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)]"
          >
            <img
              src="/images/cart-item.png"
              alt={item.name}
              className="size-[80px] shrink-0 rounded-lg object-cover"
            />
            <div className="flex min-w-px flex-1 flex-col gap-2">
              <div className="flex w-full items-start justify-between">
                <div className="flex w-[130px] flex-col gap-[2px]">
                  <p className="overflow-hidden text-ellipsis whitespace-nowrap font-heading text-[16px] font-bold text-text-primary">
                    {item.name}
                  </p>
                  <p className="font-body text-[12px] font-normal text-text-secondary">{item.tags?.[0] ?? item.category}</p>
                </div>
                <button type="button" onClick={() => removeItem(item.id)} aria-label={`Remove ${item.name}`}>
                  <X size={20} className="text-text-placeholder" />
                </button>
              </div>
              <div className="flex w-full items-center justify-between">
                <p className="font-body text-[16px] font-bold text-text-primary">RM {item.price.toFixed(2)}</p>
                <div className="flex h-[36px] items-center gap-3 rounded-full bg-canvas px-3">
                  <button type="button" onClick={() => updateQty(item.id, item.qty - 1)} aria-label="Decrease quantity">
                    <Minus size={14} className="text-text-primary" />
                  </button>
                  <p className="font-body text-[12px] font-bold text-text-primary">{item.qty}</p>
                  <button type="button" onClick={() => updateQty(item.id, item.qty + 1)} aria-label="Increase quantity">
                    <Plus size={14} className="text-text-primary" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="h-px w-full bg-border-subtle" />

        <div className="flex w-full flex-col gap-3">
          <p className="font-heading text-[18px] font-bold text-text-primary">Promo Code</p>
          <div className="flex w-full items-center gap-3">
            <div className="flex h-[52px] flex-1 items-center rounded-full border border-border-subtle bg-white px-4">
              <p className="font-body text-[12px] font-normal text-text-placeholder">Enter code...</p>
            </div>
            <button
              type="button"
              className="flex h-[52px] shrink-0 items-center justify-center rounded-full bg-interactive-primary px-5"
            >
              <p className="font-body text-[12px] font-semibold text-white">Apply</p>
            </button>
          </div>
        </div>

        <div className="flex w-full flex-col gap-3 rounded-2xl bg-interactive-primary p-5">
          <div className="flex w-full items-center justify-between text-[14px]">
            <p className="font-body font-normal text-loyalty-gold">Subtotal</p>
            <p className="font-body font-semibold text-white">RM {subtotal.toFixed(2)}</p>
          </div>
          <div className="flex w-full items-center justify-between text-[14px]">
            <p className="font-body font-normal text-loyalty-gold">Delivery Fee</p>
            <p className="font-body font-semibold text-white">RM {DELIVERY_FEE.toFixed(2)}</p>
          </div>
          <div className="flex w-full items-center justify-between text-[14px]">
            <p className="font-body font-normal text-loyalty-gold">Service Fee</p>
            <p className="font-body font-semibold text-white">RM {SERVICE_FEE.toFixed(2)}</p>
          </div>
          <div className="h-px w-full bg-white/10" />
          <div className="flex w-full items-center justify-between font-heading text-[18px] font-bold">
            <p className="text-white">Total</p>
            <p className="text-brand-accent">RM {total.toFixed(2)}</p>
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate('/checkout')}
          className="flex h-[56px] w-full items-center justify-center rounded-full bg-brand-accent px-6"
        >
          <p className="font-body text-[16px] font-semibold text-white">Proceed to Checkout</p>
        </button>
      </div>
    </ScreenShell>
  )
}

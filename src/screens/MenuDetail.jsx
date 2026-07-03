import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Heart, Star, Minus, Plus, Share2 } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import { findMenuItem } from '../data/menu.js'
import { useCart } from '../context/CartContext.jsx'
import { useFavorites } from '../context/FavoritesContext.jsx'

const SIZES = ['Small', 'Medium', 'Large']
const MILK_TYPES = ['Whole', 'Skim', 'Oat', 'Almond']

export default function MenuDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const item = findMenuItem(id)
  const { addItem } = useCart()
  const { isFavorite, toggleFavorite } = useFavorites()
  const [qty, setQty] = useState(1)
  const [size, setSize] = useState('Medium')
  const [milk, setMilk] = useState('Oat')

  const favorite = isFavorite(item.id)

  const handleAddToCart = () => {
    addItem(item, qty)
    navigate('/cart')
  }

  return (
    <ScreenShell>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="relative h-[400px] w-full shrink-0">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/30 to-interactive-primary/20" />
          <div className="absolute inset-0 bg-black/10" />
          <div className="absolute inset-x-0 top-0">
            <Header
              onBack={() => navigate(-1)}
              right={
                <button
                  type="button"
                  className="flex size-[44px] items-center justify-center rounded-full bg-white/80 backdrop-blur-[5px]"
                  aria-label="Share"
                >
                  <Share2 size={20} className="text-text-primary" />
                </button>
              }
            />
          </div>
        </div>

        <div className="-mt-10 flex flex-col gap-6 rounded-t-[32px] bg-canvas p-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-heading text-[24px] font-bold text-text-primary">{item.name}</p>
              <button
                type="button"
                onClick={() => toggleFavorite(item.id)}
                aria-label={favorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Heart size={24} className={favorite ? 'fill-brand-accent text-brand-accent' : 'text-text-primary'} />
              </button>
            </div>
            <div className="flex items-center gap-1">
              <Star size={16} className="fill-brand-accent text-brand-accent" />
              <p className="font-body text-[14px] font-bold text-text-primary">{item.rating}</p>
              <p className="font-body text-[14px] text-text-placeholder">(120+ reviews)</p>
            </div>
            <p className="font-body text-[14px] leading-[1.4] text-text-secondary">{item.description}</p>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-body text-[12px] font-bold text-text-primary">SIZE</p>
            <div className="flex w-full gap-3">
              {SIZES.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={`flex h-[48px] flex-1 items-center justify-center rounded-lg border border-border-subtle font-body text-[12px] font-semibold ${
                    size === s ? 'bg-interactive-primary text-white' : 'bg-white text-text-primary'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="font-body text-[12px] font-bold text-text-primary">MILK TYPE</p>
            <div className="flex flex-wrap gap-3">
              {MILK_TYPES.map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMilk(m)}
                  className={`rounded-full border border-border-subtle px-4 py-2 font-body text-[14px] font-semibold ${
                    milk === m ? 'bg-interactive-primary text-white' : 'bg-white text-text-primary'
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="sticky bottom-0 w-full shrink-0 border-t border-border-subtle bg-white">
        <div className="flex items-center gap-5 p-6">
          <div className="flex h-[56px] items-center gap-4 rounded-full bg-canvas px-4">
            <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease quantity">
              <Minus size={20} className="text-text-primary" />
            </button>
            <p className="font-body text-[18px] font-bold text-text-primary">{qty}</p>
            <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase quantity">
              <Plus size={20} className="text-text-primary" />
            </button>
          </div>
          <button
            type="button"
            onClick={handleAddToCart}
            className="flex h-[56px] flex-1 items-center justify-center rounded-full bg-interactive-primary"
          >
            <p className="font-body text-[16px] font-semibold text-white">
              Add to Cart — RM {(item.price * qty).toFixed(2)}
            </p>
          </button>
        </div>
        <div style={{ height: 'env(safe-area-inset-bottom)' }} />
      </div>
    </ScreenShell>
  )
}

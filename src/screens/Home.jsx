import { useNavigate } from 'react-router-dom'
import { MapPin, Search, ShoppingBag, Bean, Star, Coffee, Cookie, CircleX, WineOff, Wrench, Shirt } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import TabBar from '../components/TabBar.jsx'
import { menuItems, categories } from '../data/menu.js'
import { useCart } from '../context/CartContext.jsx'

const CATEGORY_ICONS = { Coffee, Cookie, Bean, Leaf: CircleX, CupSoda: WineOff, Wrench, Shirt }

export default function Home() {
  const navigate = useNavigate()
  const { count } = useCart()
  const featured = menuItems.slice(0, 2)

  return (
    <ScreenShell>
      <div className="flex h-[60px] items-center justify-between px-6">
        <div className="flex items-center gap-1 rounded-xl bg-interactive-primary px-3 py-2">
          <MapPin size={14} className="text-white" />
          <p className="font-body text-[12px] font-medium text-white">Alor Setar, Kedah ▾</p>
        </div>
        <div className="flex items-start gap-4">
          <button type="button" onClick={() => navigate('/search')} aria-label="Search">
            <Search size={24} className="text-text-primary" />
          </button>
          <button type="button" onClick={() => navigate('/cart')} className="relative flex size-[24px] items-start" aria-label="Cart">
            <ShoppingBag size={24} className="text-text-primary" />
            {count > 0 && (
              <span className="absolute -top-1 left-[14px] flex size-[16px] items-center justify-center rounded-md bg-brand-accent font-mono-ui text-[9px] font-extrabold text-white">
                {count}
              </span>
            )}
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-8 pt-3 pb-6">
        <div className="flex items-start px-6">
          <div className="relative flex h-[160px] flex-1 flex-col justify-between overflow-hidden rounded-2xl bg-interactive-primary p-6">
            <div className="absolute left-[180px] top-0 size-[200px] rounded-full bg-brand-accent opacity-10" />
            <div className="flex flex-col gap-1">
              <p className="font-heading text-[24px] font-bold text-white">Good Morning, Alex ☕</p>
              <p className="font-body text-[14px] text-loyalty-gold">It's a perfect day for a Flat White.</p>
            </div>
            <button
              type="button"
              onClick={() => navigate('/profile')}
              className="flex items-center gap-2 self-start rounded-lg bg-brand-accent px-3 py-2"
            >
              <Bean size={16} className="text-white" />
              <p className="font-body text-[12px] font-bold text-white">480 Beans</p>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between px-6">
            <p className="font-heading text-[20px] font-bold text-text-primary">Featured Picks</p>
            <button type="button" onClick={() => navigate('/menu')} className="font-body text-[12px] font-medium text-text-link">
              View All
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto px-6">
            {featured.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => navigate(`/menu/${item.id}`)}
                className="flex w-[240px] shrink-0 flex-col gap-3 rounded-2xl bg-white p-2 text-left"
              >
                <div className="h-[160px] w-full rounded-xl bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
                <div className="flex w-full flex-col gap-1">
                  <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-body text-[16px] font-bold text-text-primary">
                    {item.name}
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <p className="font-body text-[12px] font-extrabold text-brand-accent">RM {item.price.toFixed(2)}</p>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="fill-brand-accent text-brand-accent" />
                      <p className="font-mono-ui text-[12px] font-bold text-text-primary">{item.rating}</p>
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 px-6">
          <p className="font-heading text-[20px] font-bold text-text-primary">Categories</p>
          <div className="flex gap-4 overflow-x-auto pb-1">
            {categories.map((cat) => {
              const Icon = CATEGORY_ICONS[cat.icon] ?? Coffee
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => navigate(`/menu?category=${cat.id}`)}
                  className="flex w-[60px] shrink-0 flex-col items-center gap-2"
                >
                  <div className="flex size-[60px] items-center justify-center rounded-full bg-white">
                    <Icon size={28} className="text-text-primary" />
                  </div>
                  <p className="text-center font-body text-[11px] font-semibold text-text-primary">{cat.name}</p>
                </button>
              )
            })}
          </div>
        </div>
      </div>

      <TabBar active="home" />
    </ScreenShell>
  )
}

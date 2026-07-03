import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { Star, Plus, SlidersHorizontal, ChevronDown } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import TabBar from '../components/TabBar.jsx'
import { menuItems, categories } from '../data/menu.js'
import { useCart } from '../context/CartContext.jsx'

export default function MenuList() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const { addItem } = useCart()
  const [activeCategory, setActiveCategory] = useState(searchParams.get('category') ?? 'all')

  const filtered =
    activeCategory === 'all' ? menuItems : menuItems.filter((item) => item.category === activeCategory)

  return (
    <ScreenShell>
      <Header title="Menu" />

      <div className="flex shrink-0 gap-2 overflow-x-auto px-6 pb-3">
        <button
          type="button"
          onClick={() => setActiveCategory('all')}
          className={`shrink-0 rounded-full border border-border-subtle px-5 py-[10px] font-body text-[14px] font-semibold ${
            activeCategory === 'all' ? 'bg-interactive-primary text-white' : 'bg-white text-text-primary'
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setActiveCategory(cat.id)}
            className={`shrink-0 rounded-full border border-border-subtle px-5 py-[10px] font-body text-[14px] font-semibold ${
              activeCategory === cat.id ? 'bg-interactive-primary text-white' : 'bg-white text-text-primary'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="flex h-[48px] shrink-0 items-center justify-between border-y border-border-subtle px-6">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-text-secondary" />
          <p className="font-body text-[12px] font-medium text-text-secondary">Filters</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="font-body text-[12px] font-medium text-text-secondary">Recommended</p>
          <ChevronDown size={18} className="text-text-secondary" />
        </div>
      </div>

      <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            role="button"
            tabIndex={0}
            onClick={() => navigate(`/menu/${item.id}`)}
            onKeyDown={(e) => e.key === 'Enter' && navigate(`/menu/${item.id}`)}
            className="flex h-[120px] w-full items-center gap-4 rounded-2xl bg-white p-2 text-left"
          >
            <div className="size-[104px] shrink-0 rounded-xl bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
            <div className="flex min-w-0 flex-1 flex-col gap-1">
              <p className="font-body text-[12px] font-medium text-brand-accent">
                {categories.find((c) => c.id === item.category)?.name ?? item.category}
              </p>
              <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-heading text-[18px] font-bold text-text-primary">
                {item.name}
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star size={14} className="fill-brand-accent text-brand-accent" />
                  <p className="font-mono-ui text-[14px] font-bold text-text-primary">{item.rating}</p>
                </div>
                <p className="font-body text-[16px] font-extrabold text-text-primary">RM {item.price.toFixed(2)}</p>
              </div>
            </div>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation()
                addItem(item, 1)
              }}
              className="flex size-[40px] shrink-0 items-center justify-center rounded-full bg-interactive-primary"
              aria-label={`Add ${item.name} to cart`}
            >
              <Plus size={20} className="text-white" />
            </button>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="py-10 text-center font-body text-[14px] text-text-placeholder">No items in this category.</p>
        )}
      </div>

      <TabBar active="home" />
    </ScreenShell>
  )
}

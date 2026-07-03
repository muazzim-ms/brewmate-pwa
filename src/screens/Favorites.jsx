import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Heart, Star, Coffee, ShoppingBag } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import TabBar from '../components/TabBar.jsx'
import { menuItems } from '../data/menu.js'
import { useFavorites } from '../context/FavoritesContext.jsx'
import { useCart } from '../context/CartContext.jsx'

const TABS = [
  { key: 'items', label: 'Items' },
  { key: 'cafes', label: 'Cafés' },
]

function EmptyState({ icon: Icon, title, description, cta }) {
  return (
    <div className="flex h-[500px] w-full flex-1 flex-col items-center justify-center gap-6 p-20">
      <div className="flex size-[140px] items-center justify-center rounded-full bg-loyalty-gold opacity-10">
        <Icon size={60} className="text-text-primary" />
      </div>
      <div className="flex flex-col items-center gap-2 whitespace-nowrap [word-break:break-word]">
        <p className="font-heading text-[20px] font-bold leading-[1.2] text-text-primary">{title}</p>
        <p className="whitespace-normal text-center font-body text-[16px] font-normal leading-[1.5] text-text-secondary">
          {description}
        </p>
      </div>
      {cta}
    </div>
  )
}

export default function Favorites() {
  const navigate = useNavigate()
  const { favoriteIds, toggleFavorite } = useFavorites()
  const { addItem } = useCart()
  const [tab, setTab] = useState('items')

  const favoriteItems = menuItems.filter((item) => favoriteIds.has(item.id))

  return (
    <ScreenShell>
      <Header title="My Favorites" />

      <div className="flex shrink-0 px-6 pb-4">
        <div className="flex w-full items-center rounded-full bg-surface-muted p-1">
          {TABS.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`flex-1 rounded-full py-2 font-body text-[14px] font-semibold ${
                tab === key ? 'bg-white text-text-primary shadow-sm' : 'text-text-secondary'
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {tab === 'cafes' ? (
        <EmptyState
          icon={Coffee}
          title="No favorite cafés yet"
          description="Cafés you save will show up here."
        />
      ) : favoriteItems.length === 0 ? (
        <EmptyState
          icon={Coffee}
          title="No favorites yet"
          description="Find and save your favorite drinks and treats."
          cta={
            <button
              type="button"
              onClick={() => navigate('/menu')}
              className="flex items-start rounded-2xl bg-interactive-primary px-8 py-3"
            >
              <p className="font-body text-[16px] font-semibold leading-[1.5] text-white whitespace-nowrap [word-break:break-word]">
                Browse Menu
              </p>
            </button>
          }
        />
      ) : (
        <div className="flex flex-1 flex-col gap-4 overflow-y-auto p-6 pt-0">
          <div className="grid w-full grid-cols-2 gap-4">
            {favoriteItems.map((item) => (
              <div
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => navigate(`/menu/${item.id}`)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') navigate(`/menu/${item.id}`)
                }}
                className="relative flex cursor-pointer flex-col items-start gap-2 rounded-[20px] bg-white p-2 text-left"
              >
                <div className="h-[150px] w-full shrink-0 rounded-[14px] bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
                <button
                  type="button"
                  aria-label={`Remove ${item.name} from favorites`}
                  onClick={(event) => {
                    event.stopPropagation()
                    toggleFavorite(item.id)
                  }}
                  className="absolute right-3 top-3 flex size-[32px] items-center justify-center rounded-xl bg-[rgba(255,255,255,0.8)]"
                >
                  <Heart size={18} className="fill-brand-accent text-brand-accent" />
                </button>
                <div className="flex w-full flex-col items-start gap-2 px-1 pb-1">
                  <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap font-body text-[14px] font-bold leading-[1.3] text-text-primary">
                    {item.name}
                  </p>
                  <div className="flex w-full items-center justify-between">
                    <p className="font-body text-[14px] font-extrabold leading-[1.3] text-brand-accent whitespace-nowrap [word-break:break-word]">
                      RM {item.price.toFixed(2)}
                    </p>
                    <div className="flex items-center gap-1">
                      <Star size={12} className="fill-brand-accent text-brand-accent" />
                      <p className="font-body text-[12px] font-bold leading-[1.3] text-text-primary whitespace-nowrap [word-break:break-word]">
                        {item.rating}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={(event) => {
                      event.stopPropagation()
                      addItem(item, 1)
                    }}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-interactive-primary py-2"
                    aria-label={`Add ${item.name} to cart`}
                  >
                    <ShoppingBag size={14} className="text-white" />
                    <p className="font-body text-[13px] font-semibold text-white">Add to Cart</p>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <TabBar active="profile" />
    </ScreenShell>
  )
}

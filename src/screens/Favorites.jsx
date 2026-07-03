import { useNavigate } from 'react-router-dom'
import { Heart, Star, Coffee } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'
import { menuItems } from '../data/menu.js'
import { useFavorites } from '../context/FavoritesContext.jsx'

export default function Favorites() {
  const navigate = useNavigate()
  const { favoriteIds, toggleFavorite } = useFavorites()

  const favoriteItems = menuItems.filter((item) => favoriteIds.has(item.id))

  if (favoriteIds.size === 0) {
    return (
      <ScreenShell>
        <Header title="Favorites" />
        <div className="flex h-[500px] w-full flex-1 flex-col items-center justify-center gap-6 p-20">
          <div className="flex size-[140px] items-center justify-center rounded-full bg-loyalty-gold opacity-10">
            <Coffee size={60} className="text-text-primary" />
          </div>
          <div className="flex flex-col items-center gap-2 whitespace-nowrap [word-break:break-word]">
            <p className="font-heading text-[20px] font-bold leading-[1.2] text-text-primary">No favorites yet</p>
            <p className="whitespace-normal text-center font-body text-[16px] font-normal leading-[1.5] text-text-secondary">
              Find and save your favorite drinks and treats.
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigate('/menu')}
            className="flex items-start rounded-2xl bg-interactive-primary px-8 py-3"
          >
            <p className="font-body text-[16px] font-semibold leading-[1.5] text-white whitespace-nowrap [word-break:break-word]">
              Browse Menu
            </p>
          </button>
        </div>
      </ScreenShell>
    )
  }

  return (
    <ScreenShell>
      <Header title="Favorites" />
      <div className="flex flex-1 flex-col gap-4 p-6">
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
              <div className="flex w-full flex-col items-start gap-1 px-1 pb-1">
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </ScreenShell>
  )
}

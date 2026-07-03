import { Home, Search, Coffee, User } from 'lucide-react'
import { useNavigate, useLocation } from 'react-router-dom'

const TABS = [
  { key: 'home', path: '/home', icon: Home },
  { key: 'search', path: '/search', icon: Search },
  { key: 'orders', path: '/orders', icon: Coffee },
  { key: 'profile', path: '/profile', icon: User },
]

export default function TabBar({ active }) {
  const navigate = useNavigate()
  const location = useLocation()
  const activeKey = active ?? TABS.find((t) => location.pathname.startsWith(t.path))?.key

  return (
    <div className="sticky bottom-0 w-full border-t border-border-subtle bg-white">
      <div className="flex h-[64px] items-center justify-between px-6">
        {TABS.map(({ key, path, icon: Icon }) => {
          const isActive = key === activeKey
          return (
            <button
              key={key}
              type="button"
              onClick={() => navigate(path)}
              className="flex w-[60px] flex-col items-center gap-1"
            >
              <Icon size={24} strokeWidth={2} className={isActive ? 'text-text-primary' : 'text-text-placeholder'} />
              {isActive && <span className="size-[4px] rounded-[2px] bg-brand-accent" />}
            </button>
          )
        })}
      </div>
      <div style={{ height: 'env(safe-area-inset-bottom)' }} />
    </div>
  )
}

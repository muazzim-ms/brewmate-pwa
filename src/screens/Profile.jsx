import { useNavigate } from 'react-router-dom'
import { Bean, MapPin, Heart, Bell, Settings, Clock, LogOut, ChevronRight } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import TabBar from '../components/TabBar.jsx'

const MENU_ROWS = [
  { key: 'addresses', label: 'Addresses', icon: MapPin, path: '/addresses' },
  { key: 'favorites', label: 'Favorites', icon: Heart, path: '/favorites' },
  { key: 'notifications', label: 'Notifications', icon: Bell, path: '/notifications' },
  { key: 'settings', label: 'Settings', icon: Settings, path: '/settings' },
  { key: 'order-history', label: 'Order History', icon: Clock, path: '/orders' },
]

export default function Profile() {
  const navigate = useNavigate()

  return (
    <ScreenShell>
      <div className="flex flex-1 flex-col items-start">
        <div className="flex w-full flex-col items-center gap-4 pb-8 pt-6">
          <div className="flex size-[100px] items-start rounded-full border-2 border-solid border-border-strong p-1">
            <div className="size-full flex-[1_0_0] rounded-full bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
          </div>
          <div className="flex flex-col items-center gap-1 whitespace-nowrap [word-break:break-word]">
            <p className="font-heading text-[24px] font-bold leading-[1.2] text-text-primary">Alex Tan</p>
            <p className="font-body text-[16px] font-normal leading-[1.5] text-text-secondary">alex.tan@email.com</p>
          </div>
          <div className="flex items-start rounded-[20px] bg-interactive-primary px-5 py-2">
            <p className="font-body text-[14px] font-semibold leading-[1.3] text-white [word-break:break-word]">
              Edit Profile
            </p>
          </div>
        </div>

        <div className="flex w-full items-start px-6 pb-8">
          <div className="relative flex flex-[1_0_0] flex-col gap-5 overflow-clip rounded-2xl bg-interactive-primary p-6">
            <div className="absolute left-60 -top-10 size-[180px] rounded-full bg-brand-accent opacity-15" />
            <div className="flex w-full items-center justify-between">
              <div className="flex flex-col items-start gap-[2px] whitespace-nowrap [word-break:break-word]">
                <p className="font-body text-[12px] font-normal uppercase leading-[1.3] text-loyalty-gold">
                  BrewMate Rewards
                </p>
                <p className="font-heading text-[24px] font-bold leading-[1.2] text-white">Gold Member</p>
              </div>
              <div className="flex items-center gap-[6px]">
                <Bean size={20} className="text-loyalty-gold" />
                <p className="font-heading text-[20px] font-bold leading-[1.2] text-white whitespace-nowrap [word-break:break-word]">
                  340
                </p>
              </div>
            </div>
            <div className="flex w-full flex-col items-start gap-3">
              <div className="flex h-[8px] w-full items-start rounded-[4px] bg-[rgba(255,255,255,0.13)]">
                <div className="h-full w-[240px] shrink-0 rounded-[4px] bg-brand-accent" />
              </div>
              <p className="font-body text-[12px] font-normal leading-[1.3] text-loyalty-gold whitespace-nowrap [word-break:break-word]">
                160 beans to next reward
              </p>
            </div>
          </div>
        </div>

        <div className="flex w-full gap-4 px-6 pb-8 whitespace-nowrap [word-break:break-word]">
          <div className="flex flex-[1_0_0] flex-col items-center gap-1 rounded-[20px] bg-white p-4">
            <p className="font-heading text-[18px] font-bold leading-[1.2] text-text-primary">24</p>
            <p className="font-body text-[12px] font-normal leading-[1.3] text-text-secondary">Orders</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col items-center gap-1 rounded-[20px] bg-white p-4">
            <p className="font-heading text-[18px] font-bold leading-[1.2] text-text-primary">12</p>
            <p className="font-body text-[12px] font-normal leading-[1.3] text-text-secondary">Favorites</p>
          </div>
          <div className="flex flex-[1_0_0] flex-col items-center gap-1 rounded-[20px] bg-white p-4">
            <p className="font-heading text-[18px] font-bold leading-[1.2] text-text-primary">8</p>
            <p className="font-body text-[12px] font-normal leading-[1.3] text-text-secondary">Reviews</p>
          </div>
        </div>

        <div className="flex w-full flex-col items-start px-6">
          {MENU_ROWS.map(({ key, label, icon: Icon, path }) => (
            <button
              key={key}
              type="button"
              onClick={() => navigate(path)}
              className="flex w-full items-center gap-4 border-b border-solid border-border-subtle py-4 text-left"
            >
              <Icon size={24} className="shrink-0 text-text-primary" />
              <p className="font-body min-w-px flex-[1_0_0] text-[16px] font-semibold leading-[1.5] text-text-primary">
                {label}
              </p>
              <ChevronRight size={16} className="shrink-0 text-text-primary" />
            </button>
          ))}
          <button
            type="button"
            onClick={() => navigate('/login')}
            className="flex w-full items-center gap-4 border-b border-solid border-border-subtle py-4 text-left"
          >
            <LogOut size={24} className="shrink-0 text-status-error" />
            <p className="font-body min-w-px flex-[1_0_0] text-[16px] font-semibold leading-[1.5] text-status-error">
              Log Out
            </p>
          </button>
        </div>
      </div>

      <TabBar active="profile" />
    </ScreenShell>
  )
}

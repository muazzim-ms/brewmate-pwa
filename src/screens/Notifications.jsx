import { useState } from 'react'
import { ArrowLeft, Truck, Tag, Clock, Bell } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import ScreenShell from '../components/ScreenShell.jsx'
import TabBar from '../components/TabBar.jsx'

const FILTERS = [
  { key: 'all', label: 'All' },
  { key: 'orders', label: 'Orders' },
  { key: 'promotions', label: 'Promotions' },
  { key: 'reminders', label: 'Reminders' },
]

const ICONS = { orders: Truck, promotions: Tag, reminders: Clock, account: Bell }

const CATEGORY_STYLE = {
  orders: { bg: 'bg-loyalty-gold/10', text: 'text-loyalty-gold' },
  promotions: { bg: 'bg-brand-accent/10', text: 'text-brand-accent' },
  reminders: { bg: 'bg-interactive-primary/10', text: 'text-text-primary' },
  account: { bg: 'bg-interactive-primary/10', text: 'text-text-primary' },
}

const INITIAL_NOTIFICATIONS = [
  {
    id: 1,
    group: 'Today',
    category: 'orders',
    icon: 'orders',
    title: 'Your order is on the way!',
    body: 'Rider is heading to Westlands Commercial Center.',
    time: '10:24 AM',
    unread: true,
  },
  {
    id: 2,
    group: 'Today',
    category: 'promotions',
    icon: 'promotions',
    title: '2-for-1 Cold Brew today only',
    body: 'Grab a mate and visit BrewMate Riverside.',
    time: '09:00 AM',
    unread: true,
  },
  {
    id: 3,
    group: 'Yesterday',
    category: 'reminders',
    icon: 'reminders',
    title: "Don't forget your morning coffee ☕",
    body: 'Reorder your regular Oat Milk Latte.',
    time: '07:30 AM',
    unread: false,
  },
  {
    id: 4,
    group: 'Yesterday',
    category: 'promotions',
    icon: 'promotions',
    title: '20% off this weekend',
    body: 'Treat yourself at any BrewMate outlet.',
    time: '04:15 PM',
    unread: false,
  },
  {
    id: 5,
    group: 'Yesterday',
    category: 'orders',
    icon: 'account',
    title: 'Your Beans balance was updated',
    body: 'You earned 30 Beans from your last order.',
    time: '11:02 AM',
    unread: false,
  },
]

const GROUPS = ['Today', 'Yesterday']

export default function Notifications() {
  const navigate = useNavigate()
  const [notifications, setNotifications] = useState(INITIAL_NOTIFICATIONS)
  const [activeFilter, setActiveFilter] = useState('all')

  const markAllRead = () => setNotifications((list) => list.map((n) => ({ ...n, unread: false })))
  const markRead = (id) => setNotifications((list) => list.map((n) => (n.id === id ? { ...n, unread: false } : n)))

  const filtered = activeFilter === 'all' ? notifications : notifications.filter((n) => n.category === activeFilter)

  return (
    <ScreenShell>
      <div className="flex h-[60px] shrink-0 items-center gap-3 px-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="flex size-[36px] shrink-0 items-center justify-center rounded-full bg-surface-muted"
          aria-label="Go back"
        >
          <ArrowLeft size={18} className="text-text-primary" />
        </button>
        <p className="font-heading text-[20px] font-bold text-text-primary">Notifications</p>
        <button type="button" onClick={markAllRead} className="ml-auto whitespace-nowrap font-body text-[14px] font-semibold text-brand-accent">
          Mark all as read
        </button>
      </div>

      <div className="flex gap-2 overflow-x-auto px-6 py-3">
        {FILTERS.map((f) => {
          const isActive = f.key === activeFilter
          return (
            <button
              key={f.key}
              type="button"
              onClick={() => setActiveFilter(f.key)}
              className={`shrink-0 whitespace-nowrap rounded-[20px] px-4 py-2 font-body text-[12px] font-semibold ${
                isActive ? 'bg-interactive-primary text-white' : 'border border-border-subtle bg-white text-text-primary'
              }`}
            >
              {f.label}
            </button>
          )
        })}
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6 pt-0">
        {GROUPS.map((group) => {
          const items = filtered.filter((n) => n.group === group)
          if (items.length === 0) return null
          return (
            <div key={group} className="flex w-full flex-col gap-4">
              <p className="font-body text-[11px] font-semibold uppercase text-text-secondary">{group}</p>
              {items.map((n) => {
                const Icon = ICONS[n.icon]
                const style = CATEGORY_STYLE[n.icon]
                return (
                  <button
                    key={n.id}
                    type="button"
                    onClick={() => markRead(n.id)}
                    className={`flex w-full items-start gap-4 rounded-[20px] bg-white p-4 text-left drop-shadow-[0px_4px_6px_rgba(0,0,0,0.03)] ${
                      n.unread ? '' : 'opacity-70'
                    }`}
                  >
                    <div className={`flex size-[40px] shrink-0 items-center justify-center rounded-lg ${style.bg}`}>
                      <Icon size={20} className={style.text} />
                    </div>
                    <div className="flex flex-1 flex-col gap-1">
                      <div className="flex items-start justify-between gap-2">
                        <p className="flex-1 font-body text-[14px] font-bold text-text-primary">{n.title}</p>
                        {n.unread && <span className="mt-1 size-[8px] shrink-0 rounded-full bg-brand-accent" />}
                      </div>
                      <p className="font-body text-[12px] text-text-secondary">{n.body}</p>
                      <p className="font-body text-[10px] font-semibold text-text-placeholder">{n.time}</p>
                    </div>
                  </button>
                )
              })}
            </div>
          )
        })}
      </div>

      <TabBar active="profile" />
    </ScreenShell>
  )
}

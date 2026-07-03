import { useNavigate } from 'react-router-dom'
import ScreenShell from '../components/ScreenShell.jsx'
import TabBar from '../components/TabBar.jsx'

const FILTERS = ['All', 'Active', 'Completed', 'Cancelled']

const ORDERS = [
  { id: 1, date: 'Oct 24, 2024', summary: '2 items · RM 14.50', status: 'Delivered' },
  { id: 2, date: 'Oct 20, 2024', summary: '1 item · RM 6.00', status: 'Delivered' },
  { id: 3, date: 'Oct 15, 2024', summary: '3 items · RM 18.20', status: 'Delivered' },
  { id: 4, date: 'Oct 10, 2024', summary: '2 items · RM 11.00', status: 'Cancelled' },
]

const STATUS_STYLES = {
  Delivered: 'bg-status-success/10 text-status-success',
  Cancelled: 'bg-status-error/10 text-status-error',
}

export default function OrderHistory() {
  const navigate = useNavigate()

  return (
    <ScreenShell>
      <div className="flex h-[60px] shrink-0 items-center justify-between px-6 pb-3">
        <div className="size-[44px]" />
        <p className="font-heading text-[20px] font-bold text-text-primary">Order History</p>
        <div className="size-[44px]" />
      </div>

      <div className="flex flex-1 flex-col">
        <div className="flex items-start gap-4 overflow-x-auto px-6 pb-5">
          {FILTERS.map((filter) => (
            <div key={filter} className="flex flex-col items-center gap-2">
              <p
                className={`font-body text-[14px] whitespace-nowrap ${
                  filter === 'All' ? 'font-bold text-text-primary' : 'font-medium text-text-placeholder'
                }`}
              >
                {filter}
              </p>
              {filter === 'All' && <div className="h-[4px] w-[12px] rounded-[2px] bg-brand-accent" />}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 px-6">
          {ORDERS.map((order) => (
            <div
              key={order.id}
              className="flex w-full flex-col gap-4 rounded-2xl bg-white p-4 drop-shadow-[0px_4px_6px_rgba(0,0,0,0.04)]"
            >
              <button
                type="button"
                onClick={() => navigate('/order-tracking')}
                className="flex w-full items-center justify-between text-left"
              >
                <div className="flex items-center gap-3">
                  <div className="size-[48px] shrink-0 rounded-lg bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
                  <div className="flex flex-col gap-[2px]">
                    <p className="font-body text-[12px] font-bold text-text-primary">{order.date}</p>
                    <p className="font-body text-[13px] font-normal text-text-secondary">{order.summary}</p>
                  </div>
                </div>
                <div className={`shrink-0 rounded-md px-3 py-[6px] ${STATUS_STYLES[order.status]}`}>
                  <p className="font-body text-[12px] font-bold whitespace-nowrap">{order.status}</p>
                </div>
              </button>
              <div className="flex w-full items-start gap-2">
                <button
                  type="button"
                  onClick={(e) => e.stopPropagation()}
                  className="flex h-[44px] flex-1 items-center justify-center rounded-full border border-border-subtle bg-white"
                >
                  <p className="font-body text-[14px] font-semibold text-text-primary">Reorder</p>
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate('/rating')
                  }}
                  className="flex h-[44px] flex-1 items-center justify-center rounded-full bg-canvas"
                >
                  <p className="font-body text-[14px] font-semibold text-text-secondary">Rate</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <TabBar active="orders" />
    </ScreenShell>
  )
}

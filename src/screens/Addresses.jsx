import { useState } from 'react'
import { Plus, Home, Briefcase, Edit2, Trash2, PlusCircle, MapPin } from 'lucide-react'
import ScreenShell from '../components/ScreenShell.jsx'
import Header from '../components/Header.jsx'

const INITIAL_ADDRESSES = [
  {
    id: 'home',
    label: 'Home',
    description: 'Riverside Drive, Apartment 4B, Nairobi',
    icon: Home,
  },
  {
    id: 'work',
    label: 'Work',
    description: 'Westlands Commercial Center, 12th Floor',
    icon: Briefcase,
  },
]

export default function Addresses() {
  const [addresses, setAddresses] = useState(INITIAL_ADDRESSES)

  const handleAdd = () => {
    setAddresses((prev) => [
      ...prev,
      {
        id: `address-${prev.length + 1}-${Date.now()}`,
        label: 'New Address',
        description: 'Tap edit to add details',
        icon: MapPin,
      },
    ])
  }

  const handleDelete = (id) => {
    setAddresses((prev) => prev.filter((address) => address.id !== id))
  }

  return (
    <ScreenShell>
      <Header title="Addresses" />

      <div className="flex flex-1 flex-col items-start gap-6 p-6">
        <button
          type="button"
          onClick={handleAdd}
          className="flex w-full items-center gap-4 rounded-[20px] border border-dashed border-border-strong bg-white p-5 text-left"
        >
          <div className="flex size-[40px] items-center justify-center rounded-lg bg-loyalty-gold opacity-10">
            <Plus size={20} className="text-text-primary" />
          </div>
          <p className="font-body text-[16px] font-semibold leading-[1.5] text-text-primary whitespace-nowrap [word-break:break-word]">
            Add New Address
          </p>
        </button>

        {addresses.map(({ id, label, description, icon: Icon }) => (
          <div
            key={id}
            className="flex w-full flex-col items-start gap-4 rounded-2xl bg-white p-4 drop-shadow-[0px_4px_6px_rgba(0,0,0,0.03)]"
          >
            <div className="flex w-full items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-[40px] items-center justify-center rounded-lg bg-interactive-primary">
                  <Icon size={20} className="text-white" />
                </div>
                <div className="flex flex-col items-start gap-[2px] [word-break:break-word]">
                  <p className="font-heading text-[18px] font-bold leading-[1.2] text-text-primary whitespace-nowrap">
                    {label}
                  </p>
                  <p className="w-[180px] font-body text-[12px] font-normal leading-[1.3] text-text-secondary">
                    {description}
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <button
                  type="button"
                  aria-label={`Edit ${label}`}
                  className="flex size-[32px] items-center justify-center rounded-md bg-canvas"
                >
                  <Edit2 size={16} className="text-text-primary" />
                </button>
                <button
                  type="button"
                  aria-label={`Delete ${label}`}
                  onClick={() => handleDelete(id)}
                  className="flex size-[32px] items-center justify-center rounded-md bg-canvas"
                >
                  <Trash2 size={16} className="text-text-primary" />
                </button>
              </div>
            </div>
            <div className="h-[120px] w-full shrink-0 rounded-lg bg-gradient-to-br from-brand-accent/25 to-interactive-primary/10" />
          </div>
        ))}

        <div className="flex w-full items-center gap-3 p-4 opacity-60">
          <PlusCircle size={20} className="text-text-secondary" />
          <p className="font-body text-[14px] font-medium leading-[1.3] text-text-secondary whitespace-nowrap [word-break:break-word]">
            Add 'Gym' or 'Other'
          </p>
        </div>
      </div>
    </ScreenShell>
  )
}

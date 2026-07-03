import { ChevronRight } from 'lucide-react'

export default function MenuRow({ icon: Icon, label, onClick, variant = 'default', showChevron = true }) {
  const tone = variant === 'danger' ? 'text-status-error' : 'text-text-primary'

  return (
    <button
      type="button"
      onClick={onClick}
      className="flex w-full items-center gap-4 border-b border-solid border-border-subtle py-4 text-left last:border-b-0"
    >
      <Icon size={24} className={`shrink-0 ${tone}`} />
      <p className={`font-body min-w-px flex-[1_0_0] text-[16px] font-semibold leading-[1.5] ${tone}`}>{label}</p>
      {showChevron && <ChevronRight size={16} className={`shrink-0 ${tone}`} />}
    </button>
  )
}

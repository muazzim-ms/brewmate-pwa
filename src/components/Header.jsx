import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function Header({ title, onBack, right = null }) {
  const navigate = useNavigate()
  return (
    <div className="flex h-[60px] shrink-0 items-center justify-between px-[24px]">
      <button
        type="button"
        onClick={onBack ?? (() => navigate(-1))}
        className="flex size-[36px] items-center justify-center rounded-full bg-surface-muted"
        aria-label="Go back"
      >
        <ArrowLeft size={18} className="text-text-primary" />
      </button>
      {title && (
        <p className="font-heading text-[16px] font-bold text-text-primary">{title}</p>
      )}
      <div className="flex size-[36px] items-center justify-center">{right}</div>
    </div>
  )
}

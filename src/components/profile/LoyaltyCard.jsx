import { Bean } from 'lucide-react'

export default function LoyaltyCard({ programName, tierName, beans, beansToNextReward, beansPerReward }) {
  const progress = beansPerReward > 0 ? Math.min(1, Math.max(0, beans / beansPerReward)) : 0

  return (
    <div className="relative flex w-full flex-col gap-5 overflow-clip rounded-2xl bg-interactive-primary p-6">
      <div className="absolute left-60 -top-10 size-[180px] rounded-full bg-brand-accent opacity-15" />
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col items-start gap-[2px] whitespace-nowrap [word-break:break-word]">
          <p className="font-body text-[12px] font-normal uppercase leading-[1.3] text-loyalty-gold">
            {programName}
          </p>
          <p className="font-heading text-[24px] font-bold leading-[1.2] text-white">{tierName}</p>
        </div>
        <div className="flex items-center gap-[6px]">
          <Bean size={20} className="text-loyalty-gold" />
          <p className="font-heading text-[20px] font-bold leading-[1.2] text-white whitespace-nowrap [word-break:break-word]">
            {beans}
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-3">
        <div
          className="h-[8px] w-full overflow-hidden rounded-[4px] bg-[rgba(255,255,255,0.13)]"
          role="progressbar"
          aria-valuenow={Math.round(progress * 100)}
          aria-valuemin={0}
          aria-valuemax={100}
        >
          <div className="h-full rounded-[4px] bg-brand-accent" style={{ width: `${progress * 100}%` }} />
        </div>
        <p className="font-body text-[12px] font-normal leading-[1.3] text-loyalty-gold whitespace-nowrap [word-break:break-word]">
          {beansToNextReward} beans to next reward
        </p>
      </div>
    </div>
  )
}

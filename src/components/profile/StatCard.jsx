export default function StatCard({ value, label }) {
  return (
    <div className="flex flex-1 flex-col items-center gap-1 rounded-[20px] bg-white p-4">
      <p className="font-heading text-[18px] font-bold leading-[1.2] text-text-primary">{value}</p>
      <p className="font-body text-[12px] font-normal leading-[1.3] text-text-secondary whitespace-nowrap">{label}</p>
    </div>
  )
}

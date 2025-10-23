export default function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="p-3 rounded bg-white border border-gold/30 shadow-sm">
      <div className="text-[11px] uppercase tracking-wide text-navy/60">{label}</div>
      <div className="font-heading text-xl">{value}</div>
    </div>
  )
}

export function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null
  return (
    <div className="bg-slate-900 text-slate-100 rounded-lg px-3.5 py-2.5 text-xs shadow-xl">
      <p className="font-semibold text-white mb-1">{label}</p>
      {payload.map(p => (
        <p key={p.name} style={{ color: p.color }}>
          {p.name}:{' '}
          <strong>
            {typeof p.value === 'number' && p.value > 999
              ? `$${(p.value / 1000).toFixed(1)}k`
              : p.value.toLocaleString()}
          </strong>
        </p>
      ))}
    </div>
  )
}

import { Badge } from '@/components/ui/badge'

const variantMap = {
  active:   'bg-emerald-100 text-emerald-700 hover:bg-emerald-100',
  warning:  'bg-yellow-100  text-yellow-700  hover:bg-yellow-100',
  inactive: 'bg-slate-100   text-slate-500   hover:bg-slate-100',
}

/**
 * Reusable status badge for integration rows.
 * @param {'active'|'warning'|'inactive'} status
 */
export function StatusBadge({ status }) {
  const s = status.toLowerCase()
  return (
    <Badge
      variant="secondary"
      className={`text-[11px] font-semibold capitalize ${variantMap[s] ?? variantMap.inactive}`}
    >
      {status}
    </Badge>
  )
}

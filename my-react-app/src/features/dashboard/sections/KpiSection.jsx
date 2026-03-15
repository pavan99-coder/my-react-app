import { KpiCard } from '@/components/KpiCard'
import { KPI_METRICS } from '../data/dashboardData'

export function KpiSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {KPI_METRICS.map(m => <KpiCard key={m.label} {...m} />)}
    </div>
  )
}

import { SalesOverviewChart } from './SalesOverviewChart'
import { SubscriberGrowthChart } from './SubscriberGrowthChart'

export function ChartsSection() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <SalesOverviewChart />
      <SubscriberGrowthChart />
    </div>
  )
}

import { KpiSection } from './sections/KpiSection'
import { ChartsSection } from './sections/ChartsSection'
import { SalesDistributionSection } from './sections/SalesDistributionSection'

export function DashboardPage() {
  return (
    <>
      <KpiSection />
      <ChartsSection />
      <SalesDistributionSection />
    </>
  )
}

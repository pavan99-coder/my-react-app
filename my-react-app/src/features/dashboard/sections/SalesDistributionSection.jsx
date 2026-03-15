import { useState } from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts'
import { ChartCard } from '@/components/ChartCard'
import { IntegrationsTable } from '@/components/IntegrationsTable'
import { Button } from '@/components/ui/button'
import { DonutLabel } from '@/components/charts/DonutLabel'
import { AddIntegrationModal } from '../components/AddIntegrationModal'
import { donutData, integrations as initialIntegrations } from '../data/dashboardData'

export function SalesDistributionSection() {
  const [integrations, setIntegrations] = useState(initialIntegrations)
  const [modalOpen, setModalOpen] = useState(false)

  function handleAdd(newIntegration) {
    setIntegrations(prev => [...prev, newIntegration])
  }

  return (
    <>
      {modalOpen && (
        <AddIntegrationModal onAdd={handleAdd} onClose={() => setModalOpen(false)} />
      )}

      <div className="grid grid-cols-2 gap-4">
        <ChartCard title="Sales Distribution" subtitle="Revenue by plan tier">
          <div className="relative flex justify-center">
            <ResponsiveContainer width="100%" height={210}>
              <PieChart>
                <Pie data={donutData} cx="50%" cy="50%" innerRadius={62} outerRadius={98}
                  paddingAngle={3} dataKey="value" labelLine={false} label={DonutLabel}
                  animationBegin={200} animationDuration={1000}>
                  {donutData.map(entry => (
                    <Cell key={entry.name} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={v => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
              <p className="text-lg font-bold leading-tight">$284k</p>
              <p className="text-xs text-muted-foreground">Total</p>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-2 mt-4">
            {donutData.map(d => (
              <li key={d.name} className="flex items-center gap-2 text-sm">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ background: d.color }} />
                <span className="text-muted-foreground flex-1 text-xs">{d.name}</span>
                <span className="font-semibold text-xs">{d.value}%</span>
              </li>
            ))}
          </ul>
        </ChartCard>

        <ChartCard
          title="Integrations"
          subtitle="Connected data sources"
          action={
            <Button
              variant="outline" size="sm"
              className="text-indigo-600 border-indigo-200 hover:bg-indigo-50 text-xs h-8"
              onClick={() => setModalOpen(true)}
            >
              + Add new
            </Button>
          }
        >
          <IntegrationsTable integrations={integrations} />
        </ChartCard>
      </div>
    </>
  )
}

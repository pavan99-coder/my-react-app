import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { ChartCard } from '@/components/ChartCard'
import { ChartTooltip } from '@/components/charts/ChartTooltip'
import { subscriberData } from '../data/dashboardData'

export function SubscriberGrowthChart() {
  return (
    <ChartCard title="Subscriber Growth" subtitle="New vs Churned" badge="Net +2,190"
      badgeClass="bg-cyan-50 text-cyan-700 hover:bg-cyan-50">
      <ResponsiveContainer width="100%" height={250}>
        <BarChart data={subscriberData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }} barGap={4}>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" vertical={false} />
          <XAxis dataKey="month" tick={{ fill: '#94A3B8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94A3B8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <Tooltip content={<ChartTooltip />} />
          <Bar dataKey="new"     name="New"     fill="#6366F1" radius={[4, 4, 0, 0]} animationDuration={1200} />
          <Bar dataKey="churned" name="Churned" fill="#FDA4AF" radius={[4, 4, 0, 0]} animationDuration={1400} />
        </BarChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

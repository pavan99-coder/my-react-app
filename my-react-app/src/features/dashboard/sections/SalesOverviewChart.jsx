import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts'
import { ChartCard } from '@/components/ChartCard'
import { ChartTooltip } from '@/components/charts/ChartTooltip'
import { salesData } from '../data/dashboardData'

export function SalesOverviewChart() {
  return (
    <ChartCard title="Sales Overview" subtitle="Revenue vs Target" badge="+18.2%"
      badgeClass="bg-indigo-50 text-indigo-600 hover:bg-indigo-50">
      <ResponsiveContainer width="100%" height={250}>
        <AreaChart data={salesData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="gRevenue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#6366F1" stopOpacity={0.22} />
              <stop offset="95%" stopColor="#6366F1" stopOpacity={0}    />
            </linearGradient>
            <linearGradient id="gTarget" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%"  stopColor="#06B6D4" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}    />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#F1F5F9" />
          <XAxis dataKey="month" tick={{ fill: '#94A3B8', fontSize: 12 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#94A3B8', fontSize: 12 }} axisLine={false} tickLine={false}
            tickFormatter={v => `$${v / 1000}k`} />
          <Tooltip content={<ChartTooltip />} />
          <Area type="monotone" dataKey="revenue" name="Revenue" stroke="#6366F1" strokeWidth={2.5}
            fill="url(#gRevenue)" dot={false} activeDot={{ r: 5 }} animationDuration={1200} />
          <Area type="monotone" dataKey="target"  name="Target"  stroke="#06B6D4" strokeWidth={2}
            strokeDasharray="5 4" fill="url(#gTarget)" dot={false} activeDot={{ r: 4 }} animationDuration={1400} />
        </AreaChart>
      </ResponsiveContainer>
    </ChartCard>
  )
}

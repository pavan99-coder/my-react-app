import { TrendingUp, TrendingDown } from 'lucide-react'
import { AreaChart, Area, ResponsiveContainer } from 'recharts'
import { Card, CardContent } from '@/components/ui/card'

export function KpiCard({ label, value, change, positive, icon: Icon, accentColor, sparkline }) {
  const gradientId = `spark-${accentColor.replace('#', '')}`

  return (
    <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md py-0 gap-0">
      <CardContent className="pt-4 pb-3">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: accentColor + '1a', color: accentColor }}
          >
            <Icon size={17} />
          </div>
        </div>

        <p className="text-2xl font-bold tracking-tight text-foreground mb-1">{value}</p>

        <div className={`flex items-center gap-1 text-xs font-medium ${positive ? 'text-emerald-600' : 'text-rose-500'}`}>
          {positive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
          <span>{change} vs last period</span>
        </div>
      </CardContent>

      {sparkline && (
        <div className="h-[50px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={sparkline} margin={{ top: 4, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor={accentColor} stopOpacity={0.2} />
                  <stop offset="95%" stopColor={accentColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="v"
                stroke={accentColor}
                strokeWidth={1.5}
                fill={`url(#${gradientId})`}
                dot={false}
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      )}
    </Card>
  )
}

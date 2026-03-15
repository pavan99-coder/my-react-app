import { TrendingUp, TrendingDown } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

/**
 * Reusable KPI metric card.
 * @param {string}  label       - Metric label
 * @param {string}  value       - Display value (e.g. "$284,500")
 * @param {string}  change      - Change text (e.g. "+12.4%")
 * @param {boolean} positive    - Green if true, red if false
 * @param {React.ElementType} icon - Lucide icon component
 * @param {string}  accentColor - Hex color for icon background tint
 */
export function KpiCard({ label, value, change, positive, icon: Icon, accentColor }) {
  return (
    <Card className="transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <CardContent className="pt-5 pb-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-muted-foreground">{label}</span>
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: accentColor + '1a', color: accentColor }}
          >
            <Icon size={17} />
          </div>
        </div>

        <p className="text-2xl font-bold tracking-tight text-foreground mb-2">{value}</p>

        <div className={`flex items-center gap-1 text-xs font-medium ${positive ? 'text-emerald-600' : 'text-rose-500'}`}>
          {positive
            ? <TrendingUp size={13} />
            : <TrendingDown size={13} />
          }
          <span>{change} vs last period</span>
        </div>
      </CardContent>
    </Card>
  )
}

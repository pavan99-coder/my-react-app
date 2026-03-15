import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

/**
 * Reusable chart wrapper card.
 * @param {string}       title     - Card title
 * @param {string}       subtitle  - Optional subtitle / description
 * @param {string}       badge     - Optional badge text
 * @param {string}       badgeClass - Extra className on the badge
 * @param {React.ReactNode} action - Optional action slot (button, etc.)
 * @param {React.ReactNode} children - Chart or content
 */
export function ChartCard({ title, subtitle, badge, badgeClass = '', action, children }) {
  return (
    <Card className="transition-all duration-200 hover:shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <CardTitle className="text-[15px] font-semibold">{title}</CardTitle>
            {subtitle && (
              <CardDescription className="text-xs mt-0.5">{subtitle}</CardDescription>
            )}
          </div>
          {badge && (
            <Badge variant="secondary" className={`shrink-0 ${badgeClass}`}>
              {badge}
            </Badge>
          )}
          {action && <div className="shrink-0">{action}</div>}
        </div>
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}

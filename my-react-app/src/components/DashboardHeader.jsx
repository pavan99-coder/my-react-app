import { CalendarDays, Bell, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

const DATE_RANGES = ['Last 7 days', 'Last 30 days', 'Last 90 days', 'This year']

/**
 * Reusable dashboard top header.
 * @param {string}   title        - Page title
 * @param {string}   subtitle     - Sub-caption text
 * @param {string}   dateRange    - Currently selected range
 * @param {Function} onDateChange - Called with new range string
 */
export function DashboardHeader({ title, subtitle, dateRange, onDateChange }) {
  return (
    <header className="h-[72px] bg-card border-b border-border flex items-center justify-between px-7 sticky top-0 z-10">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-lg font-bold leading-tight">{title}</h1>
        {subtitle && <p className="text-xs text-muted-foreground">{subtitle}</p>}
      </div>

      <div className="flex items-center gap-2">
        {/* Date filter dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="gap-2 font-medium text-sm h-9">
              <CalendarDays size={14} className="text-muted-foreground" />
              {dateRange}
              <ChevronDown size={13} className="text-muted-foreground" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-44">
            {DATE_RANGES.map(range => (
              <DropdownMenuItem
                key={range}
                onSelect={() => onDateChange(range)}
                className={`text-sm cursor-pointer ${range === dateRange ? 'text-indigo-600 font-medium bg-indigo-50' : ''}`}
              >
                {range}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Notifications */}
        <Button variant="outline" size="icon" className="h-9 w-9">
          <Bell size={15} />
        </Button>
      </div>
    </header>
  )
}

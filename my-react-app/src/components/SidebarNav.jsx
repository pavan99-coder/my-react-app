import {
  LayoutDashboard, BarChart2, TrendingUp, Users,
  Megaphone, Plug, Settings
} from 'lucide-react'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { Button } from '@/components/ui/button'

const NAV_ITEMS = [
  { icon: LayoutDashboard, label: 'Overview'      },
  { icon: BarChart2,       label: 'Analytics'     },
  { icon: TrendingUp,      label: 'Revenue'       },
  { icon: Users,           label: 'Subscribers'   },
  { icon: Megaphone,       label: 'Campaigns'     },
  { icon: Plug,            label: 'Integrations'  },
  { icon: Settings,        label: 'Settings'      },
]

/**
 * Reusable sidebar navigation.
 * @param {number}   activeIndex  - Index of the currently active nav item
 * @param {Function} onSelect     - Called with index when an item is clicked
 */
export function SidebarNav({ activeIndex, onSelect }) {
  return (
    <aside className="w-[240px] min-h-screen bg-card border-r border-border flex flex-col sticky top-0 h-screen overflow-hidden shrink-0">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-6 border-b border-border">
        <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: '#6366F1' }}>
          <BarChart2 size={15} color="#fff" />
        </div>
        <span className="text-base font-bold tracking-tight">Metrix</span>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 flex flex-col gap-0.5 overflow-y-auto">
        {NAV_ITEMS.map(({ icon: Icon, label }, i) => (
          <Button
            key={label}
            variant="ghost"
            onClick={() => onSelect(i)}
            className={`w-full justify-start gap-2.5 h-9 px-3 text-sm font-medium
              ${activeIndex === i
                ? 'bg-indigo-50 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-600'
                : 'text-muted-foreground hover:text-foreground'
              }`}
          >
            <Icon size={16} />
            {label}
          </Button>
        ))}
      </nav>

      <Separator />

      {/* User footer */}
      <div className="flex items-center gap-2.5 px-4 py-4">
        <Avatar className="w-8 h-8 shrink-0">
          <AvatarFallback className="text-xs font-bold text-white"
            style={{ background: 'linear-gradient(135deg, #6366F1, #06B6D4)' }}>
            JD
          </AvatarFallback>
        </Avatar>
        <div className="min-w-0">
          <p className="text-sm font-semibold truncate">Jane Doe</p>
          <p className="text-xs text-muted-foreground truncate">Marketing Lead</p>
        </div>
      </div>
    </aside>
  )
}

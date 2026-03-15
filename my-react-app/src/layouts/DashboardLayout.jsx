import { useState } from 'react'
import { SidebarNav } from '@/components/SidebarNav'
import { DashboardHeader } from '@/components/DashboardHeader'

export function DashboardLayout({ title, subtitle, children }) {
  const [activeNav, setActiveNav] = useState(0)
  const [dateRange, setDateRange] = useState('Last 30 days')

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      <SidebarNav activeIndex={activeNav} onSelect={setActiveNav} />
      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader
          title={title}
          subtitle={subtitle}
          dateRange={dateRange}
          onDateChange={setDateRange}
        />
        <main className="flex-1 p-7 flex flex-col gap-5">
          {children}
        </main>
      </div>
    </div>
  )
}

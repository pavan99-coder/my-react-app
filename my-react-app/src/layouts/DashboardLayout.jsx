import { useState } from 'react'
import { SidebarNav } from '@/components/SidebarNav'
import { DashboardHeader } from '@/components/DashboardHeader'

export function DashboardLayout({ title, subtitle, children }) {
  const [activeNav, setActiveNav] = useState(0)
  const [dateRange, setDateRange] = useState('Last 30 days')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <SidebarNav
        activeIndex={activeNav}
        onSelect={(i) => { setActiveNav(i); setSidebarOpen(false) }}
        open={sidebarOpen}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <DashboardHeader
          title={title}
          subtitle={subtitle}
          dateRange={dateRange}
          onDateChange={setDateRange}
          onMenuToggle={() => setSidebarOpen(o => !o)}
        />
        <main className="flex-1 p-4 sm:p-5 lg:p-7 flex flex-col gap-4 lg:gap-5">
          {children}
        </main>
      </div>
    </div>
  )
}

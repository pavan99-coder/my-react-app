import { DashboardLayout } from '@/layouts/DashboardLayout'
import { DashboardPage } from '@/features/dashboard'

export default function App() {
  return (
    <DashboardLayout title="Overview" subtitle="Welcome back, Jane 👋">
      <DashboardPage />
    </DashboardLayout>
  )
}

import { DollarSign, MousePointerClick, Users, AlertTriangle } from 'lucide-react'

export const salesData = [
  { month: 'Jan', revenue: 42000, target: 38000 },
  { month: 'Feb', revenue: 48000, target: 42000 },
  { month: 'Mar', revenue: 55000, target: 50000 },
  { month: 'Apr', revenue: 51000, target: 53000 },
  { month: 'May', revenue: 63000, target: 58000 },
  { month: 'Jun', revenue: 71000, target: 65000 },
  { month: 'Jul', revenue: 68000, target: 70000 },
  { month: 'Aug', revenue: 79000, target: 74000 },
]

export const subscriberData = [
  { month: 'Jan', new: 1200, churned: 300 },
  { month: 'Feb', new: 1800, churned: 250 },
  { month: 'Mar', new: 2200, churned: 400 },
  { month: 'Apr', new: 1900, churned: 280 },
  { month: 'May', new: 2700, churned: 320 },
  { month: 'Jun', new: 3100, churned: 290 },
  { month: 'Jul', new: 2800, churned: 350 },
  { month: 'Aug', new: 3500, churned: 310 },
]

export const donutData = [
  { name: 'Enterprise', value: 42, color: '#6366F1' },
  { name: 'Pro',        value: 31, color: '#06B6D4' },
  { name: 'Starter',   value: 18, color: '#8B5CF6' },
  { name: 'Free',      value:  9, color: '#E2E8F0' },
]

export const integrations = [
  { name: 'Stripe',     status: 'Active',   synced: '2 min ago',  events: '14,203' },
  { name: 'Salesforce', status: 'Active',   synced: '11 min ago', events: '8,541'  },
  { name: 'HubSpot',    status: 'Active',   synced: '1 hr ago',   events: '5,930'  },
  { name: 'Segment',    status: 'Warning',  synced: '3 hr ago',   events: '3,280'  },
  { name: 'Intercom',   status: 'Inactive', synced: '1 day ago',  events: '1,100'  },
]

export const KPI_METRICS = [
  { label: 'Total Revenue', value: '$284,500', change: '+12.4%', positive: true,  icon: DollarSign,        accentColor: '#6366F1' },
  { label: 'Total Traffic', value: '1.84M',    change: '+8.1%',  positive: true,  icon: MousePointerClick, accentColor: '#06B6D4' },
  { label: 'Subscribers',   value: '42,310',   change: '+5.3%',  positive: true,  icon: Users,             accentColor: '#8B5CF6' },
  { label: 'Churn Rate',    value: '2.4%',     change: '+0.3%',  positive: false, icon: AlertTriangle,     accentColor: '#F59E0B' },
]

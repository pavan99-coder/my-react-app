import { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const STATUSES = ['Active', 'Warning', 'Inactive']

const EMPTY = { name: '', status: 'Active', events: '' }

export function AddIntegrationModal({ onAdd, onClose }) {
  const [form, setForm] = useState(EMPTY)
  const [error, setError] = useState('')

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }))
    setError('')
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim()) { setError('Integration name is required.'); return }
    if (!form.events.trim()) { setError('Events count is required.'); return }

    onAdd({
      name:   form.name.trim(),
      status: form.status,
      synced: 'just now',
      events: form.events.trim(),
    })
    onClose()
  }

  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
      onClick={e => { if (e.target === e.currentTarget) onClose() }}
    >
      {/* Dialog */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border">
          <div>
            <h2 className="text-base font-semibold text-foreground">Add Integration</h2>
            <p className="text-xs text-muted-foreground mt-0.5">Connect a new data source</p>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 flex items-center justify-center rounded-lg text-muted-foreground hover:bg-muted transition-colors"
          >
            <X size={15} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-6 py-5 flex flex-col gap-4">

          {/* Name */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground">Integration Name</label>
            <input
              type="text"
              placeholder="e.g. Mixpanel"
              value={form.name}
              onChange={e => set('name', e.target.value)}
              className="h-9 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
            />
          </div>

          {/* Status */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground">Status</label>
            <select
              value={form.status}
              onChange={e => set('status', e.target.value)}
              className="h-9 rounded-lg border border-border bg-background px-3 text-sm text-foreground outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all appearance-none cursor-pointer"
            >
              {STATUSES.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>

          {/* Events */}
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-medium text-foreground">Events Count</label>
            <input
              type="text"
              placeholder="e.g. 5,000"
              value={form.events}
              onChange={e => set('events', e.target.value)}
              className="h-9 rounded-lg border border-border bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground outline-none focus:ring-2 focus:ring-indigo-500/30 focus:border-indigo-400 transition-all"
            />
          </div>

          {/* Validation error */}
          {error && <p className="text-xs text-rose-500">{error}</p>}

          {/* Actions */}
          <div className="flex justify-end gap-2 pt-1">
            <Button type="button" variant="outline" size="sm" onClick={onClose} className="h-9 px-4">
              Cancel
            </Button>
            <Button type="submit" size="sm"
              className="h-9 px-4 bg-indigo-600 hover:bg-indigo-700 text-white">
              Add Integration
            </Button>
          </div>
        </form>

      </div>
    </div>
  )
}

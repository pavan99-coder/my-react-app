import { MoreHorizontal } from 'lucide-react'
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { StatusBadge } from '@/components/StatusBadge'

/**
 * Reusable integrations table.
 * @param {Array} integrations - Array of { name, status, synced, events }
 */
export function IntegrationsTable({ integrations }) {
  return (
    <Table>
      <TableHeader>
        <TableRow className="hover:bg-transparent">
          <TableHead className="text-[11px] uppercase tracking-wide">Source</TableHead>
          <TableHead className="text-[11px] uppercase tracking-wide">Status</TableHead>
          <TableHead className="text-[11px] uppercase tracking-wide">Last Synced</TableHead>
          <TableHead className="text-[11px] uppercase tracking-wide">Events</TableHead>
          <TableHead className="w-8" />
        </TableRow>
      </TableHeader>
      <TableBody>
        {integrations.map(row => (
          <TableRow key={row.name} className="hover:bg-muted/40">
            <TableCell>
              <div className="flex items-center gap-2.5">
                <Avatar className="w-7 h-7 rounded-md">
                  <AvatarFallback
                    className="text-xs font-bold text-white rounded-md"
                    style={{ background: 'linear-gradient(135deg, #6366F1, #06B6D4)' }}
                  >
                    {row.name[0]}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">{row.name}</span>
              </div>
            </TableCell>
            <TableCell>
              <StatusBadge status={row.status} />
            </TableCell>
            <TableCell className="text-xs text-muted-foreground">{row.synced}</TableCell>
            <TableCell className="text-sm font-medium tabular-nums">{row.events}</TableCell>
            <TableCell>
              <Button variant="ghost" size="icon" className="h-7 w-7 text-muted-foreground hover:text-foreground">
                <MoreHorizontal size={15} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

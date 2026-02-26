import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const recentPayments = [
  {
    id: "INV-001",
    name: "Alex Johnson",
    amount: "₹4,500",
    status: "Paid",
    date: "Today, 10:23 AM",
  },
  {
    id: "INV-002",
    name: "Sarah Smith",
    amount: "₹12,000",
    status: "Pending",
    date: "Today, 09:15 AM",
  },
  {
    id: "INV-003",
    name: "Michael Brown",
    amount: "₹4,500",
    status: "Paid",
    date: "Yesterday, 04:45 PM",
  },
  {
    id: "INV-004",
    name: "Emily Davis",
    amount: "₹25,000",
    status: "Overdue",
    date: "Oct 24, 2023",
  },
  {
    id: "INV-005",
    name: "David Wilson",
    amount: "₹4,500",
    status: "Paid",
    date: "Oct 24, 2023",
  },
];

export function RecentActivity() {
  return (
    <div className="rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl overflow-hidden shadow-2xl relative group">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
      
      <div className="p-6 pb-4 border-b border-white/5 flex items-center justify-between bg-black/20">
        <div>
          <h3 className="text-lg font-semibold text-neutral-50 mb-1">Recent Transactions</h3>
          <p className="text-sm text-neutral-400">
            Monitor the latest payments and invoice statuses.
          </p>
        </div>
      </div>
      <Table>
        <TableHeader className="bg-black/40">
          <TableRow className="border-white/5 hover:bg-transparent">
            <TableHead className="text-neutral-500 font-medium">Invoice ID</TableHead>
            <TableHead className="text-neutral-500 font-medium">Member Name</TableHead>
            <TableHead className="text-neutral-500 font-medium">Status</TableHead>
            <TableHead className="text-neutral-500 font-medium whitespace-nowrap">Date & Time</TableHead>
            <TableHead className="text-neutral-500 font-medium text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {recentPayments.map((payment) => (
            <TableRow 
              key={payment.id} 
              className="border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group/row"
            >
              <TableCell className="font-medium text-neutral-300 group-hover/row:text-emerald-400 transition-colors">
                {payment.id}
              </TableCell>
              <TableCell className="text-neutral-300">{payment.name}</TableCell>
              <TableCell>
                <Badge
                  variant="outline"
                  className={
                    payment.status === "Paid"
                      ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10 shadow-[0_0_10px_-2px_rgba(16,185,129,0.2)]"
                      : payment.status === "Pending"
                      ? "border-amber-500/30 text-amber-400 bg-amber-500/10 shadow-[0_0_10px_-2px_rgba(245,158,11,0.2)]"
                      : "border-rose-500/30 text-rose-400 bg-rose-500/10 shadow-[0_0_10px_-2px_rgba(244,63,94,0.2)]"
                  }
                >
                  {payment.status}
                </Badge>
              </TableCell>
              <TableCell className="text-neutral-500 text-sm">{payment.date}</TableCell>
              <TableCell className="text-right font-medium text-neutral-100 group-hover/row:text-emerald-300 transition-colors">
                {payment.amount}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

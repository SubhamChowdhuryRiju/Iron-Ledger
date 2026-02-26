import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, Download, ArrowUpRight } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const payments = [
    { id: "PAY-1042", memberName: "Amit Kumar", amount: "₹4,500", plan: "Monthly Basic", date: "24 Oct 2023", method: "UPI", status: "Completed" },
    { id: "PAY-1043", memberName: "Priya Sharma", amount: "₹12,000", plan: "Quarterly Elite", date: "24 Oct 2023", method: "Credit Card", status: "Completed" },
    { id: "PAY-1044", memberName: "Vikram Singh", amount: "₹4,500", plan: "Monthly Basic", date: "23 Oct 2023", method: "Cash", status: "Completed" },
    { id: "PAY-1045", memberName: "Neha Gupta", amount: "₹25,000", plan: "Annual Pro", date: "22 Oct 2023", method: "Bank Transfer", status: "Pending" },
    { id: "PAY-1046", memberName: "Rohan Patel", amount: "₹4,500", plan: "Monthly Basic", date: "20 Oct 2023", method: "UPI", status: "Failed" },
    { id: "PAY-1047", memberName: "Kavita Rao", amount: "₹12,000", plan: "Quarterly Elite", date: "19 Oct 2023", method: "UPI", status: "Completed" },
    { id: "PAY-1048", memberName: "Sanjay Verma", amount: "₹4,500", plan: "Monthly Basic", date: "18 Oct 2023", method: "Cash", status: "Completed" },
];

export default function Payments() {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Payments
                    </h1>
                    <p className="text-neutral-400 text-lg">Track transactions, process fees, and view revenue history.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto"
                >
                    <div className="relative w-full sm:w-64 sm:flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                        <Input
                            placeholder="Search payments..."
                            className="pl-10 bg-black/40 border-white/10 text-neutral-200 placeholder:text-neutral-500 focus-visible:ring-emerald-500/50 w-full"
                        />
                    </div>
                    <div className="flex gap-3 w-full sm:w-auto text-nowrap">
                        <Button variant="outline" className="flex-1 sm:flex-none border-white/10 bg-black/40 text-neutral-300 hover:bg-white/10 hover:text-white">
                            <Filter className="h-4 w-4 mr-2" /> Filter
                        </Button>
                        <Button className="flex-1 sm:flex-none bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]">
                            <Plus className="mr-2 h-4 w-4" /> Record Payment
                        </Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl overflow-hidden shadow-2xl relative group"
            >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Recent Transactions</h3>
                    <Button variant="ghost" size="sm" className="text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10">
                        <Download className="mr-2 h-4 w-4" /> Export CSV
                    </Button>
                </div>

                <Table>
                    <TableHeader className="bg-black/40">
                        <TableRow className="border-white/5 hover:bg-transparent">
                            <TableHead className="text-neutral-500 font-medium">Transaction ID</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Member Name</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Plan Description</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Date</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Method</TableHead>
                            <TableHead className="text-neutral-500 font-medium text-right">Amount</TableHead>
                            <TableHead className="text-neutral-500 font-medium text-center">Status</TableHead>
                            <TableHead className="text-neutral-500 font-medium"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {payments.map((payment) => (
                            <TableRow
                                key={payment.id}
                                className="border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group/row"
                            >
                                <TableCell className="font-medium text-neutral-300 group-hover/row:text-emerald-400 transition-colors">
                                    {payment.id}
                                </TableCell>
                                <TableCell className="text-neutral-200 font-medium">{payment.memberName}</TableCell>
                                <TableCell className="text-neutral-400">{payment.plan}</TableCell>
                                <TableCell className="text-neutral-400">{payment.date}</TableCell>
                                <TableCell className="text-neutral-400">{payment.method}</TableCell>
                                <TableCell className="text-right font-medium text-white group-hover/row:text-emerald-300 transition-colors">
                                    {payment.amount}
                                </TableCell>
                                <TableCell className="text-center">
                                    <Badge
                                        variant="outline"
                                        className={
                                            payment.status === "Completed"
                                                ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10 shadow-[0_0_10px_-2px_rgba(16,185,129,0.2)]"
                                                : payment.status === "Pending"
                                                    ? "border-amber-500/30 text-amber-400 bg-amber-500/10 shadow-[0_0_10px_-2px_rgba(245,158,11,0.2)]"
                                                    : "border-rose-500/30 text-rose-400 bg-rose-500/10 shadow-[0_0_10px_-2px_rgba(244,63,94,0.2)]"
                                        }
                                    >
                                        {payment.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-500 hover:text-emerald-400 hover:bg-emerald-500/10">
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </motion.div>
        </Layout>
    );
}

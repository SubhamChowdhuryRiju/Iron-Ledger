import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, Filter, Download, FileText } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const expenses = [
    { id: "EXP-001", title: "Monthly Rent", category: "Facility", amount: "₹50,000", date: "01 Nov 2023", loggedBy: "Admin", status: "Paid" },
    { id: "EXP-002", title: "Treadmill Maintenance", category: "Equipment", amount: "₹8,500", date: "28 Oct 2023", loggedBy: "Rahul M.", status: "Paid" },
    { id: "EXP-003", title: "Electricity Bill", category: "Utilities", amount: "₹15,200", date: "25 Oct 2023", loggedBy: "Admin", status: "Pending" },
    { id: "EXP-004", title: "New Dumbbell Set", category: "Equipment", amount: "₹35,000", date: "20 Oct 2023", loggedBy: "Admin", status: "Paid" },
    { id: "EXP-005", title: "Cleaning Supplies", category: "Operations", amount: "₹4,200", date: "15 Oct 2023", loggedBy: "Sneha P.", status: "Paid" },
];

export default function Expenditure() {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Expenditure
                    </h1>
                    <p className="text-neutral-400 text-lg">Track expenses, equipment costs, and maintenance bills.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    className="flex items-center gap-3 w-full md:w-auto"
                >
                    <div className="relative flex-1 md:w-64">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
                        <Input
                            placeholder="Search expenses..."
                            className="pl-10 bg-black/40 border-white/10 text-neutral-200 placeholder:text-neutral-500 focus-visible:ring-emerald-500/50"
                        />
                    </div>
                    <Button variant="outline" className="border-white/10 bg-black/40 text-neutral-300 hover:bg-white/10 hover:text-white">
                        <Filter className="h-4 w-4 mr-2" /> Filter
                    </Button>
                    <Button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold shadow-[0_0_15px_-3px_rgba(244,63,94,0.4)]">
                        <Plus className="mr-2 h-4 w-4" /> Add Expense
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl overflow-hidden shadow-2xl relative group"
            >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-rose-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Expense History</h3>
                    <Button variant="ghost" size="sm" className="text-neutral-400 hover:text-white hover:bg-white/10">
                        <Download className="mr-2 h-4 w-4" /> Export Report
                    </Button>
                </div>

                <Table>
                    <TableHeader className="bg-black/40">
                        <TableRow className="border-white/5 hover:bg-transparent">
                            <TableHead className="text-neutral-500 font-medium">Expense ID</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Description</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Category</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Date</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Logged By</TableHead>
                            <TableHead className="text-neutral-500 font-medium text-right">Amount</TableHead>
                            <TableHead className="text-neutral-500 font-medium text-center">Status</TableHead>
                            <TableHead className="text-neutral-500 font-medium"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {expenses.map((expense) => (
                            <TableRow
                                key={expense.id}
                                className="border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group/row"
                            >
                                <TableCell className="font-medium text-neutral-300 group-hover/row:text-rose-400 transition-colors">
                                    {expense.id}
                                </TableCell>
                                <TableCell className="text-neutral-200 font-medium">{expense.title}</TableCell>
                                <TableCell className="text-neutral-400">{expense.category}</TableCell>
                                <TableCell className="text-neutral-400">{expense.date}</TableCell>
                                <TableCell className="text-neutral-400">{expense.loggedBy}</TableCell>
                                <TableCell className="text-right font-medium text-white group-hover/row:text-rose-300 transition-colors">
                                    {expense.amount}
                                </TableCell>
                                <TableCell className="text-center">
                                    <Badge
                                        variant="outline"
                                        className={
                                            expense.status === "Paid"
                                                ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
                                                : "border-amber-500/30 text-amber-400 bg-amber-500/10"
                                        }
                                    >
                                        {expense.status}
                                    </Badge>
                                </TableCell>
                                <TableCell>
                                    <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-500 hover:text-rose-400 hover:bg-rose-500/10">
                                        <FileText className="h-4 w-4" />
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

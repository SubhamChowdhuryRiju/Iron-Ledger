import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Plus, MoreVertical, Edit, Trash, User } from "lucide-react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const members = [
    { id: "MEM-001", name: "Ravi Kumar", phone: "+91 98765 43210", plan: "Annual Pro", joinDate: "15 Jan 2023", status: "Active" },
    { id: "MEM-002", name: "Anjali Gupta", phone: "+91 98765 43211", plan: "Monthly Basic", joinDate: "02 Mar 2023", status: "Active" },
    { id: "MEM-003", name: "Suresh Menon", phone: "+91 98765 43212", plan: "Quarterly Elite", joinDate: "10 Nov 2023", status: "Inactive" },
    { id: "MEM-004", name: "Pooja Desai", phone: "+91 98765 43213", plan: "Monthly Basic", joinDate: "22 Dec 2023", status: "Active" },
    { id: "MEM-005", name: "Vikram Reddy", phone: "+91 98765 43214", plan: "Annual Pro", joinDate: "05 Jan 2024", status: "Active" },
    { id: "MEM-006", name: "Neha Sharma", phone: "+91 98765 43215", plan: "Monthly Basic", joinDate: "18 Feb 2024", status: "Inactive" },
    { id: "MEM-007", name: "Arjun Patel", phone: "+91 98765 43216", plan: "Quarterly Elite", joinDate: "01 Mar 2024", status: "Active" },
];

export default function Members() {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Members
                    </h1>
                    <p className="text-neutral-400 text-lg">Manage your gym members, track attendance, and view profiles.</p>
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
                            placeholder="Search members..."
                            className="pl-10 bg-black/40 border-white/10 text-neutral-200 placeholder:text-neutral-500 focus-visible:ring-emerald-500/50"
                        />
                    </div>
                    <Button className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]">
                        <Plus className="mr-2 h-4 w-4" /> Add Member
                    </Button>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl overflow-hidden shadow-2xl relative group"
            >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                <Table>
                    <TableHeader className="bg-black/40">
                        <TableRow className="border-white/5 hover:bg-transparent">
                            <TableHead className="text-neutral-500 font-medium">Member ID</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Name</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Contact</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Plan</TableHead>
                            <TableHead className="text-neutral-500 font-medium whitespace-nowrap">Join Date</TableHead>
                            <TableHead className="text-neutral-500 font-medium">Status</TableHead>
                            <TableHead className="text-neutral-500 font-medium text-right">Actions</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {members.map((member) => (
                            <TableRow
                                key={member.id}
                                className="border-white/5 hover:bg-white/[0.02] transition-colors cursor-pointer group/row"
                            >
                                <TableCell className="font-medium text-neutral-300 group-hover/row:text-emerald-400 transition-colors">
                                    {member.id}
                                </TableCell>
                                <TableCell className="text-neutral-200 font-medium">{member.name}</TableCell>
                                <TableCell className="text-neutral-400">{member.phone}</TableCell>
                                <TableCell className="text-neutral-300">{member.plan}</TableCell>
                                <TableCell className="text-neutral-400">{member.joinDate}</TableCell>
                                <TableCell>
                                    <Badge
                                        variant="outline"
                                        className={
                                            member.status === "Active"
                                                ? "border-emerald-500/30 text-emerald-400 bg-emerald-500/10 shadow-[0_0_10px_-2px_rgba(16,185,129,0.2)]"
                                                : "border-neutral-500/30 text-neutral-400 bg-neutral-500/10"
                                        }
                                    >
                                        {member.status}
                                    </Badge>
                                </TableCell>
                                <TableCell className="text-right">
                                    <DropdownMenu>
                                        <DropdownMenuTrigger asChild>
                                            <Button variant="ghost" size="icon" className="h-8 w-8 text-neutral-400 hover:text-white hover:bg-white/10">
                                                <MoreVertical className="h-4 w-4" />
                                            </Button>
                                        </DropdownMenuTrigger>
                                        <DropdownMenuContent align="end" className="bg-[#111] border-white/10 text-neutral-200">
                                            <DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">
                                                <User className="mr-2 h-4 w-4" /> View Profile
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5">
                                                <Edit className="mr-2 h-4 w-4" /> Edit Details
                                            </DropdownMenuItem>
                                            <DropdownMenuItem className="cursor-pointer text-rose-400 hover:bg-rose-500/10 focus:bg-rose-500/10 focus:text-rose-400">
                                                <Trash className="mr-2 h-4 w-4" /> Delete Member
                                            </DropdownMenuItem>
                                        </DropdownMenuContent>
                                    </DropdownMenu>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </motion.div>
        </Layout>
    );
}

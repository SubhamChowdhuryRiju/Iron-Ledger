import { DashboardMetrics } from "@/components/DashboardMetrics";
import { RecentActivity } from "@/components/RecentActivity";
import { Sparkles, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Layout } from "@/components/Layout";

export default function Dashboard() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
          Overview
        </h1>
        <p className="text-neutral-400 text-lg">Welcome back to Iron Ledger. Here's what's happening today.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <DashboardMetrics />
      </motion.div>

      <div className="grid lg:grid-cols-3 gap-8">
        <motion.div
          className="lg:col-span-2 min-w-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <RecentActivity />
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-neutral-900 to-black p-6 flex flex-col justify-between h-[220px] shadow-xl relative overflow-hidden group">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <Dumbbell className="h-24 w-24 text-emerald-500 transform rotate-12" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-5 w-5 text-emerald-400" />
                <h3 className="font-semibold text-xl text-emerald-400">Quick Action</h3>
              </div>
              <p className="text-sm text-neutral-400 mb-6 leading-relaxed">
                Register a new member instantly or process a walk-in entry right from here.
              </p>
            </div>

            <Button className="relative z-10 w-full bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold h-12 rounded-xl shadow-[0_0_30px_-5px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_0px_rgba(16,185,129,0.5)] transition-all">
              Add New Member
            </Button>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

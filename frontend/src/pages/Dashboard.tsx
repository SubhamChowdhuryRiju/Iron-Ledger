import { Sidebar } from "@/components/Sidebar";
import { DashboardMetrics } from "@/components/DashboardMetrics";
import { RecentActivity } from "@/components/RecentActivity";
import { Bell, Search, Sparkles, Dumbbell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-50 selection:bg-emerald-500/30 flex overflow-hidden">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none" />

      <Sidebar />
      
      {/* Main Content Area */}
      <div className="flex-1 ml-64 relative min-h-screen overflow-y-auto">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-40">
          <div className="w-96 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
            <Input 
              placeholder="Search members, payments..." 
              className="pl-10 bg-white/5 border-white/10 text-neutral-200 placeholder:text-neutral-500 focus-visible:ring-emerald-500/50 focus-visible:bg-white/10 transition-all rounded-full h-10"
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="text-neutral-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-full">
              <Bell className="h-5 w-5" />
            </Button>
            <button className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center border border-white/10 shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)] hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.6)] transition-all transform hover:scale-105">
              <span className="text-sm font-bold text-neutral-950">AC</span>
            </button>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8 space-y-8 max-w-7xl mx-auto">
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
              className="lg:col-span-2"
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
        </main>
      </div>
    </div>
  );
}

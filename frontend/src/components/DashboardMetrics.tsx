import { ArrowUpRight, ArrowDownRight, Users, CreditCard, Activity, IndianRupee } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export function DashboardMetrics() {
  const metrics = [
    {
      title: "Total Revenue",
      value: "₹2,45,231",
      change: "+20.1%",
      isPositive: true,
      icon: IndianRupee,
    },
    {
      title: "Active Members",
      value: "2,350",
      change: "+180.1%",
      isPositive: true,
      icon: Users,
    },
    {
      title: "Pending Payments",
      value: "145",
      change: "-4.5%",
      isPositive: false,
      icon: CreditCard,
    },
    {
      title: "Daily Attendance",
      value: "842",
      change: "+12.4%",
      isPositive: true,
      icon: Activity,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <motion.div 
      variants={container}
      initial="hidden"
      animate="show"
      className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
    >
      {metrics.map((metric, index) => (
        <motion.div key={index} variants={item}>
          <Card className="bg-neutral-900/50 backdrop-blur-md border border-white/5 shadow-lg relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-300">
            <div className={`absolute top-0 right-0 w-32 h-32 rounded-full blur-[50px] opacity-20 transition-opacity duration-500 group-hover:opacity-40 ${metric.isPositive ? 'bg-emerald-500' : 'bg-rose-500'} pointer-events-none -mr-10 -mt-10`} />
            
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0 relative z-10">
              <CardTitle className="text-sm font-medium text-neutral-400">
                {metric.title}
              </CardTitle>
              <div className="p-2 bg-white/5 rounded-lg border border-white/5 group-hover:bg-white/10 transition-colors">
                <metric.icon className="w-4 h-4 text-emerald-400" />
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-bold tracking-tight text-white mb-1">{metric.value}</div>
              <p className={`flex items-center text-sm font-medium ${metric.isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {metric.isPositive ? <ArrowUpRight className="mr-1 h-4 w-4" /> : <ArrowDownRight className="mr-1 h-4 w-4" />}
                {metric.change} <span className="text-neutral-500 font-normal ml-1">from last month</span>
              </p>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  );
}

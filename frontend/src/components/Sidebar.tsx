import { Link, useLocation } from "react-router-dom";
import { Dumbbell, LayoutDashboard, Users, CreditCard, CalendarDays, Settings, LogOut } from "lucide-react";
import { motion } from "framer-motion";
import clsx from "clsx";

export function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Members", href: "/members", icon: Users },
    { name: "Payments", href: "/payments", icon: CreditCard },
    { name: "Plans", href: "/plans", icon: CalendarDays },
    { name: "Settings", href: "/settings", icon: Settings },
  ];

  return (
    <div className="w-64 h-screen bg-[#0a0a0a] border-r border-white/5 flex flex-col fixed left-0 top-0 z-50">
      {/* Brand */}
      <div className="h-16 flex items-center px-6 border-b border-white/5 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <Link to="/" className="flex items-center gap-2 relative z-10 w-full">
          <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shadow-[0_0_15px_-3px_rgba(16,185,129,0.2)]">
            <Dumbbell className="h-5 w-5 text-emerald-400" />
          </div>
          <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400">Iron Ledger</span>
        </Link>
      </div>

      {/* Nav Links */}
      <nav className="flex-1 py-6 px-4 space-y-1.5 overflow-y-auto w-full">
        {navItems.map((item, i) => {
          const isActive = currentPath === item.href;
          
          return (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              key={item.name}
            >
              <Link
                to={item.href}
                className={clsx(
                  "flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition-all duration-200 group relative",
                  isActive 
                    ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20" 
                    : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                )}
              >
                {isActive && (
                  <motion.div 
                    className="absolute left-[-16px] top-[15%] h-[70%] w-1 bg-emerald-500 rounded-r-md shadow-[0_0_10px_rgba(16,185,129,0.8)]"
                    layoutId="activeTabIndicator" 
                  />
                )}
                
                <item.icon className={clsx("h-5 w-5 transition-transform duration-200", isActive ? "scale-110" : "group-hover:scale-110")} />
                {item.name}
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* User Actions */}
      <div className="p-4 border-t border-white/5">
        <button className="flex items-center gap-3 px-3 py-3 w-full rounded-xl text-sm font-medium text-neutral-400 hover:text-rose-400 hover:bg-rose-500/10 border border-transparent hover:border-rose-500/20 transition-all group">
          <LogOut className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          Logout
        </button>
      </div>
    </div>
  );
}

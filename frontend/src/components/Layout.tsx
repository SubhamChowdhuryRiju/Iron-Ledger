import { Sidebar } from "@/components/Sidebar";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Bell, Search, User, LogOut, MessageSquare, CheckCircle2, Menu } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-neutral-50 flex overflow-hidden selection:bg-emerald-500/30">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[150px] pointer-events-none" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none" />

      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 w-full md:w-auto md:ml-64 relative min-h-screen transition-all duration-300">
        {/* Top Header */}
        <header className="h-16 flex items-center justify-between px-4 md:px-8 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-30">
          <div className="flex items-center gap-4 w-full md:w-96 relative">
            {/* Hamburger Menu - Mobile Only */}
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden text-neutral-400 hover:text-white p-2 rounded-md hover:bg-white/10 transition-colors cursor-pointer shrink-0"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-500" />
              <Input
                placeholder="Search members, payments..."
                className="pl-10 bg-white/5 border-white/10 text-neutral-200 placeholder:text-neutral-500 focus-visible:ring-emerald-500/50 focus-visible:bg-white/10 transition-all rounded-full h-10 w-full"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="relative text-neutral-400 hover:text-emerald-400 hover:bg-emerald-500/10 rounded-full">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-2 right-2.5 h-2 w-2 rounded-full bg-rose-500 border-2 border-black" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-80 bg-[#111] border-white/10 text-neutral-200" align="end" sideOffset={8}>
                <DropdownMenuLabel className="font-semibold text-white">Notifications</DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="gap-3 cursor-pointer hover:bg-white/5 focus:bg-white/5 py-3">
                    <div className="h-8 w-8 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <p className="text-sm font-medium leading-none truncate text-white">Payment received</p>
                      <p className="text-xs text-neutral-400 truncate">Rahul Sharma paid ₹4,500 for Monthly Plan</p>
                    </div>
                    <span className="text-xs text-neutral-500 ml-auto whitespace-nowrap">2m ago</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="gap-3 cursor-pointer hover:bg-white/5 focus:bg-white/5 py-3">
                    <div className="h-8 w-8 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shrink-0">
                      <MessageSquare className="h-4 w-4 text-blue-400" />
                    </div>
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <p className="text-sm font-medium leading-none truncate text-white">New user registered</p>
                      <p className="text-xs text-neutral-400 truncate">Priya Patel joined the gym</p>
                    </div>
                    <span className="text-xs text-neutral-500 ml-auto whitespace-nowrap">1h ago</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="w-full justify-center text-center cursor-pointer text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/5 focus:bg-emerald-500/5 py-2.5" onClick={() => navigate('/settings?tab=notifications')}>
                  View all notifications
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="h-9 w-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center border border-white/10 shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)] hover:shadow-[0_0_20px_-3px_rgba(16,185,129,0.6)] transition-all transform hover:scale-105 outline-none focus:ring-2 focus:ring-emerald-500/50">
                  <span className="text-sm font-bold text-neutral-950">AC</span>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-[#111] border-white/10 text-neutral-200" align="end" sideOffset={8}>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none text-white">Admin User</p>
                    <p className="text-xs leading-none text-neutral-400">admin@ironledger.com</p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuGroup>
                  <DropdownMenuItem className="cursor-pointer hover:bg-white/5 focus:bg-white/5" onClick={() => navigate('/settings')}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator className="bg-white/10" />
                <DropdownMenuItem className="cursor-pointer text-rose-400 hover:bg-rose-500/10 focus:bg-rose-500/10 hover:text-rose-300 focus:text-rose-300 focus:text-rose-400" onClick={() => navigate('/')}>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-4 md:p-8 space-y-6 md:space-y-8 w-full max-w-7xl mx-auto flex-1 overflow-x-hidden md:overflow-visible">
          {children}
        </main>
      </div>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Activity, Users, CreditCard, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-neutral-800">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-neutral-800/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
          <Dumbbell className="h-6 w-6 text-emerald-400" />
          <span className="text-xl font-bold tracking-tight">Iron Ledger</span>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/dashboard" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
            Login
          </Link>
          <Link to="/dashboard">
            <Button className="bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-semibold rounded-full px-6">
              Get Started
            </Button>
          </Link>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-emerald-500/10 blur-[120px] -z-10 rounded-full" />
          
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Gym Management, Revolutionized
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
              Manage your gym with <span className="text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-cyan-500">Iron resolve.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
              The all-in-one ledger for modern fitness centers. Track members, process payments, and grow your business with a system built for speed and scale.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link to="/dashboard">
                <Button size="lg" className="h-14 px-8 text-base bg-emerald-500 hover:bg-emerald-600 text-neutral-950 font-bold rounded-full w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(16,185,129,0.5)]">
                  Enter Dashboard <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-24 px-6 bg-neutral-900/30 border-t border-neutral-800/50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight mb-4">Everything you need to scale</h2>
              <p className="text-neutral-400">Stop wrestling with spreadsheets. Start building your empire.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Users,
                  title: "Member Management",
                  desc: "Instantly view active, inactive, and expiring memberships with our lightning-fast data grid."
                },
                {
                  icon: CreditCard,
                  title: "Automated Billing",
                  desc: "Never miss a due payment. Track monthly fees, create invoices, and see who owes what instantly."
                },
                {
                  icon: Activity,
                  title: "Real-time Analytics",
                  desc: "Beautiful dashboards showing daily income, attendance trends, and growth metrics."
                }
              ].map((feature, i) => (
                <div key={i} className="p-6 rounded-2xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/30 transition-colors group">
                  <div className="h-12 w-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-32 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-emerald-500/5" />
          <div className="max-w-3xl mx-auto text-center relative z-10 space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Ready to crush your goals?</h2>
            <p className="text-xl text-neutral-400">Join top gym owners using Iron Ledger to automate their daily operations.</p>
            <Link to="/dashboard" className="inline-block mt-8">
              <Button size="lg" variant="outline" className="h-14 px-8 text-base border-emerald-500/30 hover:bg-emerald-500/10 text-emerald-400 hover:text-emerald-300 font-bold rounded-full">
                Open Dashboard View
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <footer className="py-8 px-6 border-t border-neutral-800/50 text-center text-sm text-neutral-500">
        <p>&copy; {new Date().getFullYear()} Iron Ledger. All rights reserved.</p>
      </footer>
    </div>
  );
}

import { Link } from "react-router-dom";
import { ArrowRight, Activity, Users, CreditCard, Dumbbell, Star, ArrowUpRight, ShieldCheck, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const fadeIn: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-neutral-50 selection:bg-emerald-500/30 font-sans overflow-x-hidden">
      {/* Background ambient glow */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/10 blur-[150px] pointer-events-none" />
      <div className="fixed top-[40%] right-[-20%] w-[60%] h-[60%] rounded-full bg-cyan-900/10 blur-[180px] pointer-events-none" />

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 backdrop-blur-xl sticky top-0 z-50 bg-[#050505]/60 transition-all">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 group-hover:bg-emerald-500/20 transition-colors">
            <Dumbbell className="h-5 w-5 text-emerald-400 group-hover:scale-110 transition-transform" />
          </div>
          <span className="text-xl font-bold tracking-tight">Iron Ledger</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/explore" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer hidden sm:block">
            Find Gyms
          </Link>
          <div className="h-4 w-px bg-white/10 hidden sm:block" />
          <Link to="/dashboard" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors cursor-pointer">
            Login
          </Link>
          <Link to="/dashboard">
            <Button className="bg-white text-black hover:bg-neutral-200 font-semibold rounded-full px-5 cursor-pointer shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]">
              Open Dashboard
            </Button>
          </Link>
        </div>
      </nav>

      <main>
        {/* --- Hero Section --- */}
        <section className="relative pt-32 pb-24 px-6">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="max-w-5xl mx-auto text-center space-y-8 relative z-10"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 text-sm font-medium text-emerald-400 bg-emerald-500/10 rounded-full border border-emerald-500/20 shadow-[0_0_20px_-5px_rgba(16,185,129,0.3)]">
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Revolutionizing Gym Operations
            </motion.div>

            <motion.h1 variants={fadeIn} className="text-6xl md:text-8xl font-extrabold tracking-[-0.04em] leading-tight">
              Manage your gym <br className="hidden md:block" /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500">Iron resolve.</span>
            </motion.h1>

            <motion.p variants={fadeIn} className="text-xl md:text-2xl text-neutral-400 max-w-3xl mx-auto leading-relaxed font-light">
              The ultimate platform for modern fitness centers. Automate billing, track memberships, and scale your business effortlessly.
            </motion.p>

            <motion.div variants={fadeIn} className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <Link to="/dashboard">
                <Button size="lg" className="h-14 px-8 text-lg bg-emerald-500 hover:bg-emerald-600 text-black font-bold rounded-full w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(16,185,129,0.6)] cursor-pointer hover:scale-105 transition-transform">
                  Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" className="h-14 px-8 text-lg bg-transparent border border-white/20 text-white hover:bg-white/10 font-semibold rounded-full w-full sm:w-auto cursor-pointer">
                  Explore Directory
                </Button>
              </Link>
            </motion.div>
          </motion.div>

          {/* Floating Hero UI Elements to show "App preview" */}
          <div className="hidden lg:block absolute top-[20%] left-[5%] animate-[float_6s_ease-in-out_infinite]">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 w-64">
              <div className="h-12 w-12 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                <Activity className="h-6 w-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-xs text-neutral-400 font-medium">Daily Revenue</p>
                <p className="text-xl font-bold">₹42,500 <span className="text-xs text-emerald-400 ml-1">+12%</span></p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute top-[40%] right-[5%] animate-[float_8s_ease-in-out_infinite_reverse]">
            <div className="bg-black/60 backdrop-blur-xl border border-white/10 p-4 rounded-2xl shadow-2xl flex items-center gap-4 w-72">
              <div className="flex -space-x-3">
                <img className="h-10 w-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop" alt="avatar" />
                <img className="h-10 w-10 rounded-full border-2 border-black object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1287&auto=format&fit=crop" alt="avatar" />
                <div className="h-10 w-10 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-xs font-bold">+8</div>
              </div>
              <div>
                <p className="text-sm font-bold">New Signups</p>
                <p className="text-xs text-neutral-400">Just now</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- Social Proof / Stats Ticker --- */}
        <section className="py-10 border-y border-white/5 bg-neutral-900/20 overflow-hidden relative">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#050505] to-transparent z-10" />
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#050505] to-transparent z-10" />

          <div className="flex animate-[scroll_30s_linear_infinite] w-max gap-24 px-12 items-center opacity-70">
            <div className="flex items-center gap-3 text-xl font-bold text-neutral-400"><span className="text-3xl text-white">500+</span> Active Gyms</div>
            <div className="flex items-center gap-3 text-xl font-bold text-neutral-400"><span className="text-3xl text-emerald-400">2M+</span> Members Managed</div>
            <div className="flex items-center gap-3 text-xl font-bold text-neutral-400"><span className="text-3xl text-cyan-400">₹10Cr+</span> Payments Processed</div>
            <div className="flex items-center gap-3 text-xl font-bold text-neutral-400"><span className="text-3xl text-white">99.9%</span> Uptime</div>
            {/* Duplicated for smooth infinite scroll */}
            <div className="flex items-center gap-3 text-xl font-bold text-neutral-400"><span className="text-3xl text-white">500+</span> Active Gyms</div>
            <div className="flex items-center gap-3 text-xl font-bold text-neutral-400"><span className="text-3xl text-emerald-400">2M+</span> Members Managed</div>
            <div className="flex items-center gap-3 text-xl font-bold text-neutral-400"><span className="text-3xl text-cyan-400">₹10Cr+</span> Payments Processed</div>
          </div>
        </section>

        {/* --- How It Works Pipeline --- */}
        <section className="py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">Streamline your workflow</h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">From onboarding to retaining members, everything happens automatically.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-4 relative">
              <div className="hidden md:block absolute top-[45px] left-[10%] w-[80%] h-px bg-white/10 z-0" />

              {[
                { step: "01", title: "Setup Profile", desc: "List your gym with photos, pricing, and amenities in minutes." },
                { step: "02", title: "Add Members", desc: "Import existing members or use our rapid onboarding flow." },
                { step: "03", title: "Auto-Bill", desc: "Set up recurring payment plans and automated WhatsApp reminders." },
                { step: "04", title: "Scale Up", desc: "Use real-time analytics to spot trends and grow your revenue." }
              ].map((item, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  key={i}
                  className="relative z-10 p-6 rounded-3xl bg-neutral-900/50 border border-white/5 backdrop-blur-sm hover:bg-neutral-900 transition-colors"
                >
                  <div className="h-16 w-16 rounded-2xl bg-[#050505] border border-white/10 flex items-center justify-center text-xl font-bold text-emerald-400 mb-6 shadow-xl">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Features Grid --- */}
        <section className="py-32 px-6 bg-gradient-to-b from-[#050505] to-neutral-950 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-sm font-medium text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                  <Zap className="h-4 w-4" /> Powerful Features
                </div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Everything you need to <br className="hidden md:block" />build your empire</h2>
                <p className="text-xl text-neutral-400">Stop wrestling with spreadsheets. We built the exact tools you need to run a profitable, stress-free fitness business.</p>
              </div>
              <Button className="h-12 bg-transparent border border-white/20 text-white hover:bg-white/10 rounded-full px-6 cursor-pointer">
                See All Features <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Member Management",
                  desc: "Instantly view active, inactive, and expiring memberships with our lightning-fast data grid.",
                  color: "emerald"
                },
                {
                  icon: CreditCard,
                  title: "Automated Billing",
                  desc: "Never miss a due payment. Track monthly fees, create invoices, and see who owes what instantly.",
                  color: "cyan"
                },
                {
                  icon: Activity,
                  title: "Real-time Analytics",
                  desc: "Beautiful dashboards showing daily income, attendance trends, and growth metrics.",
                  color: "blue"
                },
                {
                  icon: ShieldCheck,
                  title: "Biometric Integration",
                  desc: "Connect seamlessly with fingerprint and facial recognition turnstiles API.",
                  color: "purple"
                },
                {
                  icon: Dumbbell,
                  title: "Diet & Workout Plans",
                  desc: "Assign custom routines and diet charts directly to user profiles.",
                  color: "orange"
                },
                {
                  icon: Star,
                  title: "Directory Listing",
                  desc: "Get discovered by thousands of potential customers searching for gyms in your area.",
                  color: "yellow"
                }
              ].map((feature, i) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i}
                  className="p-8 rounded-3xl bg-neutral-900/30 border border-white/5 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 hover:shadow-2xl hover:bg-neutral-900/60"
                >
                  <div className={`h-14 w-14 rounded-2xl bg-neutral-950 flex items-center justify-center mb-6 border border-white/10 group-hover:border-${feature.color}-500/50 transition-colors shadow-inner`}>
                    <feature.icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-neutral-400 leading-relaxed text-base">{feature.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Testimonials --- */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Trusted by the best</h2>
              <p className="text-xl text-neutral-400 max-w-2xl mx-auto">Hear what top gym owners are saying about Iron Ledger.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { name: "Rahul Sharma", role: "Owner, Iron Forge", text: "We switched from our clunky old software last month. The time saved on manual billing alone has paid for the platform 10x over." },
                { name: "Priya Patel", role: "Manager, Zenith Gym", text: "The Analytics dashboard is incredible. I finally know exactly what my retention rate is and exactly who I need to follow up with." },
                { name: "Vikram Singh", role: "CEO, Titan Club", text: "Getting listed on the Iron Ledger explore page brought us 15 new walk-ins our first week. The platform is truly built for growth." }
              ].map((t, i) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  key={i}
                  className="p-8 rounded-3xl bg-gradient-to-br from-neutral-900/50 to-[#050505] border border-white/10 relative"
                >
                  <div className="flex gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map(s => <Star key={s} className="h-5 w-5 fill-amber-400 text-amber-400" />)}
                  </div>
                  <p className="text-lg text-neutral-300 mb-8 italic leading-relaxed">"{t.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-xl">{t.name[0]}</div>
                    <div>
                      <h4 className="font-bold text-white">{t.name}</h4>
                      <p className="text-sm text-neutral-500">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- Massive CTA Section --- */}
        <section className="py-24 px-6 relative overflow-hidden max-w-7xl mx-auto mb-20">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-cyan-600 rounded-[3rem] opacity-20 blur-xl" />
          <div className="bg-gradient-to-br from-neutral-900 to-black border border-white/10 rounded-[3rem] p-12 md:p-24 text-center relative z-10 shadow-2xl overflow-hidden">
            <div className="absolute top-[-50%] right-[-10%] w-[60%] h-[150%] bg-emerald-500/10 blur-[100px] pointer-events-none rounded-full" />

            <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">Ready to dominate?</h2>
            <p className="text-2xl text-neutral-400 max-w-2xl mx-auto mb-12">
              Stop letting admin work hold back your growth. Join Iron Ledger today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/dashboard">
                <Button size="lg" className="h-16 px-10 text-xl bg-white text-black hover:bg-neutral-200 font-bold rounded-full shadow-[0_0_40px_-10px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform cursor-pointer w-full sm:w-auto">
                  Create Your Account
                </Button>
              </Link>
              <Link to="/explore">
                <Button size="lg" className="h-16 px-10 text-xl border border-white/20 text-white hover:bg-white/20 bg-black/40 backdrop-blur-md rounded-full font-semibold cursor-pointer w-full sm:w-auto">
                  View Demo Gyms
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-12 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <Dumbbell className="h-6 w-6 text-emerald-500" />
            <span className="text-2xl font-bold tracking-tight">Iron Ledger</span>
          </div>
          <div className="flex gap-8 text-sm font-medium text-neutral-500">
            <Link to="#" className="hover:text-white transition-colors">Features</Link>
            <Link to="#" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="#" className="hover:text-white transition-colors">Privacy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          </div>
          <p className="text-neutral-600 text-sm">&copy; {new Date().getFullYear()} Iron Ledger. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

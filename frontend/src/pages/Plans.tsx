import { Layout } from "@/components/Layout";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Check, Edit, Trash2 } from "lucide-react";

const plans = [
    {
        id: "PLN-1",
        name: "Monthly Basic",
        price: "₹1,500",
        duration: "1 Month",
        activeMembers: 142,
        features: ["Access to cardio area", "Basic strength equipment", "Locker facility (Day use)", "1 Free fitness assessment"],
        popular: false,
    },
    {
        id: "PLN-2",
        name: "Quarterly Elite",
        price: "₹4,000",
        duration: "3 Months",
        activeMembers: 86,
        features: ["All Basic features", "Unlimited group classes", "Sauna & Steam room access", "1 Personal training session/mo"],
        popular: true,
    },
    {
        id: "PLN-3",
        name: "Annual Pro",
        price: "₹14,500",
        duration: "12 Months",
        activeMembers: 54,
        features: ["All Elite features", "Guest passes (2/month)", "Free gym merchandise", "Dedicated locker space", "Nutrition consultation"],
        popular: false,
    },
];

export default function Plans() {
    return (
        <Layout>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                        Membership Plans
                    </h1>
                    <p className="text-neutral-400 text-lg">Configure membership tiers, pricing, and duration.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <Button className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-semibold shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]">
                        <Plus className="mr-2 h-4 w-4" /> Create New Plan
                    </Button>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`relative rounded-2xl border flex flex-col overflow-hidden bg-neutral-900/40 backdrop-blur-xl group hover:-translate-y-2 transition-transform duration-300 ${plan.popular ? "border-emerald-500/50 shadow-[0_0_30px_-10px_rgba(16,185,129,0.3)]" : "border-white/10 shadow-xl"
                            }`}
                    >
                        {plan.popular && (
                            <div className="absolute top-0 right-0 bg-emerald-500 text-neutral-950 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                                MOST POPULAR
                            </div>
                        )}

                        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                        <div className="p-6 border-b border-white/5 flex flex-col gap-2 relative z-10 bg-black/20">
                            <h3 className="text-2xl font-bold text-white">{plan.name}</h3>
                            <div className="flex items-end gap-1">
                                <span className="text-4xl font-extrabold text-emerald-400 tracking-tight">{plan.price}</span>
                                <span className="text-neutral-500 mb-1">/{plan.duration}</span>
                            </div>
                            <div className="mt-2 text-sm text-neutral-400 flex items-center justify-between">
                                <span>Active Members:</span>
                                <Badge variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                                    {plan.activeMembers}
                                </Badge>
                            </div>
                        </div>

                        <div className="p-6 flex-1 flex flex-col justify-between relative z-10 gap-8">
                            <ul className="space-y-3">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-3 text-neutral-300">
                                        <div className="h-5 w-5 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <Check className="h-3 w-3 text-emerald-400" />
                                        </div>
                                        <span className="text-sm leading-relaxed">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                                <Button variant="outline" className="flex-1 bg-transparent border-white/10 text-white hover:bg-white/10">
                                    <Edit className="mr-2 h-4 w-4" /> Edit
                                </Button>
                                <Button variant="outline" className="flex-none bg-transparent border-rose-500/20 text-rose-400 hover:bg-rose-500/10 hover:text-rose-300">
                                    <Trash2 className="h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Layout>
    );
}

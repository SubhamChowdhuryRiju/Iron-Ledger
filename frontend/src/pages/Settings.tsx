import { Layout } from "@/components/Layout";
import { motion, AnimatePresence } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { useState, useEffect } from "react";
import { CreditCard, Bell, Shield, User } from "lucide-react";
import { useSearchParams } from "react-router-dom";

export default function Settings() {
    const [searchParams] = useSearchParams();
    const tabParam = searchParams.get("tab");
    const [activeTab, setActiveTab] = useState(tabParam || "profile");

    useEffect(() => {
        if (tabParam) {
            setActiveTab(tabParam);
        }
    }, [tabParam]);

    const renderContent = () => {
        switch (activeTab) {
            case "profile":
                return (
                    <motion.div
                        key="profile"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 max-w-2xl"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-1">Gym Profile</h3>
                            <p className="text-sm text-neutral-400">Update your fitness center's public information.</p>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="gymName" className="text-neutral-300">Gym Name</Label>
                            <Input id="gymName" defaultValue="Iron Ledger Fitness" className="bg-black/40 border-white/10 text-white focus-visible:ring-emerald-500/50" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="grid gap-2">
                                <Label htmlFor="ownerName" className="text-neutral-300">Owner Name</Label>
                                <Input id="ownerName" defaultValue="Admin User" className="bg-black/40 border-white/10 text-white focus-visible:ring-emerald-500/50" />
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="contactEmail" className="text-neutral-300">Contact Email</Label>
                                <Input id="contactEmail" type="email" defaultValue="admin@ironledger.com" className="bg-black/40 border-white/10 text-white focus-visible:ring-emerald-500/50" />
                            </div>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="address" className="text-neutral-300">Location Address</Label>
                            <Input id="address" defaultValue="123 Fitness St, Mumbai, MH 400001" className="bg-black/40 border-white/10 text-white focus-visible:ring-emerald-500/50" />
                        </div>

                        <Separator className="bg-white/10 my-8" />

                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-white mb-1">Brand Identity</h3>
                            <p className="text-sm text-neutral-400">Manage your logo and brand colors.</p>
                        </div>

                        <div className="flex items-center gap-6">
                            <div className="h-24 w-24 rounded-full bg-emerald-500/10 flex items-center justify-center border-2 border-dashed border-emerald-500/30 overflow-hidden text-emerald-500 font-bold">
                                Logo
                            </div>
                            <Button variant="outline" className="border-white/10 bg-black/40 text-neutral-300 hover:bg-white/10 hover:text-white">
                                Change Image
                            </Button>
                        </div>

                        <div className="flex justify-end gap-4 pt-8">
                            <Button variant="ghost" className="text-neutral-400 hover:text-white hover:bg-white/10">
                                Discard Changes
                            </Button>
                            <Button className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]">
                                Save Profile Settings
                            </Button>
                        </div>
                    </motion.div>
                );
            case "billing":
                return (
                    <motion.div
                        key="billing"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 max-w-2xl"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-1">Bank & Billing Details</h3>
                            <p className="text-sm text-neutral-400">Manage your payment payout methods and billing information.</p>
                        </div>

                        <div className="p-6 rounded-xl border border-white/10 bg-black/40 flex items-start justify-between gap-4">
                            <div className="flex items-start gap-4">
                                <div className="h-10 w-10 rounded-lg bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 shrink-0">
                                    <CreditCard className="h-5 w-5 text-emerald-400" />
                                </div>
                                <div>
                                    <h4 className="text-white font-medium">HDFC Bank Account</h4>
                                    <p className="text-sm text-neutral-400">Ending in **** 1234</p>
                                    <p className="text-xs text-emerald-400 mt-1">Primary Payout Method</p>
                                </div>
                            </div>
                            <Button variant="outline" size="sm" className="border-white/10 bg-transparent text-neutral-300 hover:text-white hover:bg-white/10">
                                Edit
                            </Button>
                        </div>

                        <Button className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white border-dashed">
                            + Add New Payment Method
                        </Button>

                        <Separator className="bg-white/10 my-8" />

                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-white mb-1">GST Details</h3>
                            <p className="text-sm text-neutral-400">Required for official invoices and taxation.</p>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="gstin" className="text-neutral-300">GSTIN Number</Label>
                            <Input id="gstin" placeholder="e.g. 22AAAAA0000A1Z5" className="bg-black/40 border-white/10 text-white focus-visible:ring-emerald-500/50" />
                        </div>
                        <div className="flex justify-end gap-4 pt-8">
                            <Button className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]">
                                Save Billing Settings
                            </Button>
                        </div>
                    </motion.div>
                );
            case "notifications":
                return (
                    <motion.div
                        key="notifications"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 max-w-2xl"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-1">Notification Preferences</h3>
                            <p className="text-sm text-neutral-400">Choose what alerts you want to receive.</p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20">
                                <div>
                                    <h4 className="text-white font-medium">Payment Successful</h4>
                                    <p className="text-sm text-neutral-400">Get notified when a member completes a payment.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20">
                                <div>
                                    <h4 className="text-white font-medium">Membership Expiry Alerts</h4>
                                    <p className="text-sm text-neutral-400">Daily summary of memberships expiring in 3 days.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20">
                                <div>
                                    <h4 className="text-white font-medium">New Member Registrations</h4>
                                    <p className="text-sm text-neutral-400">Alerts for new signups via the portal.</p>
                                </div>
                                <Switch defaultChecked />
                            </div>
                            <div className="flex items-center justify-between p-4 rounded-xl border border-white/5 bg-black/20 opacity-50">
                                <div>
                                    <h4 className="text-white font-medium">Weekly Reports (Email)</h4>
                                    <p className="text-sm text-neutral-400">Receive weekly revenue and attendance summaries.</p>
                                </div>
                                <Switch disabled />
                            </div>
                        </div>
                    </motion.div>
                );
            case "security":
                return (
                    <motion.div
                        key="security"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6 max-w-2xl"
                    >
                        <div className="mb-8">
                            <h3 className="text-xl font-bold text-white mb-1">Security & Access</h3>
                            <p className="text-sm text-neutral-400">Manage passwords and active sessions.</p>
                        </div>

                        <div className="grid gap-2">
                            <Label htmlFor="currentPassword" className="text-neutral-300">Current Password</Label>
                            <Input id="currentPassword" type="password" className="bg-black/40 border-white/10 text-white focus-visible:ring-emerald-500/50" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="newPassword" className="text-neutral-300">New Password</Label>
                            <Input id="newPassword" type="password" className="bg-black/40 border-white/10 text-white focus-visible:ring-emerald-500/50" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="confirmPassword" className="text-neutral-300">Confirm New Password</Label>
                            <Input id="confirmPassword" type="password" className="bg-black/40 border-white/10 text-white focus-visible:ring-emerald-500/50" />
                        </div>
                        <div className="flex justify-end gap-4 mt-4">
                            <Button className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 font-bold shadow-[0_0_15px_-3px_rgba(16,185,129,0.4)]">
                                Update Password
                            </Button>
                        </div>

                        <Separator className="bg-white/10 my-8" />

                        <div className="mb-4">
                            <h3 className="text-lg font-bold text-rose-500 mb-1">Danger Zone</h3>
                            <p className="text-sm text-neutral-400">Irreversible actions for your account.</p>
                        </div>
                        <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 flex items-center justify-between">
                            <div>
                                <h4 className="text-white font-medium">Deactivate Account</h4>
                                <p className="text-sm text-rose-400/80">Temporarily pause all gym operations and subscriptions.</p>
                            </div>
                            <Button variant="destructive" className="bg-rose-500 hover:bg-rose-600">
                                Deactivate
                            </Button>
                        </div>
                    </motion.div>
                );
            default:
                return null;
        }
    };

    return (
        <Layout>
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
            >
                <h1 className="text-4xl font-extrabold tracking-tight mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500">
                    Settings
                </h1>
                <p className="text-neutral-400 text-lg">Manage your gym preferences, notifications, and account details.</p>
            </motion.div>

            <div className="mt-8 flex flex-col lg:flex-row gap-8">
                {/* Settings Navigation Sidebar */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="w-full lg:w-64 space-y-2 shrink-0"
                >
                    <button
                        onClick={() => setActiveTab("profile")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === "profile"
                            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                            : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                    >
                        <User className="h-4 w-4" />
                        Profile Details
                    </button>
                    <button
                        onClick={() => setActiveTab("billing")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === "billing"
                            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                            : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                    >
                        <CreditCard className="h-4 w-4" />
                        Bank & Billing
                    </button>
                    <button
                        onClick={() => setActiveTab("notifications")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === "notifications"
                            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                            : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                    >
                        <Bell className="h-4 w-4" />
                        Notifications
                    </button>
                    <button
                        onClick={() => setActiveTab("security")}
                        className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${activeTab === "security"
                            ? "text-emerald-400 bg-emerald-500/10 border border-emerald-500/20"
                            : "text-neutral-400 hover:text-white hover:bg-white/5 border border-transparent"
                            }`}
                    >
                        <Shield className="h-4 w-4" />
                        Security
                    </button>
                </motion.div>

                {/* Settings Content Area */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex-1 rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl overflow-hidden shadow-2xl relative group p-8 min-h-[500px]"
                >
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />

                    <AnimatePresence mode="wait">
                        {renderContent()}
                    </AnimatePresence>
                </motion.div>
            </div>
        </Layout>
    );
}

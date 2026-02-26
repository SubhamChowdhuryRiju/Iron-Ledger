import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Star, IndianRupee, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { gyms } from "@/data/gyms";

export default function GymDetails() {
    const { gymName } = useParams();

    // Reconstruct a normalized ID based on name routing convention (e.g. Iron Forge => iron-forge)
    // or just match by name ignoring case and spaces for ease of mock matching
    const gym = gyms.find(g =>
        g.name.toLowerCase().replace(/[^a-z0-9]+/g, '-') === gymName
    );

    if (!gym) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] text-neutral-50 flex items-center justify-center flex-col gap-6">
                <Dumbbell className="h-16 w-16 text-neutral-600" />
                <h1 className="text-3xl font-bold">Gym Not Found</h1>
                <p className="text-neutral-400">The gym you're looking for doesn't exist.</p>
                <Link to="/explore">
                    <Button className="bg-transparent border border-white/10 text-white hover:bg-white/10 cursor-pointer">
                        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Search
                    </Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-neutral-50 selection:bg-emerald-500/30 font-sans">
            {/* Background ambient glow */}
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 py-12 relative z-10">
                <Link to="/explore">
                    <Button variant="ghost" className="mb-8 text-neutral-400 hover:text-black hover:bg-white group bg-neutral-900/40 cursor-pointer">
                        <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                        Back to Search
                    </Button>
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl relative"
                    >
                        <div className="absolute top-6 left-6 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10">
                            <Star className="h-4 w-4 text-amber-400 fill-amber-400" />
                            <span className="text-sm font-bold text-white">{gym.rating} Rating</span>
                        </div>
                        <img
                            src={gym.image}
                            alt={gym.name}
                            className="w-full h-[500px] object-cover"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="space-y-8"
                    >
                        <div>
                            <h1 className="text-5xl font-extrabold tracking-tight mb-4">{gym.name}</h1>
                            <div className="flex items-center gap-2 text-neutral-400 text-lg">
                                <MapPin className="h-5 w-5 text-emerald-400" />
                                <span>{gym.area}, {gym.city}, {gym.state}</span>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl">
                            <p className="text-sm text-neutral-500 mb-1">Membership Starting At</p>
                            <div className="flex items-end text-emerald-400 font-bold">
                                <IndianRupee className="h-8 w-8 mb-1" />
                                <span className="text-5xl">{gym.price}</span>
                                <span className="text-lg text-neutral-500 font-normal ml-2 mb-1">/ month</span>
                            </div>

                            <Button className="w-full mt-6 bg-emerald-500 hover:bg-emerald-600 text-black font-bold h-12 text-lg cursor-pointer">
                                Contact Gym
                            </Button>
                        </div>

                        <div className="space-y-4">
                            <h3 className="text-2xl font-bold">About {gym.name}</h3>
                            <p className="text-neutral-400 leading-relaxed text-lg">
                                Welcome to {gym.name}, the premium fitness destination in {gym.area}, {gym.city}.
                                Equipped with state-of-the-art facilities and experienced trainers, we provide a holistic
                                fitness experience tailored to your goals. Whether you're into strength training, cardio,
                                or cross-functional workouts, our expansive gym floor has everything you need to succeed.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

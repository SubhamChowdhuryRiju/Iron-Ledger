import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Star, IndianRupee, Dumbbell, Filter, Check, ChevronsUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

export default function GymSearch() {
    const [state, setState] = useState("");
    const [city, setCity] = useState("");
    const [area, setArea] = useState("");
    const [priceRange, setPriceRange] = useState("10000");
    const [minRating, setMinRating] = useState("4.0");

    const [openState, setOpenState] = useState(false);
    const [openCity, setOpenCity] = useState(false);
    const [openArea, setOpenArea] = useState(false);

    const gyms = [
        {
            id: 1,
            name: "Iron Forge Fitness",
            state: "Maharashtra",
            city: "Mumbai",
            area: "Andheri West",
            rating: 4.8,
            price: 2500,
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: 2,
            name: "Titan Strength Club",
            state: "Maharashtra",
            city: "Mumbai",
            area: "Bandra",
            rating: 4.6,
            price: 4000,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: 3,
            name: "Zenith Gym",
            state: "Karnataka",
            city: "Bengaluru",
            area: "Indiranagar",
            rating: 4.9,
            price: 3000,
            image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: 4,
            name: "Spartan Athletics",
            state: "Delhi",
            city: "New Delhi",
            area: "Vasant Kunj",
            rating: 4.5,
            price: 2000,
            image: "https://images.unsplash.com/photo-1558611848-73f7eb4001a1?q=80&w=1471&auto=format&fit=crop"
        },
        {
            id: 5,
            name: "Muscle Blaze Arena",
            state: "Gujarat",
            city: "Ahmedabad",
            area: "Satellite",
            rating: 4.7,
            price: 1800,
            image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1469&auto=format&fit=crop"
        },
        {
            id: 6,
            name: "Elite Fitness Studio",
            state: "Maharashtra",
            city: "Pune",
            area: "Koregaon Park",
            rating: 4.9,
            price: 5000,
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: 7,
            name: "Hustle & Muscle",
            state: "West Bengal",
            city: "Kolkata",
            area: "Salt Lake",
            rating: 4.8,
            price: 2500,
            image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1470&auto=format&fit=crop"
        },
        {
            id: 8,
            name: "Iron Core Gym",
            state: "West Bengal",
            city: "Kolkata",
            area: "New Town",
            rating: 4.5,
            price: 1500,
            image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop"
        }
    ];

    const uniqueStates = Array.from(new Set(gyms.map(g => g.state)));
    const uniqueCities = Array.from(new Set(gyms.filter(g => !state || g.state === state).map(g => g.city)));
    const uniqueAreas = Array.from(new Set(gyms.filter(g => (!state || g.state === state) && (!city || g.city === city)).map(g => g.area)));

    const filteredGyms = gyms.filter(gym =>
        gym.state.toLowerCase().includes(state.toLowerCase()) &&
        gym.city.toLowerCase().includes(city.toLowerCase()) &&
        gym.area.toLowerCase().includes(area.toLowerCase()) &&
        gym.price <= parseInt(priceRange || "100000") &&
        gym.rating >= parseFloat(minRating || "0")
    );

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-neutral-50 selection:bg-emerald-500/30">
            {/* Background ambient glow */}
            <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-emerald-900/20 blur-[150px] pointer-events-none" />
            <div className="fixed bottom-[-20%] right-[-10%] w-[40%] h-[40%] rounded-full bg-emerald-900/10 blur-[120px] pointer-events-none" />

            {/* Navbar */}
            <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-black/40 backdrop-blur-xl sticky top-0 z-50">
                <Link to="/" className="flex items-center gap-2">
                    <Dumbbell className="h-6 w-6 text-emerald-400" />
                    <span className="text-xl font-bold tracking-tight">Iron Ledger</span>
                </Link>
                <Link to="/dashboard">
                    <Button variant="ghost" className="text-neutral-400 hover:text-white">
                        Gym Owner Login
                    </Button>
                </Link>
            </nav>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="text-center mb-12 space-y-4">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight"
                    >
                        Find your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-500">Perfect Gym</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-400 max-w-2xl mx-auto"
                    >
                        Discover top-rated fitness centers across India. Filter by your city, area, price range, and member ratings.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 items-start w-full">
                    {/* Sidebar Filters */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl p-6 h-fit sticky top-24 w-full"
                    >
                        <div className="flex items-center gap-2 text-emerald-400 mb-6">
                            <Filter className="h-5 w-5" />
                            <h2 className="text-lg font-bold text-white">Filters</h2>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-sm font-medium text-neutral-400 block mb-2">State</label>
                                <Popover open={openState} onOpenChange={setOpenState}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openState}
                                            className="w-full justify-between bg-black/40 border-white/10 text-white hover:bg-white/5 hover:text-white"
                                        >
                                            {state ? state : "All States"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-neutral-900 border-white/10 text-white">
                                        <Command className="bg-transparent">
                                            <CommandInput placeholder="Search state..." className="text-white" />
                                            <CommandList>
                                                <CommandEmpty>No state found.</CommandEmpty>
                                                <CommandGroup>
                                                    <CommandItem
                                                        value="all"
                                                        onSelect={() => {
                                                            setState("");
                                                            setCity("");
                                                            setArea("");
                                                            setOpenState(false);
                                                        }}
                                                        className="text-white data-[selected=true]:bg-emerald-500 data-[selected=true]:text-white data-[selected='true']:bg-emerald-500 data-[selected='true']:text-white"
                                                    >
                                                        <Check className={cn("mr-2 h-4 w-4", state === "" ? "opacity-100" : "opacity-0")} />
                                                        All States
                                                    </CommandItem>
                                                    {uniqueStates.map((s) => (
                                                        <CommandItem
                                                            key={s}
                                                            value={s}
                                                            onSelect={(currentValue: string) => {
                                                                setState(currentValue === state ? "" : s);
                                                                setCity(""); // Reset dependent filters
                                                                setArea("");
                                                                setOpenState(false);
                                                            }}
                                                            className="text-white data-[selected=true]:bg-emerald-500 data-[selected=true]:text-white data-[selected='true']:bg-emerald-500 data-[selected='true']:text-white"
                                                        >
                                                            <Check className={cn("mr-2 h-4 w-4", state === s ? "opacity-100" : "opacity-0")} />
                                                            {s}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-neutral-400 block mb-2">City</label>
                                <Popover open={openCity} onOpenChange={setOpenCity}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openCity}
                                            className="w-full justify-between bg-black/40 border-white/10 text-white hover:bg-white/5 hover:text-white disabled:opacity-50"
                                            disabled={!state && uniqueCities.length === 0}
                                        >
                                            {city ? city : "All Cities"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-neutral-900 border-white/10 text-white">
                                        <Command className="bg-transparent">
                                            <CommandInput placeholder="Search city..." className="text-white" />
                                            <CommandList>
                                                <CommandEmpty>No city found.</CommandEmpty>
                                                <CommandGroup>
                                                    <CommandItem
                                                        value="all"
                                                        onSelect={() => {
                                                            setCity("");
                                                            setArea("");
                                                            setOpenCity(false);
                                                        }}
                                                        className="text-white data-[selected=true]:bg-emerald-500 data-[selected=true]:text-white data-[selected='true']:bg-emerald-500 data-[selected='true']:text-white"
                                                    >
                                                        <Check className={cn("mr-2 h-4 w-4", city === "" ? "opacity-100" : "opacity-0")} />
                                                        All Cities
                                                    </CommandItem>
                                                    {uniqueCities.map((c) => (
                                                        <CommandItem
                                                            key={c}
                                                            value={c}
                                                            onSelect={(currentValue: string) => {
                                                                setCity(currentValue === city ? "" : c);
                                                                setArea(""); // Reset dependent filter
                                                                setOpenCity(false);
                                                            }}
                                                            className="text-white data-[selected=true]:bg-emerald-500 data-[selected=true]:text-white data-[selected='true']:bg-emerald-500 data-[selected='true']:text-white"
                                                        >
                                                            <Check className={cn("mr-2 h-4 w-4", city === c ? "opacity-100" : "opacity-0")} />
                                                            {c}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div>
                                <label className="text-sm font-medium text-neutral-400 block mb-2">Locality</label>
                                <Popover open={openArea} onOpenChange={setOpenArea}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="outline"
                                            role="combobox"
                                            aria-expanded={openArea}
                                            className="w-full justify-between bg-black/40 border-white/10 text-white hover:bg-white/5 hover:text-white disabled:opacity-50"
                                            disabled={!city && uniqueAreas.length === 0}
                                        >
                                            {area ? area : "All locality"}
                                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-[--radix-popover-trigger-width] p-0 bg-neutral-900 border-white/10 text-white">
                                        <Command className="bg-transparent">
                                            <CommandInput placeholder="Search locality..." className="text-white" />
                                            <CommandList>
                                                <CommandEmpty>No locality found.</CommandEmpty>
                                                <CommandGroup>
                                                    <CommandItem
                                                        value="all"
                                                        onSelect={() => {
                                                            setArea("");
                                                            setOpenArea(false);
                                                        }}
                                                        className="text-white data-[selected=true]:bg-emerald-500 data-[selected=true]:text-white data-[selected='true']:bg-emerald-500 data-[selected='true']:text-white"
                                                    >
                                                        <Check className={cn("mr-2 h-4 w-4", area === "" ? "opacity-100" : "opacity-0")} />
                                                        All locality
                                                    </CommandItem>
                                                    {uniqueAreas.map((a) => (
                                                        <CommandItem
                                                            key={a}
                                                            value={a}
                                                            onSelect={(currentValue: string) => {
                                                                setArea(currentValue === area ? "" : a);
                                                                setOpenArea(false);
                                                            }}
                                                            className="text-white data-[selected=true]:bg-emerald-500 data-[selected=true]:text-white data-[selected='true']:bg-emerald-500 data-[selected='true']:text-white"
                                                        >
                                                            <Check className={cn("mr-2 h-4 w-4", area === a ? "opacity-100" : "opacity-0")} />
                                                            {a}
                                                        </CommandItem>
                                                    ))}
                                                </CommandGroup>
                                            </CommandList>
                                        </Command>
                                    </PopoverContent>
                                </Popover>
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <label className="text-sm font-medium text-neutral-400 block mb-2">
                                    Max Price: ₹{priceRange} / mo
                                </label>
                                <input
                                    type="range"
                                    min="500"
                                    max="10000"
                                    step="500"
                                    value={priceRange}
                                    onChange={(e) => setPriceRange(e.target.value)}
                                    className="w-full accent-emerald-500"
                                />
                            </div>

                            <div className="pt-4 border-t border-white/5">
                                <label className="text-sm font-medium text-neutral-400 block mb-2">
                                    Minimum Rating: {minRating} <Star className="inline h-3 w-3 text-amber-400" />
                                </label>
                                <input
                                    type="range"
                                    min="1"
                                    max="5"
                                    step="0.1"
                                    value={minRating}
                                    onChange={(e) => setMinRating(e.target.value)}
                                    className="w-full accent-amber-500"
                                />
                            </div>
                        </div>

                        <Button
                            onClick={() => {
                                setState(""); setCity(""); setArea(""); setPriceRange("10000"); setMinRating("4.0");
                            }}
                            variant="outline"
                            className="w-full mt-6 border-white/10 text-neutral-400 hover:text-white hover:bg-white/5"
                        >
                            Reset Filters
                        </Button>
                    </motion.div>

                    {/* Gym Listings */}
                    <div className="lg:col-span-3 w-full min-w-0">
                        <div className="mb-6 flex items-center justify-between">
                            <h2 className="text-xl font-semibold text-white">
                                {filteredGyms.length} {filteredGyms.length === 1 ? 'Gym' : 'Gyms'} found
                            </h2>
                        </div>

                        {filteredGyms.length === 0 ? (
                            <div className="text-center py-20 rounded-2xl border border-white/5 bg-neutral-900/20 backdrop-blur-sm">
                                <Dumbbell className="h-12 w-12 text-neutral-600 mx-auto mb-4" />
                                <h3 className="text-xl font-bold mb-2">No gyms found</h3>
                                <p className="text-neutral-400">Try adjusting your location or price filters.</p>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                                {filteredGyms.map((gym, index) => (
                                    <motion.div
                                        key={gym.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 * index }}
                                        className="group rounded-2xl border border-white/5 bg-neutral-900/40 backdrop-blur-xl overflow-hidden hover:border-emerald-500/30 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_-10px_rgba(16,185,129,0.2)] flex flex-col"
                                    >
                                        <div className="h-48 overflow-hidden relative">
                                            <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10" />
                                            <div className="absolute top-4 left-4 z-20 flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                                                <Star className="h-3.5 w-3.5 text-amber-400 fill-amber-400" />
                                                <span className="text-xs font-bold text-white">{gym.rating}</span>
                                            </div>
                                            <img
                                                src={gym.image}
                                                alt={gym.name}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>

                                        <div className="p-5 flex-1 flex flex-col">
                                            <h3 className="text-xl font-bold text-white mb-2">{gym.name}</h3>

                                            <div className="flex items-start gap-1.5 text-neutral-400 text-sm mb-4">
                                                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                                                <span>{gym.area}, {gym.city}, {gym.state}</span>
                                            </div>

                                            <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                                                <div>
                                                    <p className="text-xs text-neutral-500 mb-0.5">Starting at</p>
                                                    <div className="flex items-center text-emerald-400 font-bold text-lg">
                                                        <IndianRupee className="h-4 w-4" />
                                                        <span>{gym.price}</span><span className="text-sm text-neutral-500 font-normal ml-1">/mo</span>
                                                    </div>
                                                </div>
                                                <Button className="bg-white/5 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                                                    View Details
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
}

"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Search, ChevronDown, Home } from "lucide-react";

const categories = [
    "Engineering",
    "Product",
    "Design"
];

export function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col bg-[#0a0c1b] border-b border-white/10">
            {/* Top Row */}
            <div className="mx-auto w-full max-w-[1150px] px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between gap-8">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-2xl font-serif text-white tracking-tight">Wholesession</span>
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:flex flex-1 max-w-md">
                        <div className="relative w-full">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <Search className="h-4 w-4 text-gray-400" aria-hidden="true" />
                            </div>
                            <input
                                type="text"
                                className="block w-full rounded-full border-0 bg-white/10 py-2 pl-10 pr-4 text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-purple-500 sm:text-sm sm:leading-6"
                                placeholder="What do you want to learn?"
                            />
                        </div>
                    </div>

                    {/* Right Links */}
                    <div className="flex items-center gap-6">
                        {/* <Link
                            href="#"
                            className="hidden text-sm font-medium text-gray-300 hover:text-white md:block"
                        >
                            Apply to teach
                        </Link> */}
                        <Link
                            href="#"
                            className="text-sm font-medium text-white hover:text-gray-300"
                        >
                            Explore Courses
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Row (Categories) */}
            <div className="border-t border-white/10 bg-[#0a0c1b]">
                <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8">
                    <div className="flex h-12 items-center gap-8 overflow-x-auto no-scrollbar">
                        <Link href="/" className="text-gray-400 hover:text-white border-b-2 border-transparent hover:border-white py-3">
                            <Home className="h-5 w-5" />
                        </Link>
                        {categories.map((category) => (
                            <Link
                                key={category}
                                href="#"
                                className="flex items-center gap-1 text-sm font-medium text-gray-300 hover:text-white whitespace-nowrap"
                            >
                                {category} <ChevronDown className="h-3 w-3" />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}

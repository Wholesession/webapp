"use client";

import Link from "next/link";
import SecLogo from "@/public/ws-purple.svg";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
// import { Search } from "lucide-react";

export function CourseHeader() {
    return (
        <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
            <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-8">

                {/* Logo Section */}
                <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                    <span className="text-2xl font-serif text-white tracking-tight">
                        <Image src={SecLogo} alt="Wholesession Logo" width={180} height={40} className="w-[180px] h-[unset]"/>
                    </span>
                </Link>

                {/* Search Bar - Center */}
                {/* <div className="hidden md:flex flex-1 max-w-md relative">
                    <div className="relative w-full">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                            type="search"
                            placeholder="What do you want to learn?"
                            className="w-full pl-10 bg-gray-50 border-gray-200 focus-visible:ring-purple-100 rounded-full"
                        />
                    </div>
                </div> */}

                {/* Nav Links - Right */}
                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/courses" className="hover:text-[#0a0c1b] transition-colors">
                        Browse courses
                    </Link>
                    {/* <Link href="#" className="hover:text-[#0a0c1b] transition-colors">
                        Lightning Lessons
                    </Link> */}
                    <Link href="/teach" className="hover:text-[#0a0c1b] transition-colors">
                        Apply to teach
                    </Link>
                    <Link href="/login" className="hover:text-[#0a0c1b] transition-colors">
                        Log In
                    </Link>
                </nav>

                {/* Mobile Menu Toggle would go here */}
                <div className="md:hidden">
                    <Button variant="ghost" size="icon">
                        <span className="sr-only">Toggle menu</span>
                        {/* Hamburger icon */}
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                    </Button>
                </div>
            </div>
        </header>
    );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export function Navbar({ theme = "dark" }: { theme?: "dark" | "light" }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isMobileMenuOpen]);


    const isDarkText = theme === "light" && !isScrolled;

    return (
        <>
            <nav
                className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? (theme === "light" ? "bg-black/95 backdrop-blur-md shadow-lg py-3" : "bg-black/95 backdrop-blur-md shadow-lg py-3")
                    : "bg-transparent py-4 mx-auto"
                    }`}
            >
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center shrink-0">
                            {/* Toggle logo based on background brightness */}
                            <Image
                                src={isDarkText ? "/ws-main-black.svg" : "/ws-main-white.svg"}
                                alt="Wholesession Logo"
                                width={220}
                                height={40}
                                className="w-auto h-10"
                                priority
                            />
                        </Link>

                        {/* Center Navigation - Desktop */}
                        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                            <div className={`flex items-center gap-1 px-2 py-2 rounded-full backdrop-blur-sm border ${isDarkText ? "bg-black/5 border-black/5" : "bg-[#fff] text-black border-[#aaa]"
                                }`}>
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`px-4 py-2 text-sm font-medium rounded-full transition-all duration-200 ${isDarkText
                                            ? "text-gray-900 hover:text-gray-600 hover:bg-black/5"
                                            : "text-gray-800 hover:bg-black/5"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Side - CTA Button */}
                        <div className="flex items-center gap-4">
                            {/* Browse Courses Button - Desktop */}
                            <Link
                                href="/courses"
                                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 bg-[#4F70FF] text-white text-sm font-semibold rounded-lg hover:bg-[#3B5BDB] transition-all duration-300 shadow-lg shadow-[#4F70FF]/20"
                            >
                                Browse courses
                                <svg
                                    className="w-4 h-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M7 17L17 7M17 7H7M17 7V17"
                                    />
                                </svg>
                            </Link>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className={`lg:hidden p-2 rounded-lg transition-colors ${isDarkText ? "text-black hover:bg-black/5" : "text-white hover:bg-white/10"
                                    }`}
                                aria-label="Toggle menu"
                            >
                                {isMobileMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-[#0a0a0a] shadow-2xl transform transition-transform duration-300 ease-out lg:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-white/10">
                        <span className="text-white font-semibold">Menu</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
                            aria-label="Close menu"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>

                    {/* Mobile Navigation Links */}
                    <div className="flex-1 overflow-y-auto py-4">
                        <div className="space-y-1 px-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="flex items-center justify-between px-4 py-3 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                                >
                                    <span className="font-medium">{link.name}</span>
                                    <ChevronDown className="h-4 w-4 -rotate-90" />
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="my-4 mx-4 border-t border-white/10" />
                    </div>

                    {/* Mobile Menu Footer - CTA */}
                    <div className="p-4 border-t border-white/10">
                        <Link
                            href="/courses"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#4F70FF] text-white font-semibold rounded-lg hover:bg-[#3B5BDB] transition-all duration-300"
                        >
                            Browse courses
                            <svg
                                className="w-4 h-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M7 17L17 7M17 7H7M17 7V17"
                                />
                            </svg>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

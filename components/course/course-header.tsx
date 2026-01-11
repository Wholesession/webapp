"use client";

import Link from "next/link";
import SecLogo from "@/public/ws-main-black.svg";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
    { name: "Courses", href: "/courses" },
    { name: "Teach", href: "/teach" },
    { name: "About", href: "/about" },
    { name: "Blog", href: "/blog" },
];

export function CourseHeader() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Prevent body scroll when mobile menu is open
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

    return (
        <>
            <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100">
                <div className="container mx-auto px-4 lg:px-8 h-16 flex items-center justify-between gap-8">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-2xl font-body text-white tracking-tight">
                            <Image src={SecLogo} alt="Wholesession Logo" width={220} height={40} className="w-[220px] h-[unset]" />
                        </span>
                    </Link>

                    {/* Nav Links - Right */}
                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                        <Link href="/login" className="transition-colors bg-[#4F70FF] text-white text-[1rem] font-semibold rounded-lg hover:bg-[#3B5BDB] transition-all duration-300 shadow-lg shadow-[#4F70FF]/20 px-5 py-2.5">
                            Enroll now
                        </Link>
                    </nav>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-6 w-6" />
                        ) : (
                            <Menu className="h-6 w-6" />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Mobile Menu Drawer */}
            <div
                className={`fixed top-0 right-0 z-50 h-full w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-100">
                        <span className="text-gray-900 font-semibold">Menu</span>
                        <button
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
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
                                    className="flex items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                                >
                                    <span className="font-medium">{link.name}</span>
                                    <ChevronDown className="h-4 w-4 -rotate-90 text-gray-400" />
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="my-4 mx-4 border-t border-gray-100" />

                        {/* Additional Links */}
                        <div className="space-y-1 px-4">
                            <Link
                                href="/about"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                About Us
                            </Link>
                            <Link
                                href="/faq"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                FAQ
                            </Link>
                            <Link
                                href="/contact"
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="flex items-center px-4 py-3 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                            >
                                Contact
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Footer - Enroll CTA */}
                    <div className="p-4 border-t border-gray-100">
                        <Link
                            href="/login"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="flex items-center justify-center gap-2 w-full px-5 py-3 bg-[#4F70FF] text-white font-semibold rounded-lg hover:bg-[#3B5BDB] transition-all duration-300 shadow-lg shadow-[#4F70FF]/20"
                        >
                            Enroll Now
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

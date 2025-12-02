import Link from "next/link";
import { Twitter, Linkedin, Instagram, Github } from "lucide-react";

const footerLinks = {
    Explore: [
        { name: "AI", href: "#" },
        { name: "Product Management", href: "#" },
        { name: "Engineering", href: "#" },
        { name: "Design", href: "#" },
        { name: "Leadership", href: "#" },
    ],
    Company: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Press", href: "#" },
        { name: "Partners", href: "#" },
    ],
    Resources: [
        { name: "Lightning Lessons", href: "#" },
        { name: "Become an Instructor", href: "#" },
        { name: "Success Stories", href: "#" },
        { name: "Newsletter", href: "#" },
    ],
    Support: [
        { name: "Help Center", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
        { name: "Cookie Policy", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-[#0a0c1b] border-t border-white/10 pt-16 pb-8">
            <div className="mx-auto max-w-[1150px] px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="text-2xl font-serif text-white tracking-tight">
                            Wholesession
                        </Link>
                        <p className="mt-4 text-sm text-gray-400 max-w-xs">
                            Cohort-based learning for the next generation of tech leaders.
                            Master your craft with guidance from the industry's best.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Instagram className="h-5 w-5" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Github className="h-5 w-5" />
                            </Link>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
                                {category}
                            </h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.href}
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-xs text-gray-500">
                        &copy; {new Date().getFullYear()} Wholesession Inc. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <p className="text-xs text-gray-500">
                            Made with ❤️ in Lagos, Nigeria
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

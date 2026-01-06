import Link from "next/link";
import {FaTwitter, FaTiktok, FaLinkedin, FaInstagram} from "react-icons/fa"
import Image from "next/image";

const footerLinks = {
    Explore: [
        { name: "Product", href: "#" },
        { name: "Engineering", href: "#" },
        { name: "Design", href: "#" },
    ],
    Company: [
        { name: "About Us", href: "#" },
        { name: "Blog", href: "#" },
    ],
    Support: [
        { name: "Terms of Service", href: "#" },
        { name: "Privacy Policy", href: "#" },
    ],
};

export function Footer() {
    return (
        <footer className="bg-[#372772] border-t border-white/10 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-5 mb-12">
                    <div className="col-span-2 lg:col-span-2">
                        <Link href="/" className="text-2xl font-serif text-white tracking-tight">
                             <Image src="/ws.svg" alt="Logo" width={40} height={0} className="w-[180px] h-[unset]"/>
                        </Link>
                        <p className="mt-4 text-[1rem] text-gray-400 max-w-xs">
                            Cohort-based learning for the next generation of tech leaders.
                            Master your craft with guidance from the industry's best.
                        </p>
                        <div className="flex gap-4 mt-6">
                            <Link href="https://x.com/usewholesession" className="text-gray-400 hover:text-white transition-colors">
                                <FaTwitter className="h-5 w-5 text-[1rem]" />
                            </Link>
                            <Link href="https://www.linkedin.com/company/wholesession" className="text-gray-400 hover:text-white transition-colors">
                                <FaLinkedin className="h-5 w-5 text-[1rem]" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram className="h-5 w-5 text-[1rem]" />
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                                <FaTiktok className="h-5 w-5 text-[1rem]" />
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
                                            className="text-[1rem] text-gray-400 hover:text-white transition-colors"
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
                    <p className="text-[.857rem] text-gray-500">
                        &copy; {new Date().getFullYear()} Wholesession Technologies LLC. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <p className="text-[.857rem] text-gray-500">
                            Contact support: support@wholesession.com
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

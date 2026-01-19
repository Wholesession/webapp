"use client";

import { motion } from "framer-motion";

// Company logos where instructors have worked/shipped
const companies = [
    { name: "Moniepoint", logo: "Moniepoint" },
    { name: "Flutterwave", logo: "Flutterwave" },
    { name: "Andela", logo: "Andela" },
    { name: "Paystack", logo: "Paystack" },
    { name: "Interswitch", logo: "Interswitch"}
];

export function TrustedBy() {
    return (
        <section className="py-16 sm:py-20 font-body">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <p className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
                        Our instructors have <strong>built systems</strong> at{" "}
                    </p>
                </motion.div>

                {/* Logo Grid with Dividers */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="relative"
                >
                    {/* Grid Container */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 border border-gray-100 bg-gray-50 rounded-lg overflow-hidden">
                        {companies.map((company, index) => (
                            <div
                                key={company.name}
                                className={`
                                    relative flex items-center justify-center py-8 px-6
                                    border-gray-100
                                    ${index % 5 !== 4 ? 'md:border-r' : ''}
                                    ${index % 3 !== 2 ? 'sm:border-r md:border-r-0' : 'sm:border-r-0'}
                                    ${index % 2 !== 1 ? 'border-r sm:border-r-0' : 'border-r-0'}
                                    ${index < companies.length - (companies.length % 5 || 5) ? 'border-b md:border-b' : 'md:border-b-0'}
                                    ${index < companies.length - 2 ? 'border-b sm:border-b' : 'sm:border-b-0'}
                                    hover:bg-white/5 transition-colors duration-300 group
                                `}
                            >
                                {/* Corner dots decoration */}
                                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-gray-400 transition-colors" />
                                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-gray-400 transition-colors" />
                                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-gray-400 transition-colors" />
                                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-gray-200 group-hover:bg-gray-400 transition-colors" />

                                {/* Logo Text (placeholder - replace with actual logos) */}
                                <span className="text-gray-900 font-semibold text-lg tracking-wide transition-colors">
                                    {company.logo}
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

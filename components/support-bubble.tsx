
"use client";

import { MessageCircle } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/constants";

export function SupportBubble() {
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2 }}
            className="fixed bottom-8 right-8 z-50"
        >
            <Link
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:-translate-y-1 group"
            >
                <div className="relative">
                    <MessageCircle className="w-6 h-6" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 border-2 border-white rounded-full animate-ping"></span>
                </div>
                <span className="font-medium max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap">
                    Chat with an Expert
                </span>
            </Link>
        </motion.div>
    );
}

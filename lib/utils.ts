import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { USD_EXCHANGE_RATE } from "./constants";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function formatUSD(ngnAmount: number): string {
    const usdAmount = Math.round(ngnAmount / USD_EXCHANGE_RATE);
    return `$${usdAmount.toLocaleString()}`;
}

"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
    // Define orbital configurations for rhombus shapes
    const orbitals = [
        // Orbit 1 - Largest
        {
            radius: 380, duration: 45, rhombuses: [
                { startAngle: 30, size: 14 },
                { startAngle: 150, size: 12 },
                { startAngle: 270, size: 16 },
            ]
        },
        // Orbit 2
        {
            radius: 320, duration: 35, rhombuses: [
                { startAngle: 0, size: 10 },
                { startAngle: 120, size: 14 },
                { startAngle: 240, size: 12 },
            ]
        },
        // Orbit 3
        {
            radius: 260, duration: 28, rhombuses: [
                { startAngle: 45, size: 12 },
                { startAngle: 180, size: 10 },
                { startAngle: 315, size: 14 },
            ]
        },
        // Orbit 4
        {
            radius: 200, duration: 22, rhombuses: [
                { startAngle: 90, size: 8 },
                { startAngle: 210, size: 12 },
            ]
        },
        // Orbit 5 - Smallest visible
        {
            radius: 140, duration: 18, rhombuses: [
                { startAngle: 60, size: 10 },
                { startAngle: 180, size: 8 },
                { startAngle: 300, size: 10 },
            ]
        },
    ];

    return (
        <section className="relative flex h-[100vh] items-center justify-center bg-[#000] pt-14 pb-16 overflow-hidden font-body">
            {/* CSS Animations */}
            <style jsx>{`
                @keyframes orbitClockwise {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes orbitCounterClockwise {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                @keyframes rhombusPulse {
                    0%, 100% { opacity: 0.9; filter: drop-shadow(0 0 8px rgba(79, 112, 255, 0.8)); }
                    50% { opacity: 1; filter: drop-shadow(0 0 16px rgba(79, 112, 255, 1)); }
                }
                @keyframes circlePulse {
                    0%, 100% { opacity: 0.15; }
                    50% { opacity: 0.25; }
                }
                @keyframes subtleFloat {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes glowPulse {
                    0%, 100% { opacity: 0.4; }
                    50% { opacity: 0.7; }
                }
            `}</style>

            {/* Orbital System Background */}
            <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
                <svg
                    className="absolute"
                    style={{ width: '1200px', height: '1200px' }}
                    viewBox="0 0 1200 1200"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        {/* Gradient for rhombus fill */}
                        <linearGradient id="rhombusGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#4F70FF" />
                            <stop offset="50%" stopColor="#3B5BDB" />
                            <stop offset="100%" stopColor="#5C7CFA" />
                        </linearGradient>
                        {/* Glow effect filter */}
                        <filter id="rhombusGlow" x="-100%" y="-100%" width="300%" height="300%">
                            <feGaussianBlur stdDeviation="3" result="blur" />
                            <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                        {/* Subtle circle gradient */}
                        <radialGradient id="circleGradient" cx="50%" cy="50%" r="50%">
                            <stop offset="0%" stopColor="rgba(255, 255, 255, 0.03)" />
                            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
                        </radialGradient>
                    </defs>

                    {/* Center point */}
                    <circle cx="600" cy="600" r="4" fill="rgba(79, 112, 255, 0.6)" />

                    {/* Static Orbital Circles - Multiple rings */}
                    {[140, 200, 260, 320, 380, 450, 520].map((radius, i) => (
                        <circle
                            key={`orbit-${i}`}
                            cx="600"
                            cy="600"
                            r={radius}
                            fill="none"
                            stroke="rgba(255, 255, 255, 0.12)"
                            strokeWidth="1"
                            style={{
                                animation: `circlePulse ${4 + i * 0.5}s ease-in-out infinite`,
                                animationDelay: `${i * 0.2}s`
                            }}
                        />
                    ))}

                    {/* Additional decorative arc segments */}
                    <path
                        d="M 600 120 A 480 480 0 0 1 1080 600"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="1"
                        strokeDasharray="8 12"
                    />
                    <path
                        d="M 120 600 A 480 480 0 0 1 600 1080"
                        fill="none"
                        stroke="rgba(255, 255, 255, 0.08)"
                        strokeWidth="1"
                        strokeDasharray="8 12"
                    />

                    {/* Orbiting Rhombus Groups */}
                    {orbitals.map((orbit, orbitIndex) => (
                        <g
                            key={`orbit-group-${orbitIndex}`}
                            style={{
                                transformOrigin: '600px 600px',
                                animation: `${orbitIndex % 2 === 0 ? 'orbitClockwise' : 'orbitCounterClockwise'} ${orbit.duration}s linear infinite`,
                            }}
                        >
                            {orbit.rhombuses.map((rhombus, rhombusIndex) => {
                                // Calculate position on the circle
                                const angleRad = (rhombus.startAngle * Math.PI) / 180;
                                const x = 600 + orbit.radius * Math.cos(angleRad);
                                const y = 600 + orbit.radius * Math.sin(angleRad);
                                const size = rhombus.size;

                                return (
                                    <g
                                        key={`rhombus-${orbitIndex}-${rhombusIndex}`}
                                        style={{
                                            transformOrigin: `${x}px ${y}px`,
                                            animation: `${orbitIndex % 2 === 0 ? 'orbitCounterClockwise' : 'orbitClockwise'} ${orbit.duration}s linear infinite`,
                                        }}
                                    >
                                        {/* Rhombus shape */}
                                        <polygon
                                            points={`${x},${y - size} ${x + size},${y} ${x},${y + size} ${x - size},${y}`}
                                            fill="url(#rhombusGradient)"
                                            filter="url(#rhombusGlow)"
                                            style={{
                                                animation: `rhombusPulse ${2 + rhombusIndex * 0.5}s ease-in-out infinite`,
                                                animationDelay: `${rhombusIndex * 0.3}s`
                                            }}
                                        />
                                    </g>
                                );
                            })}
                        </g>
                    ))}

                    {/* Static decorative rhombuses at corners */}
                    {[
                        { x: 150, y: 200, size: 10, delay: 0 },
                        { x: 1050, y: 180, size: 12, delay: 0.5 },
                        { x: 180, y: 950, size: 8, delay: 1 },
                        { x: 1020, y: 1000, size: 14, delay: 1.5 },
                        { x: 100, y: 550, size: 6, delay: 2 },
                        { x: 1100, y: 650, size: 10, delay: 2.5 },
                        { x: 350, y: 150, size: 8, delay: 0.3 },
                        { x: 850, y: 1050, size: 10, delay: 0.8 },
                    ].map((item, i) => (
                        <polygon
                            key={`static-rhombus-${i}`}
                            points={`${item.x},${item.y - item.size} ${item.x + item.size},${item.y} ${item.x},${item.y + item.size} ${item.x - item.size},${item.y}`}
                            fill="url(#rhombusGradient)"
                            filter="url(#rhombusGlow)"
                            style={{
                                animation: `subtleFloat 4s ease-in-out infinite, rhombusPulse 3s ease-in-out infinite`,
                                animationDelay: `${item.delay}s`
                            }}
                        />
                    ))}

                    {/* Small dot accents */}
                    {[
                        { x: 200, y: 300, size: 3 },
                        { x: 1000, y: 350, size: 4 },
                        { x: 250, y: 800, size: 3 },
                        { x: 950, y: 850, size: 4 },
                        { x: 400, y: 180, size: 2 },
                        { x: 800, y: 1020, size: 3 },
                    ].map((dot, i) => (
                        <circle
                            key={`dot-${i}`}
                            cx={dot.x}
                            cy={dot.y}
                            r={dot.size}
                            fill="rgba(79, 112, 255, 0.6)"
                            style={{
                                animation: `glowPulse ${2 + i * 0.3}s ease-in-out infinite`,
                                animationDelay: `${i * 0.2}s`
                            }}
                        />
                    ))}
                </svg>

                {/* Subtle radial glow behind content */}
                <div
                    className="absolute w-[600px] h-[600px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(79, 112, 255, 0.08) 0%, transparent 70%)',
                        animation: 'glowPulse 4s ease-in-out infinite'
                    }}
                />
            </div>

            {/* Noise/Grain Overlay */}
            <div
                className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            {/* Content Container */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 w-full text-center">

                {/* Main Heading */}
                <motion.h1
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white mb-6 max-w-2xl mx-auto font-body"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Build production skills for senior roles
                </motion.h1>

                {/* Subheading */}
                <motion.p
                    className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10 leading-relaxed font-body"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    Live cohorts taught by senior practitioners from Moniepoint, Interswitch, Andela, and other top companies. Build production systems, not toy tutorials. Compete globally.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <Link
                        href="/courses"
                        className="group inline-flex items-center gap-2 px-6 py-4 rounded-[40px] bg-[#4F70FF] text-white font-semibold text-lg hover:bg-[#3B5BDB] transition-all duration-300 shadow-lg shadow-[#4F70FF]/25 hover:shadow-[#4F70FF]/40"
                    >
                        <span>Reserve a spot</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </Link>
                    <Link
                        href="/about"
                        className="group inline-flex items-center gap-2 px-6 py-4 rounded-[40px] bg-transparent border-2 border-gray-600 text-white font-semibold text-lg hover:border-gray-400 hover:bg-white/5 transition-all duration-300"
                    >
                        <span>Learn more</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </Link>
                </motion.div>
            </div>

            {/* Bottom vignette */}
            <div
                className="absolute bottom-0 left-0 right-0 h-32 z-[2] pointer-events-none"
                style={{
                    background: 'linear-gradient(to top, #050510 0%, transparent 100%)'
                }}
            />
        </section>
    );
}

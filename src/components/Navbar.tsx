'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const pathname = usePathname();

    const links = [
        { href: '/', label: 'Portfolio' },
        { href: '/about', label: 'About Me' },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6 pointer-events-none">
            <div className="flex gap-2 p-1 bg-black/50 backdrop-blur-md rounded-full border border-white/10 pointer-events-auto">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={cn(
                                "relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300",
                                isActive ? "text-black" : "text-white/70 hover:text-white"
                            )}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId="active-nav"
                                    className="absolute inset-0 bg-white rounded-full z-0"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                            )}
                            <span className="relative z-10">{link.label}</span>
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
}

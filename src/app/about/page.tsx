'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Download, Loader2, Mail, Phone, Instagram, ArrowUpRight } from 'lucide-react';
import { PortfolioContent } from '@/lib/parseYaml';

async function fetchPortfolioContent(): Promise<PortfolioContent> {
    const res = await fetch('/api/content');
    if (!res.ok) {
        throw new Error('Failed to fetch content');
    }
    return res.json();
}

export default function AboutPage() {
    const { data, isLoading, error } = useQuery({
        queryKey: ['portfolio-content'],
        queryFn: fetchPortfolioContent,
        staleTime: 1000 * 60 * 60 * 24, // 24 hours
    });

    if (isLoading) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-black text-white">
                <Loader2 className="w-8 h-8 animate-spin text-neon-blue" />
            </div>
        );
    }

    if (error || !data || !data.about) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-black text-red-500">
                <p>About content not available.</p>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-black text-white selection:bg-white/20 selection:text-white">
            <div className="grain-overlay" />

            <div className="max-w-7xl mx-auto px-4 md:px-12 pt-32 pb-20">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-32">
                    <div className="lg:col-span-5">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative aspect-[3/4] overflow-hidden"
                        >
                            <img
                                src={data.about.photoUrl}
                                alt={data.name}
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                            />
                        </motion.div>
                    </div>

                    <div className="lg:col-span-7 flex flex-col justify-between py-4">
                        <div>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                className="text-6xl md:text-8xl font-light tracking-tighter mb-12"
                            >
                                {data.name}
                            </motion.h1>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                className="prose prose-invert prose-lg max-w-none"
                            >
                                <p className="text-xl md:text-2xl leading-relaxed font-light text-neutral-300 whitespace-pre-line">
                                    {data.about.detailedBio}
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="mt-12 flex flex-wrap gap-8 items-center border-t border-white/10 pt-8"
                        >
                            <a
                                href={data.about.cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="group flex items-center gap-2 text-sm uppercase tracking-widest hover:text-neon-blue transition-colors"
                            >
                                Download CV
                                <Download className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
                            </a>

                            <div className="flex gap-6">
                                <a href={`mailto:${data.contact.email}`} className="hover:text-neon-blue transition-colors">
                                    <Mail className="w-5 h-5" />
                                </a>
                                {data.contact.instagram && (
                                    <a href={`https://instagram.com/${data.contact.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="hover:text-neon-purple transition-colors">
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                )}
                                {data.contact.phone && (
                                    <a href={`tel:${data.contact.phone}`} className="hover:text-neon-blue transition-colors">
                                        <Phone className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-24 border-t border-white/10 pt-24">
                    {/* Selected Works List */}
                    <section>
                        <h2 className="text-xs font-mono text-neutral-500 mb-12 uppercase tracking-widest">Selected Works</h2>
                        <div className="space-y-8">
                            {data.artworks.map((artwork, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="group border-b border-white/5 pb-8 last:border-0"
                                >
                                    <a href={artwork.url} target="_blank" rel="noopener noreferrer" className="block">
                                        <div className="flex justify-between items-baseline mb-2">
                                            <h3 className="text-2xl font-light group-hover:text-neon-blue transition-colors duration-300">
                                                {artwork.title}
                                            </h3>
                                            <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-neon-blue" />
                                        </div>
                                        <p className="text-neutral-400 font-light leading-relaxed max-w-md">
                                            {artwork.description}
                                        </p>
                                    </a>
                                </motion.div>
                            ))}
                        </div>
                    </section>

                    {/* Recognition List */}
                    {data.awards && data.awards.length > 0 && (
                        <section>
                            <h2 className="text-xs font-mono text-neutral-500 mb-12 uppercase tracking-widest">Recognition</h2>
                            <ul className="space-y-6">
                                {data.awards.map((award, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-baseline gap-4 text-lg font-light text-neutral-300"
                                    >
                                        <span className="text-neon-purple text-xs">0{index + 1}</span>
                                        {award}
                                    </motion.li>
                                ))}
                            </ul>
                        </section>
                    )}
                </div>
            </div>
        </main>
    );
}

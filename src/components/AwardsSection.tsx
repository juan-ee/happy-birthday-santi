'use client';

import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

export default function AwardsSection({ awards }: { awards?: string[] }) {
    if (!awards || awards.length === 0) {
        return null;
    }

    return (
        <section className="py-24 px-4 md:px-12 bg-neutral-900/20 border-y border-white/5">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-xs font-mono text-neon-purple mb-12 uppercase tracking-widest"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Recognition
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {awards.map((award, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex items-start gap-4 p-6 rounded-lg bg-white/5 border border-white/5 hover:border-neon-purple/30 transition-colors group"
                        >
                            <Trophy className="w-6 h-6 text-white/20 group-hover:text-neon-purple transition-colors shrink-0" />
                            <span className="text-lg font-light text-white/80 group-hover:text-white transition-colors">
                                {award}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

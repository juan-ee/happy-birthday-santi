'use client';

import { motion } from 'framer-motion';

export default function BioSection({ bio }: { bio: string }) {
    return (
        <section className="py-24 md:py-32 px-4 md:px-12 max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 1 }}
            >
                <h2 className="text-xs font-mono text-neon-blue mb-8 uppercase tracking-widest">Biography</h2>
                <div className="prose prose-invert prose-lg md:prose-xl max-w-none">
                    <p className="text-2xl md:text-4xl leading-relaxed font-light text-white/90 whitespace-pre-line">
                        {bio}
                    </p>
                </div>
            </motion.div>
        </section>
    );
}

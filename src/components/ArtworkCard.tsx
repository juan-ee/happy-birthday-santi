'use client';

import { motion } from 'framer-motion';
import YouTubePlayer from './YouTubePlayer';
import { Artwork } from '@/lib/parseYaml';

export default function ArtworkCard({ artwork, index }: { artwork: Artwork; index: number }) {
    return (
        <motion.div
            className="flex flex-col gap-6 mb-24 last:mb-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
        >
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-2 border-b border-white/10 pb-4">
                <h3 className="text-3xl md:text-4xl font-light tracking-wide text-white">
                    {artwork.title}
                </h3>
                <span className="text-xs md:text-sm font-mono text-muted-foreground uppercase tracking-widest opacity-60">
                    0{index + 1} / Project
                </span>
            </div>

            <YouTubePlayer url={artwork.url} title={artwork.title} />

            <div className="flex justify-end">
                <p className="text-muted-foreground max-w-xl text-lg leading-relaxed font-light">
                    {artwork.description}
                </p>
            </div>
        </motion.div>
    );
}

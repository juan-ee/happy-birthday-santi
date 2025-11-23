'use client';

import { motion } from 'framer-motion';
import { Play } from 'lucide-react';
import { useState } from 'react';

interface YouTubePlayerProps {
    url: string;
    title: string;
}

export default function YouTubePlayer({ url, title }: YouTubePlayerProps) {
    const [isPlaying, setIsPlaying] = useState(false);

    // Extract video ID
    const getVideoId = (url: string) => {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);
        return (match && match[2].length === 11) ? match[2] : null;
    };

    const videoId = getVideoId(url);

    if (!videoId) return <div className="text-red-500">Invalid YouTube URL</div>;

    return (
        <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-black group shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/5">
            {!isPlaying ? (
                <motion.div
                    className="absolute inset-0 flex items-center justify-center cursor-pointer z-10"
                    onClick={() => setIsPlaying(true)}
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    {/* Thumbnail */}
                    <img
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        alt={title}
                        className="absolute inset-0 w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Play Button */}
                    <motion.div
                        className="relative z-20 w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.2)" }}
                    >
                        <Play className="w-6 h-6 text-white fill-white" />
                    </motion.div>

                    {/* Cinematic Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/0 via-neon-purple/0 to-neon-red/0 group-hover:via-neon-purple/10 transition-all duration-700" />
                </motion.div>
            ) : (
                <iframe
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                />
            )}
        </div>
    );
}

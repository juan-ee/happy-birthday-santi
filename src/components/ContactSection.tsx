'use client';

import { motion } from 'framer-motion';
import { Mail, Instagram } from 'lucide-react';
import { Contact } from '@/lib/parseYaml';

export default function ContactSection({ contact }: { contact: Contact }) {
    return (
        <section className="py-32 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-8"
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter">Let's Create Together</h2>

                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                    <a
                        href={`mailto:${contact.email}`}
                        className="inline-flex items-center gap-3 text-xl md:text-2xl text-muted-foreground hover:text-neon-blue transition-colors duration-300 group"
                    >
                        <Mail className="w-6 h-6 group-hover:animate-bounce" />
                        {contact.email}
                    </a>

                    {contact.instagram && (
                        <a
                            href={`https://instagram.com/${contact.instagram.replace('@', '')}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 text-xl md:text-2xl text-muted-foreground hover:text-neon-purple transition-colors duration-300 group"
                        >
                            <Instagram className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                            {contact.instagram}
                        </a>
                    )}
                </div>
            </motion.div>

            <footer className="mt-32 text-xs text-white/20 font-mono uppercase tracking-widest">
                © {new Date().getFullYear()} Portfolio. All Rights Reserved.
            </footer>
        </section>
    );
}

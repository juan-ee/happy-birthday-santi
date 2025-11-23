'use client';

import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Contact } from '@/lib/parseYaml';

export default function ContactSection({ contact }: { contact: Contact }) {
    return (
        <section className="py-32 px-4 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
            >
                <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tighter">Let's Create Together</h2>
                <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-3 text-xl md:text-2xl text-muted-foreground hover:text-neon-blue transition-colors duration-300 group"
                >
                    <Mail className="w-6 h-6 group-hover:animate-bounce" />
                    {contact.email}
                </a>
            </motion.div>

            <footer className="mt-32 text-xs text-white/20 font-mono uppercase tracking-widest">
                © {new Date().getFullYear()} Portfolio. All Rights Reserved.
            </footer>
        </section>
    );
}

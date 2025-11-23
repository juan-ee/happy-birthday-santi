'use client';

import { useQuery } from '@tanstack/react-query';
import Hero from '@/components/Hero';
import BioSection from '@/components/BioSection';
import ArtworkCard from '@/components/ArtworkCard';
import AwardsSection from '@/components/AwardsSection';
import ContactSection from '@/components/ContactSection';
import { PortfolioContent } from '@/lib/parseYaml';
import { Loader2 } from 'lucide-react';

async function fetchPortfolioContent(): Promise<PortfolioContent> {
  const res = await fetch('/api/content');
  if (!res.ok) {
    throw new Error('Failed to fetch content');
  }
  return res.json();
}

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['portfolio-content'],
    queryFn: fetchPortfolioContent,
    staleTime: 1000 * 60 * 60 * 24, // 24 hours
    gcTime: Infinity,
  });

  if (isLoading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black text-white">
        <Loader2 className="w-8 h-8 animate-spin text-neon-blue" />
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-black text-red-500">
        <p>Failed to load portfolio content. Please try again later.</p>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white selection:bg-neon-blue/30 selection:text-neon-blue">
      <div className="grain-overlay" />

      <Hero name={data.name} role={data.role} />

      <BioSection bio={data.bio} />

      <section className="py-24 px-4 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-xs font-mono text-neon-red mb-16 uppercase tracking-widest text-center md:text-left">
          Selected Works
        </h2>
        <div className="space-y-32">
          {data.artworks.map((artwork, index) => (
            <ArtworkCard key={index} artwork={artwork} index={index} />
          ))}
        </div>
      </section>

      <AwardsSection awards={data.awards} />

      <ContactSection contact={data.contact} />
    </main>
  );
}

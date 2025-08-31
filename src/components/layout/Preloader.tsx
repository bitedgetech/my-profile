
'use client';

import { useState, useEffect } from 'react';
import { Cpu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Preloader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background transition-opacity duration-1000',
        loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      <div className="relative flex items-center justify-center">
        <div className="absolute h-48 w-48 rounded-full border-4 border-primary/20 border-t-primary animate-spin"></div>
        <Cpu className="h-16 w-16 text-primary" />
      </div>
      <h1 className="mt-8 text-3xl font-bold font-headline text-shadow-glow animate-glow-pulse">
        BitEdge Technologies
      </h1>
    </div>
  );
}

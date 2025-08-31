
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Cookie } from 'lucide-react';

export default function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('bitedge_cookie_consent');
      // Only show the banner if no consent has been given yet
      if (consent === null) {
        setShowConsent(true);
      }
    } catch (e) {
      console.error("Could not access localStorage for cookie consent:", e);
    }
  }, []);

  const acceptConsent = () => {
    try {
      localStorage.setItem('bitedge_cookie_consent', 'true');
      setShowConsent(false);
    } catch (e) {
       console.error("Could not set cookie consent in localStorage:", e);
    }
  };

  const declineConsent = () => {
     try {
      localStorage.setItem('bitedge_cookie_consent', 'false');
      setShowConsent(false);
    } catch (e) {
       console.error("Could not set cookie consent in localStorage:", e);
    }
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4">
        <div className="bg-card border border-primary/20 shadow-lg rounded-lg max-w-4xl mx-auto p-6 transition-all animate-in slide-in-from-bottom-5 fade-in-50">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                    <Cookie className="h-8 w-8 text-primary mt-1 shrink-0" />
                    <div>
                        <h3 className="font-bold text-lg">We use cookies</h3>
                        <p className="text-muted-foreground text-sm">
                            Our website uses cookies to enhance your experience, analyze site traffic, and for marketing purposes. By clicking "Accept," you consent to our use of cookies. Read our <Link href="/cookie-policy" className="underline hover:text-primary">Cookie Policy</Link> for more details.
                        </p>
                    </div>
                </div>
                <div className="flex gap-4 flex-shrink-0 w-full md:w-auto">
                    <Button onClick={declineConsent} variant="secondary" className="flex-1">Decline</Button>
                    <Button onClick={acceptConsent} className="flex-1">Accept</Button>
                </div>
            </div>
        </div>
    </div>
  );
}

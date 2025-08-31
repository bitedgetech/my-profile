import type {Metadata} from 'next';
import Script from 'next/script';
import './globals.css';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/theme-provider';
import IconFall from '@/components/layout/IconFall';
import ChatAssistant from '@/components/layout/ChatAssistant';
import CookieConsent from '@/components/layout/CookieConsent';
import Preloader from '@/components/layout/Preloader';

export const metadata: Metadata = {
  title: 'BitEdge Technologies',
  description: 'Driving Business Forward with Innovative IT Solutions.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@400;600;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Preloader />
          <IconFall />
          <div className="relative z-10 flex min-h-screen flex-col bg-background/80 backdrop-blur-sm">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
          <ChatAssistant />
          <Toaster />
          <CookieConsent />
          {/*
            TODO: You'll need to create a free Tawk.to account and replace the following
            propertyId and widgetId with your own to enable the live chat widget.
            https://www.tawk.to/
          */}
          <Script
            strategy="lazyOnload"
            src="https://embed.tawk.to/665f573deaf3bd8d4d14c4f8/1hvh60d21"
          />
        </ThemeProvider>
      </body>
    </html>
  );
}

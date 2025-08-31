
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetTrigger } from "@/components/ui/sheet";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Menu, Cpu, X, Bot, Users, GitMerge, Calculator, GanttChartSquare, Trophy, Lightbulb, Smile, Shapes, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

const mainNavLinks = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About Us" },
];

const aiToolsLinks = [
    { href: '/project-estimator', label: 'Project Estimator', icon: <Bot className="h-5 w-5" /> },
    { href: '/timeline-generator', label: 'Timeline Generator', icon: <GanttChartSquare className="h-5 w-5" /> },
    { href: '/idea-validator', label: 'Idea Validator', icon: <Lightbulb className="h-5 w-5" /> },
    { href: '/success-calculator', label: 'Savings Calculator', icon: <Calculator className="h-5 w-5" /> },
];

const moreNavLinks = [
  { href: "/our-process", label: "Our Process" },
  { href: "/ecosystem", label: "Ecosystem" },
  { href: "/team-builder", label: "Team Builder" },
  { href: "/dev-tracker", label: "Dev Tracker" },
  { href: "/grant-program", label: "Grants" },
  { href: "/founders-corner", label: "Founder's Corner" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const NavLink = ({ href, label, onClick }: { href: string, label: string, onClick?: () => void }) => (
     <Link
        href={href}
        onClick={onClick}
        className={cn(
          "text-lg font-medium transition-colors hover:text-primary flex items-center gap-1",
          pathname === href ? "text-primary" : "text-muted-foreground",
          isMounted && "dark:hover:text-shadow-glow",
          isMounted && pathname === href && "dark:text-shadow-glow"
        )}
      >
        {label}
      </Link>
  );

  const AiToolsDropdown = ({ isMobile = false }) => (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant="ghost" className={cn(
                "text-lg font-medium transition-colors hover:text-primary flex items-center gap-1 px-0 lg:px-3",
                aiToolsLinks.some(l => pathname === l.href) ? "text-primary" : "text-muted-foreground",
                 isMobile && "p-0 justify-start w-full text-lg",
                 isMounted && "dark:hover:text-shadow-glow",
                 isMounted && aiToolsLinks.some(l => pathname === l.href) && "dark:text-shadow-glow"
            )}>
               <Bot className="h-5 w-5" /> AI Tools <ChevronDown className="h-4 w-4" />
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            {aiToolsLinks.map((link) => (
                <DropdownMenuItem key={link.href} asChild>
                     <Link href={link.href} className="flex items-center gap-2" onClick={() => isMobile && setIsOpen(false)}>
                        {link.icon}
                        {link.label}
                    </Link>
                </DropdownMenuItem>
            ))}
        </DropdownMenuContent>
    </DropdownMenu>
  );

  const MobileNavLink = ({ href, label }: { href: string, label: string }) => (
    <Link
      href={href}
      onClick={() => setIsOpen(false)}
      className={cn(
        "text-xl font-medium transition-colors hover:text-primary w-full text-left p-2 rounded-md",
        pathname === href ? "text-primary bg-muted" : "text-muted-foreground"
      )}
    >
      {label}
    </Link>
  );


  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-sm border-b border-border" : "bg-background"
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <Cpu className={cn("h-8 w-8 text-primary", isMounted && "dark:drop-shadow-[0_0_8px_hsl(var(--primary))]")} />
            <span className={cn(
              "text-2xl font-bold text-foreground font-headline",
              isMounted && "dark:text-shadow-glow dark:animate-glow-pulse"
            )}>
              BitEdge
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-4">
            <NavLink href="/" label="Home" />
            {mainNavLinks.map((link) => (
              <NavLink key={link.href} href={link.href} label={link.label} />
            ))}
            <AiToolsDropdown />
             <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className={cn(
                        "text-lg font-medium transition-colors hover:text-primary flex items-center gap-1 px-0 lg:px-3",
                        moreNavLinks.some(l => pathname === l.href) ? "text-primary" : "text-muted-foreground",
                         isMounted && "dark:hover:text-shadow-glow",
                         isMounted && moreNavLinks.some(l => pathname === l.href) && "dark:text-shadow-glow"
                    )}>
                       More <ChevronDown className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    {moreNavLinks.map((link) => (
                        <DropdownMenuItem key={link.href} asChild>
                             <Link href={link.href} className="flex items-center gap-2">
                                {link.label}
                            </Link>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden lg:flex items-center gap-2">
            <ThemeToggle />
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full max-w-[320px] bg-background p-0">
                <SheetHeader className="p-4 border-b">
                     <SheetTitle className="sr-only">Mobile Menu</SheetTitle>
                     <SheetDescription className="sr-only">Navigation links for the BitEdge Technologies website.</SheetDescription>
                     <div className="flex justify-between items-center">
                        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                            <Cpu className="h-8 w-8 text-primary" />
                            <span className="text-2xl font-bold text-foreground font-headline">BitEdge</span>
                        </Link>
                        <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                            <X className="h-6 w-6" />
                        </Button>
                    </div>
                </SheetHeader>
                <nav className="flex flex-col p-4 space-y-2">
                  <MobileNavLink href="/" label="Home"/>
                  {[...mainNavLinks].map((link) => (
                     <MobileNavLink key={link.href} href={link.href} label={link.label} />
                  ))}
                   <AiToolsDropdown isMobile={true} />
                   {[...moreNavLinks].map((link) => (
                     <MobileNavLink key={link.href} href={link.href} label={link.label} />
                  ))}

                  <Button asChild className="mt-4">
                    <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

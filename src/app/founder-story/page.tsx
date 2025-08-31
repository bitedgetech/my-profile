
import { founderStory } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Code, Target, Users, Zap, Milestone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const iconMap: { [key: string]: React.ReactNode } = {
    idea: <Zap className="h-6 w-6" />,
    launch: <Code className="h-6 w-6" />,
    team: <Users className="h-6 w-6" />,
    growth: <Building className="h-6 w-6" />,
    challenge: <Target className="h-6 w-6" />,
};

export default function FounderStoryPage() {
    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline">The BitEdge Journey</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        The story of how a single idea grew into a technology powerhouse, one challenge and milestone at a time.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="relative">
                        {/* The vertical line */}
                        <div className="absolute left-4 md:left-1/2 w-0.5 h-full bg-border -translate-x-1/2"></div>
                        
                        {founderStory.map((item, index) => (
                            <div key={index} className="relative pl-10 md:pl-0 mb-12 last:mb-0">
                                <div className={`md:flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                                    {/* Icon and Year */}
                                    <div className="md:w-1/2">
                                        <div className="absolute left-4 md:left-1/2 -translate-x-1/2 -translate-y-2 md:translate-y-0">
                                            <div className="bg-primary text-primary-foreground h-12 w-12 rounded-full flex items-center justify-center border-4 border-background">
                                                {iconMap[item.type] || <Milestone className="h-6 w-6" />}
                                            </div>
                                        </div>
                                         <p className={`font-bold text-primary text-2xl font-headline text-left ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>{item.year}</p>
                                    </div>

                                    {/* Card */}
                                    <div className="w-full md:w-1/2 mt-4 md:mt-0">
                                         <Card>
                                            <CardHeader>
                                                <CardTitle className="font-headline">{item.title}</CardTitle>
                                            </CardHeader>
                                            <CardContent>
                                                <p className="text-muted-foreground">{item.description}</p>
                                            </CardContent>
                                        </Card>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
             <section className="py-20 bg-gradient-to-r from-primary to-fuchsia-600 text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Inspired by Our Journey?</h2>
                    <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Let's write your success story together. We're here to help you build, launch, and scale your next great idea.</p>
                    <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Start Your Project</Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

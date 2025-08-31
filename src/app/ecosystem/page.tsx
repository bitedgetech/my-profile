
import { technologies, partners, industries } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Shapes } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EcosystemPage() {
    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                     <div className="flex justify-center items-center gap-2 mb-2">
                        <Shapes className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">Our Ecosystem</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        We build with the best to deliver outstanding results. Explore the technologies, partners, and industries that form the BitEdge universe.
                    </p>
                </div>
            </section>

            {/* Core Technologies */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Core Technologies</h2>
                        <p className="mt-2 text-lg text-muted-foreground">The tools and frameworks we trust to build robust and scalable solutions.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {technologies.map((tech) => (
                            <Card key={tech.name} className="text-center p-6 bg-card border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                                <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full text-primary">
                                    {tech.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
                                <p className="text-muted-foreground">{tech.description}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            <Separator />

            {/* Strategic Partners */}
            <section className="py-16 md:py-24 bg-card">
                 <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Strategic Partners</h2>
                        <p className="mt-2 text-lg text-muted-foreground">Collaboration is in our DNA. We work with industry leaders to drive innovation.</p>
                    </div>
                    <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10">
                        {partners.map((partner) => (
                            <div key={partner.name} className="flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors text-2xl">
                                {partner.logo}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Separator />

             {/* Industries We Serve */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Industries We Serve</h2>
                        <p className="mt-2 text-lg text-muted-foreground">Applying our technical expertise to solve challenges across diverse sectors.</p>
                    </div>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {industries.map((industry) => (
                            <Card key={industry.name} className="flex flex-col text-center p-6 bg-card border-border hover:border-primary transition-all duration-300 transform hover:-translate-y-2">
                                <div className="mb-4 inline-block bg-primary/10 p-4 rounded-full text-primary mx-auto">
                                    {industry.icon}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{industry.name}</h3>
                                <p className="text-muted-foreground flex-grow">{industry.description}</p>
                                <Button variant="link" asChild className="mt-4"><Link href="/portfolio">View Projects</Link></Button>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

    

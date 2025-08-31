
import { ourProcess } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function OurProcessPage() {
    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold font-headline">Our Collaborative Process</h1>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        We believe in a transparent and collaborative partnership. Here's a step-by-step look at how we'll bring your vision to life, together.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="space-y-12">
                        {ourProcess.map((step, index) => (
                            <div key={step.title} className="flex flex-col md:flex-row items-center gap-8">
                                <div className="flex-shrink-0">
                                    <div className="bg-primary/10 text-primary h-24 w-24 rounded-full flex flex-col items-center justify-center">
                                        <div className="h-10 w-10">{step.icon}</div>
                                        <p className="font-bold">Step {index + 1}</p>
                                    </div>
                                </div>
                                <div className="flex-grow">
                                    <h2 className="text-3xl font-bold font-headline mb-2">{step.title}</h2>
                                    <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                                    <ul className="space-y-2">
                                        {step.deliverables.map((deliverable) => (
                                            <li key={deliverable} className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-muted-foreground">{deliverable}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-gradient-to-r from-primary to-fuchsia-600 text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Ready to Start Your Journey?</h2>
                    <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Let's begin with Step 1: The Discovery Call. We're excited to learn about your project.</p>
                    <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Schedule Your Free Consultation <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}

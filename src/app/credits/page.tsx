
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { creditTiers, creditFaqs } from "@/lib/data";
import { Check, ArrowRight, Wallet, Star } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


export default function CreditsPage() {
    const popularTier = creditTiers.find(t => t.popular);

    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Wallet className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">BitEdge Credits System</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Streamline your development budget. Pre-purchase development hours at a discounted rate and use them whenever you need.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Choose Your Plan</h2>
                        <p className="mt-2 text-lg text-muted-foreground">Get more value with our bulk credit packages.</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                        {creditTiers.map(tier => (
                             <Card key={tier.name} className={`bg-card ${tier.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                                <CardHeader className="text-center pb-4">
                                     {tier.popular && (
                                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
                                            <div className="bg-primary text-primary-foreground px-4 py-1 text-sm font-semibold rounded-full flex items-center gap-1">
                                                <Star className="h-4 w-4" /> POPULAR
                                            </div>
                                        </div>
                                    )}
                                    <CardTitle className="font-headline text-2xl">{tier.name}</CardTitle>
                                    <p className="text-4xl font-bold">${tier.price.toLocaleString()}</p>
                                    <CardDescription>{tier.description}</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-3">
                                        {tier.features.map((feature, i) => (
                                            <li key={i} className="flex items-center gap-3">
                                                <Check className="h-5 w-5 text-green-500" />
                                                <span className="text-muted-foreground">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full" variant={tier.popular ? 'default' : 'secondary'}>
                                        <Link href="/contact">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
            
            <section className="py-16 md:py-24 bg-card">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline">Frequently Asked Questions</h2>
                    </div>
                    <Accordion type="single" collapsible className="w-full">
                        {creditFaqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-background px-4 rounded-lg mb-2">
                                <AccordionTrigger className="text-lg font-semibold text-left hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>
            
            <section className="py-20 bg-gradient-to-r from-primary to-fuchsia-600 text-primary-foreground">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 font-headline">Ready to simplify your billing?</h2>
                    <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">Contact our sales team to purchase your first credit package and start building your next project with flexibility and confidence.</p>
                    <Button asChild size="lg" variant="secondary" className="bg-accent text-accent-foreground hover:bg-accent/90">
                        <Link href="/contact">Contact Sales <ArrowRight className="ml-2 h-4 w-4" /></Link>
                    </Button>
                </div>
            </section>
        </div>
    );
}


import Image from "next/image";
import Link from "next/link";
import { alumni } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Quote, Star } from "lucide-react";

export default function WallOfFamePage() {
    return (
        <div className="bg-background">
            <section className="bg-card py-20 md:py-24">
                <div className="container mx-auto px-4 text-center">
                    <div className="flex justify-center items-center gap-2 mb-2">
                        <Star className="h-8 w-8 text-primary" />
                        <h1 className="text-4xl md:text-6xl font-bold font-headline">BitEdge Alumni: Wall of Fame</h1>
                    </div>
                    <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                        Celebrating the talented individuals who have been part of our journey and have gone on to achieve great things. Their growth is our proudest legacy.
                    </p>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {alumni.map((person) => (
                            <Card key={person.id} className="group bg-card text-center overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                                <CardContent className="p-6 flex flex-col items-center">
                                    <Avatar className="h-32 w-32 border-4 border-background shadow-lg mb-4 transition-transform duration-300 group-hover:scale-110">
                                        <AvatarImage src={person.avatarUrl} alt={person.name} />
                                        <AvatarFallback>{person.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                                    </Avatar>
                                    <h3 className="text-xl font-bold">{person.name}</h3>
                                    <p className="text-primary font-medium">{person.roleAtBitEdge}</p>
                                    
                                    <div className="my-4">
                                        <p className="text-sm text-muted-foreground">Now at:</p>
                                        <p className="text-lg font-semibold">{person.currentRole}</p>
                                        <p className="font-bold text-muted-foreground">{person.currentCompany}</p>
                                    </div>

                                    <div className="relative my-4 w-full">
                                        <Quote className="absolute -left-2 -top-2 h-8 w-8 text-border -z-10" />
                                        <p className="text-muted-foreground italic text-sm z-10 relative px-4">
                                            {person.quote}
                                        </p>
                                         <Quote className="absolute -right-2 -bottom-2 h-8 w-8 text-border -z-10 transform scale-x-[-1]" />
                                    </div>

                                    <Button asChild variant="ghost" className="mt-4">
                                        <Link href={person.linkedinUrl} target="_blank" rel="noopener noreferrer">
                                            <Linkedin className="mr-2" /> Connect on LinkedIn
                                        </Link>
                                    </Button>

                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
